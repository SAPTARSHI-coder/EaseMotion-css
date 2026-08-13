const button = document.querySelector("#toggle");

const container = document.querySelector(".container");


button.addEventListener("click",()=>{

    container.classList.toggle("loaded");

});