const pricingCards = document.querySelectorAll(".pricing-card");


pricingCards.forEach((card)=>{

    card.addEventListener("focusin",()=>{

        card.classList.add("active");

    });


    card.addEventListener("focusout",()=>{

        card.classList.remove("active");

    });

});