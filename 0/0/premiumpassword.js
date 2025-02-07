window.onload=passwordCheck;
function passwordCheck()
{
    var password = prompt("Please enter the password. Otherwise contact us: imadaliandroid@gmail.com");
    if (password !== "1234AB@")
    {
        passwordCheck();
    }
}