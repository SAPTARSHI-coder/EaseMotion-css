const button = document.querySelector("#reveal");

const text = document.querySelector(".glitch");


button.addEventListener("click",()=>{


    text.classList.remove("active");


    void text.offsetWidth;


    text.classList.add("active");



    setTimeout(()=>{

        text.classList.remove("active");

    },1000);


});