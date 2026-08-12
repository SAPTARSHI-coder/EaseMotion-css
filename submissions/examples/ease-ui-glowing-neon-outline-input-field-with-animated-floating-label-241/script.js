const form = document.querySelector("form");


form.addEventListener("submit", (event)=>{

    event.preventDefault();


    const button = document.querySelector("button");


    button.textContent = "Success ✓";


    button.style.boxShadow =
    "0 0 30px rgba(0,245,255,.8)";


    setTimeout(()=>{

        button.textContent = "Continue";

        button.style.boxShadow = "";

    },2000);


});