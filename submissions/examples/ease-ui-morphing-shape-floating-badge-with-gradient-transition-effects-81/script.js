const button = document.querySelector("#change");

const badge = document.querySelector(".badge");


button.addEventListener("click",()=>{

    badge.classList.toggle("alt");

});