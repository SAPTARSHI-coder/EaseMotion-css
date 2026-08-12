const button = document.getElementById("trigger");

const glitchText = document.querySelector(".glitch");


button.addEventListener("click",()=>{


    glitchText.classList.remove("active");


    void glitchText.offsetWidth;


    glitchText.classList.add("active");


    button.textContent = "Glitch Activated ⚡";


    setTimeout(()=>{

        button.textContent = "Reveal Effect";

    },2000);


});