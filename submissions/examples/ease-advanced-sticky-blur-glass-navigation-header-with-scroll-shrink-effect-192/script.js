const navbar = document.getElementById("navbar");


window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.classList.add("shrunk");

        navbar.classList.add("shrink");

    }

    else{

        navbar.classList.remove("shrink");

    }

});