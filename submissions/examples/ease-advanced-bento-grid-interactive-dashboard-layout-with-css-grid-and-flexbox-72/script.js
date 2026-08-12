const cards = document.querySelectorAll(".card");


cards.forEach((card)=>{

    card.addEventListener("mousemove",(event)=>{

        const rect = card.getBoundingClientRect();

        const x =
        event.clientX - rect.left;

        const y =
        event.clientY - rect.top;


        card.style.setProperty(
            "--x",
            `${x}px`
        );


        card.style.setProperty(
            "--y",
            `${y}px`
        );

    });


    card.addEventListener("mouseleave",()=>{

        card.style.removeProperty("--x");

        card.style.removeProperty("--y");

    });


});