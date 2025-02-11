/*password*/
window.onload=passwordCheck;
function passwordCheck()
{
    var password = prompt("Please enter the password. Otherwise contact us: imadaliandroid@gmail.com");
	/*if (document.getElementById(window.onload)) {
document.getElementsByTagName("BODY")[0].style.display = "none";
}
	else*/ if (password === "20252026AB@") {
alert ("Welcome To Premium Access!");
}
	else if (password != "20252026AB@"){
setTimeout(15000)
alert ("Wrong password! Time Out! Refresh The Page And Try Again!");
document.getElementsByTagName("BODY")[0].style.display = "none";
}
	else {
return true;
  }
}

/*lazy images*/
window.onload = function() {
    let images = document.querySelectorAll('.lazy-load');
    images.forEach(function(img) {
        img.src = img.dataset.src;
    });
};

/* the already working one
window.onload=passwordCheck;
function passwordCheck()
{
    var password = prompt("Please enter the password. Otherwise contact us: imadaliandroid@gmail.com");
    if (password !== "1234AB@")
    {
        passwordCheck();
    }
}}*/


/*
window.onload=passwordCheck;
function password_protect() {
var pwd = prompt ("Enter the password", "");
if (pwd != 123) {
alert ("Wrong password!");
return false;
} else {
return true;
  }
}*/