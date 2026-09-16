const button = document.querySelector(".ripple-btn");


button.addEventListener("click", (event)=>{


    const rect = button.getBoundingClientRect();


    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;



    button.style.setProperty("--x", `${x}px`);

    button.style.setProperty("--y", `${y}px`);



    button.classList.remove("active");


    void button.offsetWidth;


    button.classList.add("active");



});