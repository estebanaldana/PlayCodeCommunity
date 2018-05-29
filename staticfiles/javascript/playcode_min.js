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