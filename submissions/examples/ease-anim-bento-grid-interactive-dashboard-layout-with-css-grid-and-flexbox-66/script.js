const cards = document.querySelectorAll(".card");


cards.forEach((card)=>{


    card.addEventListener("mousemove",(event)=>{

        const rect = card.getBoundingClientRect();


        const x =
        event.clientX - rect.left;


        const y =
        event.clientY - rect.top;


        const rotateX =
        ((y / rect.height) - 0.5) * -8;


        const rotateY =
        ((x / rect.width) - 0.5) * 8;



        card.style.transform =

        `
        perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        `;


    });



    card.addEventListener("mouseleave",()=>{


        card.style.transform =

        "translateY(0)";


    });


});