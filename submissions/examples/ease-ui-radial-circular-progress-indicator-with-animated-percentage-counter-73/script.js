const circle = document.querySelector(".bar");

const value = document.querySelector("#value");

const button = document.querySelector("#animate");


const radius = 85;

const circumference = 2 * Math.PI * radius;


circle.style.strokeDasharray = circumference;



button.addEventListener("click",()=>{

    let progress = 0;

    circle.style.strokeDashoffset = circumference;


    const timer = setInterval(()=>{


        progress++;


        value.textContent = progress;


        const offset =
        circumference -
        (progress / 100) * circumference;


        circle.style.strokeDashoffset = offset;



        if(progress >= 85){

            clearInterval(timer);

        }


    },20);


});