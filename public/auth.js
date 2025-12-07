// Very basic demo login system (local only)

function signup() {
    const user = document.getElementById("signupUser").value;
    const pass = document.getElementById("signupPass").value;

    if (!user || !pass) return alert("Please enter username & password");

    localStorage.setItem("noxUser", user);
    localStorage.setItem("noxPass", pass);

    alert("Account created! Now login.");
    window.location.href = "login.html";
}

function login() {
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;

    const savedUser = localStorage.getItem("noxUser");
    const savedPass = localStorage.getItem("noxPass");

    if (user === savedUser && pass === savedPass) {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Wrong Username or Password ❌");
    }
}
