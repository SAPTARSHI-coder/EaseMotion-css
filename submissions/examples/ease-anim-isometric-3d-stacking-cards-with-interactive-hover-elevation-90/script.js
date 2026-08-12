const stack = document.querySelector(".stack");


stack.addEventListener("mousemove",(e)=>{

    const x = e.clientX / window.innerWidth;

    const y = e.clientY / window.innerHeight;


    stack.style.transform =

    `
    rotateX(${50 - y * 15}deg)
    rotateZ(${-35 + x * 20}deg)
    translateY(-20px)
    `;


});


stack.addEventListener("mouseleave",()=>{


    stack.style.transform =

    `
    rotateX(55deg)
    rotateZ(-35deg)
    `;


});