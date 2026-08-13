const cards = document.querySelectorAll(".card");
const resetBtn = document.querySelector(".reset-btn");


cards.forEach((card)=>{

    card.addEventListener("mousemove",(event)=>{

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;


        const rotateX =
        ((y / rect.height) - 0.5) * 18;


        const rotateY =
        ((x / rect.width) - 0.5) * 18;


        card.style.transform = `
            translateY(-40px)
            rotateX(${ -rotateX }deg)
            rotateY(${ rotateY }deg)
            scale(1.08)
        `;


    });



    card.addEventListener("mouseleave",()=>{

        card.style.transform = "";

    });


});



resetBtn.addEventListener("click",()=>{

    cards.forEach((card)=>{

        card.style.transform = "";

    });

});