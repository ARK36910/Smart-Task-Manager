document.getElementById("loginForm").addEventListener("submit",function(e){
    e.preventDefault();
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var storedUser=JSON.parse(localStorage.getItem("user"));

    if(storedUser==null){
        document.getElementById("login_err").style.display = "block";
        return;
    }
    if(email==storedUser.email && password==storedUser.password){
        window.location.href="dashboard.html";
    }
    else{
        document.getElementById("login_err").style.display="block";
    }
});

