const playBtn = document.getElementById("playBtn");

const status = document.getElementById("status");

const bars = document.querySelectorAll(".bar");


let playing = false;



playBtn.addEventListener("click",()=>{


    playing = !playing;


    if(playing){

        status.textContent = "Playing";

        playBtn.textContent = "⏸ Pause Wave";


        bars.forEach((bar)=>{

            bar.style.animationPlayState = "running";

        });


    }

    else{

        status.textContent = "Paused";

        playBtn.textContent = "▶ Play Wave";


        bars.forEach((bar)=>{

            bar.style.animationPlayState = "paused";

        });

    }


});



/* Initial state */

bars.forEach((bar)=>{

    bar.style.animationPlayState = "paused";

});