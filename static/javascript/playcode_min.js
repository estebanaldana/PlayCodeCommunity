(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.9&appId=1162353997226233";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function reveal(obj)
{
	obj = document.getElementById("id_password");
	if (obj.type === "password"){
		obj.type = "text";
		obj.autocomplete="off"
	}
}

function oculd(obj)
{
	obj = document.getElementById("id_password");
	if (obj.type === "text"){
		obj.type = "password";
	}
}

function donwload(obj)
{
	alert("descarga: " + obj);
}

function previewFile()
{
	var preview = document.querySelector('img');
	var file = document.querySelector('input[type=file]').files[0];
	var reader = new FileReader();
	reader.onloadend = function() {
		preview.src = reader.result;
	}

	if(file) {
		reader.readAsDataURL(file);	
	}else {
		preview.src="";
	}
}

function socialbuttonfacebook(x)
{
	x.classList.toggle("processbuttonfacebook");
	fs = document.getElementById("contenturlfacebook")
	if(fs.style.opacity == 0) {
		fs.style.opacity=100;
		fs.style.display='contents';
	} else {
		fs.style.opacity=0;
		fs.style.display='none';
	}
}

function socialbuttontwitter(x)
{
	x.classList.toggle("processbuttontwitter");
	twr = document.getElementById("contenturltwitter")
	if(twr.style.opacity == 0) {
		twr.style.opacity=100;
		twr.style.display='contents';
	} else {
		twr.style.opacity=0;
		twr.style.display='none';
	}
}

function socialbuttongoogle(x)
{
	x.classList.toggle("processbuttongoogle");
	go = document.getElementById("contenturlgoogle")
	if(go.style.opacity == 0) {
		go.style.opacity=100;
		go.style.display='contents';
	} else {
		go.style.opacity=0;
		go.style.display='none';
	}
}

function socialbuttonyoutube(x)
{
	x.classList.toggle("processbuttonyoutube");
	yt = document.getElementById("contenturlyoutube")
	if(yt.style.opacity == 0) {
		yt.style.opacity=100;
		yt.style.display='contents';
	} else {
		yt.style.opacity=0;
		yt.style.display='none';
	}
}

function socialbuttonlinkedin(x)
{
	x.classList.toggle("processbuttonlinkedin");
	lk = document.getElementById("contenturllinkedin")
	if(lk.style.opacity == 0) {
		lk.style.opacity=100;
		lk.style.display='contents';
	} else {
		lk.style.opacity=0;
		lk.style.display='none';
	}
}

