const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}

});