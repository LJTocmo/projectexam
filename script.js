document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const header = document.querySelector("header");
    
    menuToggle.addEventListener("click", function() {
        header.classList.toggle("menu-open");
    });
});

function about(){
    window.location.href = "about.html";
}