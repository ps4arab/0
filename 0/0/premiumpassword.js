window.onload=passwordCheck;
function passwordCheck()
{
    var password = prompt("Please enter the password. Otherwise contact us: imadaliandroid@gmail.com");
    if (password != "1234AB@"){
setTimeout(15000)
alert ("Wrong password! Time Out!");
document.getElementsByTagName("BODY")[0].style.display = "none";
} else {
return true;
  }
}

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