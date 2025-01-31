function goToLogin() {
    window.location.href = "/auth/login.html";  
}

// Auto-redirect after video ends
document.getElementById("welcomeVideo").addEventListener("ended", function() {
    goToLogin();
});
