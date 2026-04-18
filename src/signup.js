function checkStrength()
{
    var pw=document.getElementById("password").value;
    var strength=document.getElementById("strength");
    var bar=document.getElementById("strengthBar");

    if(pw.length==0){
        strength.innerHTML="";
        bar.style.width="0%";
        return;
    }
    var score=1;

    if(pw.length>=8){
        score++;
    }
    if(/[A-Z]/.test(pw)){
        score++;
    }
    if(/[0-9!@#$%^&*]/.test(pw)){
        score++;
    }
    if(pw.length<4){
        score=1;
    }

    if(score==1){
        strength.innerHTML="Weak";
        strength.style.color="red";
        bar.style.width="25%";
        bar.style.background="red";
    }
    else if(score==2){
        strength.innerHTML="Fair";
        strength.style.color="orange";
        bar.style.width="50%";
        bar.style.background="orange";
    }
    else if(score==3){
        strength.innerHTML="Good";
        strength.style.color="blue";
        bar.style.width="75%";
        bar.style.background="blue";
    }
    else{
        strength.innerHTML="Strong";
        strength.style.color="green";
        bar.style.width="100%";
        bar.style.background="green";
    }
}

document.getElementById("signupForm").addEventListener("submit",function(e){

    e.preventDefault();
    var username=document.getElementById("username").value.trim();
    var email=document.getElementById("email").value.trim();
    var password=document.getElementById("password").value;
    var confirm=document.getElementById("confirm").value;

    document.getElementById("username_err").innerHTML="";
    document.getElementById("email_err").innerHTML="";
    document.getElementById("pass_err").innerHTML="";
    document.getElementById("conf_err").innerHTML="";

    var valid=true;

    if(username==""){
        document.getElementById("username_err").innerHTML="Username is required.";
        valid=false;
    }
    if(email==""){
document.getElementById("email_err").innerHTML="Email is required.";
        valid=false;
    }
    if(password==""){
        document.getElementById("pass_err").innerHTML="Password is required.";
        valid=false;
    }

    if(confirm==""){
        document.getElementById("conf_err").innerHTML="Please confirm your password.";
        valid=false;
    }
    if(password.length<6 && password!=""){
        document.getElementById("pass_err").innerHTML="Password must be at least 6 characters.";
        valid=false;
    }
    if(password!=confirm && confirm!=""){
        document.getElementById("conf_err").innerHTML="Passwords do not match.";
        valid=false;
    }
    if(valid==false){
        return;
    }
 var user={
        username: username,
        email: email,
        password: password
    };
    localStorage.setItem("user",JSON.stringify(user));
    alert("Account created! Please login.");
    window.location.href="login.html";
});
