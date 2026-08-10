const cards = document.querySelectorAll(".card");


cards.forEach((card)=>{


    card.addEventListener("mouseenter",()=>{

        card.setAttribute(
            "aria-expanded",
            "true"
        );

    });


    card.addEventListener("mouseleave",()=>{

        card.setAttribute(
            "aria-expanded",
            "false"
        );

    });


});