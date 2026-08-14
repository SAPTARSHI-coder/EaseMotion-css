const cards = document.querySelectorAll(".saas-card");


cards.forEach((card)=>{

    card.addEventListener("mouseenter",()=>{

        card.style.zIndex = "2";

    });


    card.addEventListener("mouseleave",()=>{

        card.style.zIndex = "1";

    });

});