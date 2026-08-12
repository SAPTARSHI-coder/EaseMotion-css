const text = document.querySelector(".foil-text");


document.addEventListener("mousemove",(event)=>{

    const x = event.clientX / window.innerWidth;

    const y = event.clientY / window.innerHeight;


    text.style.transform =

    `
    perspective(500px)
    rotateX(${(0.5-y)*10}deg)
    rotateY(${(x-0.5)*10}deg)
    `;


});