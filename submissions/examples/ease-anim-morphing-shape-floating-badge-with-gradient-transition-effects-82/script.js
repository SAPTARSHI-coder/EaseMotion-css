const badge = document.querySelector(".badge");


badge.addEventListener("mousemove",(e)=>{

    const rect = badge.getBoundingClientRect();


    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;


    const rotateY =
    ((x / rect.width)-0.5) * 20;


    const rotateX =
    ((y / rect.height)-0.5) * -20;



    badge.style.transform =

    `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;


});


badge.addEventListener("mouseleave",()=>{

    badge.style.transform =
    "rotateX(0deg) rotateY(0deg)";

});