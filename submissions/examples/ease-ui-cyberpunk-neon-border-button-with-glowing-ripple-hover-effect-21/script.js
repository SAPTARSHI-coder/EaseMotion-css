const button = document.querySelector(".neon-btn");

const ripple = document.querySelector(".ripple");


button.addEventListener("click", (event)=>{


    const rect = button.getBoundingClientRect();


    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;



    ripple.style.left = `${x}px`;

    ripple.style.top = `${y}px`;



    button.classList.remove("active");


    void button.offsetWidth;


    button.classList.add("active");



});