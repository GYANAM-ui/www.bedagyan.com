function login() {
    username = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if (username, email, password == "") {
        document.getElementById("er1").innerHTML = "<i class='fa fa-warning'></i>Enter a valid name";
        document.getElementById("er2").innerHTML = "<i class='fa fa-warning'></i>Enter a valid email";
        document.getElementById("er3").innerHTML = "<i class='fa fa-warning'></i>Enter a valid password";
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        window.location = "client/home.html";
    }
}