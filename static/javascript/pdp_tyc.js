/*!
 * jQuery JavaScript Library v1.12.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-01-08T19:56Z
 */
(function(b, a) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = b.document ? a(b, true) : function(c) {
            if (!c.document) {
                throw new Error("jQuery requires a window with a document")
            }
            return a(c)
        }
    } else {
        a(b)
    }
}(typeof window !== "undefined" ? window : this, function(bb, aD) {
    var aW = [];
    var m = bb.document;
    var X = aW.slice;
    var aH = aW.concat;
    var w = aW.push;
    var b1 = aW.indexOf;
    var ak = {};
    var x = ak.toString;
    var R = ak.hasOwnProperty;
    var F = {};
    var ap = "1.12.0",
        bO = function(i, cc) {
            return new bO.fn.init(i, cc)
        },
        G = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        bY = /^-ms-/,
        a3 = /-([\da-z])/gi,
        W = function(i, cc) {
            return cc.toUpperCase()
        };
    bO.fn = bO.prototype = {
        jquery: ap,
        constructor: bO,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this)
        },
        get: function(i) {
            return i != null ? (i < 0 ? this[i + this.length] : this[i]) : X.call(this)
        },
        pushStack: function(i) {
            var cc = bO.merge(this.constructor(), i);
            cc.prevObject = this;
            cc.context = this.context;
            return cc
        },
        each: function(i) {
            return bO.each(this, i)
        },
        map: function(i) {
            return this.pushStack(bO.map(this, function(cd, cc) {
                return i.call(cd, cc, cd)
            }))
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(ce) {
            var cc = this.length,
                cd = +ce + (ce < 0 ? cc : 0);
            return this.pushStack(cd >= 0 && cd < cc ? [this[cd]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: w,
        sort: aW.sort,
        splice: aW.splice
    };
    bO.extend = bO.fn.extend = function() {
        var cc, ci, cd, ce, cl, cj, ch = arguments[0] || {},
            cg = 1,
            cf = arguments.length,
            ck = false;
        if (typeof ch === "boolean") {
            ck = ch;
            ch = arguments[cg] || {};
            cg++
        }
        if (typeof ch !== "object" && !bO.isFunction(ch)) {
            ch = {}
        }
        if (cg === cf) {
            ch = this;
            cg--
        }
        for (; cg < cf; cg++) {
            if ((cl = arguments[cg]) != null) {
                for (ce in cl) {
                    cc = ch[ce];
                    cd = cl[ce];
                    if (ch === cd) {
                        continue
                    }
                    if (ck && cd && (bO.isPlainObject(cd) || (ci = bO.isArray(cd)))) {
                        if (ci) {
                            ci = false;
                            cj = cc && bO.isArray(cc) ? cc : []
                        } else {
                            cj = cc && bO.isPlainObject(cc) ? cc : {}
                        }
                        ch[ce] = bO.extend(ck, cj, cd)
                    } else {
                        if (cd !== undefined) {
                            ch[ce] = cd
                        }
                    }
                }
            }
        }
        return ch
    };
    bO.extend({
        expando: "jQuery" + (ap + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(i) {
            throw new Error(i)
        },
        noop: function() {},
        isFunction: function(i) {
            return bO.type(i) === "function"
        },
        isArray: Array.isArray || function(i) {
            return bO.type(i) === "array"
        },
        isWindow: function(i) {
            return i != null && i == i.window
        },
        isNumeric: function(cc) {
            var i = cc && cc.toString();
            return !bO.isArray(cc) && (i - parseFloat(i) + 1) >= 0
        },
        isEmptyObject: function(cc) {
            var i;
            for (i in cc) {
                return false
            }
            return true
        },
        isPlainObject: function(cd) {
            var i;
            if (!cd || bO.type(cd) !== "object" || cd.nodeType || bO.isWindow(cd)) {
                return false
            }
            try {
                if (cd.constructor && !R.call(cd, "constructor") && !R.call(cd.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
            } catch (cc) {
                return false
            }
            if (!F.ownFirst) {
                for (i in cd) {
                    return R.call(cd, i)
                }
            }
            for (i in cd) {}
            return i === undefined || R.call(cd, i)
        },
        type: function(i) {
            if (i == null) {
                return i + ""
            }
            return typeof i === "object" || typeof i === "function" ? ak[x.call(i)] || "object" : typeof i
        },
        globalEval: function(i) {
            if (i && bO.trim(i)) {
                (bb.execScript || function(cc) {
                    bb["eval"].call(bb, cc)
                })(i)
            }
        },
        camelCase: function(i) {
            return i.replace(bY, "ms-").replace(a3, W)
        },
        nodeName: function(cc, i) {
            return cc.nodeName && cc.nodeName.toLowerCase() === i.toLowerCase()
        },
        each: function(ce, cf) {
            var cd, cc = 0;
            if (aB(ce)) {
                cd = ce.length;
                for (; cc < cd; cc++) {
                    if (cf.call(ce[cc], cc, ce[cc]) === false) {
                        break
                    }
                }
            } else {
                for (cc in ce) {
                    if (cf.call(ce[cc], cc, ce[cc]) === false) {
                        break
                    }
                }
            }
            return ce
        },
        trim: function(i) {
            return i == null ? "" : (i + "").replace(G, "")
        },
        makeArray: function(i, cd) {
            var cc = cd || [];
            if (i != null) {
                if (aB(Object(i))) {
                    bO.merge(cc, typeof i === "string" ? [i] : i)
                } else {
                    w.call(cc, i)
                }
            }
            return cc
        },
        inArray: function(cf, cd, ce) {
            var cc;
            if (cd) {
                if (b1) {
                    return b1.call(cd, cf, ce)
                }
                cc = cd.length;
                ce = ce ? ce < 0 ? Math.max(0, cc + ce) : ce : 0;
                for (; ce < cc; ce++) {
                    if (ce in cd && cd[ce] === cf) {
                        return ce
                    }
                }
            }
            return -1
        },
        merge: function(cg, ce) {
            var cc = +ce.length,
                cd = 0,
                cf = cg.length;
            while (cd < cc) {
                cg[cf++] = ce[cd++]
            }
            if (cc !== cc) {
                while (ce[cd] !== undefined) {
                    cg[cf++] = ce[cd++]
                }
            }
            cg.length = cf;
            return cg
        },
        grep: function(cc, cj, cg) {
            var ci, cf = [],
                cd = 0,
                ce = cc.length,
                ch = !cg;
            for (; cd < ce; cd++) {
                ci = !cj(cc[cd], cd);
                if (ci !== ch) {
                    cf.push(cc[cd])
                }
            }
            return cf
        },
        map: function(cd, ci, cc) {
            var cg, ch, cf = 0,
                ce = [];
            if (aB(cd)) {
                cg = cd.length;
                for (; cf < cg; cf++) {
                    ch = ci(cd[cf], cf, cc);
                    if (ch != null) {
                        ce.push(ch)
                    }
                }
            } else {
                for (cf in cd) {
                    ch = ci(cd[cf], cf, cc);
                    if (ch != null) {
                        ce.push(ch)
                    }
                }
            }
            return aH.apply([], ce)
        },
        guid: 1,
        proxy: function(cf, ce) {
            var i, cd, cc;
            if (typeof ce === "string") {
                cc = cf[ce];
                ce = cf;
                cf = cc
            }
            if (!bO.isFunction(cf)) {
                return undefined
            }
            i = X.call(arguments, 2);
            cd = function() {
                return cf.apply(ce || this, i.concat(X.call(arguments)))
            };
            cd.guid = cf.guid = cf.guid || bO.guid++;
            return cd
        },
        now: function() {
            return +(new Date())
        },
        support: F
    });
    if (typeof Symbol === "function") {
        bO.fn[Symbol.iterator] = aW[Symbol.iterator]
    }
    bO.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(cd, cc) {
        ak["[object " + cc + "]"] = cc.toLowerCase()
    });
    function aB(cd) {
        var cc = !!cd && "length" in cd && cd.length,
            i = bO.type(cd);
        if (i === "function" || bO.isWindow(cd)) {
            return false
        }
        return i === "array" || cc === 0 || typeof cc === "number" && cc > 0 && (cc - 1) in cd
    }
    var l =
        /*!
         * Sizzle CSS Selector Engine v2.2.1
         * http://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2015-10-17
         */
        (function(dj) {
            var cD, dm, cs, cM, cP, cm, c1, dl, ds, cN, c2, c4, cH, ct, dd, c8, dk, cj, cK, df = "sizzle" + 1 * new Date(),
                cO = dj.document,
                dn = 0,
                c9 = 0,
                ce = cF(),
                de = cF(),
                cL = cF(),
                cJ = function(dt, i) {
                    if (dt === i) {
                        c2 = true
                    }
                    return 0
                },
                cV = 1 << 31,
                cT = ({}).hasOwnProperty,
                dh = [],
                di = dh.pop,
                cR = dh.push,
                cc = dh.push,
                cr = dh.slice,
                ci = function(dw, dv) {
                    var du = 0,
                        dt = dw.length;
                    for (; du < dt; du++) {
                        if (dw[du] === dv) {
                            return du
                        }
                    }
                    return -1
                },
                cd = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                cu = "[\\x20\\t\\r\\n\\f]",
                cQ = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                db = "\\[" + cu + "*(" + cQ + ")(?:" + cu + "*([*^$|!~]?=)" + cu + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + cQ + "))|)" + cu + "*\\]",
                cp = ":(" + cQ + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + db + ")*)|.*)\\)|)",
                cz = new RegExp(cu + "+", "g"),
                cw = new RegExp("^" + cu + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cu + "+$", "g"),
                cA = new RegExp("^" + cu + "*," + cu + "*"),
                cG = new RegExp("^" + cu + "*([>+~]|" + cu + ")" + cu + "*"),
                cy = new RegExp("=" + cu + "*([^\\]'\"]*?)" + cu + "*\\]", "g"),
                cX = new RegExp(cp),
                cZ = new RegExp("^" + cQ + "$"),
                c7 = {
                    ID: new RegExp("^#(" + cQ + ")"),
                    CLASS: new RegExp("^\\.(" + cQ + ")"),
                    TAG: new RegExp("^(" + cQ + "|[*])"),
                    ATTR: new RegExp("^" + db),
                    PSEUDO: new RegExp("^" + cp),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + cu + "*(even|odd|(([+-]|)(\\d*)n|)" + cu + "*(?:([+-]|)" + cu + "*(\\d+)|))" + cu + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + cd + ")$", "i"),
                    needsContext: new RegExp("^" + cu + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + cu + "*((?:-\\d)?\\d*)" + cu + "*\\)|)(?=[^-]|$)", "i")
                },
                ch = /^(?:input|select|textarea|button)$/i,
                cq = /^h\d$/i,
                cU = /^[^{]+\{\s*\[native \w/,
                cW = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                c6 = /[+~]/,
                cS = /'|\\/g,
                cx = new RegExp("\\\\([\\da-f]{1,6}" + cu + "?|(" + cu + ")|.)", "ig"),
                da = function(i, dv, dt) {
                    var du = "0x" + dv - 65536;
                    return du !== du || dt ? dv : du < 0 ? String.fromCharCode(du + 65536) : String.fromCharCode(du >> 10 | 55296, du & 1023 | 56320)
                },
                dr = function() {
                    c4()
                };
            try {
                cc.apply((dh = cr.call(cO.childNodes)), cO.childNodes);
                dh[cO.childNodes.length].nodeType
            } catch (cI) {
                cc = {
                    apply: dh.length ? function(dt, i) {
                        cR.apply(dt, cr.call(i))
                    } : function(dw, dv) {
                        var dt = dw.length,
                            du = 0;
                        while ((dw[dt++] = dv[du++])) {}
                        dw.length = dt - 1
                    }
                }
            }
            function cB(dA, du, dD, dG) {
                var dy, dE, dx, dt, dH, dF, dw, dB, dv = du && du.ownerDocument,
                    dC = du ? du.nodeType : 9;
                dD = dD || [];
                if (typeof dA !== "string" || !dA || dC !== 1 && dC !== 9 && dC !== 11) {
                    return dD
                }
                if (!dG) {
                    if ((du ? du.ownerDocument || du : cO) !== cH) {
                        c4(du)
                    }
                    du = du || cH;
                    if (dd) {
                        if (dC !== 11 && (dF = cW.exec(dA))) {
                            if ((dy = dF[1])) {
                                if (dC === 9) {
                                    if ((dx = du.getElementById(dy))) {
                                        if (dx.id === dy) {
                                            dD.push(dx);
                                            return dD
                                        }
                                    } else {
                                        return dD
                                    }
                                } else {
                                    if (dv && (dx = dv.getElementById(dy)) && cK(du, dx) && dx.id === dy) {
                                        dD.push(dx);
                                        return dD
                                    }
                                }
                            } else {
                                if (dF[2]) {
                                    cc.apply(dD, du.getElementsByTagName(dA));
                                    return dD
                                } else {
                                    if ((dy = dF[3]) && dm.getElementsByClassName && du.getElementsByClassName) {
                                        cc.apply(dD, du.getElementsByClassName(dy));
                                        return dD
                                    }
                                }
                            }
                        }
                        if (dm.qsa && !cL[dA + " "] && (!c8 || !c8.test(dA))) {
                            if (dC !== 1) {
                                dv = du;
                                dB = dA
                            } else {
                                if (du.nodeName.toLowerCase() !== "object") {
                                    if ((dt = du.getAttribute("id"))) {
                                        dt = dt.replace(cS, "\\$&")
                                    } else {
                                        du.setAttribute("id", (dt = df))
                                    }
                                    dw = cm(dA);
                                    dE = dw.length;
                                    dH = cZ.test(dt) ? "#" + dt : "[id='" + dt + "']";
                                    while (dE--) {
                                        dw[dE] = dH + " " + cn(dw[dE])
                                    }
                                    dB = dw.join(",");
                                    dv = c6.test(dA) && cY(du.parentNode) || du
                                }
                            }
                            if (dB) {
                                try {
                                    cc.apply(dD, dv.querySelectorAll(dB));
                                    return dD
                                } catch (dz) {} finally {
                                    if (dt === df) {
                                        du.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                }
                return dl(dA.replace(cw, "$1"), du, dD, dG)
            }
            function cF() {
                var dt = [];
                function i(du, dv) {
                    if (dt.push(du + " ") > cs.cacheLength) {
                        delete i[dt.shift()]
                    }
                    return (i[du + " "] = dv)
                }
                return i
            }
            function co(i) {
                i[df] = true;
                return i
            }
            function ck(i) {
                var du = cH.createElement("div");
                try {
                    return !!i(du)
                } catch (dt) {
                    return false
                } finally {
                    if (du.parentNode) {
                        du.parentNode.removeChild(du)
                    }
                    du = null
                }
            }
            function dp(du, dw) {
                var dt = du.split("|"),
                    dv = dt.length;
                while (dv--) {
                    cs.attrHandle[dt[dv]] = dw
                }
            }
            function cf(dt, i) {
                var dv = i && dt,
                    du = dv && dt.nodeType === 1 && i.nodeType === 1 && (~i.sourceIndex || cV) - (~dt.sourceIndex || cV);
                if (du) {
                    return du
                }
                if (dv) {
                    while ((dv = dv.nextSibling)) {
                        if (dv === i) {
                            return -1
                        }
                    }
                }
                return dt ? 1 : -1
            }
            function cC(i) {
                return function(du) {
                    var dt = du.nodeName.toLowerCase();
                    return dt === "input" && du.type === i
                }
            }
            function cg(i) {
                return function(du) {
                    var dt = du.nodeName.toLowerCase();
                    return (dt === "input" || dt === "button") && du.type === i
                }
            }
            function dc(i) {
                return co(function(dt) {
                    dt = +dt;
                    return co(function(du, dy) {
                        var dw, dv = i([], du.length, dt),
                            dx = dv.length;
                        while (dx--) {
                            if (du[(dw = dv[dx])]) {
                                du[dw] = !(dy[dw] = du[dw])
                            }
                        }
                    })
                })
            }
            function cY(i) {
                return i && typeof i.getElementsByTagName !== "undefined" && i
            }
            dm = cB.support = {};
            cP = cB.isXML = function(i) {
                var dt = i && (i.ownerDocument || i).documentElement;
                return dt ? dt.nodeName !== "HTML" : false
            };
            c4 = cB.setDocument = function(du) {
                var i, dt, dv = du ? du.ownerDocument || du : cO;
                if (dv === cH || dv.nodeType !== 9 || !dv.documentElement) {
                    return cH
                }
                cH = dv;
                ct = cH.documentElement;
                dd = !cP(cH);
                if ((dt = cH.defaultView) && dt.top !== dt) {
                    if (dt.addEventListener) {
                        dt.addEventListener("unload", dr, false)
                    } else {
                        if (dt.attachEvent) {
                            dt.attachEvent("onunload", dr)
                        }
                    }
                }
                dm.attributes = ck(function(dw) {
                    dw.className = "i";
                    return !dw.getAttribute("className")
                });
                dm.getElementsByTagName = ck(function(dw) {
                    dw.appendChild(cH.createComment(""));
                    return !dw.getElementsByTagName("*").length
                });
                dm.getElementsByClassName = cU.test(cH.getElementsByClassName);
                dm.getById = ck(function(dw) {
                    ct.appendChild(dw).id = df;
                    return !cH.getElementsByName || !cH.getElementsByName(df).length
                });
                if (dm.getById) {
                    cs.find.ID = function(dy, dx) {
                        if (typeof dx.getElementById !== "undefined" && dd) {
                            var dw = dx.getElementById(dy);
                            return dw ? [dw] : []
                        }
                    };
                    cs.filter.ID = function(dx) {
                        var dw = dx.replace(cx, da);
                        return function(dy) {
                            return dy.getAttribute("id") === dw
                        }
                    }
                } else {
                    delete cs.find.ID;
                    cs.filter.ID = function(dx) {
                        var dw = dx.replace(cx, da);
                        return function(dz) {
                            var dy = typeof dz.getAttributeNode !== "undefined" && dz.getAttributeNode("id");
                            return dy && dy.value === dw
                        }
                    }
                }
                cs.find.TAG = dm.getElementsByTagName ? function(dw, dx) {
                    if (typeof dx.getElementsByTagName !== "undefined") {
                        return dx.getElementsByTagName(dw)
                    } else {
                        if (dm.qsa) {
                            return dx.querySelectorAll(dw)
                        }
                    }
                } : function(dw, dA) {
                    var dB, dz = [],
                        dy = 0,
                        dx = dA.getElementsByTagName(dw);
                    if (dw === "*") {
                        while ((dB = dx[dy++])) {
                            if (dB.nodeType === 1) {
                                dz.push(dB)
                            }
                        }
                        return dz
                    }
                    return dx
                };
                cs.find.CLASS = dm.getElementsByClassName && function(dx, dw) {
                    if (typeof dw.getElementsByClassName !== "undefined" && dd) {
                        return dw.getElementsByClassName(dx)
                    }
                };
                dk = [];
                c8 = [];
                if ((dm.qsa = cU.test(cH.querySelectorAll))) {
                    ck(function(dw) {
                        ct.appendChild(dw).innerHTML = "<a id='" + df + "'></a><select id='" + df + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                        if (dw.querySelectorAll("[msallowcapture^='']").length) {
                            c8.push("[*^$]=" + cu + "*(?:''|\"\")")
                        }
                        if (!dw.querySelectorAll("[selected]").length) {
                            c8.push("\\[" + cu + "*(?:value|" + cd + ")")
                        }
                        if (!dw.querySelectorAll("[id~=" + df + "-]").length) {
                            c8.push("~=")
                        }
                        if (!dw.querySelectorAll(":checked").length) {
                            c8.push(":checked")
                        }
                        if (!dw.querySelectorAll("a#" + df + "+*").length) {
                            c8.push(".#.+[+~]")
                        }
                    });
                    ck(function(dx) {
                        var dw = cH.createElement("input");
                        dw.setAttribute("type", "hidden");
                        dx.appendChild(dw).setAttribute("name", "D");
                        if (dx.querySelectorAll("[name=d]").length) {
                            c8.push("name" + cu + "*[*^$|!~]?=")
                        }
                        if (!dx.querySelectorAll(":enabled").length) {
                            c8.push(":enabled", ":disabled")
                        }
                        dx.querySelectorAll("*,:x");
                        c8.push(",.*:")
                    })
                }
                if ((dm.matchesSelector = cU.test((cj = ct.matches || ct.webkitMatchesSelector || ct.mozMatchesSelector || ct.oMatchesSelector || ct.msMatchesSelector)))) {
                    ck(function(dw) {
                        dm.disconnectedMatch = cj.call(dw, "div");
                        cj.call(dw, "[s!='']:x");
                        dk.push("!=", cp)
                    })
                }
                c8 = c8.length && new RegExp(c8.join("|"));
                dk = dk.length && new RegExp(dk.join("|"));
                i = cU.test(ct.compareDocumentPosition);
                cK = i || cU.test(ct.contains) ? function(dx, dw) {
                    var dz = dx.nodeType === 9 ? dx.documentElement : dx,
                        dy = dw && dw.parentNode;
                    return dx === dy || !!(dy && dy.nodeType === 1 && (dz.contains ? dz.contains(dy) : dx.compareDocumentPosition && dx.compareDocumentPosition(dy) & 16))
                } : function(dx, dw) {
                    if (dw) {
                        while ((dw = dw.parentNode)) {
                            if (dw === dx) {
                                return true
                            }
                        }
                    }
                    return false
                };
                cJ = i ? function(dx, dw) {
                    if (dx === dw) {
                        c2 = true;
                        return 0
                    }
                    var dy = !dx.compareDocumentPosition - !dw.compareDocumentPosition;
                    if (dy) {
                        return dy
                    }
                    dy = (dx.ownerDocument || dx) === (dw.ownerDocument || dw) ? dx.compareDocumentPosition(dw) : 1;
                    if (dy & 1 || (!dm.sortDetached && dw.compareDocumentPosition(dx) === dy)) {
                        if (dx === cH || dx.ownerDocument === cO && cK(cO, dx)) {
                            return -1
                        }
                        if (dw === cH || dw.ownerDocument === cO && cK(cO, dw)) {
                            return 1
                        }
                        return cN ? (ci(cN, dx) - ci(cN, dw)) : 0
                    }
                    return dy & 4 ? -1 : 1
                } : function(dx, dw) {
                    if (dx === dw) {
                        c2 = true;
                        return 0
                    }
                    var dD, dA = 0,
                        dC = dx.parentNode,
                        dz = dw.parentNode,
                        dy = [dx],
                        dB = [dw];
                    if (!dC || !dz) {
                        return dx === cH ? -1 : dw === cH ? 1 : dC ? -1 : dz ? 1 : cN ? (ci(cN, dx) - ci(cN, dw)) : 0
                    } else {
                        if (dC === dz) {
                            return cf(dx, dw)
                        }
                    }
                    dD = dx;
                    while ((dD = dD.parentNode)) {
                        dy.unshift(dD)
                    }
                    dD = dw;
                    while ((dD = dD.parentNode)) {
                        dB.unshift(dD)
                    }
                    while (dy[dA] === dB[dA]) {
                        dA++
                    }
                    return dA ? cf(dy[dA], dB[dA]) : dy[dA] === cO ? -1 : dB[dA] === cO ? 1 : 0
                };
                return cH
            };
            cB.matches = function(dt, i) {
                return cB(dt, null, null, i)
            };
            cB.matchesSelector = function(dt, dv) {
                if ((dt.ownerDocument || dt) !== cH) {
                    c4(dt)
                }
                dv = dv.replace(cy, "='$1']");
                if (dm.matchesSelector && dd && !cL[dv + " "] && (!dk || !dk.test(dv)) && (!c8 || !c8.test(dv))) {
                    try {
                        var i = cj.call(dt, dv);
                        if (i || dm.disconnectedMatch || dt.document && dt.document.nodeType !== 11) {
                            return i
                        }
                    } catch (du) {}
                }
                return cB(dv, cH, null, [dt]).length > 0
            };
            cB.contains = function(i, dt) {
                if ((i.ownerDocument || i) !== cH) {
                    c4(i)
                }
                return cK(i, dt)
            };
            cB.attr = function(du, i) {
                if ((du.ownerDocument || du) !== cH) {
                    c4(du)
                }
                var dt = cs.attrHandle[i.toLowerCase()],
                    dv = dt && cT.call(cs.attrHandle, i.toLowerCase()) ? dt(du, i, !dd) : undefined;
                return dv !== undefined ? dv : dm.attributes || !dd ? du.getAttribute(i) : (dv = du.getAttributeNode(i)) && dv.specified ? dv.value : null
            };
            cB.error = function(i) {
                throw new Error("Syntax error, unrecognized expression: " + i)
            };
            cB.uniqueSort = function(dv) {
                var dw, dx = [],
                    dt = 0,
                    du = 0;
                c2 = !dm.detectDuplicates;
                cN = !dm.sortStable && dv.slice(0);
                dv.sort(cJ);
                if (c2) {
                    while ((dw = dv[du++])) {
                        if (dw === dv[du]) {
                            dt = dx.push(du)
                        }
                    }
                    while (dt--) {
                        dv.splice(dx[dt], 1)
                    }
                }
                cN = null;
                return dv
            };
            cM = cB.getText = function(dx) {
                var dw, du = "",
                    dv = 0,
                    dt = dx.nodeType;
                if (!dt) {
                    while ((dw = dx[dv++])) {
                        du += cM(dw)
                    }
                } else {
                    if (dt === 1 || dt === 9 || dt === 11) {
                        if (typeof dx.textContent === "string") {
                            return dx.textContent
                        } else {
                            for (dx = dx.firstChild; dx; dx = dx.nextSibling) {
                                du += cM(dx)
                            }
                        }
                    } else {
                        if (dt === 3 || dt === 4) {
                            return dx.nodeValue
                        }
                    }
                }
                return du
            };
            cs = cB.selectors = {
                cacheLength: 50,
                createPseudo: co,
                match: c7,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(i) {
                        i[1] = i[1].replace(cx, da);
                        i[3] = (i[3] || i[4] || i[5] || "").replace(cx, da);
                        if (i[2] === "~=") {
                            i[3] = " " + i[3] + " "
                        }
                        return i.slice(0, 4)
                    },
                    CHILD: function(i) {
                        i[1] = i[1].toLowerCase();
                        if (i[1].slice(0, 3) === "nth") {
                            if (!i[3]) {
                                cB.error(i[0])
                            }
                            i[4] = +(i[4] ? i[5] + (i[6] || 1) : 2 * (i[3] === "even" || i[3] === "odd"));
                            i[5] = +((i[7] + i[8]) || i[3] === "odd")
                        } else {
                            if (i[3]) {
                                cB.error(i[0])
                            }
                        }
                        return i
                    },
                    PSEUDO: function(dt) {
                        var i, du = !dt[6] && dt[2];
                        if (c7.CHILD.test(dt[0])) {
                            return null
                        }
                        if (dt[3]) {
                            dt[2] = dt[4] || dt[5] || ""
                        } else {
                            if (du && cX.test(du) && (i = cm(du, true)) && (i = du.indexOf(")", du.length - i) - du.length)) {
                                dt[0] = dt[0].slice(0, i);
                                dt[2] = du.slice(0, i)
                            }
                        }
                        return dt.slice(0, 3)
                    }
                },
                filter: {
                    TAG: function(dt) {
                        var i = dt.replace(cx, da).toLowerCase();
                        return dt === "*" ? function() {
                            return true
                        } : function(du) {
                            return du.nodeName && du.nodeName.toLowerCase() === i
                        }
                    },
                    CLASS: function(i) {
                        var dt = ce[i + " "];
                        return dt || (dt = new RegExp("(^|" + cu + ")" + i + "(" + cu + "|$)")) && ce(i, function(du) {
                            return dt.test(typeof du.className === "string" && du.className || typeof du.getAttribute !== "undefined" && du.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(du, dt, i) {
                        return function(dw) {
                            var dv = cB.attr(dw, du);
                            if (dv == null) {
                                return dt === "!="
                            }
                            if (!dt) {
                                return true
                            }
                            dv += "";
                            return dt === "=" ? dv === i : dt === "!=" ? dv !== i : dt === "^=" ? i && dv.indexOf(i) === 0 : dt === "*=" ? i && dv.indexOf(i) > -1 : dt === "$=" ? i && dv.slice(-i.length) === i : dt === "~=" ? (" " + dv.replace(cz, " ") + " ").indexOf(i) > -1 : dt === "|=" ? dv === i || dv.slice(0, i.length + 1) === i + "-" : false
                        }
                    },
                    CHILD: function(dt, dw, dv, dx, du) {
                        var dz = dt.slice(0, 3) !== "nth",
                            i = dt.slice(-4) !== "last",
                            dy = dw === "of-type";
                        return dx === 1 && du === 0 ? function(dA) {
                            return !!dA.parentNode
                        } : function(dH, dF, dK) {
                            var dA, dD, dN, dI, dJ, dE, dG = dz !== i ? "nextSibling" : "previousSibling",
                                dM = dH.parentNode,
                                dC = dy && dH.nodeName.toLowerCase(),
                                dB = !dK && !dy,
                                dL = false;
                            if (dM) {
                                if (dz) {
                                    while (dG) {
                                        dI = dH;
                                        while ((dI = dI[dG])) {
                                            if (dy ? dI.nodeName.toLowerCase() === dC : dI.nodeType === 1) {
                                                return false
                                            }
                                        }
                                        dE = dG = dt === "only" && !dE && "nextSibling"
                                    }
                                    return true
                                }
                                dE = [i ? dM.firstChild : dM.lastChild];
                                if (i && dB) {
                                    dI = dM;
                                    dN = dI[df] || (dI[df] = {});
                                    dD = dN[dI.uniqueID] || (dN[dI.uniqueID] = {});
                                    dA = dD[dt] || [];
                                    dJ = dA[0] === dn && dA[1];
                                    dL = dJ && dA[2];
                                    dI = dJ && dM.childNodes[dJ];
                                    while ((dI = ++dJ && dI && dI[dG] || (dL = dJ = 0) || dE.pop())) {
                                        if (dI.nodeType === 1 && ++dL && dI === dH) {
                                            dD[dt] = [dn, dJ, dL];
                                            break
                                        }
                                    }
                                } else {
                                    if (dB) {
                                        dI = dH;
                                        dN = dI[df] || (dI[df] = {});
                                        dD = dN[dI.uniqueID] || (dN[dI.uniqueID] = {});
                                        dA = dD[dt] || [];
                                        dJ = dA[0] === dn && dA[1];
                                        dL = dJ
                                    }
                                    if (dL === false) {
                                        while ((dI = ++dJ && dI && dI[dG] || (dL = dJ = 0) || dE.pop())) {
                                            if ((dy ? dI.nodeName.toLowerCase() === dC : dI.nodeType === 1) && ++dL) {
                                                if (dB) {
                                                    dN = dI[df] || (dI[df] = {});
                                                    dD = dN[dI.uniqueID] || (dN[dI.uniqueID] = {});
                                                    dD[dt] = [dn, dL]
                                                }
                                                if (dI === dH) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                                dL -= du;
                                return dL === dx || (dL % dx === 0 && dL / dx >= 0)
                            }
                        }
                    },
                    PSEUDO: function(dv, du) {
                        var i, dt = cs.pseudos[dv] || cs.setFilters[dv.toLowerCase()] || cB.error("unsupported pseudo: " + dv);
                        if (dt[df]) {
                            return dt(du)
                        }
                        if (dt.length > 1) {
                            i = [dv, dv, "", du];
                            return cs.setFilters.hasOwnProperty(dv.toLowerCase()) ? co(function(dy, dA) {
                                var dx, dw = dt(dy, du),
                                    dz = dw.length;
                                while (dz--) {
                                    dx = ci(dy, dw[dz]);
                                    dy[dx] = !(dA[dx] = dw[dz])
                                }
                            }) : function(dw) {
                                return dt(dw, 0, i)
                            }
                        }
                        return dt
                    }
                },
                pseudos: {
                    not: co(function(i) {
                        var dt = [],
                            du = [],
                            dv = c1(i.replace(cw, "$1"));
                        return dv[df] ? co(function(dx, dC, dA, dy) {
                            var dB, dw = dv(dx, null, dy, []),
                                dz = dx.length;
                            while (dz--) {
                                if ((dB = dw[dz])) {
                                    dx[dz] = !(dC[dz] = dB)
                                }
                            }
                        }) : function(dy, dx, dw) {
                            dt[0] = dy;
                            dv(dt, null, dw, du);
                            dt[0] = null;
                            return !du.pop()
                        }
                    }),
                    has: co(function(i) {
                        return function(dt) {
                            return cB(i, dt).length > 0
                        }
                    }),
                    contains: co(function(i) {
                        i = i.replace(cx, da);
                        return function(dt) {
                            return (dt.textContent || dt.innerText || cM(dt)).indexOf(i) > -1
                        }
                    }),
                    lang: co(function(i) {
                        if (!cZ.test(i || "")) {
                            cB.error("unsupported lang: " + i)
                        }
                        i = i.replace(cx, da).toLowerCase();
                        return function(du) {
                            var dt;
                            do {
                                if ((dt = dd ? du.lang : du.getAttribute("xml:lang") || du.getAttribute("lang"))) {
                                    dt = dt.toLowerCase();
                                    return dt === i || dt.indexOf(i + "-") === 0
                                }
                            } while ((du = du.parentNode) && du.nodeType === 1);
                            return false
                        }
                    }),
                    target: function(i) {
                        var dt = dj.location && dj.location.hash;
                        return dt && dt.slice(1) === i.id
                    },
                    root: function(i) {
                        return i === ct
                    },
                    focus: function(i) {
                        return i === cH.activeElement && (!cH.hasFocus || cH.hasFocus()) && !!(i.type || i.href || ~i.tabIndex)
                    },
                    enabled: function(i) {
                        return i.disabled === false
                    },
                    disabled: function(i) {
                        return i.disabled === true
                    },
                    checked: function(i) {
                        var dt = i.nodeName.toLowerCase();
                        return (dt === "input" && !!i.checked) || (dt === "option" && !!i.selected)
                    },
                    selected: function(i) {
                        if (i.parentNode) {
                            i.parentNode.selectedIndex
                        }
                        return i.selected === true
                    },
                    empty: function(i) {
                        for (i = i.firstChild; i; i = i.nextSibling) {
                            if (i.nodeType < 6) {
                                return false
                            }
                        }
                        return true
                    },
                    parent: function(i) {
                        return !cs.pseudos.empty(i)
                    },
                    header: function(i) {
                        return cq.test(i.nodeName)
                    },
                    input: function(i) {
                        return ch.test(i.nodeName)
                    },
                    button: function(dt) {
                        var i = dt.nodeName.toLowerCase();
                        return i === "input" && dt.type === "button" || i === "button"
                    },
                    text: function(dt) {
                        var i;
                        return dt.nodeName.toLowerCase() === "input" && dt.type === "text" && ((i = dt.getAttribute("type")) == null || i.toLowerCase() === "text")
                    },
                    first: dc(function() {
                        return [0]
                    }),
                    last: dc(function(i, dt) {
                        return [dt - 1]
                    }),
                    eq: dc(function(i, du, dt) {
                        return [dt < 0 ? dt + du : dt]
                    }),
                    even: dc(function(dt, dv) {
                        var du = 0;
                        for (; du < dv; du += 2) {
                            dt.push(du)
                        }
                        return dt
                    }),
                    odd: dc(function(dt, dv) {
                        var du = 1;
                        for (; du < dv; du += 2) {
                            dt.push(du)
                        }
                        return dt
                    }),
                    lt: dc(function(dt, dw, dv) {
                        var du = dv < 0 ? dv + dw : dv;
                        for (; --du >= 0;) {
                            dt.push(du)
                        }
                        return dt
                    }),
                    gt: dc(function(dt, dw, dv) {
                        var du = dv < 0 ? dv + dw : dv;
                        for (; ++du < dw;) {
                            dt.push(du)
                        }
                        return dt
                    })
                }
            };
            cs.pseudos.nth = cs.pseudos.eq;
            for (cD in {
                    radio: true,
                    checkbox: true,
                    file: true,
                    password: true,
                    image: true
                }) {
                cs.pseudos[cD] = cC(cD)
            }
            for (cD in {
                    submit: true,
                    reset: true
                }) {
                cs.pseudos[cD] = cg(cD)
            }
            function c0() {}
            c0.prototype = cs.filters = cs.pseudos;
            cs.setFilters = new c0();
            cm = cB.tokenize = function(dw, dB) {
                var dt, dx, dz, dA, dy, du, i, dv = de[dw + " "];
                if (dv) {
                    return dB ? 0 : dv.slice(0)
                }
                dy = dw;
                du = [];
                i = cs.preFilter;
                while (dy) {
                    if (!dt || (dx = cA.exec(dy))) {
                        if (dx) {
                            dy = dy.slice(dx[0].length) || dy
                        }
                        du.push((dz = []))
                    }
                    dt = false;
                    if ((dx = cG.exec(dy))) {
                        dt = dx.shift();
                        dz.push({
                            value: dt,
                            type: dx[0].replace(cw, " ")
                        });
                        dy = dy.slice(dt.length)
                    }
                    for (dA in cs.filter) {
                        if ((dx = c7[dA].exec(dy)) && (!i[dA] || (dx = i[dA](dx)))) {
                            dt = dx.shift();
                            dz.push({
                                value: dt,
                                type: dA,
                                matches: dx
                            });
                            dy = dy.slice(dt.length)
                        }
                    }
                    if (!dt) {
                        break
                    }
                }
                return dB ? dy.length : dy ? cB.error(dw) : de(dw, du).slice(0)
            };
            function cn(dw) {
                var dv = 0,
                    du = dw.length,
                    dt = "";
                for (; dv < du; dv++) {
                    dt += dw[dv].value
                }
                return dt
            }
            function cv(dw, du, dv) {
                var i = du.dir,
                    dx = dv && i === "parentNode",
                    dt = c9++;
                return du.first ? function(dA, dz, dy) {
                    while ((dA = dA[i])) {
                        if (dA.nodeType === 1 || dx) {
                            return dw(dA, dz, dy)
                        }
                    }
                } : function(dD, dB, dA) {
                    var dE, dy, dC, dz = [dn, dt];
                    if (dA) {
                        while ((dD = dD[i])) {
                            if (dD.nodeType === 1 || dx) {
                                if (dw(dD, dB, dA)) {
                                    return true
                                }
                            }
                        }
                    } else {
                        while ((dD = dD[i])) {
                            if (dD.nodeType === 1 || dx) {
                                dC = dD[df] || (dD[df] = {});
                                dy = dC[dD.uniqueID] || (dC[dD.uniqueID] = {});
                                if ((dE = dy[i]) && dE[0] === dn && dE[1] === dt) {
                                    return (dz[2] = dE[2])
                                } else {
                                    dy[i] = dz;
                                    if ((dz[2] = dw(dD, dB, dA))) {
                                        return true
                                    }
                                }
                            }
                        }
                    }
                }
            }
            function dq(i) {
                return i.length > 1 ? function(dw, dv, dt) {
                    var du = i.length;
                    while (du--) {
                        if (!i[du](dw, dv, dt)) {
                            return false
                        }
                    }
                    return true
                } : i[0]
            }
            function cE(du, dx, dw) {
                var dv = 0,
                    dt = dx.length;
                for (; dv < dt; dv++) {
                    cB(du, dx[dv], dw)
                }
                return dw
            }
            function c5(dt, du, dv, dw, dz) {
                var dx, dC = [],
                    dy = 0,
                    dA = dt.length,
                    dB = du != null;
                for (; dy < dA; dy++) {
                    if ((dx = dt[dy])) {
                        if (!dv || dv(dx, dw, dz)) {
                            dC.push(dx);
                            if (dB) {
                                du.push(dy)
                            }
                        }
                    }
                }
                return dC
            }
            function cl(du, dt, dw, dv, dx, i) {
                if (dv && !dv[df]) {
                    dv = cl(dv)
                }
                if (dx && !dx[df]) {
                    dx = cl(dx, i)
                }
                return co(function(dI, dF, dA, dH) {
                    var dK, dG, dC, dB = [],
                        dJ = [],
                        dz = dF.length,
                        dy = dI || cE(dt || "*", dA.nodeType ? [dA] : dA, []),
                        dD = du && (dI || !dt) ? c5(dy, dB, du, dA, dH) : dy,
                        dE = dw ? dx || (dI ? du : dz || dv) ? [] : dF : dD;
                    if (dw) {
                        dw(dD, dE, dA, dH)
                    }
                    if (dv) {
                        dK = c5(dE, dJ);
                        dv(dK, [], dA, dH);
                        dG = dK.length;
                        while (dG--) {
                            if ((dC = dK[dG])) {
                                dE[dJ[dG]] = !(dD[dJ[dG]] = dC)
                            }
                        }
                    }
                    if (dI) {
                        if (dx || du) {
                            if (dx) {
                                dK = [];
                                dG = dE.length;
                                while (dG--) {
                                    if ((dC = dE[dG])) {
                                        dK.push((dD[dG] = dC))
                                    }
                                }
                                dx(null, (dE = []), dK, dH)
                            }
                            dG = dE.length;
                            while (dG--) {
                                if ((dC = dE[dG]) && (dK = dx ? ci(dI, dC) : dB[dG]) > -1) {
                                    dI[dK] = !(dF[dK] = dC)
                                }
                            }
                        }
                    } else {
                        dE = c5(dE === dF ? dE.splice(dz, dE.length) : dE);
                        if (dx) {
                            dx(null, dF, dE, dH)
                        } else {
                            cc.apply(dF, dE)
                        }
                    }
                })
            }
            function dg(dz) {
                var du, dx, dv, dy = dz.length,
                    dC = cs.relative[dz[0].type],
                    dD = dC || cs.relative[" "],
                    dw = dC ? 1 : 0,
                    dA = cv(function(i) {
                        return i === du
                    }, dD, true),
                    dB = cv(function(i) {
                        return ci(du, i) > -1
                    }, dD, true),
                    dt = [function(dG, dF, dE) {
                        var i = (!dC && (dE || dF !== ds)) || ((du = dF).nodeType ? dA(dG, dF, dE) : dB(dG, dF, dE));
                        du = null;
                        return i
                    }];
                for (; dw < dy; dw++) {
                    if ((dx = cs.relative[dz[dw].type])) {
                        dt = [cv(dq(dt), dx)]
                    } else {
                        dx = cs.filter[dz[dw].type].apply(null, dz[dw].matches);
                        if (dx[df]) {
                            dv = ++dw;
                            for (; dv < dy; dv++) {
                                if (cs.relative[dz[dv].type]) {
                                    break
                                }
                            }
                            return cl(dw > 1 && dq(dt), dw > 1 && cn(dz.slice(0, dw - 1).concat({
                                value: dz[dw - 2].type === " " ? "*" : ""
                            })).replace(cw, "$1"), dx, dw < dv && dg(dz.slice(dw, dv)), dv < dy && dg((dz = dz.slice(dv))), dv < dy && cn(dz))
                        }
                        dt.push(dx)
                    }
                }
                return dq(dt)
            }
            function c3(dv, du) {
                var i = du.length > 0,
                    dw = dv.length > 0,
                    dt = function(dG, dA, dF, dE, dJ) {
                        var dB, dC, dH, dL = 0,
                            dD = "0",
                            dx = dG && [],
                            dM = [],
                            dK = ds,
                            dz = dG || dw && cs.find.TAG("*", dJ),
                            dy = (dn += dK == null ? 1 : Math.random() || 0.1),
                            dI = dz.length;
                        if (dJ) {
                            ds = dA === cH || dA || dJ
                        }
                        for (; dD !== dI && (dB = dz[dD]) != null; dD++) {
                            if (dw && dB) {
                                dC = 0;
                                if (!dA && dB.ownerDocument !== cH) {
                                    c4(dB);
                                    dF = !dd
                                }
                                while ((dH = dv[dC++])) {
                                    if (dH(dB, dA || cH, dF)) {
                                        dE.push(dB);
                                        break
                                    }
                                }
                                if (dJ) {
                                    dn = dy
                                }
                            }
                            if (i) {
                                if ((dB = !dH && dB)) {
                                    dL--
                                }
                                if (dG) {
                                    dx.push(dB)
                                }
                            }
                        }
                        dL += dD;
                        if (i && dD !== dL) {
                            dC = 0;
                            while ((dH = du[dC++])) {
                                dH(dx, dM, dA, dF)
                            }
                            if (dG) {
                                if (dL > 0) {
                                    while (dD--) {
                                        if (!(dx[dD] || dM[dD])) {
                                            dM[dD] = di.call(dE)
                                        }
                                    }
                                }
                                dM = c5(dM)
                            }
                            cc.apply(dE, dM);
                            if (dJ && !dG && dM.length > 0 && (dL + du.length) > 1) {
                                cB.uniqueSort(dE)
                            }
                        }
                        if (dJ) {
                            dn = dy;
                            ds = dK
                        }
                        return dx
                    };
                return i ? co(dt) : dt
            }
            c1 = cB.compile = function(dt, dv) {
                var dw, du = [],
                    dy = [],
                    dx = cL[dt + " "];
                if (!dx) {
                    if (!dv) {
                        dv = cm(dt)
                    }
                    dw = dv.length;
                    while (dw--) {
                        dx = dg(dv[dw]);
                        if (dx[df]) {
                            du.push(dx)
                        } else {
                            dy.push(dx)
                        }
                    }
                    dx = cL(dt, c3(dy, du));
                    dx.selector = dt
                }
                return dx
            };
            dl = cB.select = function(dv, dt, dw, dz) {
                var dx, dC, du, dD, dA, dB = typeof dv === "function" && dv,
                    dy = !dz && cm((dv = dB.selector || dv));
                dw = dw || [];
                if (dy.length === 1) {
                    dC = dy[0] = dy[0].slice(0);
                    if (dC.length > 2 && (du = dC[0]).type === "ID" && dm.getById && dt.nodeType === 9 && dd && cs.relative[dC[1].type]) {
                        dt = (cs.find.ID(du.matches[0].replace(cx, da), dt) || [])[0];
                        if (!dt) {
                            return dw
                        } else {
                            if (dB) {
                                dt = dt.parentNode
                            }
                        }
                        dv = dv.slice(dC.shift().value.length)
                    }
                    dx = c7.needsContext.test(dv) ? 0 : dC.length;
                    while (dx--) {
                        du = dC[dx];
                        if (cs.relative[(dD = du.type)]) {
                            break
                        }
                        if ((dA = cs.find[dD])) {
                            if ((dz = dA(du.matches[0].replace(cx, da), c6.test(dC[0].type) && cY(dt.parentNode) || dt))) {
                                dC.splice(dx, 1);
                                dv = dz.length && cn(dC);
                                if (!dv) {
                                    cc.apply(dw, dz);
                                    return dw
                                }
                                break
                            }
                        }
                    }
                }(dB || c1(dv, dy))(dz, dt, !dd, dw, !dt || c6.test(dv) && cY(dt.parentNode) || dt);
                return dw
            };
            dm.sortStable = df.split("").sort(cJ).join("") === df;
            dm.detectDuplicates = !!c2;
            c4();
            dm.sortDetached = ck(function(i) {
                return i.compareDocumentPosition(cH.createElement("div")) & 1
            });
            if (!ck(function(i) {
                    i.innerHTML = "<a href='#'></a>";
                    return i.firstChild.getAttribute("href") === "#"
                })) {
                dp("type|href|height|width", function(dt, i, du) {
                    if (!du) {
                        return dt.getAttribute(i, i.toLowerCase() === "type" ? 1 : 2)
                    }
                })
            }
            if (!dm.attributes || !ck(function(i) {
                    i.innerHTML = "<input/>";
                    i.firstChild.setAttribute("value", "");
                    return i.firstChild.getAttribute("value") === ""
                })) {
                dp("value", function(dt, i, du) {
                    if (!du && dt.nodeName.toLowerCase() === "input") {
                        return dt.defaultValue
                    }
                })
            }
            if (!ck(function(i) {
                    return i.getAttribute("disabled") == null
                })) {
                dp(cd, function(dt, i, dv) {
                    var du;
                    if (!dv) {
                        return dt[i] === true ? i.toLowerCase() : (du = dt.getAttributeNode(i)) && du.specified ? du.value : null
                    }
                })
            }
            return cB
        })(bb);
    bO.find = l;
    bO.expr = l.selectors;
    bO.expr[":"] = bO.expr.pseudos;
    bO.uniqueSort = bO.unique = l.uniqueSort;
    bO.text = l.getText;
    bO.isXMLDoc = l.isXML;
    bO.contains = l.contains;
    var af = function(ce, cc, cf) {
        var i = [],
            cd = cf !== undefined;
        while ((ce = ce[cc]) && ce.nodeType !== 9) {
            if (ce.nodeType === 1) {
                if (cd && bO(ce).is(cf)) {
                    break
                }
                i.push(ce)
            }
        }
        return i
    };
    var o = function(cd, cc) {
        var i = [];
        for (; cd; cd = cd.nextSibling) {
            if (cd.nodeType === 1 && cd !== cc) {
                i.push(cd)
            }
        }
        return i
    };
    var z = bO.expr.match.needsContext;
    var a = (/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);
    var aR = /^.[^:#\[\.,]*$/;
    function aY(cd, i, cc) {
        if (bO.isFunction(i)) {
            return bO.grep(cd, function(cf, ce) {
                return !!i.call(cf, ce, cf) !== cc
            })
        }
        if (i.nodeType) {
            return bO.grep(cd, function(ce) {
                return (ce === i) !== cc
            })
        }
        if (typeof i === "string") {
            if (aR.test(i)) {
                return bO.filter(i, cd, cc)
            }
            i = bO.filter(i, cd)
        }
        return bO.grep(cd, function(ce) {
            return (bO.inArray(ce, i) > -1) !== cc
        })
    }
    bO.filter = function(ce, i, cd) {
        var cc = i[0];
        if (cd) {
            ce = ":not(" + ce + ")"
        }
        return i.length === 1 && cc.nodeType === 1 ? bO.find.matchesSelector(cc, ce) ? [cc] : [] : bO.find.matches(ce, bO.grep(i, function(cf) {
            return cf.nodeType === 1
        }))
    };
    bO.fn.extend({
        find: function(cd) {
            var cg, cf = [],
                ce = this,
                cc = ce.length;
            if (typeof cd !== "string") {
                return this.pushStack(bO(cd).filter(function() {
                    for (cg = 0; cg < cc; cg++) {
                        if (bO.contains(ce[cg], this)) {
                            return true
                        }
                    }
                }))
            }
            for (cg = 0; cg < cc; cg++) {
                bO.find(cd, ce[cg], cf)
            }
            cf = this.pushStack(cc > 1 ? bO.unique(cf) : cf);
            cf.selector = this.selector ? this.selector + " " + cd : cd;
            return cf
        },
        filter: function(i) {
            return this.pushStack(aY(this, i || [], false))
        },
        not: function(i) {
            return this.pushStack(aY(this, i || [], true))
        },
        is: function(i) {
            return !!aY(this, typeof i === "string" && z.test(i) ? bO(i) : i || [], false).length
        }
    });
    var y, bz = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        b2 = bO.fn.init = function(i, ce, cc) {
            var cd, cf;
            if (!i) {
                return this
            }
            cc = cc || y;
            if (typeof i === "string") {
                if (i.charAt(0) === "<" && i.charAt(i.length - 1) === ">" && i.length >= 3) {
                    cd = [null, i, null]
                } else {
                    cd = bz.exec(i)
                }
                if (cd && (cd[1] || !ce)) {
                    if (cd[1]) {
                        ce = ce instanceof bO ? ce[0] : ce;
                        bO.merge(this, bO.parseHTML(cd[1], ce && ce.nodeType ? ce.ownerDocument || ce : m, true));
                        if (a.test(cd[1]) && bO.isPlainObject(ce)) {
                            for (cd in ce) {
                                if (bO.isFunction(this[cd])) {
                                    this[cd](ce[cd])
                                } else {
                                    this.attr(cd, ce[cd])
                                }
                            }
                        }
                        return this
                    } else {
                        cf = m.getElementById(cd[2]);
                        if (cf && cf.parentNode) {
                            if (cf.id !== cd[2]) {
                                return y.find(i)
                            }
                            this.length = 1;
                            this[0] = cf
                        }
                        this.context = m;
                        this.selector = i;
                        return this
                    }
                } else {
                    if (!ce || ce.jquery) {
                        return (ce || cc).find(i)
                    } else {
                        return this.constructor(ce).find(i)
                    }
                }
            } else {
                if (i.nodeType) {
                    this.context = this[0] = i;
                    this.length = 1;
                    return this
                } else {
                    if (bO.isFunction(i)) {
                        return typeof cc.ready !== "undefined" ? cc.ready(i) : i(bO)
                    }
                }
            }
            if (i.selector !== undefined) {
                this.selector = i.selector;
                this.context = i.context
            }
            return bO.makeArray(i, this)
        };
    b2.prototype = bO.fn;
    y = bO(m);
    var bB = /^(?:parents|prev(?:Until|All))/,
        bF = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
    bO.fn.extend({
        has: function(cf) {
            var ce, cd = bO(cf, this),
                cc = cd.length;
            return this.filter(function() {
                for (ce = 0; ce < cc; ce++) {
                    if (bO.contains(this, cd[ce])) {
                        return true
                    }
                }
            })
        },
        closest: function(cg, cf) {
            var ch, ce = 0,
                cd = this.length,
                cc = [],
                ci = z.test(cg) || typeof cg !== "string" ? bO(cg, cf || this.context) : 0;
            for (; ce < cd; ce++) {
                for (ch = this[ce]; ch && ch !== cf; ch = ch.parentNode) {
                    if (ch.nodeType < 11 && (ci ? ci.index(ch) > -1 : ch.nodeType === 1 && bO.find.matchesSelector(ch, cg))) {
                        cc.push(ch);
                        break
                    }
                }
            }
            return this.pushStack(cc.length > 1 ? bO.uniqueSort(cc) : cc)
        },
        index: function(i) {
            if (!i) {
                return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1
            }
            if (typeof i === "string") {
                return bO.inArray(this[0], bO(i))
            }
            return bO.inArray(i.jquery ? i[0] : i, this)
        },
        add: function(i, cc) {
            return this.pushStack(bO.uniqueSort(bO.merge(this.get(), bO(i, cc))))
        },
        addBack: function(i) {
            return this.add(i == null ? this.prevObject : this.prevObject.filter(i))
        }
    });
    function a5(cc, i) {
        do {
            cc = cc[i]
        } while (cc && cc.nodeType !== 1);
        return cc
    }
    bO.each({
        parent: function(cc) {
            var i = cc.parentNode;
            return i && i.nodeType !== 11 ? i : null
        },
        parents: function(i) {
            return af(i, "parentNode")
        },
        parentsUntil: function(cd, cc, ce) {
            return af(cd, "parentNode", ce)
        },
        next: function(i) {
            return a5(i, "nextSibling")
        },
        prev: function(i) {
            return a5(i, "previousSibling")
        },
        nextAll: function(i) {
            return af(i, "nextSibling")
        },
        prevAll: function(i) {
            return af(i, "previousSibling")
        },
        nextUntil: function(cd, cc, ce) {
            return af(cd, "nextSibling", ce)
        },
        prevUntil: function(cd, cc, ce) {
            return af(cd, "previousSibling", ce)
        },
        siblings: function(i) {
            return o((i.parentNode || {}).firstChild, i)
        },
        children: function(i) {
            return o(i.firstChild)
        },
        contents: function(i) {
            return bO.nodeName(i, "iframe") ? i.contentDocument || i.contentWindow.document : bO.merge([], i.childNodes)
        }
    }, function(i, cc) {
        bO.fn[i] = function(cf, cd) {
            var ce = bO.map(this, cc, cf);
            if (i.slice(-5) !== "Until") {
                cd = cf
            }
            if (cd && typeof cd === "string") {
                ce = bO.filter(cd, ce)
            }
            if (this.length > 1) {
                if (!bF[i]) {
                    ce = bO.uniqueSort(ce)
                }
                if (bB.test(i)) {
                    ce = ce.reverse()
                }
            }
            return this.pushStack(ce)
        }
    });
    var aM = (/\S+/g);
    function am(cc) {
        var i = {};
        bO.each(cc.match(aM) || [], function(ce, cd) {
            i[cd] = true
        });
        return i
    }
    bO.Callbacks = function(ck) {
        ck = typeof ck === "string" ? am(ck) : bO.extend({}, ck);
        var cf, cd, i, ce, ci = [],
            cg = [],
            ch = -1,
            cc = function() {
                ce = ck.once;
                i = cf = true;
                for (; cg.length; ch = -1) {
                    cd = cg.shift();
                    while (++ch < ci.length) {
                        if (ci[ch].apply(cd[0], cd[1]) === false && ck.stopOnFalse) {
                            ch = ci.length;
                            cd = false
                        }
                    }
                }
                if (!ck.memory) {
                    cd = false
                }
                cf = false;
                if (ce) {
                    if (cd) {
                        ci = []
                    } else {
                        ci = ""
                    }
                }
            },
            cj = {
                add: function() {
                    if (ci) {
                        if (cd && !cf) {
                            ch = ci.length - 1;
                            cg.push(cd)
                        }(function cl(cm) {
                            bO.each(cm, function(co, cn) {
                                if (bO.isFunction(cn)) {
                                    if (!ck.unique || !cj.has(cn)) {
                                        ci.push(cn)
                                    }
                                } else {
                                    if (cn && cn.length && bO.type(cn) !== "string") {
                                        cl(cn)
                                    }
                                }
                            })
                        })(arguments);
                        if (cd && !cf) {
                            cc()
                        }
                    }
                    return this
                },
                remove: function() {
                    bO.each(arguments, function(cn, cl) {
                        var cm;
                        while ((cm = bO.inArray(cl, ci, cm)) > -1) {
                            ci.splice(cm, 1);
                            if (cm <= ch) {
                                ch--
                            }
                        }
                    });
                    return this
                },
                has: function(cl) {
                    return cl ? bO.inArray(cl, ci) > -1 : ci.length > 0
                },
                empty: function() {
                    if (ci) {
                        ci = []
                    }
                    return this
                },
                disable: function() {
                    ce = cg = [];
                    ci = cd = "";
                    return this
                },
                disabled: function() {
                    return !ci
                },
                lock: function() {
                    ce = true;
                    if (!cd) {
                        cj.disable()
                    }
                    return this
                },
                locked: function() {
                    return !!ce
                },
                fireWith: function(cm, cl) {
                    if (!ce) {
                        cl = cl || [];
                        cl = [cm, cl.slice ? cl.slice() : cl];
                        cg.push(cl);
                        if (!cf) {
                            cc()
                        }
                    }
                    return this
                },
                fire: function() {
                    cj.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!i
                }
            };
        return cj
    };
    bO.extend({
        Deferred: function(cd) {
            var cc = [
                    ["resolve", "done", bO.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", bO.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", bO.Callbacks("memory")]
                ],
                ce = "pending",
                cf = {
                    state: function() {
                        return ce
                    },
                    always: function() {
                        i.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var cg = arguments;
                        return bO.Deferred(function(ch) {
                            bO.each(cc, function(cj, ci) {
                                var ck = bO.isFunction(cg[cj]) && cg[cj];
                                i[ci[1]](function() {
                                    var cl = ck && ck.apply(this, arguments);
                                    if (cl && bO.isFunction(cl.promise)) {
                                        cl.promise().progress(ch.notify).done(ch.resolve).fail(ch.reject)
                                    } else {
                                        ch[ci[0] + "With"](this === cf ? ch.promise() : this, ck ? [cl] : arguments)
                                    }
                                })
                            });
                            cg = null
                        }).promise()
                    },
                    promise: function(cg) {
                        return cg != null ? bO.extend(cg, cf) : cf
                    }
                },
                i = {};
            cf.pipe = cf.then;
            bO.each(cc, function(ch, cg) {
                var cj = cg[2],
                    ci = cg[3];
                cf[cg[1]] = cj.add;
                if (ci) {
                    cj.add(function() {
                        ce = ci
                    }, cc[ch ^ 1][2].disable, cc[2][2].lock)
                }
                i[cg[0]] = function() {
                    i[cg[0] + "With"](this === i ? cf : this, arguments);
                    return this
                };
                i[cg[0] + "With"] = cj.fireWith
            });
            cf.promise(i);
            if (cd) {
                cd.call(i, i)
            }
            return i
        },
        when: function(cg) {
            var ce = 0,
                ci = X.call(arguments),
                cc = ci.length,
                cd = cc !== 1 || (cg && bO.isFunction(cg.promise)) ? cc : 0,
                cl = cd === 1 ? cg : bO.Deferred(),
                cf = function(cn, co, cm) {
                    return function(i) {
                        co[cn] = this;
                        cm[cn] = arguments.length > 1 ? X.call(arguments) : i;
                        if (cm === ck) {
                            cl.notifyWith(co, cm)
                        } else {
                            if (!(--cd)) {
                                cl.resolveWith(co, cm)
                            }
                        }
                    }
                },
                ck, ch, cj;
            if (cc > 1) {
                ck = new Array(cc);
                ch = new Array(cc);
                cj = new Array(cc);
                for (; ce < cc; ce++) {
                    if (ci[ce] && bO.isFunction(ci[ce].promise)) {
                        ci[ce].promise().progress(cf(ce, ch, ck)).done(cf(ce, cj, ci)).fail(cl.reject)
                    } else {
                        --cd
                    }
                }
            }
            if (!cd) {
                cl.resolveWith(cj, ci)
            }
            return cl.promise()
        }
    });
    var ar;
    bO.fn.ready = function(i) {
        bO.ready.promise().done(i);
        return this
    };
    bO.extend({
        isReady: false,
        readyWait: 1,
        holdReady: function(i) {
            if (i) {
                bO.readyWait++
            } else {
                bO.ready(true)
            }
        },
        ready: function(i) {
            if (i === true ? --bO.readyWait : bO.isReady) {
                return
            }
            bO.isReady = true;
            if (i !== true && --bO.readyWait > 0) {
                return
            }
            ar.resolveWith(m, [bO]);
            if (bO.fn.triggerHandler) {
                bO(m).triggerHandler("ready");
                bO(m).off("ready")
            }
        }
    });
    function bs() {
        if (m.addEventListener) {
            m.removeEventListener("DOMContentLoaded", b6);
            bb.removeEventListener("load", b6)
        } else {
            m.detachEvent("onreadystatechange", b6);
            bb.detachEvent("onload", b6)
        }
    }
    function b6() {
        if (m.addEventListener || bb.event.type === "load" || m.readyState === "complete") {
            bs();
            bO.ready()
        }
    }
    bO.ready.promise = function(ce) {
        if (!ar) {
            ar = bO.Deferred();
            if (m.readyState === "complete") {
                bb.setTimeout(bO.ready)
            } else {
                if (m.addEventListener) {
                    m.addEventListener("DOMContentLoaded", b6);
                    bb.addEventListener("load", b6)
                } else {
                    m.attachEvent("onreadystatechange", b6);
                    bb.attachEvent("onload", b6);
                    var cd = false;
                    try {
                        cd = bb.frameElement == null && m.documentElement
                    } catch (cc) {}
                    if (cd && cd.doScroll) {
                        (function i() {
                            if (!bO.isReady) {
                                try {
                                    cd.doScroll("left")
                                } catch (cf) {
                                    return bb.setTimeout(i, 50)
                                }
                                bs();
                                bO.ready()
                            }
                        })()
                    }
                }
            }
        }
        return ar.promise(ce)
    };
    bO.ready.promise();
    var bn;
    for (bn in bO(F)) {
        break
    }
    F.ownFirst = bn === "0";
    F.inlineBlockNeedsLayout = false;
    bO(function() {
        var cd, ce, i, cc;
        i = m.getElementsByTagName("body")[0];
        if (!i || !i.style) {
            return
        }
        ce = m.createElement("div");
        cc = m.createElement("div");
        cc.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
        i.appendChild(cc).appendChild(ce);
        if (typeof ce.style.zoom !== "undefined") {
            ce.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
            F.inlineBlockNeedsLayout = cd = ce.offsetWidth === 3;
            if (cd) {
                i.style.zoom = 1
            }
        }
        i.removeChild(cc)
    });
    (function() {
        var cc = m.createElement("div");
        F.deleteExpando = true;
        try {
            delete cc.test
        } catch (i) {
            F.deleteExpando = false
        }
        cc = null
    })();
    var V = function(cd) {
        var cc = bO.noData[(cd.nodeName + " ").toLowerCase()],
            i = +cd.nodeType || 1;
        return i !== 1 && i !== 9 ? false : !cc || cc !== true && cd.getAttribute("classid") === cc
    };
    var bE = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        aX = /([A-Z])/g;
    function bG(cd, cc, ce) {
        if (ce === undefined && cd.nodeType === 1) {
            var i = "data-" + cc.replace(aX, "-$1").toLowerCase();
            ce = cd.getAttribute(i);
            if (typeof ce === "string") {
                try {
                    ce = ce === "true" ? true : ce === "false" ? false : ce === "null" ? null : +ce + "" === ce ? +ce : bE.test(ce) ? bO.parseJSON(ce) : ce
                } catch (cf) {}
                bO.data(cd, cc, ce)
            } else {
                ce = undefined
            }
        }
        return ce
    }
    function Y(cc) {
        var i;
        for (i in cc) {
            if (i === "data" && bO.isEmptyObject(cc[i])) {
                continue
            }
            if (i !== "toJSON") {
                return false
            }
        }
        return true
    }
    function bi(ce, cc, cg, cf) {
        if (!V(ce)) {
            return
        }
        var ci, ch, cj = bO.expando,
            ck = ce.nodeType,
            i = ck ? bO.cache : ce,
            cd = ck ? ce[cj] : ce[cj] && cj;
        if ((!cd || !i[cd] || (!cf && !i[cd].data)) && cg === undefined && typeof cc === "string") {
            return
        }
        if (!cd) {
            if (ck) {
                cd = ce[cj] = aW.pop() || bO.guid++
            } else {
                cd = cj
            }
        }
        if (!i[cd]) {
            i[cd] = ck ? {} : {
                toJSON: bO.noop
            }
        }
        if (typeof cc === "object" || typeof cc === "function") {
            if (cf) {
                i[cd] = bO.extend(i[cd], cc)
            } else {
                i[cd].data = bO.extend(i[cd].data, cc)
            }
        }
        ch = i[cd];
        if (!cf) {
            if (!ch.data) {
                ch.data = {}
            }
            ch = ch.data
        }
        if (cg !== undefined) {
            ch[bO.camelCase(cc)] = cg
        }
        if (typeof cc === "string") {
            ci = ch[cc];
            if (ci == null) {
                ci = ch[bO.camelCase(cc)]
            }
        } else {
            ci = ch
        }
        return ci
    }
    function aj(cg, ce, cc) {
        if (!V(cg)) {
            return
        }
        var ci, cf, ch = cg.nodeType,
            cd = ch ? bO.cache : cg,
            cj = ch ? cg[bO.expando] : bO.expando;
        if (!cd[cj]) {
            return
        }
        if (ce) {
            ci = cc ? cd[cj] : cd[cj].data;
            if (ci) {
                if (!bO.isArray(ce)) {
                    if (ce in ci) {
                        ce = [ce]
                    } else {
                        ce = bO.camelCase(ce);
                        if (ce in ci) {
                            ce = [ce]
                        } else {
                            ce = ce.split(" ")
                        }
                    }
                } else {
                    ce = ce.concat(bO.map(ce, bO.camelCase))
                }
                cf = ce.length;
                while (cf--) {
                    delete ci[ce[cf]]
                }
                if (cc ? !Y(ci) : !bO.isEmptyObject(ci)) {
                    return
                }
            }
        }
        if (!cc) {
            delete cd[cj].data;
            if (!Y(cd[cj])) {
                return
            }
        }
        if (ch) {
            bO.cleanData([cg], true)
        } else {
            if (F.deleteExpando || cd != cd.window) {
                delete cd[cj]
            } else {
                cd[cj] = undefined
            }
        }
    }
    bO.extend({
        cache: {},
        noData: {
            "applet ": true,
            "embed ": true,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(i) {
            i = i.nodeType ? bO.cache[i[bO.expando]] : i[bO.expando];
            return !!i && !Y(i)
        },
        data: function(cc, i, cd) {
            return bi(cc, i, cd)
        },
        removeData: function(cc, i) {
            return aj(cc, i)
        },
        _data: function(cc, i, cd) {
            return bi(cc, i, cd, true)
        },
        _removeData: function(cc, i) {
            return aj(cc, i, true)
        }
    });
    bO.fn.extend({
        data: function(cf, ci) {
            var ce, cd, ch, cg = this[0],
                cc = cg && cg.attributes;
            if (cf === undefined) {
                if (this.length) {
                    ch = bO.data(cg);
                    if (cg.nodeType === 1 && !bO._data(cg, "parsedAttrs")) {
                        ce = cc.length;
                        while (ce--) {
                            if (cc[ce]) {
                                cd = cc[ce].name;
                                if (cd.indexOf("data-") === 0) {
                                    cd = bO.camelCase(cd.slice(5));
                                    bG(cg, cd, ch[cd])
                                }
                            }
                        }
                        bO._data(cg, "parsedAttrs", true)
                    }
                }
                return ch
            }
            if (typeof cf === "object") {
                return this.each(function() {
                    bO.data(this, cf)
                })
            }
            return arguments.length > 1 ? this.each(function() {
                bO.data(this, cf, ci)
            }) : cg ? bG(cg, cf, bO.data(cg, cf)) : undefined
        },
        removeData: function(i) {
            return this.each(function() {
                bO.removeData(this, i)
            })
        }
    });
    bO.extend({
        queue: function(cd, cc, ce) {
            var i;
            if (cd) {
                cc = (cc || "fx") + "queue";
                i = bO._data(cd, cc);
                if (ce) {
                    if (!i || bO.isArray(ce)) {
                        i = bO._data(cd, cc, bO.makeArray(ce))
                    } else {
                        i.push(ce)
                    }
                }
                return i || []
            }
        },
        dequeue: function(cg, cf) {
            cf = cf || "fx";
            var cc = bO.queue(cg, cf),
                ch = cc.length,
                ce = cc.shift(),
                i = bO._queueHooks(cg, cf),
                cd = function() {
                    bO.dequeue(cg, cf)
                };
            if (ce === "inprogress") {
                ce = cc.shift();
                ch--
            }
            if (ce) {
                if (cf === "fx") {
                    cc.unshift("inprogress")
                }
                delete i.stop;
                ce.call(cg, cd, i)
            }
            if (!ch && i) {
                i.empty.fire()
            }
        },
        _queueHooks: function(cd, cc) {
            var i = cc + "queueHooks";
            return bO._data(cd, i) || bO._data(cd, i, {
                empty: bO.Callbacks("once memory").add(function() {
                    bO._removeData(cd, cc + "queue");
                    bO._removeData(cd, i)
                })
            })
        }
    });
    bO.fn.extend({
        queue: function(i, cc) {
            var cd = 2;
            if (typeof i !== "string") {
                cc = i;
                i = "fx";
                cd--
            }
            if (arguments.length < cd) {
                return bO.queue(this[0], i)
            }
            return cc === undefined ? this : this.each(function() {
                var ce = bO.queue(this, i, cc);
                bO._queueHooks(this, i);
                if (i === "fx" && ce[0] !== "inprogress") {
                    bO.dequeue(this, i)
                }
            })
        },
        dequeue: function(i) {
            return this.each(function() {
                bO.dequeue(this, i)
            })
        },
        clearQueue: function(i) {
            return this.queue(i || "fx", [])
        },
        promise: function(ce, ci) {
            var cd, cf = 1,
                cj = bO.Deferred(),
                ch = this,
                cc = this.length,
                cg = function() {
                    if (!(--cf)) {
                        cj.resolveWith(ch, [ch])
                    }
                };
            if (typeof ce !== "string") {
                ci = ce;
                ce = undefined
            }
            ce = ce || "fx";
            while (cc--) {
                cd = bO._data(ch[cc], ce + "queueHooks");
                if (cd && cd.empty) {
                    cf++;
                    cd.empty.add(cg)
                }
            }
            cg();
            return cj.promise(ci)
        }
    });
    (function() {
        var i;
        F.shrinkWrapBlocks = function() {
            if (i != null) {
                return i
            }
            i = false;
            var ce, cc, cd;
            cc = m.getElementsByTagName("body")[0];
            if (!cc || !cc.style) {
                return
            }
            ce = m.createElement("div");
            cd = m.createElement("div");
            cd.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            cc.appendChild(cd).appendChild(ce);
            if (typeof ce.style.zoom !== "undefined") {
                ce.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
                ce.appendChild(m.createElement("div")).style.width = "5px";
                i = ce.offsetWidth !== 3
            }
            cc.removeChild(cd);
            return i
        }
    })();
    var aL = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
    var b5 = new RegExp("^(?:([+-])=|)(" + aL + ")([a-z%]*)$", "i");
    var bZ = ["Top", "Right", "Bottom", "Left"];
    var aa = function(cc, i) {
        cc = i || cc;
        return bO.css(cc, "display") === "none" || !bO.contains(cc.ownerDocument, cc)
    };
    function A(cc, i, cf, ck) {
        var cl, cd = 1,
            ch = 20,
            cj = ck ? function() {
                return ck.cur()
            } : function() {
                return bO.css(cc, i, "")
            },
            cg = cj(),
            ci = cf && cf[3] || (bO.cssNumber[i] ? "" : "px"),
            ce = (bO.cssNumber[i] || ci !== "px" && +cg) && b5.exec(bO.css(cc, i));
        if (ce && ce[3] !== ci) {
            ci = ci || ce[3];
            cf = cf || [];
            ce = +cg || 1;
            do {
                cd = cd || ".5";
                ce = ce / cd;
                bO.style(cc, i, ce + ci)
            } while (cd !== (cd = cj() / cg) && cd !== 1 && --ch)
        }
        if (cf) {
            ce = +ce || +cg || 0;
            cl = cf[1] ? ce + (cf[1] + 1) * cf[2] : +cf[2];
            if (ck) {
                ck.unit = ci;
                ck.start = ce;
                ck.end = cl
            }
        }
        return cl
    }
    var aJ = function(cc, ch, cj, ci, cf, cl, ck) {
        var ce = 0,
            cd = cc.length,
            cg = cj == null;
        if (bO.type(cj) === "object") {
            cf = true;
            for (ce in cj) {
                aJ(cc, ch, ce, cj[ce], true, cl, ck)
            }
        } else {
            if (ci !== undefined) {
                cf = true;
                if (!bO.isFunction(ci)) {
                    ck = true
                }
                if (cg) {
                    if (ck) {
                        ch.call(cc, ci);
                        ch = null
                    } else {
                        cg = ch;
                        ch = function(cm, i, cn) {
                            return cg.call(bO(cm), cn)
                        }
                    }
                }
                if (ch) {
                    for (; ce < cd; ce++) {
                        ch(cc[ce], cj, ck ? ci : ci.call(cc[ce], ce, ch(cc[ce], cj)))
                    }
                }
            }
        }
        return cf ? cc : cg ? ch.call(cc) : cd ? ch(cc[0], cj) : cl
    };
    var aS = (/^(?:checkbox|radio)$/i);
    var n = (/<([\w:-]+)/);
    var bH = (/^$|\/(?:java|ecma)script/i);
    var cb = (/^\s+/);
    var d = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    function C(i) {
        var cd = d.split("|"),
            cc = i.createDocumentFragment();
        if (cc.createElement) {
            while (cd.length) {
                cc.createElement(cd.pop())
            }
        }
        return cc
    }(function() {
        var cd = m.createElement("div"),
            cc = m.createDocumentFragment(),
            i = m.createElement("input");
        cd.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        F.leadingWhitespace = cd.firstChild.nodeType === 3;
        F.tbody = !cd.getElementsByTagName("tbody").length;
        F.htmlSerialize = !!cd.getElementsByTagName("link").length;
        F.html5Clone = m.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
        i.type = "checkbox";
        i.checked = true;
        cc.appendChild(i);
        F.appendChecked = i.checked;
        cd.innerHTML = "<textarea>x</textarea>";
        F.noCloneChecked = !!cd.cloneNode(true).lastChild.defaultValue;
        cc.appendChild(cd);
        i = m.createElement("input");
        i.setAttribute("type", "radio");
        i.setAttribute("checked", "checked");
        i.setAttribute("name", "t");
        cd.appendChild(i);
        F.checkClone = cd.cloneNode(true).cloneNode(true).lastChild.checked;
        F.noCloneEvent = !!cd.addEventListener;
        cd[bO.expando] = 1;
        F.attributes = !cd.getAttribute(bO.expando)
    })();
    var ad = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: F.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    ad.optgroup = ad.option;
    ad.tbody = ad.tfoot = ad.colgroup = ad.caption = ad.thead;
    ad.th = ad.td;
    function k(cf, cc) {
        var cd, cg, ce = 0,
            ch = typeof cf.getElementsByTagName !== "undefined" ? cf.getElementsByTagName(cc || "*") : typeof cf.querySelectorAll !== "undefined" ? cf.querySelectorAll(cc || "*") : undefined;
        if (!ch) {
            for (ch = [], cd = cf.childNodes || cf;
                (cg = cd[ce]) != null; ce++) {
                if (!cc || bO.nodeName(cg, cc)) {
                    ch.push(cg)
                } else {
                    bO.merge(ch, k(cg, cc))
                }
            }
        }
        return cc === undefined || cc && bO.nodeName(cf, cc) ? bO.merge([cf], ch) : ch
    }
    function bA(cc, ce) {
        var cf, cd = 0;
        for (;
            (cf = cc[cd]) != null; cd++) {
            bO._data(cf, "globalEval", !ce || bO._data(ce[cd], "globalEval"))
        }
    }
    var S = /<|&#?\w+;/,
        b7 = /<tbody/i;
    function b4(i) {
        if (aS.test(i.type)) {
            i.defaultChecked = i.checked
        }
    }
    function B(cd, cf, cl, cq, ci) {
        var cm, ch, ck, cp, cr, co, ce, cj = cd.length,
            cg = C(cf),
            cc = [],
            cn = 0;
        for (; cn < cj; cn++) {
            ch = cd[cn];
            if (ch || ch === 0) {
                if (bO.type(ch) === "object") {
                    bO.merge(cc, ch.nodeType ? [ch] : ch)
                } else {
                    if (!S.test(ch)) {
                        cc.push(cf.createTextNode(ch))
                    } else {
                        cp = cp || cg.appendChild(cf.createElement("div"));
                        cr = (n.exec(ch) || ["", ""])[1].toLowerCase();
                        ce = ad[cr] || ad._default;
                        cp.innerHTML = ce[1] + bO.htmlPrefilter(ch) + ce[2];
                        cm = ce[0];
                        while (cm--) {
                            cp = cp.lastChild
                        }
                        if (!F.leadingWhitespace && cb.test(ch)) {
                            cc.push(cf.createTextNode(cb.exec(ch)[0]))
                        }
                        if (!F.tbody) {
                            ch = cr === "table" && !b7.test(ch) ? cp.firstChild : ce[1] === "<table>" && !b7.test(ch) ? cp : 0;
                            cm = ch && ch.childNodes.length;
                            while (cm--) {
                                if (bO.nodeName((co = ch.childNodes[cm]), "tbody") && !co.childNodes.length) {
                                    ch.removeChild(co)
                                }
                            }
                        }
                        bO.merge(cc, cp.childNodes);
                        cp.textContent = "";
                        while (cp.firstChild) {
                            cp.removeChild(cp.firstChild)
                        }
                        cp = cg.lastChild
                    }
                }
            }
        }
        if (cp) {
            cg.removeChild(cp)
        }
        if (!F.appendChecked) {
            bO.grep(k(cc, "input"), b4)
        }
        cn = 0;
        while ((ch = cc[cn++])) {
            if (cq && bO.inArray(ch, cq) > -1) {
                if (ci) {
                    ci.push(ch)
                }
                continue
            }
            ck = bO.contains(ch.ownerDocument, ch);
            cp = k(cg.appendChild(ch), "script");
            if (ck) {
                bA(cp)
            }
            if (cl) {
                cm = 0;
                while ((ch = cp[cm++])) {
                    if (bH.test(ch.type || "")) {
                        cl.push(ch)
                    }
                }
            }
        }
        cp = null;
        return cg
    }(function() {
        var cd, cc, ce = m.createElement("div");
        for (cd in {
                submit: true,
                change: true,
                focusin: true
            }) {
            cc = "on" + cd;
            if (!(F[cd] = cc in bb)) {
                ce.setAttribute(cc, "t");
                F[cd] = ce.attributes[cc].expando === false
            }
        }
        ce = null
    })();
    var bM = /^(?:input|select|textarea)$/i,
        bc = /^key/,
        bR = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        bI = /^(?:focusinfocus|focusoutblur)$/,
        bD = /^([^.]*)(?:\.(.+)|)/;
    function ac() {
        return true
    }
    function ah() {
        return false
    }
    function au() {
        try {
            return m.activeElement
        } catch (i) {}
    }
    function bo(cg, cd, i, ch, cf, cc) {
        var ci, ce;
        if (typeof cd === "object") {
            if (typeof i !== "string") {
                ch = ch || i;
                i = undefined
            }
            for (ce in cd) {
                bo(cg, ce, i, ch, cd[ce], cc)
            }
            return cg
        }
        if (ch == null && cf == null) {
            cf = i;
            ch = i = undefined
        } else {
            if (cf == null) {
                if (typeof i === "string") {
                    cf = ch;
                    ch = undefined
                } else {
                    cf = ch;
                    ch = i;
                    i = undefined
                }
            }
        }
        if (cf === false) {
            cf = ah
        } else {
            if (!cf) {
                return cg
            }
        }
        if (cc === 1) {
            ci = cf;
            cf = function(cj) {
                bO().off(cj);
                return ci.apply(this, arguments)
            };
            cf.guid = ci.guid || (ci.guid = bO.guid++)
        }
        return cg.each(function() {
            bO.event.add(this, cd, cf, ch, i)
        })
    }
    bO.event = {
        global: {},
        add: function(cf, ck, cp, ch, cg) {
            var ci, cq, cr, cd, cm, cj, co, ce, cn, i, cc, cl = bO._data(cf);
            if (!cl) {
                return
            }
            if (cp.handler) {
                cd = cp;
                cp = cd.handler;
                cg = cd.selector
            }
            if (!cp.guid) {
                cp.guid = bO.guid++
            }
            if (!(cq = cl.events)) {
                cq = cl.events = {}
            }
            if (!(cj = cl.handle)) {
                cj = cl.handle = function(cs) {
                    return typeof bO !== "undefined" && (!cs || bO.event.triggered !== cs.type) ? bO.event.dispatch.apply(cj.elem, arguments) : undefined
                };
                cj.elem = cf
            }
            ck = (ck || "").match(aM) || [""];
            cr = ck.length;
            while (cr--) {
                ci = bD.exec(ck[cr]) || [];
                cn = cc = ci[1];
                i = (ci[2] || "").split(".").sort();
                if (!cn) {
                    continue
                }
                cm = bO.event.special[cn] || {};
                cn = (cg ? cm.delegateType : cm.bindType) || cn;
                cm = bO.event.special[cn] || {};
                co = bO.extend({
                    type: cn,
                    origType: cc,
                    data: ch,
                    handler: cp,
                    guid: cp.guid,
                    selector: cg,
                    needsContext: cg && bO.expr.match.needsContext.test(cg),
                    namespace: i.join(".")
                }, cd);
                if (!(ce = cq[cn])) {
                    ce = cq[cn] = [];
                    ce.delegateCount = 0;
                    if (!cm.setup || cm.setup.call(cf, ch, i, cj) === false) {
                        if (cf.addEventListener) {
                            cf.addEventListener(cn, cj, false)
                        } else {
                            if (cf.attachEvent) {
                                cf.attachEvent("on" + cn, cj)
                            }
                        }
                    }
                }
                if (cm.add) {
                    cm.add.call(cf, co);
                    if (!co.handler.guid) {
                        co.handler.guid = cp.guid
                    }
                }
                if (cg) {
                    ce.splice(ce.delegateCount++, 0, co)
                } else {
                    ce.push(co)
                }
                bO.event.global[cn] = true
            }
            cf = null
        },
        remove: function(ce, ck, cr, cf, cj) {
            var ch, co, ci, cg, cq, cp, cm, cd, cn, i, cc, cl = bO.hasData(ce) && bO._data(ce);
            if (!cl || !(cp = cl.events)) {
                return
            }
            ck = (ck || "").match(aM) || [""];
            cq = ck.length;
            while (cq--) {
                ci = bD.exec(ck[cq]) || [];
                cn = cc = ci[1];
                i = (ci[2] || "").split(".").sort();
                if (!cn) {
                    for (cn in cp) {
                        bO.event.remove(ce, cn + ck[cq], cr, cf, true)
                    }
                    continue
                }
                cm = bO.event.special[cn] || {};
                cn = (cf ? cm.delegateType : cm.bindType) || cn;
                cd = cp[cn] || [];
                ci = ci[2] && new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.|)") + "(\\.|$)");
                cg = ch = cd.length;
                while (ch--) {
                    co = cd[ch];
                    if ((cj || cc === co.origType) && (!cr || cr.guid === co.guid) && (!ci || ci.test(co.namespace)) && (!cf || cf === co.selector || cf === "**" && co.selector)) {
                        cd.splice(ch, 1);
                        if (co.selector) {
                            cd.delegateCount--
                        }
                        if (cm.remove) {
                            cm.remove.call(ce, co)
                        }
                    }
                }
                if (cg && !cd.length) {
                    if (!cm.teardown || cm.teardown.call(ce, i, cl.handle) === false) {
                        bO.removeEvent(ce, cn, cl.handle)
                    }
                    delete cp[cn]
                }
            }
            if (bO.isEmptyObject(cp)) {
                delete cl.handle;
                bO._removeData(ce, "events")
            }
        },
        trigger: function(cc, cj, cf, cq) {
            var ck, ce, co, cp, cm, ci, ch, cg = [cf || m],
                cn = R.call(cc, "type") ? cc.type : cc,
                cd = R.call(cc, "namespace") ? cc.namespace.split(".") : [];
            co = ci = cf = cf || m;
            if (cf.nodeType === 3 || cf.nodeType === 8) {
                return
            }
            if (bI.test(cn + bO.event.triggered)) {
                return
            }
            if (cn.indexOf(".") > -1) {
                cd = cn.split(".");
                cn = cd.shift();
                cd.sort()
            }
            ce = cn.indexOf(":") < 0 && "on" + cn;
            cc = cc[bO.expando] ? cc : new bO.Event(cn, typeof cc === "object" && cc);
            cc.isTrigger = cq ? 2 : 3;
            cc.namespace = cd.join(".");
            cc.rnamespace = cc.namespace ? new RegExp("(^|\\.)" + cd.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            cc.result = undefined;
            if (!cc.target) {
                cc.target = cf
            }
            cj = cj == null ? [cc] : bO.makeArray(cj, [cc]);
            cm = bO.event.special[cn] || {};
            if (!cq && cm.trigger && cm.trigger.apply(cf, cj) === false) {
                return
            }
            if (!cq && !cm.noBubble && !bO.isWindow(cf)) {
                cp = cm.delegateType || cn;
                if (!bI.test(cp + cn)) {
                    co = co.parentNode
                }
                for (; co; co = co.parentNode) {
                    cg.push(co);
                    ci = co
                }
                if (ci === (cf.ownerDocument || m)) {
                    cg.push(ci.defaultView || ci.parentWindow || bb)
                }
            }
            ch = 0;
            while ((co = cg[ch++]) && !cc.isPropagationStopped()) {
                cc.type = ch > 1 ? cp : cm.bindType || cn;
                ck = (bO._data(co, "events") || {})[cc.type] && bO._data(co, "handle");
                if (ck) {
                    ck.apply(co, cj)
                }
                ck = ce && co[ce];
                if (ck && ck.apply && V(co)) {
                    cc.result = ck.apply(co, cj);
                    if (cc.result === false) {
                        cc.preventDefault()
                    }
                }
            }
            cc.type = cn;
            if (!cq && !cc.isDefaultPrevented()) {
                if ((!cm._default || cm._default.apply(cg.pop(), cj) === false) && V(cf)) {
                    if (ce && cf[cn] && !bO.isWindow(cf)) {
                        ci = cf[ce];
                        if (ci) {
                            cf[ce] = null
                        }
                        bO.event.triggered = cn;
                        try {
                            cf[cn]()
                        } catch (cl) {}
                        bO.event.triggered = undefined;
                        if (ci) {
                            cf[ce] = ci
                        }
                    }
                }
            }
            return cc.result
        },
        dispatch: function(cc) {
            cc = bO.event.fix(cc);
            var cg, cf, ch, cd, cl, ck = [],
                cj = X.call(arguments),
                ce = (bO._data(this, "events") || {})[cc.type] || [],
                ci = bO.event.special[cc.type] || {};
            cj[0] = cc;
            cc.delegateTarget = this;
            if (ci.preDispatch && ci.preDispatch.call(this, cc) === false) {
                return
            }
            ck = bO.event.handlers.call(this, cc, ce);
            cg = 0;
            while ((cd = ck[cg++]) && !cc.isPropagationStopped()) {
                cc.currentTarget = cd.elem;
                cf = 0;
                while ((cl = cd.handlers[cf++]) && !cc.isImmediatePropagationStopped()) {
                    if (!cc.rnamespace || cc.rnamespace.test(cl.namespace)) {
                        cc.handleObj = cl;
                        cc.data = cl.data;
                        ch = ((bO.event.special[cl.origType] || {}).handle || cl.handler).apply(cd.elem, cj);
                        if (ch !== undefined) {
                            if ((cc.result = ch) === false) {
                                cc.preventDefault();
                                cc.stopPropagation()
                            }
                        }
                    }
                }
            }
            if (ci.postDispatch) {
                ci.postDispatch.call(this, cc)
            }
            return cc.result
        },
        handlers: function(cc, ce) {
            var cg, ch, cd, cj, ci = [],
                cf = ce.delegateCount,
                ck = cc.target;
            if (cf && ck.nodeType && (cc.type !== "click" || isNaN(cc.button) || cc.button < 1)) {
                for (; ck != this; ck = ck.parentNode || this) {
                    if (ck.nodeType === 1 && (ck.disabled !== true || cc.type !== "click")) {
                        ch = [];
                        for (cg = 0; cg < cf; cg++) {
                            cj = ce[cg];
                            cd = cj.selector + " ";
                            if (ch[cd] === undefined) {
                                ch[cd] = cj.needsContext ? bO(cd, this).index(ck) > -1 : bO.find(cd, this, null, [ck]).length
                            }
                            if (ch[cd]) {
                                ch.push(cj)
                            }
                        }
                        if (ch.length) {
                            ci.push({
                                elem: ck,
                                handlers: ch
                            })
                        }
                    }
                }
            }
            if (cf < ce.length) {
                ci.push({
                    elem: this,
                    handlers: ce.slice(cf)
                })
            }
            return ci
        },
        fix: function(cf) {
            if (cf[bO.expando]) {
                return cf
            }
            var cd, ci, ch, ce = cf.type,
                cc = cf,
                cg = this.fixHooks[ce];
            if (!cg) {
                this.fixHooks[ce] = cg = bR.test(ce) ? this.mouseHooks : bc.test(ce) ? this.keyHooks : {}
            }
            ch = cg.props ? this.props.concat(cg.props) : this.props;
            cf = new bO.Event(cc);
            cd = ch.length;
            while (cd--) {
                ci = ch[cd];
                cf[ci] = cc[ci]
            }
            if (!cf.target) {
                cf.target = cc.srcElement || m
            }
            if (cf.target.nodeType === 3) {
                cf.target = cf.target.parentNode
            }
            cf.metaKey = !!cf.metaKey;
            return cg.filter ? cg.filter(cf, cc) : cf
        },
        props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(cc, i) {
                if (cc.which == null) {
                    cc.which = i.charCode != null ? i.charCode : i.keyCode
                }
                return cc
            }
        },
        mouseHooks: {
            props: ("button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement").split(" "),
            filter: function(ce, cd) {
                var i, cf, cg, cc = cd.button,
                    ch = cd.fromElement;
                if (ce.pageX == null && cd.clientX != null) {
                    cf = ce.target.ownerDocument || m;
                    cg = cf.documentElement;
                    i = cf.body;
                    ce.pageX = cd.clientX + (cg && cg.scrollLeft || i && i.scrollLeft || 0) - (cg && cg.clientLeft || i && i.clientLeft || 0);
                    ce.pageY = cd.clientY + (cg && cg.scrollTop || i && i.scrollTop || 0) - (cg && cg.clientTop || i && i.clientTop || 0)
                }
                if (!ce.relatedTarget && ch) {
                    ce.relatedTarget = ch === ce.target ? cd.toElement : ch
                }
                if (!ce.which && cc !== undefined) {
                    ce.which = (cc & 1 ? 1 : (cc & 2 ? 3 : (cc & 4 ? 2 : 0)))
                }
                return ce
            }
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== au() && this.focus) {
                        try {
                            this.focus();
                            return false
                        } catch (i) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === au() && this.blur) {
                        this.blur();
                        return false
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (bO.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false
                    }
                },
                _default: function(i) {
                    return bO.nodeName(i.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(i) {
                    if (i.result !== undefined && i.originalEvent) {
                        i.originalEvent.returnValue = i.result
                    }
                }
            }
        },
        simulate: function(i, cd, cc) {
            var ce = bO.extend(new bO.Event(), cc, {
                type: i,
                isSimulated: true
            });
            bO.event.trigger(ce, null, cd);
            if (ce.isDefaultPrevented()) {
                cc.preventDefault()
            }
        }
    };
    bO.removeEvent = m.removeEventListener ? function(cc, i, cd) {
        if (cc.removeEventListener) {
            cc.removeEventListener(i, cd)
        }
    } : function(cd, cc, ce) {
        var i = "on" + cc;
        if (cd.detachEvent) {
            if (typeof cd[i] === "undefined") {
                cd[i] = null
            }
            cd.detachEvent(i, ce)
        }
    };
    bO.Event = function(cc, i) {
        if (!(this instanceof bO.Event)) {
            return new bO.Event(cc, i)
        }
        if (cc && cc.type) {
            this.originalEvent = cc;
            this.type = cc.type;
            this.isDefaultPrevented = cc.defaultPrevented || cc.defaultPrevented === undefined && cc.returnValue === false ? ac : ah
        } else {
            this.type = cc
        }
        if (i) {
            bO.extend(this, i)
        }
        this.timeStamp = cc && cc.timeStamp || bO.now();
        this[bO.expando] = true
    };
    bO.Event.prototype = {
        constructor: bO.Event,
        isDefaultPrevented: ah,
        isPropagationStopped: ah,
        isImmediatePropagationStopped: ah,
        preventDefault: function() {
            var i = this.originalEvent;
            this.isDefaultPrevented = ac;
            if (!i) {
                return
            }
            if (i.preventDefault) {
                i.preventDefault()
            } else {
                i.returnValue = false
            }
        },
        stopPropagation: function() {
            var i = this.originalEvent;
            this.isPropagationStopped = ac;
            if (!i || this.isSimulated) {
                return
            }
            if (i.stopPropagation) {
                i.stopPropagation()
            }
            i.cancelBubble = true
        },
        stopImmediatePropagation: function() {
            var i = this.originalEvent;
            this.isImmediatePropagationStopped = ac;
            if (i && i.stopImmediatePropagation) {
                i.stopImmediatePropagation()
            }
            this.stopPropagation()
        }
    };
    bO.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(cc, i) {
        bO.event.special[cc] = {
            delegateType: i,
            bindType: i,
            handle: function(cf) {
                var cd, ch = this,
                    cg = cf.relatedTarget,
                    ce = cf.handleObj;
                if (!cg || (cg !== ch && !bO.contains(ch, cg))) {
                    cf.type = ce.origType;
                    cd = ce.handler.apply(this, arguments);
                    cf.type = i
                }
                return cd
            }
        }
    });
    if (!F.submit) {
        bO.event.special.submit = {
            setup: function() {
                if (bO.nodeName(this, "form")) {
                    return false
                }
                bO.event.add(this, "click._submit keypress._submit", function(cd) {
                    var cc = cd.target,
                        i = bO.nodeName(cc, "input") || bO.nodeName(cc, "button") ? bO.prop(cc, "form") : undefined;
                    if (i && !bO._data(i, "submit")) {
                        bO.event.add(i, "submit._submit", function(ce) {
                            ce._submitBubble = true
                        });
                        bO._data(i, "submit", true)
                    }
                })
            },
            postDispatch: function(i) {
                if (i._submitBubble) {
                    delete i._submitBubble;
                    if (this.parentNode && !i.isTrigger) {
                        bO.event.simulate("submit", this.parentNode, i)
                    }
                }
            },
            teardown: function() {
                if (bO.nodeName(this, "form")) {
                    return false
                }
                bO.event.remove(this, "._submit")
            }
        }
    }
    if (!F.change) {
        bO.event.special.change = {
            setup: function() {
                if (bM.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        bO.event.add(this, "propertychange._change", function(i) {
                            if (i.originalEvent.propertyName === "checked") {
                                this._justChanged = true
                            }
                        });
                        bO.event.add(this, "click._change", function(i) {
                            if (this._justChanged && !i.isTrigger) {
                                this._justChanged = false
                            }
                            bO.event.simulate("change", this, i)
                        })
                    }
                    return false
                }
                bO.event.add(this, "beforeactivate._change", function(cc) {
                    var i = cc.target;
                    if (bM.test(i.nodeName) && !bO._data(i, "change")) {
                        bO.event.add(i, "change._change", function(cd) {
                            if (this.parentNode && !cd.isSimulated && !cd.isTrigger) {
                                bO.event.simulate("change", this.parentNode, cd)
                            }
                        });
                        bO._data(i, "change", true)
                    }
                })
            },
            handle: function(cc) {
                var i = cc.target;
                if (this !== i || cc.isSimulated || cc.isTrigger || (i.type !== "radio" && i.type !== "checkbox")) {
                    return cc.handleObj.handler.apply(this, arguments)
                }
            },
            teardown: function() {
                bO.event.remove(this, "._change");
                return !bM.test(this.nodeName)
            }
        }
    }
    if (!F.focusin) {
        bO.each({
            focus: "focusin",
            blur: "focusout"
        }, function(cd, i) {
            var cc = function(ce) {
                bO.event.simulate(i, ce.target, bO.event.fix(ce))
            };
            bO.event.special[i] = {
                setup: function() {
                    var cf = this.ownerDocument || this,
                        ce = bO._data(cf, i);
                    if (!ce) {
                        cf.addEventListener(cd, cc, true)
                    }
                    bO._data(cf, i, (ce || 0) + 1)
                },
                teardown: function() {
                    var cf = this.ownerDocument || this,
                        ce = bO._data(cf, i) - 1;
                    if (!ce) {
                        cf.removeEventListener(cd, cc, true);
                        bO._removeData(cf, i)
                    } else {
                        bO._data(cf, i, ce)
                    }
                }
            }
        })
    }
    bO.fn.extend({
        on: function(cc, i, ce, cd) {
            return bo(this, cc, i, ce, cd)
        },
        one: function(cc, i, ce, cd) {
            return bo(this, cc, i, ce, cd, 1)
        },
        off: function(cd, i, cf) {
            var cc, ce;
            if (cd && cd.preventDefault && cd.handleObj) {
                cc = cd.handleObj;
                bO(cd.delegateTarget).off(cc.namespace ? cc.origType + "." + cc.namespace : cc.origType, cc.selector, cc.handler);
                return this
            }
            if (typeof cd === "object") {
                for (ce in cd) {
                    this.off(ce, i, cd[ce])
                }
                return this
            }
            if (i === false || typeof i === "function") {
                cf = i;
                i = undefined
            }
            if (cf === false) {
                cf = ah
            }
            return this.each(function() {
                bO.event.remove(this, cd, cf, i)
            })
        },
        trigger: function(i, cc) {
            return this.each(function() {
                bO.event.trigger(i, cc, this)
            })
        },
        triggerHandler: function(i, cd) {
            var cc = this[0];
            if (cc) {
                return bO.event.trigger(i, cd, cc, true)
            }
        }
    });
    var aK = / jQuery\d+="(?:null|\d+)"/g,
        T = new RegExp("<(?:" + d + ")[\\s/>]", "i"),
        aN = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        av = /<script|<style|<link/i,
        b3 = /checked\s*(?:[^=]|=\s*.checked.)/i,
        az = /^true\/(.*)/,
        aU = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        a0 = C(m),
        j = a0.appendChild(m.createElement("div"));
    function a9(cc, i) {
        return bO.nodeName(cc, "table") && bO.nodeName(i.nodeType !== 11 ? i : i.firstChild, "tr") ? cc.getElementsByTagName("tbody")[0] || cc.appendChild(cc.ownerDocument.createElement("tbody")) : cc
    }
    function u(i) {
        i.type = (bO.find.attr(i, "type") !== null) + "/" + i.type;
        return i
    }
    function bl(cc) {
        var i = az.exec(cc.type);
        if (i) {
            cc.type = i[1]
        } else {
            cc.removeAttribute("type")
        }
        return cc
    }
    function aA(cj, cd) {
        if (cd.nodeType !== 1 || !bO.hasData(cj)) {
            return
        }
        var cg, cf, cc, ci = bO._data(cj),
            ch = bO._data(cd, ci),
            ce = ci.events;
        if (ce) {
            delete ch.handle;
            ch.events = {};
            for (cg in ce) {
                for (cf = 0, cc = ce[cg].length; cf < cc; cf++) {
                    bO.event.add(cd, cg, ce[cg][cf])
                }
            }
        }
        if (ch.data) {
            ch.data = bO.extend({}, ch.data)
        }
    }
    function ab(ce, i) {
        var cf, cd, cc;
        if (i.nodeType !== 1) {
            return
        }
        cf = i.nodeName.toLowerCase();
        if (!F.noCloneEvent && i[bO.expando]) {
            cc = bO._data(i);
            for (cd in cc.events) {
                bO.removeEvent(i, cd, cc.handle)
            }
            i.removeAttribute(bO.expando)
        }
        if (cf === "script" && i.text !== ce.text) {
            u(i).text = ce.text;
            bl(i)
        } else {
            if (cf === "object") {
                if (i.parentNode) {
                    i.outerHTML = ce.outerHTML
                }
                if (F.html5Clone && (ce.innerHTML && !bO.trim(i.innerHTML))) {
                    i.innerHTML = ce.innerHTML
                }
            } else {
                if (cf === "input" && aS.test(ce.type)) {
                    i.defaultChecked = i.checked = ce.checked;
                    if (i.value !== ce.value) {
                        i.value = ce.value
                    }
                } else {
                    if (cf === "option") {
                        i.defaultSelected = i.selected = ce.defaultSelected
                    } else {
                        if (cf === "input" || cf === "textarea") {
                            i.defaultValue = ce.defaultValue
                        }
                    }
                }
            }
        }
    }
    function J(ck, cm, cq, cf) {
        cm = aH.apply([], cm);
        var cj, ce, cc, ch, co, cl, ci = 0,
            cg = ck.length,
            cp = cg - 1,
            cn = cm[0],
            cd = bO.isFunction(cn);
        if (cd || (cg > 1 && typeof cn === "string" && !F.checkClone && b3.test(cn))) {
            return ck.each(function(cr) {
                var i = ck.eq(cr);
                if (cd) {
                    cm[0] = cn.call(this, cr, i.html())
                }
                J(i, cm, cq, cf)
            })
        }
        if (cg) {
            cl = B(cm, ck[0].ownerDocument, false, ck, cf);
            cj = cl.firstChild;
            if (cl.childNodes.length === 1) {
                cl = cj
            }
            if (cj || cf) {
                ch = bO.map(k(cl, "script"), u);
                cc = ch.length;
                for (; ci < cg; ci++) {
                    ce = cl;
                    if (ci !== cp) {
                        ce = bO.clone(ce, true, true);
                        if (cc) {
                            bO.merge(ch, k(ce, "script"))
                        }
                    }
                    cq.call(ck[ci], ce, ci)
                }
                if (cc) {
                    co = ch[ch.length - 1].ownerDocument;
                    bO.map(ch, bl);
                    for (ci = 0; ci < cc; ci++) {
                        ce = ch[ci];
                        if (bH.test(ce.type || "") && !bO._data(ce, "globalEval") && bO.contains(co, ce)) {
                            if (ce.src) {
                                if (bO._evalUrl) {
                                    bO._evalUrl(ce.src)
                                }
                            } else {
                                bO.globalEval((ce.text || ce.textContent || ce.innerHTML || "").replace(aU, ""))
                            }
                        }
                    }
                }
                cl = cj = null
            }
        }
        return ck
    }
    function L(cg, cc, ch) {
        var cf, cd = cc ? bO.filter(cc, cg) : cg,
            ce = 0;
        for (;
            (cf = cd[ce]) != null; ce++) {
            if (!ch && cf.nodeType === 1) {
                bO.cleanData(k(cf))
            }
            if (cf.parentNode) {
                if (ch && bO.contains(cf.ownerDocument, cf)) {
                    bA(k(cf, "script"))
                }
                cf.parentNode.removeChild(cf)
            }
        }
        return cg
    }
    bO.extend({
        htmlPrefilter: function(i) {
            return i.replace(aN, "<$1></$2>")
        },
        clone: function(cd, cf, cc) {
            var ch, ce, ck, cg, ci, cj = bO.contains(cd.ownerDocument, cd);
            if (F.html5Clone || bO.isXMLDoc(cd) || !T.test("<" + cd.nodeName + ">")) {
                ck = cd.cloneNode(true)
            } else {
                j.innerHTML = cd.outerHTML;
                j.removeChild(ck = j.firstChild)
            }
            if ((!F.noCloneEvent || !F.noCloneChecked) && (cd.nodeType === 1 || cd.nodeType === 11) && !bO.isXMLDoc(cd)) {
                ch = k(ck);
                ci = k(cd);
                for (cg = 0;
                    (ce = ci[cg]) != null; ++cg) {
                    if (ch[cg]) {
                        ab(ce, ch[cg])
                    }
                }
            }
            if (cf) {
                if (cc) {
                    ci = ci || k(cd);
                    ch = ch || k(ck);
                    for (cg = 0;
                        (ce = ci[cg]) != null; cg++) {
                        aA(ce, ch[cg])
                    }
                } else {
                    aA(cd, ck)
                }
            }
            ch = k(ck, "script");
            if (ch.length > 0) {
                bA(ch, !cj && k(cd, "script"))
            }
            ch = ci = ce = null;
            return ck
        },
        cleanData: function(cd, cl) {
            var cf, ck, ce, ch, ci = 0,
                cm = bO.expando,
                cc = bO.cache,
                cg = F.attributes,
                cj = bO.event.special;
            for (;
                (cf = cd[ci]) != null; ci++) {
                if (cl || V(cf)) {
                    ce = cf[cm];
                    ch = ce && cc[ce];
                    if (ch) {
                        if (ch.events) {
                            for (ck in ch.events) {
                                if (cj[ck]) {
                                    bO.event.remove(cf, ck)
                                } else {
                                    bO.removeEvent(cf, ck, ch.handle)
                                }
                            }
                        }
                        if (cc[ce]) {
                            delete cc[ce];
                            if (!cg && typeof cf.removeAttribute !== "undefined") {
                                cf.removeAttribute(cm)
                            } else {
                                cf[cm] = undefined
                            }
                            aW.push(ce)
                        }
                    }
                }
            }
        }
    });
    bO.fn.extend({
        domManip: J,
        detach: function(i) {
            return L(this, i, true)
        },
        remove: function(i) {
            return L(this, i)
        },
        text: function(i) {
            return aJ(this, function(cc) {
                return cc === undefined ? bO.text(this) : this.empty().append((this[0] && this[0].ownerDocument || m).createTextNode(cc))
            }, null, i, arguments.length)
        },
        append: function() {
            return J(this, arguments, function(i) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var cc = a9(this, i);
                    cc.appendChild(i)
                }
            })
        },
        prepend: function() {
            return J(this, arguments, function(i) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var cc = a9(this, i);
                    cc.insertBefore(i, cc.firstChild)
                }
            })
        },
        before: function() {
            return J(this, arguments, function(i) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(i, this)
                }
            })
        },
        after: function() {
            return J(this, arguments, function(i) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(i, this.nextSibling)
                }
            })
        },
        empty: function() {
            var cd, cc = 0;
            for (;
                (cd = this[cc]) != null; cc++) {
                if (cd.nodeType === 1) {
                    bO.cleanData(k(cd, false))
                }
                while (cd.firstChild) {
                    cd.removeChild(cd.firstChild)
                }
                if (cd.options && bO.nodeName(cd, "select")) {
                    cd.options.length = 0
                }
            }
            return this
        },
        clone: function(cc, i) {
            cc = cc == null ? false : cc;
            i = i == null ? cc : i;
            return this.map(function() {
                return bO.clone(this, cc, i)
            })
        },
        html: function(i) {
            return aJ(this, function(cf) {
                var ce = this[0] || {},
                    cd = 0,
                    cc = this.length;
                if (cf === undefined) {
                    return ce.nodeType === 1 ? ce.innerHTML.replace(aK, "") : undefined
                }
                if (typeof cf === "string" && !av.test(cf) && (F.htmlSerialize || !T.test(cf)) && (F.leadingWhitespace || !cb.test(cf)) && !ad[(n.exec(cf) || ["", ""])[1].toLowerCase()]) {
                    cf = bO.htmlPrefilter(cf);
                    try {
                        for (; cd < cc; cd++) {
                            ce = this[cd] || {};
                            if (ce.nodeType === 1) {
                                bO.cleanData(k(ce, false));
                                ce.innerHTML = cf
                            }
                        }
                        ce = 0
                    } catch (cg) {}
                }
                if (ce) {
                    this.empty().append(cf)
                }
            }, null, i, arguments.length)
        },
        replaceWith: function() {
            var i = [];
            return J(this, arguments, function(cd) {
                var cc = this.parentNode;
                if (bO.inArray(this, i) < 0) {
                    bO.cleanData(k(this));
                    if (cc) {
                        cc.replaceChild(cd, this)
                    }
                }
            }, i)
        }
    });
    bO.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(i, cc) {
        bO.fn[i] = function(cd) {
            var ce, cg = 0,
                cf = [],
                ci = bO(cd),
                ch = ci.length - 1;
            for (; cg <= ch; cg++) {
                ce = cg === ch ? this : this.clone(true);
                bO(ci[cg])[cc](ce);
                w.apply(cf, ce.get())
            }
            return this.pushStack(cf)
        }
    });
    var aO, br = {
        HTML: "block",
        BODY: "block"
    };
    function ba(i, ce) {
        var cc = bO(ce.createElement(i)).appendTo(ce.body),
            cd = bO.css(cc[0], "display");
        cc.detach();
        return cd
    }
    function a7(cd) {
        var cc = m,
            i = br[cd];
        if (!i) {
            i = ba(cd, cc);
            if (i === "none" || !i) {
                aO = (aO || bO("<iframe frameborder='0' width='0' height='0'/>")).appendTo(cc.documentElement);
                cc = (aO[0].contentWindow || aO[0].contentDocument).document;
                cc.write();
                cc.close();
                i = ba(cd, cc);
                aO.detach()
            }
            br[cd] = i
        }
        return i
    }
    var a6 = (/^margin/);
    var ag = new RegExp("^(" + aL + ")(?!px)[a-z%]+$", "i");
    var K = function(cg, cf, ch, ce) {
        var cd, cc, i = {};
        for (cc in cf) {
            i[cc] = cg.style[cc];
            cg.style[cc] = cf[cc]
        }
        cd = ch.apply(cg, ce || []);
        for (cc in cf) {
            cg.style[cc] = i[cc]
        }
        return cd
    };
    var b0 = m.documentElement;
    (function() {
        var cg, cd, ch, cj, ci, ce, cc = m.createElement("div"),
            i = m.createElement("div");
        if (!i.style) {
            return
        }
        i.style.cssText = "float:left;opacity:.5";
        F.opacity = i.style.opacity === "0.5";
        F.cssFloat = !!i.style.cssFloat;
        i.style.backgroundClip = "content-box";
        i.cloneNode(true).style.backgroundClip = "";
        F.clearCloneStyle = i.style.backgroundClip === "content-box";
        cc = m.createElement("div");
        cc.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
        i.innerHTML = "";
        cc.appendChild(i);
        F.boxSizing = i.style.boxSizing === "" || i.style.MozBoxSizing === "" || i.style.WebkitBoxSizing === "";
        bO.extend(F, {
            reliableHiddenOffsets: function() {
                if (cg == null) {
                    cf()
                }
                return cj
            },
            boxSizingReliable: function() {
                if (cg == null) {
                    cf()
                }
                return ch
            },
            pixelMarginRight: function() {
                if (cg == null) {
                    cf()
                }
                return cd
            },
            pixelPosition: function() {
                if (cg == null) {
                    cf()
                }
                return cg
            },
            reliableMarginRight: function() {
                if (cg == null) {
                    cf()
                }
                return ci
            },
            reliableMarginLeft: function() {
                if (cg == null) {
                    cf()
                }
                return ce
            }
        });
        function cf() {
            var cl, ck, cm = m.documentElement;
            cm.appendChild(cc);
            i.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
            cg = ch = ce = false;
            cd = ci = true;
            if (bb.getComputedStyle) {
                ck = bb.getComputedStyle(i);
                cg = (ck || {}).top !== "1%";
                ce = (ck || {}).marginLeft === "2px";
                ch = (ck || {
                    width: "4px"
                }).width === "4px";
                i.style.marginRight = "50%";
                cd = (ck || {
                    marginRight: "4px"
                }).marginRight === "4px";
                cl = i.appendChild(m.createElement("div"));
                cl.style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                cl.style.marginRight = cl.style.width = "0";
                i.style.width = "1px";
                ci = !parseFloat((bb.getComputedStyle(cl) || {}).marginRight);
                i.removeChild(cl)
            }
            i.style.display = "none";
            cj = i.getClientRects().length === 0;
            if (cj) {
                i.style.display = "";
                i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                cl = i.getElementsByTagName("td");
                cl[0].style.cssText = "margin:0;border:0;padding:0;display:none";
                cj = cl[0].offsetHeight === 0;
                if (cj) {
                    cl[0].style.display = "";
                    cl[1].style.display = "none";
                    cj = cl[0].offsetHeight === 0
                }
            }
            cm.removeChild(cc)
        }
    })();
    var bw, I, bu = /^(top|right|bottom|left)$/;
    if (bb.getComputedStyle) {
        bw = function(cc) {
            var i = cc.ownerDocument.defaultView;
            if (!i.opener) {
                i = bb
            }
            return i.getComputedStyle(cc)
        };
        I = function(ci, cc, ch) {
            var cf, ce, cg, i, cd = ci.style;
            ch = ch || bw(ci);
            i = ch ? ch.getPropertyValue(cc) || ch[cc] : undefined;
            if (ch) {
                if (i === "" && !bO.contains(ci.ownerDocument, ci)) {
                    i = bO.style(ci, cc)
                }
                if (!F.pixelMarginRight() && ag.test(i) && a6.test(cc)) {
                    cf = cd.width;
                    ce = cd.minWidth;
                    cg = cd.maxWidth;
                    cd.minWidth = cd.maxWidth = cd.width = i;
                    i = ch.width;
                    cd.width = cf;
                    cd.minWidth = ce;
                    cd.maxWidth = cg
                }
            }
            return i === undefined ? i : i + ""
        }
    } else {
        if (b0.currentStyle) {
            bw = function(i) {
                return i.currentStyle
            };
            I = function(ch, ce, cg) {
                var ci, cc, i, cd, cf = ch.style;
                cg = cg || bw(ch);
                cd = cg ? cg[ce] : undefined;
                if (cd == null && cf && cf[ce]) {
                    cd = cf[ce]
                }
                if (ag.test(cd) && !bu.test(ce)) {
                    ci = cf.left;
                    cc = ch.runtimeStyle;
                    i = cc && cc.left;
                    if (i) {
                        cc.left = ch.currentStyle.left
                    }
                    cf.left = ce === "fontSize" ? "1em" : cd;
                    cd = cf.pixelLeft + "px";
                    cf.left = ci;
                    if (i) {
                        cc.left = i
                    }
                }
                return cd === undefined ? cd : cd + "" || "auto"
            }
        }
    }
    function bd(i, cc) {
        return {
            get: function() {
                if (i()) {
                    delete this.get;
                    return
                }
                return (this.get = cc).apply(this, arguments)
            }
        }
    }
    var bp = /alpha\([^)]*\)/i,
        a2 = /opacity\s*=\s*([^)]*)/i,
        M = /^(none|table(?!-c[ea]).+)/,
        bh = new RegExp("^(" + aL + ")(.*)$", "i"),
        bk = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bJ = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        aE = ["Webkit", "O", "Moz", "ms"],
        bX = m.createElement("div").style;
    function c(cc) {
        if (cc in bX) {
            return cc
        }
        var ce = cc.charAt(0).toUpperCase() + cc.slice(1),
            cd = aE.length;
        while (cd--) {
            cc = aE[cd] + ce;
            if (cc in bX) {
                return cc
            }
        }
    }
    function r(ch, i) {
        var ci, cf, cg, cc = [],
            cd = 0,
            ce = ch.length;
        for (; cd < ce; cd++) {
            cf = ch[cd];
            if (!cf.style) {
                continue
            }
            cc[cd] = bO._data(cf, "olddisplay");
            ci = cf.style.display;
            if (i) {
                if (!cc[cd] && ci === "none") {
                    cf.style.display = ""
                }
                if (cf.style.display === "" && aa(cf)) {
                    cc[cd] = bO._data(cf, "olddisplay", a7(cf.nodeName))
                }
            } else {
                cg = aa(cf);
                if (ci && ci !== "none" || !cg) {
                    bO._data(cf, "olddisplay", cg ? ci : bO.css(cf, "display"))
                }
            }
        }
        for (cd = 0; cd < ce; cd++) {
            cf = ch[cd];
            if (!cf.style) {
                continue
            }
            if (!i || cf.style.display === "none" || cf.style.display === "") {
                cf.style.display = i ? cc[cd] || "" : "none"
            }
        }
        return ch
    }
    function aT(i, cd, ce) {
        var cc = bh.exec(cd);
        return cc ? Math.max(0, cc[1] - (ce || 0)) + (cc[2] || "px") : cd
    }
    function aF(cg, cd, cc, ci, cf) {
        var ce = cc === (ci ? "border" : "content") ? 4 : cd === "width" ? 1 : 0,
            ch = 0;
        for (; ce < 4; ce += 2) {
            if (cc === "margin") {
                ch += bO.css(cg, cc + bZ[ce], true, cf)
            }
            if (ci) {
                if (cc === "content") {
                    ch -= bO.css(cg, "padding" + bZ[ce], true, cf)
                }
                if (cc !== "margin") {
                    ch -= bO.css(cg, "border" + bZ[ce] + "Width", true, cf)
                }
            } else {
                ch += bO.css(cg, "padding" + bZ[ce], true, cf);
                if (cc !== "padding") {
                    ch += bO.css(cg, "border" + bZ[ce] + "Width", true, cf)
                }
            }
        }
        return ch
    }
    function v(cf, cc, i) {
        var ce = true,
            cg = cc === "width" ? cf.offsetWidth : cf.offsetHeight,
            cd = bw(cf),
            ch = F.boxSizing && bO.css(cf, "boxSizing", false, cd) === "border-box";
        if (m.msFullscreenElement && bb.top !== bb) {
            if (cf.getClientRects().length) {
                cg = Math.round(cf.getBoundingClientRect()[cc] * 100)
            }
        }
        if (cg <= 0 || cg == null) {
            cg = I(cf, cc, cd);
            if (cg < 0 || cg == null) {
                cg = cf.style[cc]
            }
            if (ag.test(cg)) {
                return cg
            }
            ce = ch && (F.boxSizingReliable() || cg === cf.style[cc]);
            cg = parseFloat(cg) || 0
        }
        return (cg + aF(cf, cc, i || (ch ? "border" : "content"), ce, cd)) + "px"
    }
    bO.extend({
        cssHooks: {
            opacity: {
                get: function(cd, cc) {
                    if (cc) {
                        var i = I(cd, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: true,
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": F.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(cd, cc, cj, ce) {
            if (!cd || cd.nodeType === 3 || cd.nodeType === 8 || !cd.style) {
                return
            }
            var ch, ci, ck, cf = bO.camelCase(cc),
                i = cd.style;
            cc = bO.cssProps[cf] || (bO.cssProps[cf] = c(cf) || cf);
            ck = bO.cssHooks[cc] || bO.cssHooks[cf];
            if (cj !== undefined) {
                ci = typeof cj;
                if (ci === "string" && (ch = b5.exec(cj)) && ch[1]) {
                    cj = A(cd, cc, ch);
                    ci = "number"
                }
                if (cj == null || cj !== cj) {
                    return
                }
                if (ci === "number") {
                    cj += ch && ch[3] || (bO.cssNumber[cf] ? "" : "px")
                }
                if (!F.clearCloneStyle && cj === "" && cc.indexOf("background") === 0) {
                    i[cc] = "inherit"
                }
                if (!ck || !("set" in ck) || (cj = ck.set(cd, cj, ce)) !== undefined) {
                    try {
                        i[cc] = cj
                    } catch (cg) {}
                }
            } else {
                if (ck && "get" in ck && (ch = ck.get(cd, false, ce)) !== undefined) {
                    return ch
                }
                return i[cc]
            }
        },
        css: function(ch, cf, cc, cg) {
            var ce, ci, i, cd = bO.camelCase(cf);
            cf = bO.cssProps[cd] || (bO.cssProps[cd] = c(cd) || cd);
            i = bO.cssHooks[cf] || bO.cssHooks[cd];
            if (i && "get" in i) {
                ci = i.get(ch, true, cc)
            }
            if (ci === undefined) {
                ci = I(ch, cf, cg)
            }
            if (ci === "normal" && cf in bJ) {
                ci = bJ[cf]
            }
            if (cc === "" || cc) {
                ce = parseFloat(ci);
                return cc === true || isFinite(ce) ? ce || 0 : ci
            }
            return ci
        }
    });
    bO.each(["height", "width"], function(cd, cc) {
        bO.cssHooks[cc] = {
            get: function(cf, ce, i) {
                if (ce) {
                    return M.test(bO.css(cf, "display")) && cf.offsetWidth === 0 ? K(cf, bk, function() {
                        return v(cf, cc, i)
                    }) : v(cf, cc, i)
                }
            },
            set: function(cf, cg, i) {
                var ce = i && bw(cf);
                return aT(cf, cg, i ? aF(cf, cc, i, F.boxSizing && bO.css(cf, "boxSizing", false, ce) === "border-box", ce) : 0)
            }
        }
    });
    if (!F.opacity) {
        bO.cssHooks.opacity = {
            get: function(cc, i) {
                return a2.test((i && cc.currentStyle ? cc.currentStyle.filter : cc.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : i ? "1" : ""
            },
            set: function(cf, cg) {
                var ce = cf.style,
                    cc = cf.currentStyle,
                    i = bO.isNumeric(cg) ? "alpha(opacity=" + cg * 100 + ")" : "",
                    cd = cc && cc.filter || ce.filter || "";
                ce.zoom = 1;
                if ((cg >= 1 || cg === "") && bO.trim(cd.replace(bp, "")) === "" && ce.removeAttribute) {
                    ce.removeAttribute("filter");
                    if (cg === "" || cc && !cc.filter) {
                        return
                    }
                }
                ce.filter = bp.test(cd) ? cd.replace(bp, i) : cd + " " + i
            }
        }
    }
    bO.cssHooks.marginRight = bd(F.reliableMarginRight, function(cc, i) {
        if (i) {
            return K(cc, {
                display: "inline-block"
            }, I, [cc, "marginRight"])
        }
    });
    bO.cssHooks.marginLeft = bd(F.reliableMarginLeft, function(cc, i) {
        if (i) {
            return (parseFloat(I(cc, "marginLeft")) || (bO.contains(cc.ownerDocument, cc) ? cc.getBoundingClientRect().left - K(cc, {
                marginLeft: 0
            }, function() {
                return cc.getBoundingClientRect().left
            }) : 0)) + "px"
        }
    });
    bO.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, cc) {
        bO.cssHooks[i + cc] = {
            expand: function(cf) {
                var ce = 0,
                    cd = {},
                    cg = typeof cf === "string" ? cf.split(" ") : [cf];
                for (; ce < 4; ce++) {
                    cd[i + bZ[ce] + cc] = cg[ce] || cg[ce - 2] || cg[0]
                }
                return cd
            }
        };
        if (!a6.test(i)) {
            bO.cssHooks[i + cc].set = aT
        }
    });
    bO.fn.extend({
        css: function(i, cc) {
            return aJ(this, function(ch, ce, ci) {
                var cg, cd, cj = {},
                    cf = 0;
                if (bO.isArray(ce)) {
                    cg = bw(ch);
                    cd = ce.length;
                    for (; cf < cd; cf++) {
                        cj[ce[cf]] = bO.css(ch, ce[cf], false, cg)
                    }
                    return cj
                }
                return ci !== undefined ? bO.style(ch, ce, ci) : bO.css(ch, ce)
            }, i, cc, arguments.length > 1)
        },
        show: function() {
            return r(this, true)
        },
        hide: function() {
            return r(this)
        },
        toggle: function(i) {
            if (typeof i === "boolean") {
                return i ? this.show() : this.hide()
            }
            return this.each(function() {
                if (aa(this)) {
                    bO(this).show()
                } else {
                    bO(this).hide()
                }
            })
        }
    });
    function P(cd, cc, cf, i, ce) {
        return new P.prototype.init(cd, cc, cf, i, ce)
    }
    bO.Tween = P;
    P.prototype = {
        constructor: P,
        init: function(ce, cc, cg, i, cf, cd) {
            this.elem = ce;
            this.prop = cg;
            this.easing = cf || bO.easing._default;
            this.options = cc;
            this.start = this.now = this.cur();
            this.end = i;
            this.unit = cd || (bO.cssNumber[cg] ? "" : "px")
        },
        cur: function() {
            var i = P.propHooks[this.prop];
            return i && i.get ? i.get(this) : P.propHooks._default.get(this)
        },
        run: function(cd) {
            var cc, i = P.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = cc = bO.easing[this.easing](cd, this.options.duration * cd, 0, 1, this.options.duration)
            } else {
                this.pos = cc = cd
            }
            this.now = (this.end - this.start) * cc + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            if (i && i.set) {
                i.set(this)
            } else {
                P.propHooks._default.set(this)
            }
            return this
        }
    };
    P.prototype.init.prototype = P.prototype;
    P.propHooks = {
        _default: {
            get: function(cc) {
                var i;
                if (cc.elem.nodeType !== 1 || cc.elem[cc.prop] != null && cc.elem.style[cc.prop] == null) {
                    return cc.elem[cc.prop]
                }
                i = bO.css(cc.elem, cc.prop, "");
                return !i || i === "auto" ? 0 : i
            },
            set: function(i) {
                if (bO.fx.step[i.prop]) {
                    bO.fx.step[i.prop](i)
                } else {
                    if (i.elem.nodeType === 1 && (i.elem.style[bO.cssProps[i.prop]] != null || bO.cssHooks[i.prop])) {
                        bO.style(i.elem, i.prop, i.now + i.unit)
                    } else {
                        i.elem[i.prop] = i.now
                    }
                }
            }
        }
    };
    P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function(i) {
            if (i.elem.nodeType && i.elem.parentNode) {
                i.elem[i.prop] = i.now
            }
        }
    };
    bO.easing = {
        linear: function(i) {
            return i
        },
        swing: function(i) {
            return 0.5 - Math.cos(i * Math.PI) / 2
        },
        _default: "swing"
    };
    bO.fx = P.prototype.init;
    bO.fx.step = {};
    var U, al, bW = /^(?:toggle|show|hide)$/,
        bU = /queueHooks$/;
    function bt() {
        bb.setTimeout(function() {
            U = undefined
        });
        return (U = bO.now())
    }
    function bN(ce, cg) {
        var cf, cc = {
                height: ce
            },
            cd = 0;
        cg = cg ? 1 : 0;
        for (; cd < 4; cd += 2 - cg) {
            cf = bZ[cd];
            cc["margin" + cf] = cc["padding" + cf] = ce
        }
        if (cg) {
            cc.opacity = cc.width = ce
        }
        return cc
    }
    function bj(cf, ch, ce) {
        var cc, cg = (e.tweeners[ch] || []).concat(e.tweeners["*"]),
            i = 0,
            cd = cg.length;
        for (; i < cd; i++) {
            if ((cc = cg[i].call(ce, ch, cf))) {
                return cc
            }
        }
    }
    function g(ce, cj, i) {
        var cd, cm, cg, cp, cq, cn, ci, cl, cf = this,
            ck = {},
            cc = ce.style,
            ch = ce.nodeType && aa(ce),
            co = bO._data(ce, "fxshow");
        if (!i.queue) {
            cq = bO._queueHooks(ce, "fx");
            if (cq.unqueued == null) {
                cq.unqueued = 0;
                cn = cq.empty.fire;
                cq.empty.fire = function() {
                    if (!cq.unqueued) {
                        cn()
                    }
                }
            }
            cq.unqueued++;
            cf.always(function() {
                cf.always(function() {
                    cq.unqueued--;
                    if (!bO.queue(ce, "fx").length) {
                        cq.empty.fire()
                    }
                })
            })
        }
        if (ce.nodeType === 1 && ("height" in cj || "width" in cj)) {
            i.overflow = [cc.overflow, cc.overflowX, cc.overflowY];
            ci = bO.css(ce, "display");
            cl = ci === "none" ? bO._data(ce, "olddisplay") || a7(ce.nodeName) : ci;
            if (cl === "inline" && bO.css(ce, "float") === "none") {
                if (!F.inlineBlockNeedsLayout || a7(ce.nodeName) === "inline") {
                    cc.display = "inline-block"
                } else {
                    cc.zoom = 1
                }
            }
        }
        if (i.overflow) {
            cc.overflow = "hidden";
            if (!F.shrinkWrapBlocks()) {
                cf.always(function() {
                    cc.overflow = i.overflow[0];
                    cc.overflowX = i.overflow[1];
                    cc.overflowY = i.overflow[2]
                })
            }
        }
        for (cd in cj) {
            cm = cj[cd];
            if (bW.exec(cm)) {
                delete cj[cd];
                cg = cg || cm === "toggle";
                if (cm === (ch ? "hide" : "show")) {
                    if (cm === "show" && co && co[cd] !== undefined) {
                        ch = true
                    } else {
                        continue
                    }
                }
                ck[cd] = co && co[cd] || bO.style(ce, cd)
            } else {
                ci = undefined
            }
        }
        if (!bO.isEmptyObject(ck)) {
            if (co) {
                if ("hidden" in co) {
                    ch = co.hidden
                }
            } else {
                co = bO._data(ce, "fxshow", {})
            }
            if (cg) {
                co.hidden = !ch
            }
            if (ch) {
                bO(ce).show()
            } else {
                cf.done(function() {
                    bO(ce).hide()
                })
            }
            cf.done(function() {
                var cr;
                bO._removeData(ce, "fxshow");
                for (cr in ck) {
                    bO.style(ce, cr, ck[cr])
                }
            });
            for (cd in ck) {
                cp = bj(ch ? co[cd] : 0, cd, cf);
                if (!(cd in co)) {
                    co[cd] = cp.start;
                    if (ch) {
                        cp.end = cp.start;
                        cp.start = cd === "width" || cd === "height" ? 1 : 0
                    }
                }
            }
        } else {
            if ((ci === "none" ? a7(ce.nodeName) : ci) === "inline") {
                cc.display = ci
            }
        }
    }
    function aw(ce, cg) {
        var cd, cc, ch, cf, i;
        for (cd in ce) {
            cc = bO.camelCase(cd);
            ch = cg[cc];
            cf = ce[cd];
            if (bO.isArray(cf)) {
                ch = cf[1];
                cf = ce[cd] = cf[0]
            }
            if (cd !== cc) {
                ce[cc] = cf;
                delete ce[cd]
            }
            i = bO.cssHooks[cc];
            if (i && "expand" in i) {
                cf = i.expand(cf);
                delete ce[cc];
                for (cd in cf) {
                    if (!(cd in ce)) {
                        ce[cd] = cf[cd];
                        cg[cd] = ch
                    }
                }
            } else {
                cg[cc] = ch
            }
        }
    }
    function e(cd, ch, ck) {
        var cl, i, cg = 0,
            cc = e.prefilters.length,
            cj = bO.Deferred().always(function() {
                delete cf.elem
            }),
            cf = function() {
                if (i) {
                    return false
                }
                var cr = U || bt(),
                    co = Math.max(0, ce.startTime + ce.duration - cr),
                    cm = co / ce.duration || 0,
                    cq = 1 - cm,
                    cn = 0,
                    cp = ce.tweens.length;
                for (; cn < cp; cn++) {
                    ce.tweens[cn].run(cq)
                }
                cj.notifyWith(cd, [ce, cq, co]);
                if (cq < 1 && cp) {
                    return co
                } else {
                    cj.resolveWith(cd, [ce]);
                    return false
                }
            },
            ce = cj.promise({
                elem: cd,
                props: bO.extend({}, ch),
                opts: bO.extend(true, {
                    specialEasing: {},
                    easing: bO.easing._default
                }, ck),
                originalProperties: ch,
                originalOptions: ck,
                startTime: U || bt(),
                duration: ck.duration,
                tweens: [],
                createTween: function(co, cm) {
                    var cn = bO.Tween(cd, ce.opts, co, cm, ce.opts.specialEasing[co] || ce.opts.easing);
                    ce.tweens.push(cn);
                    return cn
                },
                stop: function(cn) {
                    var cm = 0,
                        co = cn ? ce.tweens.length : 0;
                    if (i) {
                        return this
                    }
                    i = true;
                    for (; cm < co; cm++) {
                        ce.tweens[cm].run(1)
                    }
                    if (cn) {
                        cj.notifyWith(cd, [ce, 1, 0]);
                        cj.resolveWith(cd, [ce, cn])
                    } else {
                        cj.rejectWith(cd, [ce, cn])
                    }
                    return this
                }
            }),
            ci = ce.props;
        aw(ci, ce.opts.specialEasing);
        for (; cg < cc; cg++) {
            cl = e.prefilters[cg].call(ce, cd, ci, ce.opts);
            if (cl) {
                if (bO.isFunction(cl.stop)) {
                    bO._queueHooks(ce.elem, ce.opts.queue).stop = bO.proxy(cl.stop, cl)
                }
                return cl
            }
        }
        bO.map(ci, bj, ce);
        if (bO.isFunction(ce.opts.start)) {
            ce.opts.start.call(cd, ce)
        }
        bO.fx.timer(bO.extend(cf, {
            elem: cd,
            anim: ce,
            queue: ce.opts.queue
        }));
        return ce.progress(ce.opts.progress).done(ce.opts.done, ce.opts.complete).fail(ce.opts.fail).always(ce.opts.always)
    }
    bO.Animation = bO.extend(e, {
        tweeners: {
            "*": [function(cd, cc) {
                var i = this.createTween(cd, cc);
                A(i.elem, cd, b5.exec(cc), i);
                return i
            }]
        },
        tweener: function(cc, cf) {
            if (bO.isFunction(cc)) {
                cf = cc;
                cc = ["*"]
            } else {
                cc = cc.match(aM)
            }
            var ce, i = 0,
                cd = cc.length;
            for (; i < cd; i++) {
                ce = cc[i];
                e.tweeners[ce] = e.tweeners[ce] || [];
                e.tweeners[ce].unshift(cf)
            }
        },
        prefilters: [g],
        prefilter: function(cc, i) {
            if (i) {
                e.prefilters.unshift(cc)
            } else {
                e.prefilters.push(cc)
            }
        }
    });
    bO.speed = function(cd, ce, cc) {
        var i = cd && typeof cd === "object" ? bO.extend({}, cd) : {
            complete: cc || !cc && ce || bO.isFunction(cd) && cd,
            duration: cd,
            easing: cc && ce || ce && !bO.isFunction(ce) && ce
        };
        i.duration = bO.fx.off ? 0 : typeof i.duration === "number" ? i.duration : i.duration in bO.fx.speeds ? bO.fx.speeds[i.duration] : bO.fx.speeds._default;
        if (i.queue == null || i.queue === true) {
            i.queue = "fx"
        }
        i.old = i.complete;
        i.complete = function() {
            if (bO.isFunction(i.old)) {
                i.old.call(this)
            }
            if (i.queue) {
                bO.dequeue(this, i.queue)
            }
        };
        return i
    };
    bO.fn.extend({
        fadeTo: function(i, ce, cd, cc) {
            return this.filter(aa).css("opacity", 0).show().end().animate({
                opacity: ce
            }, i, cd, cc)
        },
        animate: function(ch, ce, cg, cf) {
            var cd = bO.isEmptyObject(ch),
                i = bO.speed(ce, cg, cf),
                cc = function() {
                    var ci = e(this, bO.extend({}, ch), i);
                    if (cd || bO._data(this, "finish")) {
                        ci.stop(true)
                    }
                };
            cc.finish = cc;
            return cd || i.queue === false ? this.each(cc) : this.queue(i.queue, cc)
        },
        stop: function(cd, cc, i) {
            var ce = function(cf) {
                var cg = cf.stop;
                delete cf.stop;
                cg(i)
            };
            if (typeof cd !== "string") {
                i = cc;
                cc = cd;
                cd = undefined
            }
            if (cc && cd !== false) {
                this.queue(cd || "fx", [])
            }
            return this.each(function() {
                var ci = true,
                    cf = cd != null && cd + "queueHooks",
                    ch = bO.timers,
                    cg = bO._data(this);
                if (cf) {
                    if (cg[cf] && cg[cf].stop) {
                        ce(cg[cf])
                    }
                } else {
                    for (cf in cg) {
                        if (cg[cf] && cg[cf].stop && bU.test(cf)) {
                            ce(cg[cf])
                        }
                    }
                }
                for (cf = ch.length; cf--;) {
                    if (ch[cf].elem === this && (cd == null || ch[cf].queue === cd)) {
                        ch[cf].anim.stop(i);
                        ci = false;
                        ch.splice(cf, 1)
                    }
                }
                if (ci || !i) {
                    bO.dequeue(this, cd)
                }
            })
        },
        finish: function(i) {
            if (i !== false) {
                i = i || "fx"
            }
            return this.each(function() {
                var ce, ch = bO._data(this),
                    cd = ch[i + "queue"],
                    cc = ch[i + "queueHooks"],
                    cg = bO.timers,
                    cf = cd ? cd.length : 0;
                ch.finish = true;
                bO.queue(this, i, []);
                if (cc && cc.stop) {
                    cc.stop.call(this, true)
                }
                for (ce = cg.length; ce--;) {
                    if (cg[ce].elem === this && cg[ce].queue === i) {
                        cg[ce].anim.stop(true);
                        cg.splice(ce, 1)
                    }
                }
                for (ce = 0; ce < cf; ce++) {
                    if (cd[ce] && cd[ce].finish) {
                        cd[ce].finish.call(this)
                    }
                }
                delete ch.finish
            })
        }
    });
    bO.each(["toggle", "show", "hide"], function(cd, cc) {
        var ce = bO.fn[cc];
        bO.fn[cc] = function(i, cg, cf) {
            return i == null || typeof i === "boolean" ? ce.apply(this, arguments) : this.animate(bN(cc, true), i, cg, cf)
        }
    });
    bO.each({
        slideDown: bN("show"),
        slideUp: bN("hide"),
        slideToggle: bN("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(i, cc) {
        bO.fn[i] = function(cd, cf, ce) {
            return this.animate(cc, cd, cf, ce)
        }
    });
    bO.timers = [];
    bO.fx.tick = function() {
        var ce, cd = bO.timers,
            cc = 0;
        U = bO.now();
        for (; cc < cd.length; cc++) {
            ce = cd[cc];
            if (!ce() && cd[cc] === ce) {
                cd.splice(cc--, 1)
            }
        }
        if (!cd.length) {
            bO.fx.stop()
        }
        U = undefined
    };
    bO.fx.timer = function(i) {
        bO.timers.push(i);
        if (i()) {
            bO.fx.start()
        } else {
            bO.timers.pop()
        }
    };
    bO.fx.interval = 13;
    bO.fx.start = function() {
        if (!al) {
            al = bb.setInterval(bO.fx.tick, bO.fx.interval)
        }
    };
    bO.fx.stop = function() {
        bb.clearInterval(al);
        al = null
    };
    bO.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    bO.fn.delay = function(cc, i) {
        cc = bO.fx ? bO.fx.speeds[cc] || cc : cc;
        i = i || "fx";
        return this.queue(i, function(ce, cd) {
            var cf = bb.setTimeout(ce, cc);
            cd.stop = function() {
                bb.clearTimeout(cf)
            }
        })
    };
    (function() {
        var cc, cd = m.createElement("input"),
            cf = m.createElement("div"),
            i = m.createElement("select"),
            ce = i.appendChild(m.createElement("option"));
        cf = m.createElement("div");
        cf.setAttribute("className", "t");
        cf.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        cc = cf.getElementsByTagName("a")[0];
        cd.setAttribute("type", "checkbox");
        cf.appendChild(cd);
        cc = cf.getElementsByTagName("a")[0];
        cc.style.cssText = "top:1px";
        F.getSetAttribute = cf.className !== "t";
        F.style = /top/.test(cc.getAttribute("style"));
        F.hrefNormalized = cc.getAttribute("href") === "/a";
        F.checkOn = !!cd.value;
        F.optSelected = ce.selected;
        F.enctype = !!m.createElement("form").enctype;
        i.disabled = true;
        F.optDisabled = !ce.disabled;
        cd = m.createElement("input");
        cd.setAttribute("value", "");
        F.input = cd.getAttribute("value") === "";
        cd.value = "t";
        cd.setAttribute("type", "radio");
        F.radioValue = cd.value === "t"
    })();
    var at = /\r/g;
    bO.fn.extend({
        val: function(ce) {
            var i, cc, cf, cd = this[0];
            if (!arguments.length) {
                if (cd) {
                    i = bO.valHooks[cd.type] || bO.valHooks[cd.nodeName.toLowerCase()];
                    if (i && "get" in i && (cc = i.get(cd, "value")) !== undefined) {
                        return cc
                    }
                    cc = cd.value;
                    return typeof cc === "string" ? cc.replace(at, "") : cc == null ? "" : cc
                }
                return
            }
            cf = bO.isFunction(ce);
            return this.each(function(cg) {
                var ch;
                if (this.nodeType !== 1) {
                    return
                }
                if (cf) {
                    ch = ce.call(this, cg, bO(this).val())
                } else {
                    ch = ce
                }
                if (ch == null) {
                    ch = ""
                } else {
                    if (typeof ch === "number") {
                        ch += ""
                    } else {
                        if (bO.isArray(ch)) {
                            ch = bO.map(ch, function(ci) {
                                return ci == null ? "" : ci + ""
                            })
                        }
                    }
                }
                i = bO.valHooks[this.type] || bO.valHooks[this.nodeName.toLowerCase()];
                if (!i || !("set" in i) || i.set(this, ch, "value") === undefined) {
                    this.value = ch
                }
            })
        }
    });
    bO.extend({
        valHooks: {
            option: {
                get: function(i) {
                    var cc = bO.find.attr(i, "value");
                    return cc != null ? cc : bO.trim(bO.text(i))
                }
            },
            select: {
                get: function(cc) {
                    var ci, ce, ck = cc.options,
                        cg = cc.selectedIndex,
                        cf = cc.type === "select-one" || cg < 0,
                        cj = cf ? null : [],
                        ch = cf ? cg + 1 : ck.length,
                        cd = cg < 0 ? ch : cf ? cg : 0;
                    for (; cd < ch; cd++) {
                        ce = ck[cd];
                        if ((ce.selected || cd === cg) && (F.optDisabled ? !ce.disabled : ce.getAttribute("disabled") === null) && (!ce.parentNode.disabled || !bO.nodeName(ce.parentNode, "optgroup"))) {
                            ci = bO(ce).val();
                            if (cf) {
                                return ci
                            }
                            cj.push(ci)
                        }
                    }
                    return cj
                },
                set: function(ch, ci) {
                    var cj, cg, ce = ch.options,
                        cc = bO.makeArray(ci),
                        cf = ce.length;
                    while (cf--) {
                        cg = ce[cf];
                        if (bO.inArray(bO.valHooks.option.get(cg), cc) >= 0) {
                            try {
                                cg.selected = cj = true
                            } catch (cd) {
                                cg.scrollHeight
                            }
                        } else {
                            cg.selected = false
                        }
                    }
                    if (!cj) {
                        ch.selectedIndex = -1
                    }
                    return ce
                }
            }
        }
    });
    bO.each(["radio", "checkbox"], function() {
        bO.valHooks[this] = {
            set: function(i, cc) {
                if (bO.isArray(cc)) {
                    return (i.checked = bO.inArray(bO(i).val(), cc) > -1)
                }
            }
        };
        if (!F.checkOn) {
            bO.valHooks[this].get = function(i) {
                return i.getAttribute("value") === null ? "on" : i.value
            }
        }
    });
    var bg, b9, bT = bO.expr.attrHandle,
        ay = /^(?:checked|selected)$/i,
        bS = F.getSetAttribute,
        bL = F.input;
    bO.fn.extend({
        attr: function(i, cc) {
            return aJ(this, bO.attr, i, cc, arguments.length > 1)
        },
        removeAttr: function(i) {
            return this.each(function() {
                bO.removeAttr(this, i)
            })
        }
    });
    bO.extend({
        attr: function(cf, ce, cg) {
            var cd, i, cc = cf.nodeType;
            if (cc === 3 || cc === 8 || cc === 2) {
                return
            }
            if (typeof cf.getAttribute === "undefined") {
                return bO.prop(cf, ce, cg)
            }
            if (cc !== 1 || !bO.isXMLDoc(cf)) {
                ce = ce.toLowerCase();
                i = bO.attrHooks[ce] || (bO.expr.match.bool.test(ce) ? b9 : bg)
            }
            if (cg !== undefined) {
                if (cg === null) {
                    bO.removeAttr(cf, ce);
                    return
                }
                if (i && "set" in i && (cd = i.set(cf, cg, ce)) !== undefined) {
                    return cd
                }
                cf.setAttribute(ce, cg + "");
                return cg
            }
            if (i && "get" in i && (cd = i.get(cf, ce)) !== null) {
                return cd
            }
            cd = bO.find.attr(cf, ce);
            return cd == null ? undefined : cd
        },
        attrHooks: {
            type: {
                set: function(i, cc) {
                    if (!F.radioValue && cc === "radio" && bO.nodeName(i, "input")) {
                        var cd = i.value;
                        i.setAttribute("type", cc);
                        if (cd) {
                            i.value = cd
                        }
                        return cc
                    }
                }
            }
        },
        removeAttr: function(ce, cg) {
            var cc, cf, cd = 0,
                ch = cg && cg.match(aM);
            if (ch && ce.nodeType === 1) {
                while ((cc = ch[cd++])) {
                    cf = bO.propFix[cc] || cc;
                    if (bO.expr.match.bool.test(cc)) {
                        if (bL && bS || !ay.test(cc)) {
                            ce[cf] = false
                        } else {
                            ce[bO.camelCase("default-" + cc)] = ce[cf] = false
                        }
                    } else {
                        bO.attr(ce, cc, "")
                    }
                    ce.removeAttribute(bS ? cc : cf)
                }
            }
        }
    });
    b9 = {
        set: function(cc, cd, i) {
            if (cd === false) {
                bO.removeAttr(cc, i)
            } else {
                if (bL && bS || !ay.test(i)) {
                    cc.setAttribute(!bS && bO.propFix[i] || i, i)
                } else {
                    cc[bO.camelCase("default-" + i)] = cc[i] = true
                }
            }
            return i
        }
    };
    bO.each(bO.expr.match.bool.source.match(/\w+/g), function(ce, cd) {
        var cc = bT[cd] || bO.find.attr;
        if (bL && bS || !ay.test(cd)) {
            bT[cd] = function(cg, cf, ci) {
                var i, ch;
                if (!ci) {
                    ch = bT[cf];
                    bT[cf] = i;
                    i = cc(cg, cf, ci) != null ? cf.toLowerCase() : null;
                    bT[cf] = ch
                }
                return i
            }
        } else {
            bT[cd] = function(cf, i, cg) {
                if (!cg) {
                    return cf[bO.camelCase("default-" + i)] ? i.toLowerCase() : null
                }
            }
        }
    });
    if (!bL || !bS) {
        bO.attrHooks.value = {
            set: function(cc, cd, i) {
                if (bO.nodeName(cc, "input")) {
                    cc.defaultValue = cd
                } else {
                    return bg && bg.set(cc, cd, i)
                }
            }
        }
    }
    if (!bS) {
        bg = {
            set: function(cd, ce, cc) {
                var i = cd.getAttributeNode(cc);
                if (!i) {
                    cd.setAttributeNode((i = cd.ownerDocument.createAttribute(cc)))
                }
                i.value = ce += "";
                if (cc === "value" || ce === cd.getAttribute(cc)) {
                    return ce
                }
            }
        };
        bT.id = bT.name = bT.coords = function(cd, cc, ce) {
            var i;
            if (!ce) {
                return (i = cd.getAttributeNode(cc)) && i.value !== "" ? i.value : null
            }
        };
        bO.valHooks.button = {
            get: function(cd, cc) {
                var i = cd.getAttributeNode(cc);
                if (i && i.specified) {
                    return i.value
                }
            },
            set: bg.set
        };
        bO.attrHooks.contenteditable = {
            set: function(cc, cd, i) {
                bg.set(cc, cd === "" ? false : cd, i)
            }
        };
        bO.each(["width", "height"], function(cd, cc) {
            bO.attrHooks[cc] = {
                set: function(i, ce) {
                    if (ce === "") {
                        i.setAttribute(cc, "auto");
                        return ce
                    }
                }
            }
        })
    }
    if (!F.style) {
        bO.attrHooks.style = {
            get: function(i) {
                return i.style.cssText || undefined
            },
            set: function(i, cc) {
                return (i.style.cssText = cc + "")
            }
        }
    }
    var aP = /^(?:input|select|textarea|button|object)$/i,
        H = /^(?:a|area)$/i;
    bO.fn.extend({
        prop: function(i, cc) {
            return aJ(this, bO.prop, i, cc, arguments.length > 1)
        },
        removeProp: function(i) {
            i = bO.propFix[i] || i;
            return this.each(function() {
                try {
                    this[i] = undefined;
                    delete this[i]
                } catch (cc) {}
            })
        }
    });
    bO.extend({
        prop: function(cf, ce, cg) {
            var cd, i, cc = cf.nodeType;
            if (cc === 3 || cc === 8 || cc === 2) {
                return
            }
            if (cc !== 1 || !bO.isXMLDoc(cf)) {
                ce = bO.propFix[ce] || ce;
                i = bO.propHooks[ce]
            }
            if (cg !== undefined) {
                if (i && "set" in i && (cd = i.set(cf, cg, ce)) !== undefined) {
                    return cd
                }
                return (cf[ce] = cg)
            }
            if (i && "get" in i && (cd = i.get(cf, ce)) !== null) {
                return cd
            }
            return cf[ce]
        },
        propHooks: {
            tabIndex: {
                get: function(cc) {
                    var i = bO.find.attr(cc, "tabindex");
                    return i ? parseInt(i, 10) : aP.test(cc.nodeName) || H.test(cc.nodeName) && cc.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    if (!F.hrefNormalized) {
        bO.each(["href", "src"], function(cd, cc) {
            bO.propHooks[cc] = {
                get: function(i) {
                    return i.getAttribute(cc, 4)
                }
            }
        })
    }
    if (!F.optSelected) {
        bO.propHooks.selected = {
            get: function(cc) {
                var i = cc.parentNode;
                if (i) {
                    i.selectedIndex;
                    if (i.parentNode) {
                        i.parentNode.selectedIndex
                    }
                }
                return null
            }
        }
    }
    bO.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        bO.propFix[this.toLowerCase()] = this
    });
    if (!F.enctype) {
        bO.propFix.enctype = "encoding"
    }
    var bQ = /[\t\r\n\f]/g;
    function D(i) {
        return bO.attr(i, "class") || ""
    }
    bO.fn.extend({
        addClass: function(cj) {
            var ce, cd, ck, cf, ci, cg, cc, ch = 0;
            if (bO.isFunction(cj)) {
                return this.each(function(i) {
                    bO(this).addClass(cj.call(this, i, D(this)))
                })
            }
            if (typeof cj === "string" && cj) {
                ce = cj.match(aM) || [];
                while ((cd = this[ch++])) {
                    cf = D(cd);
                    ck = cd.nodeType === 1 && (" " + cf + " ").replace(bQ, " ");
                    if (ck) {
                        cg = 0;
                        while ((ci = ce[cg++])) {
                            if (ck.indexOf(" " + ci + " ") < 0) {
                                ck += ci + " "
                            }
                        }
                        cc = bO.trim(ck);
                        if (cf !== cc) {
                            bO.attr(cd, "class", cc)
                        }
                    }
                }
            }
            return this
        },
        removeClass: function(cj) {
            var ce, cd, ck, cf, ci, cg, cc, ch = 0;
            if (bO.isFunction(cj)) {
                return this.each(function(i) {
                    bO(this).removeClass(cj.call(this, i, D(this)))
                })
            }
            if (!arguments.length) {
                return this.attr("class", "")
            }
            if (typeof cj === "string" && cj) {
                ce = cj.match(aM) || [];
                while ((cd = this[ch++])) {
                    cf = D(cd);
                    ck = cd.nodeType === 1 && (" " + cf + " ").replace(bQ, " ");
                    if (ck) {
                        cg = 0;
                        while ((ci = ce[cg++])) {
                            while (ck.indexOf(" " + ci + " ") > -1) {
                                ck = ck.replace(" " + ci + " ", " ")
                            }
                        }
                        cc = bO.trim(ck);
                        if (cf !== cc) {
                            bO.attr(cd, "class", cc)
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function(cd, i) {
            var cc = typeof cd;
            if (typeof i === "boolean" && cc === "string") {
                return i ? this.addClass(cd) : this.removeClass(cd)
            }
            if (bO.isFunction(cd)) {
                return this.each(function(ce) {
                    bO(this).toggleClass(cd.call(this, ce, D(this), i), i)
                })
            }
            return this.each(function() {
                var cg, cf, ce, ch;
                if (cc === "string") {
                    cf = 0;
                    ce = bO(this);
                    ch = cd.match(aM) || [];
                    while ((cg = ch[cf++])) {
                        if (ce.hasClass(cg)) {
                            ce.removeClass(cg)
                        } else {
                            ce.addClass(cg)
                        }
                    }
                } else {
                    if (cd === undefined || cc === "boolean") {
                        cg = D(this);
                        if (cg) {
                            bO._data(this, "__className__", cg)
                        }
                        bO.attr(this, "class", cg || cd === false ? "" : bO._data(this, "__className__") || "")
                    }
                }
            })
        },
        hasClass: function(cc) {
            var ce, cf, cd = 0;
            ce = " " + cc + " ";
            while ((cf = this[cd++])) {
                if (cf.nodeType === 1 && (" " + D(cf) + " ").replace(bQ, " ").indexOf(ce) > -1) {
                    return true
                }
            }
            return false
        }
    });
    bO.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function(cd, cc) {
        bO.fn[cc] = function(ce, i) {
            return arguments.length > 0 ? this.on(cc, null, ce, i) : this.trigger(cc)
        }
    });
    bO.fn.extend({
        hover: function(i, cc) {
            return this.mouseenter(i).mouseleave(cc || i)
        }
    });
    var aV = bb.location;
    var bv = bO.now();
    var bV = (/\?/);
    var a8 = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    bO.parseJSON = function(i) {
        if (bb.JSON && bb.JSON.parse) {
            return bb.JSON.parse(i + "")
        }
        var ce, cd = null,
            cc = bO.trim(i + "");
        return cc && !bO.trim(cc.replace(a8, function(ch, cf, cg, ci) {
            if (ce && cf) {
                cd = 0
            }
            if (cd === 0) {
                return ch
            }
            ce = cg || cf;
            cd += !ci - !cg;
            return ""
        })) ? (Function("return " + cc))() : bO.error("Invalid JSON: " + i)
    };
    bO.parseXML = function(cd) {
        var i, cc;
        if (!cd || typeof cd !== "string") {
            return null
        }
        try {
            if (bb.DOMParser) {
                cc = new bb.DOMParser();
                i = cc.parseFromString(cd, "text/xml")
            } else {
                i = new bb.ActiveXObject("Microsoft.XMLDOM");
                i.async = "false";
                i.loadXML(cd)
            }
        } catch (ce) {
            i = undefined
        }
        if (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) {
            bO.error("Invalid XML: " + cd)
        }
        return i
    };
    var ax = /#.*$/,
        Z = /([?&])_=[^&]*/,
        ao = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        E = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        q = /^(?:GET|HEAD)$/,
        aQ = /^\/\//,
        a1 = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        t = {},
        bf = {},
        a4 = "*/".concat("*"),
        ai = aV.href,
        ca = a1.exec(ai.toLowerCase()) || [];
    function bP(i) {
        return function(cf, cg) {
            if (typeof cf !== "string") {
                cg = cf;
                cf = "*"
            }
            var cc, cd = 0,
                ce = cf.toLowerCase().match(aM) || [];
            if (bO.isFunction(cg)) {
                while ((cc = ce[cd++])) {
                    if (cc.charAt(0) === "+") {
                        cc = cc.slice(1) || "*";
                        (i[cc] = i[cc] || []).unshift(cg)
                    } else {
                        (i[cc] = i[cc] || []).push(cg)
                    }
                }
            }
        }
    }
    function p(i, cd, ch, ce) {
        var cc = {},
            cf = (i === bf);
        function cg(ci) {
            var cj;
            cc[ci] = true;
            bO.each(i[ci] || [], function(cl, ck) {
                var cm = ck(cd, ch, ce);
                if (typeof cm === "string" && !cf && !cc[cm]) {
                    cd.dataTypes.unshift(cm);
                    cg(cm);
                    return false
                } else {
                    if (cf) {
                        return !(cj = cm)
                    }
                }
            });
            return cj
        }
        return cg(cd.dataTypes[0]) || !cc["*"] && cg("*")
    }
    function s(cd, ce) {
        var i, cc, cf = bO.ajaxSettings.flatOptions || {};
        for (cc in ce) {
            if (ce[cc] !== undefined) {
                (cf[cc] ? cd : (i || (i = {})))[cc] = ce[cc]
            }
        }
        if (i) {
            bO.extend(true, cd, i)
        }
        return cd
    }
    function f(cj, ci, cf) {
        var i, ce, cd, cg, cc = cj.contents,
            ch = cj.dataTypes;
        while (ch[0] === "*") {
            ch.shift();
            if (ce === undefined) {
                ce = cj.mimeType || ci.getResponseHeader("Content-Type")
            }
        }
        if (ce) {
            for (cg in cc) {
                if (cc[cg] && cc[cg].test(ce)) {
                    ch.unshift(cg);
                    break
                }
            }
        }
        if (ch[0] in cf) {
            cd = ch[0]
        } else {
            for (cg in cf) {
                if (!ch[0] || cj.converters[cg + " " + ch[0]]) {
                    cd = cg;
                    break
                }
                if (!i) {
                    i = cg
                }
            }
            cd = cd || i
        }
        if (cd) {
            if (cd !== ch[0]) {
                ch.unshift(cd)
            }
            return cf[cd]
        }
    }
    function an(cm, ce, cj, cc) {
        var i, ch, ck, cf, cd, cl = {},
            ci = cm.dataTypes.slice();
        if (ci[1]) {
            for (ck in cm.converters) {
                cl[ck.toLowerCase()] = cm.converters[ck]
            }
        }
        ch = ci.shift();
        while (ch) {
            if (cm.responseFields[ch]) {
                cj[cm.responseFields[ch]] = ce
            }
            if (!cd && cc && cm.dataFilter) {
                ce = cm.dataFilter(ce, cm.dataType)
            }
            cd = ch;
            ch = ci.shift();
            if (ch) {
                if (ch === "*") {
                    ch = cd
                } else {
                    if (cd !== "*" && cd !== ch) {
                        ck = cl[cd + " " + ch] || cl["* " + ch];
                        if (!ck) {
                            for (i in cl) {
                                cf = i.split(" ");
                                if (cf[1] === ch) {
                                    ck = cl[cd + " " + cf[0]] || cl["* " + cf[0]];
                                    if (ck) {
                                        if (ck === true) {
                                            ck = cl[i]
                                        } else {
                                            if (cl[i] !== true) {
                                                ch = cf[0];
                                                ci.unshift(cf[1])
                                            }
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (ck !== true) {
                            if (ck && cm["throws"]) {
                                ce = ck(ce)
                            } else {
                                try {
                                    ce = ck(ce)
                                } catch (cg) {
                                    return {
                                        state: "parsererror",
                                        error: ck ? cg : "No conversion from " + cd + " to " + ch
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: ce
        }
    }
    bO.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ai,
            type: "GET",
            isLocal: E.test(ca[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": a4,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": bO.parseJSON,
                "text xml": bO.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(cc, i) {
            return i ? s(s(cc, bO.ajaxSettings), i) : s(bO.ajaxSettings, cc)
        },
        ajaxPrefilter: bP(t),
        ajaxTransport: bP(bf),
        ajax: function(cg, cd) {
            if (typeof cg === "object") {
                cd = cg;
                cg = undefined
            }
            cd = cd || {};
            var cp, cr, ch, cw, cl, cc, cs, ce, ck = bO.ajaxSetup({}, cd),
                cy = ck.context || ck,
                cn = ck.context && (cy.nodeType || cy.jquery) ? bO(cy) : bO.event,
                cx = bO.Deferred(),
                cu = bO.Callbacks("once memory"),
                ci = ck.statusCode || {},
                co = {},
                cv = {},
                cf = 0,
                cj = "canceled",
                cq = {
                    readyState: 0,
                    getResponseHeader: function(cz) {
                        var i;
                        if (cf === 2) {
                            if (!ce) {
                                ce = {};
                                while ((i = ao.exec(cw))) {
                                    ce[i[1].toLowerCase()] = i[2]
                                }
                            }
                            i = ce[cz.toLowerCase()]
                        }
                        return i == null ? null : i
                    },
                    getAllResponseHeaders: function() {
                        return cf === 2 ? cw : null
                    },
                    setRequestHeader: function(cz, cA) {
                        var i = cz.toLowerCase();
                        if (!cf) {
                            cz = cv[i] = cv[i] || cz;
                            co[cz] = cA
                        }
                        return this
                    },
                    overrideMimeType: function(i) {
                        if (!cf) {
                            ck.mimeType = i
                        }
                        return this
                    },
                    statusCode: function(cz) {
                        var i;
                        if (cz) {
                            if (cf < 2) {
                                for (i in cz) {
                                    ci[i] = [ci[i], cz[i]]
                                }
                            } else {
                                cq.always(cz[cq.status])
                            }
                        }
                        return this
                    },
                    abort: function(cz) {
                        var i = cz || cj;
                        if (cs) {
                            cs.abort(i)
                        }
                        cm(0, i);
                        return this
                    }
                };
            cx.promise(cq).complete = cu.add;
            cq.success = cq.done;
            cq.error = cq.fail;
            ck.url = ((cg || ck.url || ai) + "").replace(ax, "").replace(aQ, ca[1] + "//");
            ck.type = cd.method || cd.type || ck.method || ck.type;
            ck.dataTypes = bO.trim(ck.dataType || "*").toLowerCase().match(aM) || [""];
            if (ck.crossDomain == null) {
                cp = a1.exec(ck.url.toLowerCase());
                ck.crossDomain = !!(cp && (cp[1] !== ca[1] || cp[2] !== ca[2] || (cp[3] || (cp[1] === "http:" ? "80" : "443")) !== (ca[3] || (ca[1] === "http:" ? "80" : "443"))))
            }
            if (ck.data && ck.processData && typeof ck.data !== "string") {
                ck.data = bO.param(ck.data, ck.traditional)
            }
            p(t, ck, cd, cq);
            if (cf === 2) {
                return cq
            }
            cc = bO.event && ck.global;
            if (cc && bO.active++ === 0) {
                bO.event.trigger("ajaxStart")
            }
            ck.type = ck.type.toUpperCase();
            ck.hasContent = !q.test(ck.type);
            ch = ck.url;
            if (!ck.hasContent) {
                if (ck.data) {
                    ch = (ck.url += (bV.test(ch) ? "&" : "?") + ck.data);
                    delete ck.data
                }
                if (ck.cache === false) {
                    ck.url = Z.test(ch) ? ch.replace(Z, "$1_=" + bv++) : ch + (bV.test(ch) ? "&" : "?") + "_=" + bv++
                }
            }
            if (ck.ifModified) {
                if (bO.lastModified[ch]) {
                    cq.setRequestHeader("If-Modified-Since", bO.lastModified[ch])
                }
                if (bO.etag[ch]) {
                    cq.setRequestHeader("If-None-Match", bO.etag[ch])
                }
            }
            if (ck.data && ck.hasContent && ck.contentType !== false || cd.contentType) {
                cq.setRequestHeader("Content-Type", ck.contentType)
            }
            cq.setRequestHeader("Accept", ck.dataTypes[0] && ck.accepts[ck.dataTypes[0]] ? ck.accepts[ck.dataTypes[0]] + (ck.dataTypes[0] !== "*" ? ", " + a4 + "; q=0.01" : "") : ck.accepts["*"]);
            for (cr in ck.headers) {
                cq.setRequestHeader(cr, ck.headers[cr])
            }
            if (ck.beforeSend && (ck.beforeSend.call(cy, cq, ck) === false || cf === 2)) {
                return cq.abort()
            }
            cj = "abort";
            for (cr in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                cq[cr](ck[cr])
            }
            cs = p(bf, ck, cd, cq);
            if (!cs) {
                cm(-1, "No Transport")
            } else {
                cq.readyState = 1;
                if (cc) {
                    cn.trigger("ajaxSend", [cq, ck])
                }
                if (cf === 2) {
                    return cq
                }
                if (ck.async && ck.timeout > 0) {
                    cl = bb.setTimeout(function() {
                        cq.abort("timeout")
                    }, ck.timeout)
                }
                try {
                    cf = 1;
                    cs.send(co, cm)
                } catch (ct) {
                    if (cf < 2) {
                        cm(-1, ct)
                    } else {
                        throw ct
                    }
                }
            }
            function cm(cD, cz, cE, cB) {
                var i, cH, cF, cC, cG, cA = cz;
                if (cf === 2) {
                    return
                }
                cf = 2;
                if (cl) {
                    bb.clearTimeout(cl)
                }
                cs = undefined;
                cw = cB || "";
                cq.readyState = cD > 0 ? 4 : 0;
                i = cD >= 200 && cD < 300 || cD === 304;
                if (cE) {
                    cC = f(ck, cq, cE)
                }
                cC = an(ck, cC, cq, i);
                if (i) {
                    if (ck.ifModified) {
                        cG = cq.getResponseHeader("Last-Modified");
                        if (cG) {
                            bO.lastModified[ch] = cG
                        }
                        cG = cq.getResponseHeader("etag");
                        if (cG) {
                            bO.etag[ch] = cG
                        }
                    }
                    if (cD === 204 || ck.type === "HEAD") {
                        cA = "nocontent"
                    } else {
                        if (cD === 304) {
                            cA = "notmodified"
                        } else {
                            cA = cC.state;
                            cH = cC.data;
                            cF = cC.error;
                            i = !cF
                        }
                    }
                } else {
                    cF = cA;
                    if (cD || !cA) {
                        cA = "error";
                        if (cD < 0) {
                            cD = 0
                        }
                    }
                }
                cq.status = cD;
                cq.statusText = (cz || cA) + "";
                if (i) {
                    cx.resolveWith(cy, [cH, cA, cq])
                } else {
                    cx.rejectWith(cy, [cq, cA, cF])
                }
                cq.statusCode(ci);
                ci = undefined;
                if (cc) {
                    cn.trigger(i ? "ajaxSuccess" : "ajaxError", [cq, ck, i ? cH : cF])
                }
                cu.fireWith(cy, [cq, cA]);
                if (cc) {
                    cn.trigger("ajaxComplete", [cq, ck]);
                    if (!(--bO.active)) {
                        bO.event.trigger("ajaxStop")
                    }
                }
            }
            return cq
        },
        getJSON: function(i, cc, cd) {
            return bO.get(i, cc, cd, "json")
        },
        getScript: function(i, cc) {
            return bO.get(i, undefined, cc, "script")
        }
    });
    bO.each(["get", "post"], function(cc, cd) {
        bO[cd] = function(i, cf, cg, ce) {
            if (bO.isFunction(cf)) {
                ce = ce || cg;
                cg = cf;
                cf = undefined
            }
            return bO.ajax(bO.extend({
                url: i,
                type: cd,
                dataType: ce,
                data: cf,
                success: cg
            }, bO.isPlainObject(i) && i))
        }
    });
    bO._evalUrl = function(i) {
        return bO.ajax({
            url: i,
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            "throws": true
        })
    };
    bO.fn.extend({
        wrapAll: function(i) {
            if (bO.isFunction(i)) {
                return this.each(function(cd) {
                    bO(this).wrapAll(i.call(this, cd))
                })
            }
            if (this[0]) {
                var cc = bO(i, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    cc.insertBefore(this[0])
                }
                cc.map(function() {
                    var cd = this;
                    while (cd.firstChild && cd.firstChild.nodeType === 1) {
                        cd = cd.firstChild
                    }
                    return cd
                }).append(this)
            }
            return this
        },
        wrapInner: function(i) {
            if (bO.isFunction(i)) {
                return this.each(function(cc) {
                    bO(this).wrapInner(i.call(this, cc))
                })
            }
            return this.each(function() {
                var cc = bO(this),
                    cd = cc.contents();
                if (cd.length) {
                    cd.wrapAll(i)
                } else {
                    cc.append(i)
                }
            })
        },
        wrap: function(i) {
            var cc = bO.isFunction(i);
            return this.each(function(cd) {
                bO(this).wrapAll(cc ? i.call(this, cd) : i)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!bO.nodeName(this, "body")) {
                    bO(this).replaceWith(this.childNodes)
                }
            }).end()
        }
    });
    function Q(i) {
        return i.style && i.style.display || bO.css(i, "display")
    }
    function N(i) {
        while (i && i.nodeType === 1) {
            if (Q(i) === "none" || i.type === "hidden") {
                return true
            }
            i = i.parentNode
        }
        return false
    }
    bO.expr.filters.hidden = function(i) {
        return F.reliableHiddenOffsets() ? (i.offsetWidth <= 0 && i.offsetHeight <= 0 && !i.getClientRects().length) : N(i)
    };
    bO.expr.filters.visible = function(i) {
        return !bO.expr.filters.hidden(i)
    };
    var bC = /%20/g,
        aZ = /\[\]$/,
        ae = /\r?\n/g,
        b = /^(?:submit|button|image|reset|file)$/i,
        aC = /^(?:input|select|textarea|keygen)/i;
    function h(cd, cf, cc, ce) {
        var i;
        if (bO.isArray(cf)) {
            bO.each(cf, function(ch, cg) {
                if (cc || aZ.test(cd)) {
                    ce(cd, cg)
                } else {
                    h(cd + "[" + (typeof cg === "object" && cg != null ? ch : "") + "]", cg, cc, ce)
                }
            })
        } else {
            if (!cc && bO.type(cf) === "object") {
                for (i in cf) {
                    h(cd + "[" + i + "]", cf[i], cc, ce)
                }
            } else {
                ce(cd, cf)
            }
        }
    }
    bO.param = function(i, cd) {
        var ce, cc = [],
            cf = function(cg, ch) {
                ch = bO.isFunction(ch) ? ch() : (ch == null ? "" : ch);
                cc[cc.length] = encodeURIComponent(cg) + "=" + encodeURIComponent(ch)
            };
        if (cd === undefined) {
            cd = bO.ajaxSettings && bO.ajaxSettings.traditional
        }
        if (bO.isArray(i) || (i.jquery && !bO.isPlainObject(i))) {
            bO.each(i, function() {
                cf(this.name, this.value)
            })
        } else {
            for (ce in i) {
                h(ce, i[ce], cd, cf)
            }
        }
        return cc.join("&").replace(bC, "+")
    };
    bO.fn.extend({
        serialize: function() {
            return bO.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var i = bO.prop(this, "elements");
                return i ? bO.makeArray(i) : this
            }).filter(function() {
                var i = this.type;
                return this.name && !bO(this).is(":disabled") && aC.test(this.nodeName) && !b.test(i) && (this.checked || !aS.test(i))
            }).map(function(cc, cd) {
                var ce = bO(this).val();
                return ce == null ? null : bO.isArray(ce) ? bO.map(ce, function(i) {
                    return {
                        name: cd.name,
                        value: i.replace(ae, "\r\n")
                    }
                }) : {
                    name: cd.name,
                    value: ce.replace(ae, "\r\n")
                }
            }).get()
        }
    });
    bO.ajaxSettings.xhr = bb.ActiveXObject !== undefined ? function() {
        if (this.isLocal) {
            return bm()
        }
        if (m.documentMode > 8) {
            return bK()
        }
        return /^(get|post|head|put|delete|options)$/i.test(this.type) && bK() || bm()
    } : bK;
    var aI = 0,
        aq = {},
        aG = bO.ajaxSettings.xhr();
    if (bb.attachEvent) {
        bb.attachEvent("onunload", function() {
            for (var i in aq) {
                aq[i](undefined, true)
            }
        })
    }
    F.cors = !!aG && ("withCredentials" in aG);
    aG = F.ajax = !!aG;
    if (aG) {
        bO.ajaxTransport(function(i) {
            if (!i.crossDomain || F.cors) {
                var cc;
                return {
                    send: function(cg, cd) {
                        var ce, cf = i.xhr(),
                            ch = ++aI;
                        cf.open(i.type, i.url, i.async, i.username, i.password);
                        if (i.xhrFields) {
                            for (ce in i.xhrFields) {
                                cf[ce] = i.xhrFields[ce]
                            }
                        }
                        if (i.mimeType && cf.overrideMimeType) {
                            cf.overrideMimeType(i.mimeType)
                        }
                        if (!i.crossDomain && !cg["X-Requested-With"]) {
                            cg["X-Requested-With"] = "XMLHttpRequest"
                        }
                        for (ce in cg) {
                            if (cg[ce] !== undefined) {
                                cf.setRequestHeader(ce, cg[ce] + "")
                            }
                        }
                        cf.send((i.hasContent && i.data) || null);
                        cc = function(ck, cj) {
                            var ci, cn, cl;
                            if (cc && (cj || cf.readyState === 4)) {
                                delete aq[ch];
                                cc = undefined;
                                cf.onreadystatechange = bO.noop;
                                if (cj) {
                                    if (cf.readyState !== 4) {
                                        cf.abort()
                                    }
                                } else {
                                    cl = {};
                                    ci = cf.status;
                                    if (typeof cf.responseText === "string") {
                                        cl.text = cf.responseText
                                    }
                                    try {
                                        cn = cf.statusText
                                    } catch (cm) {
                                        cn = ""
                                    }
                                    if (!ci && i.isLocal && !i.crossDomain) {
                                        ci = cl.text ? 200 : 404
                                    } else {
                                        if (ci === 1223) {
                                            ci = 204
                                        }
                                    }
                                }
                            }
                            if (cl) {
                                cd(ci, cn, cl, cf.getAllResponseHeaders())
                            }
                        };
                        if (!i.async) {
                            cc()
                        } else {
                            if (cf.readyState === 4) {
                                bb.setTimeout(cc)
                            } else {
                                cf.onreadystatechange = aq[ch] = cc
                            }
                        }
                    },
                    abort: function() {
                        if (cc) {
                            cc(undefined, true)
                        }
                    }
                }
            }
        })
    }
    function bK() {
        try {
            return new bb.XMLHttpRequest()
        } catch (i) {}
    }
    function bm() {
        try {
            return new bb.ActiveXObject("Microsoft.XMLHTTP")
        } catch (i) {}
    }
    bO.ajaxPrefilter(function(i) {
        if (i.crossDomain) {
            i.contents.script = false
        }
    });
    bO.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(i) {
                bO.globalEval(i);
                return i
            }
        }
    });
    bO.ajaxPrefilter("script", function(i) {
        if (i.cache === undefined) {
            i.cache = false
        }
        if (i.crossDomain) {
            i.type = "GET";
            i.global = false
        }
    });
    bO.ajaxTransport("script", function(cd) {
        if (cd.crossDomain) {
            var i, cc = m.head || bO("head")[0] || m.documentElement;
            return {
                send: function(ce, cf) {
                    i = m.createElement("script");
                    i.async = true;
                    if (cd.scriptCharset) {
                        i.charset = cd.scriptCharset
                    }
                    i.src = cd.url;
                    i.onload = i.onreadystatechange = function(ch, cg) {
                        if (cg || !i.readyState || /loaded|complete/.test(i.readyState)) {
                            i.onload = i.onreadystatechange = null;
                            if (i.parentNode) {
                                i.parentNode.removeChild(i)
                            }
                            i = null;
                            if (!cg) {
                                cf(200, "success")
                            }
                        }
                    };
                    cc.insertBefore(i, cc.firstChild)
                },
                abort: function() {
                    if (i) {
                        i.onload(undefined, true)
                    }
                }
            }
        }
    });
    var by = [],
        be = /(=)\?(?=&|$)|\?\?/;
    bO.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var i = by.pop() || (bO.expando + "_" + (bv++));
            this[i] = true;
            return i
        }
    });
    bO.ajaxPrefilter("json jsonp", function(ce, i, cf) {
        var ch, cc, cd, cg = ce.jsonp !== false && (be.test(ce.url) ? "url" : typeof ce.data === "string" && (ce.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && be.test(ce.data) && "data");
        if (cg || ce.dataTypes[0] === "jsonp") {
            ch = ce.jsonpCallback = bO.isFunction(ce.jsonpCallback) ? ce.jsonpCallback() : ce.jsonpCallback;
            if (cg) {
                ce[cg] = ce[cg].replace(be, "$1" + ch)
            } else {
                if (ce.jsonp !== false) {
                    ce.url += (bV.test(ce.url) ? "&" : "?") + ce.jsonp + "=" + ch
                }
            }
            ce.converters["script json"] = function() {
                if (!cd) {
                    bO.error(ch + " was not called")
                }
                return cd[0]
            };
            ce.dataTypes[0] = "json";
            cc = bb[ch];
            bb[ch] = function() {
                cd = arguments
            };
            cf.always(function() {
                if (cc === undefined) {
                    bO(bb).removeProp(ch)
                } else {
                    bb[ch] = cc
                }
                if (ce[ch]) {
                    ce.jsonpCallback = i.jsonpCallback;
                    by.push(ch)
                }
                if (cd && bO.isFunction(cc)) {
                    cc(cd[0])
                }
                cd = cc = undefined
            });
            return "script"
        }
    });
    F.createHTMLDocument = (function() {
        if (!m.implementation.createHTMLDocument) {
            return false
        }
        var i = m.implementation.createHTMLDocument("");
        i.body.innerHTML = "<form></form><form></form>";
        return i.body.childNodes.length === 2
    })();
    bO.parseHTML = function(cf, cd, ce) {
        if (!cf || typeof cf !== "string") {
            return null
        }
        if (typeof cd === "boolean") {
            ce = cd;
            cd = false
        }
        cd = cd || (F.createHTMLDocument ? m.implementation.createHTMLDocument("") : m);
        var cc = a.exec(cf),
            i = !ce && [];
        if (cc) {
            return [cd.createElement(cc[1])]
        }
        cc = B([cf], cd, i);
        if (i && i.length) {
            bO(i).remove()
        }
        return bO.merge([], cc.childNodes)
    };
    var b8 = bO.fn.load;
    bO.fn.load = function(ce, ch, ci) {
        if (typeof ce !== "string" && b8) {
            return b8.apply(this, arguments)
        }
        var i, cf, cd, cc = this,
            cg = ce.indexOf(" ");
        if (cg > -1) {
            i = bO.trim(ce.slice(cg, ce.length));
            ce = ce.slice(0, cg)
        }
        if (bO.isFunction(ch)) {
            ci = ch;
            ch = undefined
        } else {
            if (ch && typeof ch === "object") {
                cf = "POST"
            }
        }
        if (cc.length > 0) {
            bO.ajax({
                url: ce,
                type: cf || "GET",
                dataType: "html",
                data: ch
            }).done(function(cj) {
                cd = arguments;
                cc.html(i ? bO("<div>").append(bO.parseHTML(cj)).find(i) : cj)
            }).always(ci && function(ck, cj) {
                cc.each(function() {
                    ci.apply(cc, cd || [ck.responseText, cj, ck])
                })
            })
        }
        return this
    };
    bO.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(cc, cd) {
        bO.fn[cd] = function(i) {
            return this.on(cd, i)
        }
    });
    bO.expr.filters.animated = function(i) {
        return bO.grep(bO.timers, function(cc) {
            return i === cc.elem
        }).length
    };
    function bx(i) {
        return bO.isWindow(i) ? i : i.nodeType === 9 ? i.defaultView || i.parentWindow : false
    }
    bO.offset = {
        setOffset: function(ce, co, ci) {
            var ck, ch, cc, cf, cd, cm, cn, cj = bO.css(ce, "position"),
                cg = bO(ce),
                cl = {};
            if (cj === "static") {
                ce.style.position = "relative"
            }
            cd = cg.offset();
            cc = bO.css(ce, "top");
            cm = bO.css(ce, "left");
            cn = (cj === "absolute" || cj === "fixed") && bO.inArray("auto", [cc, cm]) > -1;
            if (cn) {
                ck = cg.position();
                cf = ck.top;
                ch = ck.left
            } else {
                cf = parseFloat(cc) || 0;
                ch = parseFloat(cm) || 0
            }
            if (bO.isFunction(co)) {
                co = co.call(ce, ci, bO.extend({}, cd))
            }
            if (co.top != null) {
                cl.top = (co.top - cd.top) + cf
            }
            if (co.left != null) {
                cl.left = (co.left - cd.left) + ch
            }
            if ("using" in co) {
                co.using.call(ce, cl)
            } else {
                cg.css(cl)
            }
        }
    };
    bO.fn.extend({
        offset: function(cc) {
            if (arguments.length) {
                return cc === undefined ? this : this.each(function(ch) {
                    bO.offset.setOffset(this, cc, ch)
                })
            }
            var i, cg, ce = {
                    top: 0,
                    left: 0
                },
                cd = this[0],
                cf = cd && cd.ownerDocument;
            if (!cf) {
                return
            }
            i = cf.documentElement;
            if (!bO.contains(i, cd)) {
                return ce
            }
            if (typeof cd.getBoundingClientRect !== "undefined") {
                ce = cd.getBoundingClientRect()
            }
            cg = bx(cf);
            return {
                top: ce.top + (cg.pageYOffset || i.scrollTop) - (i.clientTop || 0),
                left: ce.left + (cg.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
            }
        },
        position: function() {
            if (!this[0]) {
                return
            }
            var cd, ce, i = {
                    top: 0,
                    left: 0
                },
                cc = this[0];
            if (bO.css(cc, "position") === "fixed") {
                ce = cc.getBoundingClientRect()
            } else {
                cd = this.offsetParent();
                ce = this.offset();
                if (!bO.nodeName(cd[0], "html")) {
                    i = cd.offset()
                }
                i.top += bO.css(cd[0], "borderTopWidth", true) - cd.scrollTop();
                i.left += bO.css(cd[0], "borderLeftWidth", true) - cd.scrollLeft()
            }
            return {
                top: ce.top - i.top - bO.css(cc, "marginTop", true),
                left: ce.left - i.left - bO.css(cc, "marginLeft", true)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var i = this.offsetParent;
                while (i && (!bO.nodeName(i, "html") && bO.css(i, "position") === "static")) {
                    i = i.offsetParent
                }
                return i || b0
            })
        }
    });
    bO.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(cd, cc) {
        var i = /Y/.test(cc);
        bO.fn[cd] = function(ce) {
            return aJ(this, function(cf, ci, ch) {
                var cg = bx(cf);
                if (ch === undefined) {
                    return cg ? (cc in cg) ? cg[cc] : cg.document.documentElement[ci] : cf[ci]
                }
                if (cg) {
                    cg.scrollTo(!i ? ch : bO(cg).scrollLeft(), i ? ch : bO(cg).scrollTop())
                } else {
                    cf[ci] = ch
                }
            }, cd, ce, arguments.length, null)
        }
    });
    bO.each(["top", "left"], function(cc, cd) {
        bO.cssHooks[cd] = bd(F.pixelPosition, function(ce, i) {
            if (i) {
                i = I(ce, cd);
                return ag.test(i) ? bO(ce).position()[cd] + "px" : i
            }
        })
    });
    bO.each({
        Height: "height",
        Width: "width"
    }, function(i, cc) {
        bO.each({
            padding: "inner" + i,
            content: cc,
            "": "outer" + i
        }, function(cd, ce) {
            bO.fn[ce] = function(ci, ch) {
                var cg = arguments.length && (cd || typeof ci !== "boolean"),
                    cf = cd || (ci === true || ch === true ? "margin" : "border");
                return aJ(this, function(ck, cj, cl) {
                    var cm;
                    if (bO.isWindow(ck)) {
                        return ck.document.documentElement["client" + i]
                    }
                    if (ck.nodeType === 9) {
                        cm = ck.documentElement;
                        return Math.max(ck.body["scroll" + i], cm["scroll" + i], ck.body["offset" + i], cm["offset" + i], cm["client" + i])
                    }
                    return cl === undefined ? bO.css(ck, cj, cf) : bO.style(ck, cj, cl, cf)
                }, cc, cg ? ci : undefined, cg, null)
            }
        })
    });
    bO.fn.extend({
        bind: function(i, cd, cc) {
            return this.on(i, null, cd, cc)
        },
        unbind: function(i, cc) {
            return this.off(i, null, cc)
        },
        delegate: function(i, cc, ce, cd) {
            return this.on(cc, i, ce, cd)
        },
        undelegate: function(i, cc, cd) {
            return arguments.length === 1 ? this.off(i, "**") : this.off(cc, i || "**", cd)
        }
    });
    bO.fn.size = function() {
        return this.length
    };
    bO.fn.andSelf = bO.fn.addBack;
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return bO
        })
    }
    var bq = bb.jQuery,
        O = bb.$;
    bO.noConflict = function(i) {
        if (bb.$ === bO) {
            bb.$ = O
        }
        if (i && bb.jQuery === bO) {
            bb.jQuery = bq
        }
        return bO
    };
    if (!aD) {
        bb.jQuery = bb.$ = bO
    }
    return bO
}));
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
;
/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=6cecbef8c051f10c4993)
 * Config saved to config.json and https://gist.github.com/6cecbef8c051f10c4993
 */
;
if (typeof jQuery === "undefined") {
    throw new Error("Bootstrap's JavaScript requires jQuery")
} + function(b) {
    var a = b.fn.jquery.split(" ")[0].split(".");
    if ((a[0] < 2 && a[1] < 9) || (a[0] == 1 && a[1] == 9 && a[2] < 1) || (a[0] > 2)) {
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
    }
}(jQuery); + function(e) {
    var d = '[data-dismiss="alert"]';
    var b = function(f) {
        e(f).on("click", d, this.close)
    };
    b.VERSION = "3.3.6";
    b.TRANSITION_DURATION = 150;
    b.prototype.close = function(j) {
        var i = e(this);
        var g = i.attr("data-target");
        if (!g) {
            g = i.attr("href");
            g = g && g.replace(/.*(?=#[^\s]*$)/, "")
        }
        var h = e(g);
        if (j) {
            j.preventDefault()
        }
        if (!h.length) {
            h = i.closest(".alert")
        }
        h.trigger(j = e.Event("close.bs.alert"));
        if (j.isDefaultPrevented()) {
            return
        }
        h.removeClass("in");
        function f() {
            h.detach().trigger("closed.bs.alert").remove()
        }
        e.support.transition && h.hasClass("fade") ? h.one("bsTransitionEnd", f).emulateTransitionEnd(b.TRANSITION_DURATION) : f()
    };
    function c(f) {
        return this.each(function() {
            var h = e(this);
            var g = h.data("bs.alert");
            if (!g) {
                h.data("bs.alert", (g = new b(this)))
            }
            if (typeof f == "string") {
                g[f].call(h)
            }
        })
    }
    var a = e.fn.alert;
    e.fn.alert = c;
    e.fn.alert.Constructor = b;
    e.fn.alert.noConflict = function() {
        e.fn.alert = a;
        return this
    };
    e(document).on("click.bs.alert.data-api", d, b.prototype.close)
}(jQuery); + function(d) {
    var b = function(f, e) {
        this.$element = d(f);
        this.options = d.extend({}, b.DEFAULTS, e);
        this.isLoading = false
    };
    b.VERSION = "3.3.6";
    b.DEFAULTS = {
        loadingText: "loading..."
    };
    b.prototype.setState = function(g) {
        var i = "disabled";
        var e = this.$element;
        var h = e.is("input") ? "val" : "html";
        var f = e.data();
        g += "Text";
        if (f.resetText == null) {
            e.data("resetText", e[h]())
        }
        setTimeout(d.proxy(function() {
            e[h](f[g] == null ? this.options[g] : f[g]);
            if (g == "loadingText") {
                this.isLoading = true;
                e.addClass(i).attr(i, i)
            } else {
                if (this.isLoading) {
                    this.isLoading = false;
                    e.removeClass(i).removeAttr(i)
                }
            }
        }, this), 0)
    };
    b.prototype.toggle = function() {
        var f = true;
        var e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var g = this.$element.find("input");
            if (g.prop("type") == "radio") {
                if (g.prop("checked")) {
                    f = false
                }
                e.find(".active").removeClass("active");
                this.$element.addClass("active")
            } else {
                if (g.prop("type") == "checkbox") {
                    if ((g.prop("checked")) !== this.$element.hasClass("active")) {
                        f = false
                    }
                    this.$element.toggleClass("active")
                }
            }
            g.prop("checked", this.$element.hasClass("active"));
            if (f) {
                g.trigger("change")
            }
        } else {
            this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
            this.$element.toggleClass("active")
        }
    };
    function c(e) {
        return this.each(function() {
            var h = d(this);
            var g = h.data("bs.button");
            var f = typeof e == "object" && e;
            if (!g) {
                h.data("bs.button", (g = new b(this, f)))
            }
            if (e == "toggle") {
                g.toggle()
            } else {
                if (e) {
                    g.setState(e)
                }
            }
        })
    }
    var a = d.fn.button;
    d.fn.button = c;
    d.fn.button.Constructor = b;
    d.fn.button.noConflict = function() {
        d.fn.button = a;
        return this
    };
    d(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(g) {
        var f = d(g.target);
        if (!f.hasClass("btn")) {
            f = f.closest(".btn")
        }
        c.call(f, "toggle");
        if (!(d(g.target).is('input[type="radio"]') || d(g.target).is('input[type="checkbox"]'))) {
            g.preventDefault()
        }
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(f) {
        d(f.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(f.type))
    })
}(jQuery); + function(c) {
    var d = function(g, f) {
        this.$element = c(g);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = f;
        this.paused = null;
        this.sliding = null;
        this.interval = null;
        this.$active = null;
        this.$items = null;
        this.options.keyboard && this.$element.on("keydown.bs.carousel", c.proxy(this.keydown, this));
        this.options.pause == "hover" && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", c.proxy(this.pause, this)).on("mouseleave.bs.carousel", c.proxy(this.cycle, this))
    };
    d.VERSION = "3.3.6";
    d.TRANSITION_DURATION = 600;
    d.DEFAULTS = {
        interval: 5000,
        pause: "hover",
        wrap: true,
        keyboard: true
    };
    d.prototype.keydown = function(f) {
        if (/input|textarea/i.test(f.target.tagName)) {
            return
        }
        switch (f.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        f.preventDefault()
    };
    d.prototype.cycle = function(f) {
        f || (this.paused = false);
        this.interval && clearInterval(this.interval);
        this.options.interval && !this.paused && (this.interval = setInterval(c.proxy(this.next, this), this.options.interval));
        return this
    };
    d.prototype.getItemIndex = function(f) {
        this.$items = f.parent().children(".item");
        return this.$items.index(f || this.$active)
    };
    d.prototype.getItemForDirection = function(j, i) {
        var f = this.getItemIndex(i);
        var g = (j == "prev" && f === 0) || (j == "next" && f == (this.$items.length - 1));
        if (g && !this.options.wrap) {
            return i
        }
        var k = j == "prev" ? -1 : 1;
        var h = (f + k) % this.$items.length;
        return this.$items.eq(h)
    };
    d.prototype.to = function(h) {
        var g = this;
        var f = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (h > (this.$items.length - 1) || h < 0) {
            return
        }
        if (this.sliding) {
            return this.$element.one("slid.bs.carousel", function() {
                g.to(h)
            })
        }
        if (f == h) {
            return this.pause().cycle()
        }
        return this.slide(h > f ? "next" : "prev", this.$items.eq(h))
    };
    d.prototype.pause = function(f) {
        f || (this.paused = true);
        if (this.$element.find(".next, .prev").length && c.support.transition) {
            this.$element.trigger(c.support.transition.end);
            this.cycle(true)
        }
        this.interval = clearInterval(this.interval);
        return this
    };
    d.prototype.next = function() {
        if (this.sliding) {
            return
        }
        return this.slide("next")
    };
    d.prototype.prev = function() {
        if (this.sliding) {
            return
        }
        return this.slide("prev")
    };
    d.prototype.slide = function(m, i) {
        var p = this.$element.find(".item.active");
        var g = i || this.getItemForDirection(m, p);
        var k = this.interval;
        var n = m == "next" ? "left" : "right";
        var j = this;
        if (g.hasClass("active")) {
            return (this.sliding = false)
        }
        var l = g[0];
        var f = c.Event("slide.bs.carousel", {
            relatedTarget: l,
            direction: n
        });
        this.$element.trigger(f);
        if (f.isDefaultPrevented()) {
            return
        }
        this.sliding = true;
        k && this.pause();
        if (this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var h = c(this.$indicators.children()[this.getItemIndex(g)]);
            h && h.addClass("active")
        }
        var o = c.Event("slid.bs.carousel", {
            relatedTarget: l,
            direction: n
        });
        if (c.support.transition && this.$element.hasClass("slide")) {
            g.addClass(m);
            g[0].offsetWidth;
            p.addClass(n);
            g.addClass(n);
            p.one("bsTransitionEnd", function() {
                g.removeClass([m, n].join(" ")).addClass("active");
                p.removeClass(["active", n].join(" "));
                j.sliding = false;
                setTimeout(function() {
                    j.$element.trigger(o)
                }, 0)
            }).emulateTransitionEnd(d.TRANSITION_DURATION)
        } else {
            p.removeClass("active");
            g.addClass("active");
            this.sliding = false;
            this.$element.trigger(o)
        }
        k && this.cycle();
        return this
    };
    function b(f) {
        return this.each(function() {
            var j = c(this);
            var i = j.data("bs.carousel");
            var g = c.extend({}, d.DEFAULTS, j.data(), typeof f == "object" && f);
            var h = typeof f == "string" ? f : g.slide;
            if (!i) {
                j.data("bs.carousel", (i = new d(this, g)))
            }
            if (typeof f == "number") {
                i.to(f)
            } else {
                if (h) {
                    i[h]()
                } else {
                    if (g.interval) {
                        i.pause().cycle()
                    }
                }
            }
        })
    }
    var a = c.fn.carousel;
    c.fn.carousel = b;
    c.fn.carousel.Constructor = d;
    c.fn.carousel.noConflict = function() {
        c.fn.carousel = a;
        return this
    };
    var e = function(k) {
        var g;
        var j = c(this);
        var f = c(j.attr("data-target") || (g = j.attr("href")) && g.replace(/.*(?=#[^\s]+$)/, ""));
        if (!f.hasClass("carousel")) {
            return
        }
        var h = c.extend({}, f.data(), j.data());
        var i = j.attr("data-slide-to");
        if (i) {
            h.interval = false
        }
        b.call(f, h);
        if (i) {
            f.data("bs.carousel").to(i)
        }
        k.preventDefault()
    };
    c(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e);
    c(window).on("load", function() {
        c('[data-ride="carousel"]').each(function() {
            var f = c(this);
            b.call(f, f.data())
        })
    })
}(jQuery); + function(h) {
    var e = ".dropdown-backdrop";
    var b = '[data-toggle="dropdown"]';
    var a = function(i) {
        h(i).on("click.bs.dropdown", this.toggle)
    };
    a.VERSION = "3.3.6";
    function f(k) {
        var i = k.attr("data-target");
        if (!i) {
            i = k.attr("href");
            i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")
        }
        var j = i && h(i);
        return j && j.length ? j : k.parent()
    }
    function d(i) {
        if (i && i.which === 3) {
            return
        }
        h(e).remove();
        h(b).each(function() {
            var l = h(this);
            var k = f(l);
            var j = {
                relatedTarget: this
            };
            if (!k.hasClass("open")) {
                return
            }
            if (i && i.type == "click" && /input|textarea/i.test(i.target.tagName) && h.contains(k[0], i.target)) {
                return
            }
            k.trigger(i = h.Event("hide.bs.dropdown", j));
            if (i.isDefaultPrevented()) {
                return
            }
            l.attr("aria-expanded", "false");
            k.removeClass("open").trigger(h.Event("hidden.bs.dropdown", j))
        })
    }
    a.prototype.toggle = function(m) {
        var l = h(this);
        if (l.is(".disabled, :disabled")) {
            return
        }
        var k = f(l);
        var j = k.hasClass("open");
        d();
        if (!j) {
            if ("ontouchstart" in document.documentElement && !k.closest(".navbar-nav").length) {
                h(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(h(this)).on("click", d)
            }
            var i = {
                relatedTarget: this
            };
            k.trigger(m = h.Event("show.bs.dropdown", i));
            if (m.isDefaultPrevented()) {
                return
            }
            l.trigger("focus").attr("aria-expanded", "true");
            k.toggleClass("open").trigger(h.Event("shown.bs.dropdown", i))
        }
        return false
    };
    a.prototype.keydown = function(m) {
        if (!/(38|40|27|32)/.test(m.which) || /input|textarea/i.test(m.target.tagName)) {
            return
        }
        var l = h(this);
        m.preventDefault();
        m.stopPropagation();
        if (l.is(".disabled, :disabled")) {
            return
        }
        var k = f(l);
        var j = k.hasClass("open");
        if (!j && m.which != 27 || j && m.which == 27) {
            if (m.which == 27) {
                k.find(b).trigger("focus")
            }
            return l.trigger("click")
        }
        var n = " li:not(.disabled):visible a";
        var o = k.find(".dropdown-menu" + n);
        if (!o.length) {
            return
        }
        var i = o.index(m.target);
        if (m.which == 38 && i > 0) {
            i--
        }
        if (m.which == 40 && i < o.length - 1) {
            i++
        }
        if (!~i) {
            i = 0
        }
        o.eq(i).trigger("focus")
    };
    function g(i) {
        return this.each(function() {
            var k = h(this);
            var j = k.data("bs.dropdown");
            if (!j) {
                k.data("bs.dropdown", (j = new a(this)))
            }
            if (typeof i == "string") {
                j[i].call(k)
            }
        })
    }
    var c = h.fn.dropdown;
    h.fn.dropdown = g;
    h.fn.dropdown.Constructor = a;
    h.fn.dropdown.noConflict = function() {
        h.fn.dropdown = c;
        return this
    };
    h(document).on("click.bs.dropdown.data-api", d).on("click.bs.dropdown.data-api", ".dropdown form", function(i) {
        i.stopPropagation()
    }).on("click.bs.dropdown.data-api", b, a.prototype.toggle).on("keydown.bs.dropdown.data-api", b, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery); + function(d) {
    var b = function(f, e) {
        this.options = e;
        this.$body = d(document.body);
        this.$element = d(f);
        this.$dialog = this.$element.find(".modal-dialog");
        this.$backdrop = null;
        this.isShown = null;
        this.originalBodyPad = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = false;
        if (this.options.remote) {
            this.$element.find(".modal-content").load(this.options.remote, d.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        }
    };
    b.VERSION = "3.3.6";
    b.TRANSITION_DURATION = 300;
    b.BACKDROP_TRANSITION_DURATION = 150;
    b.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    };
    b.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    };
    b.prototype.show = function(h) {
        var f = this;
        var g = d.Event("show.bs.modal", {
            relatedTarget: h
        });
        this.$element.trigger(g);
        if (this.isShown || g.isDefaultPrevented()) {
            return
        }
        this.isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        this.$body.addClass("modal-open");
        this.escape();
        this.resize();
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', d.proxy(this.hide, this));
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            f.$element.one("mouseup.dismiss.bs.modal", function(i) {
                if (d(i.target).is(f.$element)) {
                    f.ignoreBackdropClick = true
                }
            })
        });
        this.backdrop(function() {
            var j = d.support.transition && f.$element.hasClass("fade");
            if (!f.$element.parent().length) {
                f.$element.appendTo(f.$body)
            }
            f.$element.show().scrollTop(0);
            f.adjustDialog();
            if (j) {
                f.$element[0].offsetWidth
            }
            f.$element.addClass("in");
            f.enforceFocus();
            var i = d.Event("shown.bs.modal", {
                relatedTarget: h
            });
            j ? f.$dialog.one("bsTransitionEnd", function() {
                f.$element.trigger("focus").trigger(i)
            }).emulateTransitionEnd(b.TRANSITION_DURATION) : f.$element.trigger("focus").trigger(i)
        })
    };
    b.prototype.hide = function(f) {
        if (f) {
            f.preventDefault()
        }
        f = d.Event("hide.bs.modal");
        this.$element.trigger(f);
        if (!this.isShown || f.isDefaultPrevented()) {
            return
        }
        this.isShown = false;
        this.escape();
        this.resize();
        d(document).off("focusin.bs.modal");
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");
        this.$dialog.off("mousedown.dismiss.bs.modal");
        d.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", d.proxy(this.hideModal, this)).emulateTransitionEnd(b.TRANSITION_DURATION) : this.hideModal()
    };
    b.prototype.enforceFocus = function() {
        d(document).off("focusin.bs.modal").on("focusin.bs.modal", d.proxy(function(f) {
            if (this.$element[0] !== f.target && !this.$element.has(f.target).length) {
                this.$element.trigger("focus")
            }
        }, this))
    };
    b.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) {
            this.$element.on("keydown.dismiss.bs.modal", d.proxy(function(f) {
                f.which == 27 && this.hide()
            }, this))
        } else {
            if (!this.isShown) {
                this.$element.off("keydown.dismiss.bs.modal")
            }
        }
    };
    b.prototype.resize = function() {
        if (this.isShown) {
            d(window).on("resize.bs.modal", d.proxy(this.handleUpdate, this))
        } else {
            d(window).off("resize.bs.modal")
        }
    };
    b.prototype.hideModal = function() {
        var e = this;
        this.$element.hide();
        this.backdrop(function() {
            e.$body.removeClass("modal-open");
            e.resetAdjustments();
            e.resetScrollbar();
            e.$element.trigger("hidden.bs.modal")
        })
    };
    b.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    b.prototype.backdrop = function(i) {
        var h = this;
        var f = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var e = d.support.transition && f;
            this.$backdrop = d(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body);
            this.$element.on("click.dismiss.bs.modal", d.proxy(function(j) {
                if (this.ignoreBackdropClick) {
                    this.ignoreBackdropClick = false;
                    return
                }
                if (j.target !== j.currentTarget) {
                    return
                }
                this.options.backdrop == "static" ? this.$element[0].focus() : this.hide()
            }, this));
            if (e) {
                this.$backdrop[0].offsetWidth
            }
            this.$backdrop.addClass("in");
            if (!i) {
                return
            }
            e ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION) : i()
        } else {
            if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var g = function() {
                    h.removeBackdrop();
                    i && i()
                };
                d.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION) : g()
            } else {
                if (i) {
                    i()
                }
            }
        }
    };
    b.prototype.handleUpdate = function() {
        this.adjustDialog()
    };
    b.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    };
    b.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    };
    b.prototype.checkScrollbar = function() {
        var f = window.innerWidth;
        if (!f) {
            var e = document.documentElement.getBoundingClientRect();
            f = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < f;
        this.scrollbarWidth = this.measureScrollbar()
    };
    b.prototype.setScrollbar = function() {
        var e = parseInt((this.$body.css("padding-right") || 0), 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        if (this.bodyIsOverflowing) {
            this.$body.css("padding-right", e + this.scrollbarWidth)
        }
    };
    b.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    };
    b.prototype.measureScrollbar = function() {
        var f = document.createElement("div");
        f.className = "modal-scrollbar-measure";
        this.$body.append(f);
        var e = f.offsetWidth - f.clientWidth;
        this.$body[0].removeChild(f);
        return e
    };
    function c(e, f) {
        return this.each(function() {
            var i = d(this);
            var h = i.data("bs.modal");
            var g = d.extend({}, b.DEFAULTS, i.data(), typeof e == "object" && e);
            if (!h) {
                i.data("bs.modal", (h = new b(this, g)))
            }
            if (typeof e == "string") {
                h[e](f)
            } else {
                if (g.show) {
                    h.show(f)
                }
            }
        })
    }
    var a = d.fn.modal;
    d.fn.modal = c;
    d.fn.modal.Constructor = b;
    d.fn.modal.noConflict = function() {
        d.fn.modal = a;
        return this
    };
    d(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(j) {
        var i = d(this);
        var g = i.attr("href");
        var f = d(i.attr("data-target") || (g && g.replace(/.*(?=#[^\s]+$)/, "")));
        var h = f.data("bs.modal") ? "toggle" : d.extend({
            remote: !/#/.test(g) && g
        }, f.data(), i.data());
        if (i.is("a")) {
            j.preventDefault()
        }
        f.one("show.bs.modal", function(e) {
            if (e.isDefaultPrevented()) {
                return
            }
            f.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        });
        c.call(f, h, this)
    })
}(jQuery); + function(d) {
    var c = function(f, e) {
        this.type = null;
        this.options = null;
        this.enabled = null;
        this.timeout = null;
        this.hoverState = null;
        this.$element = null;
        this.inState = null;
        this.init("tooltip", f, e)
    };
    c.VERSION = "3.3.6";
    c.TRANSITION_DURATION = 150;
    c.DEFAULTS = {
        animation: true,
        placement: "top",
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: false,
        container: false,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    c.prototype.init = function(l, j, g) {
        this.enabled = true;
        this.type = l;
        this.$element = d(j);
        this.options = this.getOptions(g);
        this.$viewport = this.options.viewport && d(d.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport));
        this.inState = {
            click: false,
            hover: false,
            focus: false
        };
        if (this.$element[0] instanceof document.constructor && !this.options.selector) {
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!")
        }
        var k = this.options.trigger.split(" ");
        for (var h = k.length; h--;) {
            var f = k[h];
            if (f == "click") {
                this.$element.on("click." + this.type, this.options.selector, d.proxy(this.toggle, this))
            } else {
                if (f != "manual") {
                    var m = f == "hover" ? "mouseenter" : "focusin";
                    var e = f == "hover" ? "mouseleave" : "focusout";
                    this.$element.on(m + "." + this.type, this.options.selector, d.proxy(this.enter, this));
                    this.$element.on(e + "." + this.type, this.options.selector, d.proxy(this.leave, this))
                }
            }
        }
        this.options.selector ? (this._options = d.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        })) : this.fixTitle()
    };
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    };
    c.prototype.getOptions = function(e) {
        e = d.extend({}, this.getDefaults(), this.$element.data(), e);
        if (e.delay && typeof e.delay == "number") {
            e.delay = {
                show: e.delay,
                hide: e.delay
            }
        }
        return e
    };
    c.prototype.getDelegateOptions = function() {
        var e = {};
        var f = this.getDefaults();
        this._options && d.each(this._options, function(g, h) {
            if (f[g] != h) {
                e[g] = h
            }
        });
        return e
    };
    c.prototype.enter = function(f) {
        var e = f instanceof this.constructor ? f : d(f.currentTarget).data("bs." + this.type);
        if (!e) {
            e = new this.constructor(f.currentTarget, this.getDelegateOptions());
            d(f.currentTarget).data("bs." + this.type, e)
        }
        if (f instanceof d.Event) {
            e.inState[f.type == "focusin" ? "focus" : "hover"] = true
        }
        if (e.tip().hasClass("in") || e.hoverState == "in") {
            e.hoverState = "in";
            return
        }
        clearTimeout(e.timeout);
        e.hoverState = "in";
        if (!e.options.delay || !e.options.delay.show) {
            return e.show()
        }
        e.timeout = setTimeout(function() {
            if (e.hoverState == "in") {
                e.show()
            }
        }, e.options.delay.show)
    };
    c.prototype.isInStateTrue = function() {
        for (var e in this.inState) {
            if (this.inState[e]) {
                return true
            }
        }
        return false
    };
    c.prototype.leave = function(f) {
        var e = f instanceof this.constructor ? f : d(f.currentTarget).data("bs." + this.type);
        if (!e) {
            e = new this.constructor(f.currentTarget, this.getDelegateOptions());
            d(f.currentTarget).data("bs." + this.type, e)
        }
        if (f instanceof d.Event) {
            e.inState[f.type == "focusout" ? "focus" : "hover"] = false
        }
        if (e.isInStateTrue()) {
            return
        }
        clearTimeout(e.timeout);
        e.hoverState = "out";
        if (!e.options.delay || !e.options.delay.hide) {
            return e.hide()
        }
        e.timeout = setTimeout(function() {
            if (e.hoverState == "out") {
                e.hide()
            }
        }, e.options.delay.hide)
    };
    c.prototype.show = function() {
        var o = d.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(o);
            var p = d.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (o.isDefaultPrevented() || !p) {
                return
            }
            var n = this;
            var l = this.tip();
            var h = this.getUID(this.type);
            this.setContent();
            l.attr("id", h);
            this.$element.attr("aria-describedby", h);
            if (this.options.animation) {
                l.addClass("fade")
            }
            var k = typeof this.options.placement == "function" ? this.options.placement.call(this, l[0], this.$element[0]) : this.options.placement;
            var s = /\s?auto?\s?/i;
            var t = s.test(k);
            if (t) {
                k = k.replace(s, "") || "top"
            }
            l.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(k).data("bs." + this.type, this);
            this.options.container ? l.appendTo(this.options.container) : l.insertAfter(this.$element);
            this.$element.trigger("inserted.bs." + this.type);
            var q = this.getPosition();
            var f = l[0].offsetWidth;
            var m = l[0].offsetHeight;
            if (t) {
                var j = k;
                var r = this.getPosition(this.$viewport);
                k = k == "bottom" && q.bottom + m > r.bottom ? "top" : k == "top" && q.top - m < r.top ? "bottom" : k == "right" && q.right + f > r.width ? "left" : k == "left" && q.left - f < r.left ? "right" : k;
                l.removeClass(j).addClass(k)
            }
            var i = this.getCalculatedOffset(k, q, f, m);
            this.applyPlacement(i, k);
            var g = function() {
                var e = n.hoverState;
                n.$element.trigger("shown.bs." + n.type);
                n.hoverState = null;
                if (e == "out") {
                    n.leave(n)
                }
            };
            d.support.transition && this.$tip.hasClass("fade") ? l.one("bsTransitionEnd", g).emulateTransitionEnd(c.TRANSITION_DURATION) : g()
        }
    };
    c.prototype.applyPlacement = function(j, k) {
        var l = this.tip();
        var g = l[0].offsetWidth;
        var q = l[0].offsetHeight;
        var f = parseInt(l.css("margin-top"), 10);
        var i = parseInt(l.css("margin-left"), 10);
        if (isNaN(f)) {
            f = 0
        }
        if (isNaN(i)) {
            i = 0
        }
        j.top += f;
        j.left += i;
        d.offset.setOffset(l[0], d.extend({
            using: function(r) {
                l.css({
                    top: Math.round(r.top),
                    left: Math.round(r.left)
                })
            }
        }, j), 0);
        l.addClass("in");
        var e = l[0].offsetWidth;
        var m = l[0].offsetHeight;
        if (k == "top" && m != q) {
            j.top = j.top + q - m
        }
        var p = this.getViewportAdjustedDelta(k, j, e, m);
        if (p.left) {
            j.left += p.left
        } else {
            j.top += p.top
        }
        var n = /top|bottom/.test(k);
        var h = n ? p.left * 2 - g + e : p.top * 2 - q + m;
        var o = n ? "offsetWidth" : "offsetHeight";
        l.offset(j);
        this.replaceArrow(h, l[0][o], n)
    };
    c.prototype.replaceArrow = function(g, e, f) {
        this.arrow().css(f ? "left" : "top", 50 * (1 - g / e) + "%").css(f ? "top" : "left", "")
    };
    c.prototype.setContent = function() {
        var f = this.tip();
        var e = this.getTitle();
        f.find(".tooltip-inner")[this.options.html ? "html" : "text"](e);
        f.removeClass("fade in top bottom left right")
    };
    c.prototype.hide = function(j) {
        var g = this;
        var i = d(this.$tip);
        var h = d.Event("hide.bs." + this.type);
        function f() {
            if (g.hoverState != "in") {
                i.detach()
            }
            g.$element.removeAttr("aria-describedby").trigger("hidden.bs." + g.type);
            j && j()
        }
        this.$element.trigger(h);
        if (h.isDefaultPrevented()) {
            return
        }
        i.removeClass("in");
        d.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f();
        this.hoverState = null;
        return this
    };
    c.prototype.fixTitle = function() {
        var e = this.$element;
        if (e.attr("title") || typeof e.attr("data-original-title") != "string") {
            e.attr("data-original-title", e.attr("title") || "").attr("title", "")
        }
    };
    c.prototype.hasContent = function() {
        return this.getTitle()
    };
    c.prototype.getPosition = function(g) {
        g = g || this.$element;
        var i = g[0];
        var f = i.tagName == "BODY";
        var h = i.getBoundingClientRect();
        if (h.width == null) {
            h = d.extend({}, h, {
                width: h.right - h.left,
                height: h.bottom - h.top
            })
        }
        var k = f ? {
            top: 0,
            left: 0
        } : g.offset();
        var e = {
            scroll: f ? document.documentElement.scrollTop || document.body.scrollTop : g.scrollTop()
        };
        var j = f ? {
            width: d(window).width(),
            height: d(window).height()
        } : null;
        return d.extend({}, h, e, j, k)
    };
    c.prototype.getCalculatedOffset = function(e, h, f, g) {
        return e == "bottom" ? {
            top: h.top + h.height,
            left: h.left + h.width / 2 - f / 2
        } : e == "top" ? {
            top: h.top - g,
            left: h.left + h.width / 2 - f / 2
        } : e == "left" ? {
            top: h.top + h.height / 2 - g / 2,
            left: h.left - f
        } : {
            top: h.top + h.height / 2 - g / 2,
            left: h.left + h.width
        }
    };
    c.prototype.getViewportAdjustedDelta = function(h, k, e, j) {
        var m = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) {
            return m
        }
        var g = this.options.viewport && this.options.viewport.padding || 0;
        var l = this.getPosition(this.$viewport);
        if (/right|left/.test(h)) {
            var n = k.top - g - l.scroll;
            var i = k.top + g - l.scroll + j;
            if (n < l.top) {
                m.top = l.top - n
            } else {
                if (i > l.top + l.height) {
                    m.top = l.top + l.height - i
                }
            }
        } else {
            var o = k.left - g;
            var f = k.left + g + e;
            if (o < l.left) {
                m.left = l.left - o
            } else {
                if (f > l.right) {
                    m.left = l.left + l.width - f
                }
            }
        }
        return m
    };
    c.prototype.getTitle = function() {
        var g;
        var e = this.$element;
        var f = this.options;
        g = e.attr("data-original-title") || (typeof f.title == "function" ? f.title.call(e[0]) : f.title);
        return g
    };
    c.prototype.getUID = function(e) {
        do {
            e += ~~(Math.random() * 1000000)
        } while (document.getElementById(e));
        return e
    };
    c.prototype.tip = function() {
        if (!this.$tip) {
            this.$tip = d(this.options.template);
            if (this.$tip.length != 1) {
                throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!")
            }
        }
        return this.$tip
    };
    c.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"))
    };
    c.prototype.enable = function() {
        this.enabled = true
    };
    c.prototype.disable = function() {
        this.enabled = false
    };
    c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    };
    c.prototype.toggle = function(g) {
        var f = this;
        if (g) {
            f = d(g.currentTarget).data("bs." + this.type);
            if (!f) {
                f = new this.constructor(g.currentTarget, this.getDelegateOptions());
                d(g.currentTarget).data("bs." + this.type, f)
            }
        }
        if (g) {
            f.inState.click = !f.inState.click;
            if (f.isInStateTrue()) {
                f.enter(f)
            } else {
                f.leave(f)
            }
        } else {
            f.tip().hasClass("in") ? f.leave(f) : f.enter(f)
        }
    };
    c.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type);
            if (e.$tip) {
                e.$tip.detach()
            }
            e.$tip = null;
            e.$arrow = null;
            e.$viewport = null
        })
    };
    function b(e) {
        return this.each(function() {
            var h = d(this);
            var g = h.data("bs.tooltip");
            var f = typeof e == "object" && e;
            if (!g && /destroy|hide/.test(e)) {
                return
            }
            if (!g) {
                h.data("bs.tooltip", (g = new c(this, f)))
            }
            if (typeof e == "string") {
                g[e]()
            }
        })
    }
    var a = d.fn.tooltip;
    d.fn.tooltip = b;
    d.fn.tooltip.Constructor = c;
    d.fn.tooltip.noConflict = function() {
        d.fn.tooltip = a;
        return this
    }
}(jQuery); + function(d) {
    var c = function(f, e) {
        this.init("popover", f, e)
    };
    if (!d.fn.tooltip) {
        throw new Error("Popover requires tooltip.js")
    }
    c.VERSION = "3.3.6";
    c.DEFAULTS = d.extend({}, d.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });
    c.prototype = d.extend({}, d.fn.tooltip.Constructor.prototype);
    c.prototype.constructor = c;
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    };
    c.prototype.setContent = function() {
        var g = this.tip();
        var f = this.getTitle();
        var e = this.getContent();
        g.find(".popover-title")[this.options.html ? "html" : "text"](f);
        g.find(".popover-content").children().detach().end()[this.options.html ? (typeof e == "string" ? "html" : "append") : "text"](e);
        g.removeClass("fade top bottom left right in");
        if (!g.find(".popover-title").html()) {
            g.find(".popover-title").hide()
        }
    };
    c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    };
    c.prototype.getContent = function() {
        var e = this.$element;
        var f = this.options;
        return e.attr("data-content") || (typeof f.content == "function" ? f.content.call(e[0]) : f.content)
    };
    c.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"))
    };
    function b(e) {
        return this.each(function() {
            var h = d(this);
            var g = h.data("bs.popover");
            var f = typeof e == "object" && e;
            if (!g && /destroy|hide/.test(e)) {
                return
            }
            if (!g) {
                h.data("bs.popover", (g = new c(this, f)))
            }
            if (typeof e == "string") {
                g[e]()
            }
        })
    }
    var a = d.fn.popover;
    d.fn.popover = b;
    d.fn.popover.Constructor = c;
    d.fn.popover.noConflict = function() {
        d.fn.popover = a;
        return this
    }
}(jQuery); + function(d) {
    var b = function(f) {
        this.element = d(f)
    };
    b.VERSION = "3.3.6";
    b.TRANSITION_DURATION = 150;
    b.prototype.show = function() {
        var l = this.element;
        var h = l.closest("ul:not(.dropdown-menu)");
        var g = l.data("target");
        if (!g) {
            g = l.attr("href");
            g = g && g.replace(/.*(?=#[^\s]*$)/, "")
        }
        if (l.parent("li").hasClass("active")) {
            return
        }
        var j = h.find(".active:last a");
        var k = d.Event("hide.bs.tab", {
            relatedTarget: l[0]
        });
        var i = d.Event("show.bs.tab", {
            relatedTarget: j[0]
        });
        j.trigger(k);
        l.trigger(i);
        if (i.isDefaultPrevented() || k.isDefaultPrevented()) {
            return
        }
        var f = d(g);
        this.activate(l.closest("li"), h);
        this.activate(f, f.parent(), function() {
            j.trigger({
                type: "hidden.bs.tab",
                relatedTarget: l[0]
            });
            l.trigger({
                type: "shown.bs.tab",
                relatedTarget: j[0]
            })
        })
    };
    b.prototype.activate = function(h, g, k) {
        var f = g.find("> .active");
        var j = k && d.support.transition && (f.length && f.hasClass("fade") || !!g.find("> .fade").length);
        function i() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", false);
            h.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", true);
            if (j) {
                h[0].offsetWidth;
                h.addClass("in")
            } else {
                h.removeClass("fade")
            }
            if (h.parent(".dropdown-menu").length) {
                h.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", true)
            }
            k && k()
        }
        f.length && j ? f.one("bsTransitionEnd", i).emulateTransitionEnd(b.TRANSITION_DURATION) : i();
        f.removeClass("in")
    };
    function c(f) {
        return this.each(function() {
            var h = d(this);
            var g = h.data("bs.tab");
            if (!g) {
                h.data("bs.tab", (g = new b(this)))
            }
            if (typeof f == "string") {
                g[f]()
            }
        })
    }
    var a = d.fn.tab;
    d.fn.tab = c;
    d.fn.tab.Constructor = b;
    d.fn.tab.noConflict = function() {
        d.fn.tab = a;
        return this
    };
    var e = function(f) {
        f.preventDefault();
        c.call(d(this), "show")
    };
    d(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery); + function(d) {
    var c = function(f, e) {
        this.options = d.extend({}, c.DEFAULTS, e);
        this.$target = d(this.options.target).on("scroll.bs.affix.data-api", d.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", d.proxy(this.checkPositionWithEventLoop, this));
        this.$element = d(f);
        this.affixed = null;
        this.unpin = null;
        this.pinnedOffset = null;
        this.checkPosition()
    };
    c.VERSION = "3.3.6";
    c.RESET = "affix affix-top affix-bottom";
    c.DEFAULTS = {
        offset: 0,
        target: window
    };
    c.prototype.getState = function(n, m, f, g) {
        var e = this.$target.scrollTop();
        var i = this.$element.offset();
        var j = this.$target.height();
        if (f != null && this.affixed == "top") {
            return e < f ? "top" : false
        }
        if (this.affixed == "bottom") {
            if (f != null) {
                return (e + this.unpin <= i.top) ? false : "bottom"
            }
            return (e + j <= n - g) ? false : "bottom"
        }
        var h = this.affixed == null;
        var l = h ? e : i.top;
        var k = h ? j : m;
        if (f != null && e <= f) {
            return "top"
        }
        if (g != null && (l + k >= n - g)) {
            return "bottom"
        }
        return false
    };
    c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) {
            return this.pinnedOffset
        }
        this.$element.removeClass(c.RESET).addClass("affix");
        var f = this.$target.scrollTop();
        var e = this.$element.offset();
        return (this.pinnedOffset = e.top - f)
    };
    c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(d.proxy(this.checkPosition, this), 1)
    };
    c.prototype.checkPosition = function() {
        if (!this.$element.is(":visible")) {
            return
        }
        var f = this.$element.height();
        var l = this.options.offset;
        var j = l.top;
        var h = l.bottom;
        var i = Math.max(d(document).height(), d(document.body).height());
        if (typeof l != "object") {
            h = j = l
        }
        if (typeof j == "function") {
            j = l.top(this.$element)
        }
        if (typeof h == "function") {
            h = l.bottom(this.$element)
        }
        var g = this.getState(i, f, j, h);
        if (this.affixed != g) {
            if (this.unpin != null) {
                this.$element.css("top", "")
            }
            var m = "affix" + (g ? "-" + g : "");
            var k = d.Event(m + ".bs.affix");
            this.$element.trigger(k);
            if (k.isDefaultPrevented()) {
                return
            }
            this.affixed = g;
            this.unpin = g == "bottom" ? this.getPinnedOffset() : null;
            this.$element.removeClass(c.RESET).addClass(m).trigger(m.replace("affix", "affixed") + ".bs.affix")
        }
        if (g == "bottom") {
            this.$element.offset({
                top: i - f - h
            })
        }
    };
    function b(e) {
        return this.each(function() {
            var h = d(this);
            var g = h.data("bs.affix");
            var f = typeof e == "object" && e;
            if (!g) {
                h.data("bs.affix", (g = new c(this, f)))
            }
            if (typeof e == "string") {
                g[e]()
            }
        })
    }
    var a = d.fn.affix;
    d.fn.affix = b;
    d.fn.affix.Constructor = c;
    d.fn.affix.noConflict = function() {
        d.fn.affix = a;
        return this
    };
    d(window).on("load", function() {
        d('[data-spy="affix"]').each(function() {
            var f = d(this);
            var e = f.data();
            e.offset = e.offset || {};
            if (e.offsetBottom != null) {
                e.offset.bottom = e.offsetBottom
            }
            if (e.offsetTop != null) {
                e.offset.top = e.offsetTop
            }
            b.call(f, e)
        })
    })
}(jQuery); + function(d) {
    var e = function(g, f) {
        this.$element = d(g);
        this.options = d.extend({}, e.DEFAULTS, f);
        this.$trigger = d('[data-toggle="collapse"][href="#' + g.id + '"],[data-toggle="collapse"][data-target="#' + g.id + '"]');
        this.transitioning = null;
        if (this.options.parent) {
            this.$parent = this.getParent()
        } else {
            this.addAriaAndCollapsedClass(this.$element, this.$trigger)
        }
        if (this.options.toggle) {
            this.toggle()
        }
    };
    e.VERSION = "3.3.6";
    e.TRANSITION_DURATION = 350;
    e.DEFAULTS = {
        toggle: true
    };
    e.prototype.dimension = function() {
        var f = this.$element.hasClass("width");
        return f ? "width" : "height"
    };
    e.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass("in")) {
            return
        }
        var h;
        var j = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
        if (j && j.length) {
            h = j.data("bs.collapse");
            if (h && h.transitioning) {
                return
            }
        }
        var g = d.Event("show.bs.collapse");
        this.$element.trigger(g);
        if (g.isDefaultPrevented()) {
            return
        }
        if (j && j.length) {
            b.call(j, "hide");
            h || j.data("bs.collapse", null)
        }
        var k = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded", true);
        this.$trigger.removeClass("collapsed").attr("aria-expanded", true);
        this.transitioning = 1;
        var f = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[k]("");
            this.transitioning = 0;
            this.$element.trigger("shown.bs.collapse")
        };
        if (!d.support.transition) {
            return f.call(this)
        }
        var i = d.camelCase(["scroll", k].join("-"));
        this.$element.one("bsTransitionEnd", d.proxy(f, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[k](this.$element[0][i])
    };
    e.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass("in")) {
            return
        }
        var g = d.Event("hide.bs.collapse");
        this.$element.trigger(g);
        if (g.isDefaultPrevented()) {
            return
        }
        var h = this.dimension();
        this.$element[h](this.$element[h]())[0].offsetHeight;
        this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", false);
        this.$trigger.addClass("collapsed").attr("aria-expanded", false);
        this.transitioning = 1;
        var f = function() {
            this.transitioning = 0;
            this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        if (!d.support.transition) {
            return f.call(this)
        }
        this.$element[h](0).one("bsTransitionEnd", d.proxy(f, this)).emulateTransitionEnd(e.TRANSITION_DURATION)
    };
    e.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    e.prototype.getParent = function() {
        return d(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(d.proxy(function(h, g) {
            var f = d(g);
            this.addAriaAndCollapsedClass(c(f), f)
        }, this)).end()
    };
    e.prototype.addAriaAndCollapsedClass = function(g, f) {
        var h = g.hasClass("in");
        g.attr("aria-expanded", h);
        f.toggleClass("collapsed", !h).attr("aria-expanded", h)
    };
    function c(f) {
        var g;
        var h = f.attr("data-target") || (g = f.attr("href")) && g.replace(/.*(?=#[^\s]+$)/, "");
        return d(h)
    }
    function b(f) {
        return this.each(function() {
            var i = d(this);
            var h = i.data("bs.collapse");
            var g = d.extend({}, e.DEFAULTS, i.data(), typeof f == "object" && f);
            if (!h && g.toggle && /show|hide/.test(f)) {
                g.toggle = false
            }
            if (!h) {
                i.data("bs.collapse", (h = new e(this, g)))
            }
            if (typeof f == "string") {
                h[f]()
            }
        })
    }
    var a = d.fn.collapse;
    d.fn.collapse = b;
    d.fn.collapse.Constructor = e;
    d.fn.collapse.noConflict = function() {
        d.fn.collapse = a;
        return this
    };
    d(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(j) {
        var i = d(this);
        if (!i.attr("data-target")) {
            j.preventDefault()
        }
        var f = c(i);
        var h = f.data("bs.collapse");
        var g = h ? "toggle" : i.data();
        b.call(f, g)
    })
}(jQuery); + function(d) {
    function c(f, e) {
        this.$body = d(document.body);
        this.$scrollElement = d(f).is(document.body) ? d(window) : d(f);
        this.options = d.extend({}, c.DEFAULTS, e);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", d.proxy(this.process, this));
        this.refresh();
        this.process()
    }
    c.VERSION = "3.3.6";
    c.DEFAULTS = {
        offset: 10
    };
    c.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    c.prototype.refresh = function() {
        var g = this;
        var e = "offset";
        var f = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        if (!d.isWindow(this.$scrollElement[0])) {
            e = "position";
            f = this.$scrollElement.scrollTop()
        }
        this.$body.find(this.selector).map(function() {
            var i = d(this);
            var h = i.data("target") || i.attr("href");
            var j = /^#./.test(h) && d(h);
            return (j && j.length && j.is(":visible") && [
                [j[e]().top + f, h]
            ]) || null
        }).sort(function(i, h) {
            return i[0] - h[0]
        }).each(function() {
            g.offsets.push(this[0]);
            g.targets.push(this[1])
        })
    };
    c.prototype.process = function() {
        var k = this.$scrollElement.scrollTop() + this.options.offset;
        var g = this.getScrollHeight();
        var j = this.options.offset + g - this.$scrollElement.height();
        var h = this.offsets;
        var e = this.targets;
        var l = this.activeTarget;
        var f;
        if (this.scrollHeight != g) {
            this.refresh()
        }
        if (k >= j) {
            return l != (f = e[e.length - 1]) && this.activate(f)
        }
        if (l && k < h[0]) {
            this.activeTarget = null;
            return this.clear()
        }
        for (f = h.length; f--;) {
            l != e[f] && k >= h[f] && (h[f + 1] === undefined || k < h[f + 1]) && this.activate(e[f])
        }
    };
    c.prototype.activate = function(g) {
        this.activeTarget = g;
        this.clear();
        var e = this.selector + '[data-target="' + g + '"],' + this.selector + '[href="' + g + '"]';
        var f = d(e).parents("li").addClass("active");
        if (f.parent(".dropdown-menu").length) {
            f = f.closest("li.dropdown").addClass("active")
        }
        f.trigger("activate.bs.scrollspy")
    };
    c.prototype.clear = function() {
        d(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    function b(e) {
        return this.each(function() {
            var h = d(this);
            var g = h.data("bs.scrollspy");
            var f = typeof e == "object" && e;
            if (!g) {
                h.data("bs.scrollspy", (g = new c(this, f)))
            }
            if (typeof e == "string") {
                g[e]()
            }
        })
    }
    var a = d.fn.scrollspy;
    d.fn.scrollspy = b;
    d.fn.scrollspy.Constructor = c;
    d.fn.scrollspy.noConflict = function() {
        d.fn.scrollspy = a;
        return this
    };
    d(window).on("load.bs.scrollspy.data-api", function() {
        d('[data-spy="scroll"]').each(function() {
            var e = d(this);
            b.call(e, e.data())
        })
    })
}(jQuery); + function(b) {
    function a() {
        var e = document.createElement("bootstrap");
        var d = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in d) {
            if (e.style[c] !== undefined) {
                return {
                    end: d[c]
                }
            }
        }
        return false
    }
    b.fn.emulateTransitionEnd = function(e) {
        var d = false;
        var c = this;
        b(this).one("bsTransitionEnd", function() {
            d = true
        });
        var f = function() {
            if (!d) {
                b(c).trigger(b.support.transition.end)
            }
        };
        setTimeout(f, e);
        return this
    };
    b(function() {
        b.support.transition = a();
        if (!b.support.transition) {
            return
        }
        b.event.special.bsTransitionEnd = {
            bindType: b.support.transition.end,
            delegateType: b.support.transition.end,
            handle: function(c) {
                if (b(c.target).is(this)) {
                    return c.handleObj.handler.apply(this, arguments)
                }
            }
        }
    })
}(jQuery);
function create_cookie(c, d, f, e) {
    var b = new Date();
    b.setTime(b.getTime() + (f * 24 * 60 * 60 * 1000));
    var a = b.toUTCString();
    document.cookie = c + "=" + d + ";expires=" + a + ";path=" + e + ";"
}
function retrieve_cookie(b) {
    var e = "",
        a = "",
        d = b + "=",
        g = document.cookie.split(";"),
        f = g.length;
    for (var c = 0; c < f; c++) {
        a = g[c].trim();
        if (a.indexOf(d) == 0) {
            e = a.substring(d.length, a.length);
            break
        }
    }
    return e
}
user_country_cookie_name = "_UserCountry";
eu_cookies_notification_cookie_name = "_TermsFeed_EU_Cookies_Notification";
eu_user_country_cookie_response = retrieve_cookie(user_country_cookie_name);
eu_cookies_notification_response = retrieve_cookie(eu_cookies_notification_cookie_name);
var eu_countries = ["AT", "BE", "BG", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB"];
if (eu_user_country_cookie_response) {
    if (!eu_cookies_notification_response) {
        create_cookie(eu_cookies_notification_cookie_name, "1", 360, "/");
        document.body.className += " show-eu-cookies-notification";
        document.getElementById("eu-cookies-notification").style.display = "block"
    } else {
        if (eu_cookies_notification_response != "1") {
            create_cookie(eu_cookies_notification_cookie_name, "1", 360, "/");
            document.body.className += " show-eu-cookies-notification";
            document.getElementById("eu-cookies-notification").style.display = "block"
        }
    }
}
var _extends = Object.assign || function(d) {
    for (var b = 1; b < arguments.length; b++) {
        var c = arguments[b];
        for (var a in c) {
            if (Object.prototype.hasOwnProperty.call(c, a)) {
                d[a] = c[a]
            }
        }
    }
    return d
};
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(a) {
    return typeof a
} : function(a) {
    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
};
(function(b, a) {
    (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined" ? module.exports = a() : typeof define === "function" && define.amd ? define(a) : b.LazyLoad = a()
})(this, function() {
    var ab = {
        elements_selector: "img",
        container: document,
        threshold: 300,
        thresholds: null,
        data_src: "src",
        data_srcset: "srcset",
        data_sizes: "sizes",
        data_bg: "bg",
        class_loading: "loading",
        class_loaded: "loaded",
        class_error: "error",
        load_delay: 0,
        callback_load: null,
        callback_error: null,
        callback_set: null,
        callback_enter: null,
        callback_finish: null,
        to_webp: false
    };
    var b = function b(ah) {
        return _extends({}, ab, ah)
    };
    var H = "data-";
    var A = "was-processed";
    var E = "ll-timeout";
    var X = "true";
    var v = function v(ah, ai) {
        return ah.getAttribute(H + ai)
    };
    var y = function y(ai, aj, ak) {
        var ah = H + aj;
        if (ak === null) {
            ai.removeAttribute(ah);
            return
        }
        ai.setAttribute(ah, ak)
    };
    var k = function k(ah) {
        return y(ah, A, X)
    };
    var q = function q(ah) {
        return v(ah, A) === X
    };
    var Q = function Q(ah, ai) {
        return y(ah, E, ai)
    };
    var ac = function ac(ah) {
        return v(ah, E)
    };
    var B = function B(ah) {
        return ah.filter(function(ai) {
            return !q(ai)
        })
    };
    var R = function R(ai, ah) {
        return ai.filter(function(aj) {
            return aj !== ah
        })
    };
    var m = function m(ak, aj) {
        var am;
        var ai = "LazyLoad::Initialized";
        var ah = new ak(aj);
        try {
            am = new CustomEvent(ai, {
                detail: {
                    instance: ah
                }
            })
        } catch (al) {
            am = document.createEvent("CustomEvent");
            am.initCustomEvent(ai, false, false, {
                instance: ah
            })
        }
        window.dispatchEvent(am)
    };
    function h(aj, ah) {
        if (!ah) {
            return
        }
        if (!ah.length) {
            m(aj, ah)
        } else {
            for (var ai = 0, ak; ak = ah[ai]; ai += 1) {
                m(aj, ak)
            }
        }
    }
    var c = function c(ah, ai) {
        return ai ? ah.replace(/\.(jpe?g|png)/gi, ".webp") : ah
    };
    var p = function p() {
        var ah = "image/webp";
        var ai = document.createElement("canvas");
        if (ai.getContext && ai.getContext("2d")) {
            return ai.toDataURL(ah).indexOf("data:" + ah) === 0
        }
        return false
    };
    var O = typeof window !== "undefined";
    var t = O && !("onscroll" in window) || /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent);
    var L = O && "IntersectionObserver" in window;
    var w = O && "classList" in document.createElement("p");
    var l = O && p();
    var a = function a(an, aj, al, am) {
        for (var ai = 0, ah; ah = an.children[ai]; ai += 1) {
            if (ah.tagName === "SOURCE") {
                var ak = v(ah, al);
                n(ah, aj, ak, am)
            }
        }
    };
    var n = function n(ai, ah, aj, ak) {
        if (!aj) {
            return
        }
        ai.setAttribute(ah, c(aj, ak))
    };
    var g = function g(aj, al) {
        var ao = l && al.to_webp;
        var ai = al.data_srcset;
        var ak = aj.parentNode;
        if (ak && ak.tagName === "PICTURE") {
            a(ak, "srcset", ai, ao)
        }
        var an = v(aj, al.data_sizes);
        n(aj, "sizes", an);
        var ah = v(aj, ai);
        n(aj, "srcset", ah, ao);
        var am = v(aj, al.data_src);
        n(aj, "src", am, ao)
    };
    var P = function P(ah, ai) {
        var aj = v(ah, ai.data_src);
        n(ah, "src", aj)
    };
    var G = function G(ai, aj) {
        var ah = aj.data_src;
        var ak = v(ai, ah);
        a(ai, "src", ah);
        n(ai, "src", ak);
        ai.load()
    };
    var F = function F(ai, aj) {
        var am = l && aj.to_webp;
        var ak = v(ai, aj.data_src);
        var ah = v(ai, aj.data_bg);
        if (ak) {
            var al = c(ak, am);
            ai.style.backgroundImage = 'url("' + al + '")'
        }
        if (ah) {
            var an = c(ah, am);
            ai.style.backgroundImage = an
        }
    };
    var ag = {
        IMG: g,
        IFRAME: P,
        VIDEO: G
    };
    var J = function J(aj, ah) {
        var al = ah._settings;
        var ai = aj.tagName;
        var ak = ag[ai];
        if (ak) {
            ak(aj, al);
            ah._updateLoadingCount(1);
            ah._elements = R(ah._elements, aj);
            return
        }
        F(aj, al)
    };
    var z = function z(ah, ai) {
        if (w) {
            ah.classList.add(ai);
            return
        }
        ah.className += (ah.className ? " " : "") + ai
    };
    var o = function o(ah, ai) {
        if (w) {
            ah.classList.remove(ai);
            return
        }
        ah.className = ah.className.replace(new RegExp("(^|\\s+)" + ai + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
    };
    var e = function e(ai, ah) {
        if (ai) {
            ai(ah)
        }
    };
    var Z = "load";
    var N = "loadeddata";
    var i = "error";
    var af = function af(ai, ah, aj) {
        ai.addEventListener(ah, aj)
    };
    var d = function d(ai, ah, aj) {
        ai.removeEventListener(ah, aj)
    };
    var x = function x(ai, aj, ah) {
        af(ai, Z, aj);
        af(ai, N, aj);
        af(ai, i, ah)
    };
    var S = function S(ai, aj, ah) {
        d(ai, Z, aj);
        d(ai, N, aj);
        d(ai, i, ah)
    };
    var s = function s(al, am, ah) {
        var ak = ah._settings;
        var aj = am ? ak.class_loaded : ak.class_error;
        var an = am ? ak.callback_load : ak.callback_error;
        var ai = al.target;
        o(ai, ak.class_loading);
        z(ai, aj);
        e(an, ai);
        ah._updateLoadingCount(-1)
    };
    var Y = function Y(aj, ah) {
        var ak = function ak(al) {
            s(al, true, ah);
            S(aj, ak, ai)
        };
        var ai = function ai(al) {
            s(al, false, ah);
            S(aj, ak, ai)
        };
        x(aj, ak, ai)
    };
    var K = ["IMG", "IFRAME", "VIDEO"];
    var j = function j(aj, ai, ah) {
        V(aj, ah);
        ai.unobserve(aj)
    };
    var ae = function ae(ah) {
        var ai = ac(ah);
        if (!ai) {
            return
        }
        clearTimeout(ai);
        Q(ah, null)
    };
    var r = function r(ak, ai, ah) {
        var aj = ah._settings.load_delay;
        var al = ac(ak);
        if (al) {
            return
        }
        al = setTimeout(function() {
            j(ak, ai, ah);
            ae(ak)
        }, aj);
        Q(ak, al)
    };
    function V(ai, ah, ak) {
        var aj = ah._settings;
        if (!ak && q(ai)) {
            return
        }
        e(aj.callback_enter, ai);
        if (K.indexOf(ai.tagName) > -1) {
            Y(ai, ah);
            z(ai, aj.class_loading)
        }
        J(ai, ah);
        k(ai);
        e(aj.callback_set, ai)
    }
    var u = function u(ah) {
        return ah.isIntersecting || ah.intersectionRatio > 0
    };
    var D = function D(ah) {
        return {
            root: ah.container === document ? null : ah.container,
            rootMargin: ah.thresholds || ah.threshold + "px"
        }
    };
    var M = function M(ah, ai) {
        this._settings = b(ah);
        this._setObserver();
        this._loadingCount = 0;
        this.update(ai)
    };
    M.prototype = {
        _manageIntersection: function U(ak) {
            var ah = this._observer;
            var ai = this._settings.load_delay;
            var aj = ak.target;
            if (!ai) {
                if (u(ak)) {
                    j(aj, ah, this)
                }
                return
            }
            if (u(ak)) {
                r(aj, ah, this)
            } else {
                ae(aj)
            }
        },
        _onIntersection: function ad(ah) {
            ah.forEach(this._manageIntersection.bind(this))
        },
        _setObserver: function aa() {
            if (!L) {
                return
            }
            this._observer = new IntersectionObserver(this._onIntersection.bind(this), D(this._settings))
        },
        _updateLoadingCount: function C(ah) {
            this._loadingCount += ah;
            if (this._elements.length === 0 && this._loadingCount === 0) {
                e(this._settings.callback_finish)
            }
        },
        update: function I(ai) {
            var ak = this;
            var ah = this._settings;
            var aj = ai || ah.container.querySelectorAll(ah.elements_selector);
            this._elements = B(Array.prototype.slice.call(aj));
            if (t || !this._observer) {
                this.loadAll();
                return
            }
            this._elements.forEach(function(al) {
                ak._observer.observe(al)
            })
        },
        destroy: function W() {
            var ah = this;
            if (this._observer) {
                this._elements.forEach(function(ai) {
                    ah._observer.unobserve(ai)
                });
                this._observer = null
            }
            this._elements = null;
            this._settings = null
        },
        load: function T(ah, ai) {
            V(ah, this, ai)
        },
        loadAll: function f() {
            var ah = this;
            var ai = this._elements;
            ai.forEach(function(aj) {
                ah.load(aj)
            })
        }
    };
    if (O) {
        h(M, window.lazyLoadOptions)
    }
    return M
});
var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy"
});
(function() {
    var b = document.querySelectorAll(".lazy-youtube");
    for (var a = 0; a < b.length; a++) {
        b[a].addEventListener("click", function() {
            var c = document.createElement("iframe");
            c.setAttribute("frameborder", "0");
            c.setAttribute("allowfullscreen", "");
            c.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
            this.innerHTML = "";
            this.appendChild(c)
        })
    }
})();