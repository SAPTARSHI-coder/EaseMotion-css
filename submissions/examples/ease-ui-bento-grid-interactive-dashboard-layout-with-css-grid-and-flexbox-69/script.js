const button = document.querySelector("#animate");

const cards = document.querySelectorAll(".box");


button.addEventListener("click",()=>{


    cards.forEach((card,index)=>{


        setTimeout(()=>{


            card.classList.remove("animate");


            void card.offsetWidth;


            card.classList.add("animate");


        },index * 100);


    });


});