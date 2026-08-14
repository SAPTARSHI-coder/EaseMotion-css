const items = document.querySelectorAll(".item");

const indicator = document.querySelector(".indicator");


items.forEach((item)=>{


    item.addEventListener("mouseenter",()=>{


        const position = item.offsetLeft;


        indicator.style.left = position + "px";


        indicator.style.width = item.offsetWidth + "px";


    });



    item.addEventListener("click",()=>{


        items.forEach(i=>i.classList.remove("active"));


        item.classList.add("active");


    });


});