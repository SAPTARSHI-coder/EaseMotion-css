const navItems = document.querySelectorAll(".nav-item");

const indicator = document.querySelector(".indicator");



function moveIndicator(item){

    const navRect = item.parentElement.getBoundingClientRect();

    const itemRect = item.getBoundingClientRect();


    indicator.style.left =

    `${itemRect.left - navRect.left}px`;

}



navItems.forEach((item)=>{


    item.addEventListener("click",()=>{


        navItems.forEach((btn)=>{

            btn.classList.remove("active");

        });



        item.classList.add("active");


        moveIndicator(item);


    });



    item.addEventListener("mouseenter",()=>{

        moveIndicator(item);

    });



});



window.addEventListener("load",()=>{

    const active = document.querySelector(".active");

    moveIndicator(active);

});



window.addEventListener("resize",()=>{

    const active = document.querySelector(".active");

    moveIndicator(active);

});