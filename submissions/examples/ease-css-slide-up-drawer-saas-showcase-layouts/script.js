const cards = document.querySelectorAll(".card");


cards.forEach((card)=>{

    card.addEventListener("focusin",()=>{

        card.classList.add("active");

    });


    card.addEventListener("focusout",()=>{

        card.classList.remove("active");

    });


});