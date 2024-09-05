function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    if (username === "Entri Elevate" && password === "admin123") {
        window.location.href = "https://jagadeeswaran13579.github.io/tourist-guide/"
        alert(sucessfull);  
    } else {
        alert("Incorrect username or password!");
    }
} 

function forgotPassword() {
    const email = prompt("Enter the email");
    if (email) {
        alert("Verification code sent to your email");
    }
}