const stack = document.querySelector(".stack");


stack.addEventListener("mousemove",(e)=>{

    const rect = stack.getBoundingClientRect();


    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;


    const rotateY =
    ((x / rect.width)-0.5) * 10;


    const rotateX =
    ((y / rect.height)-0.5) * -10;


    stack.style.transform = 
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});


stack.addEventListener("mouseleave",()=>{

    stack.style.transform =
    "rotateX(0) rotateY(0)";

});