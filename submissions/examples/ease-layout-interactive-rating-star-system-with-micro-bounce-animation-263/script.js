const stars=document.querySelectorAll(".star");
const ratingNumber=document.getElementById("rating-number");
const ratingText=document.getElementById("rating-text");
const progress=document.getElementById("progress-fill");
const reset=document.getElementById("reset-btn");

const labels=[
"",
"Poor",
"Fair",
"Good",
"Very Good",
"Excellent"
];

let current=0;

function updateRating(value){

current=value;

stars.forEach((star,index)=>{

star.classList.toggle("active",index<value);

});

ratingNumber.textContent=`${value} / 5`;
ratingText.textContent=labels[value];
progress.style.width=`${value*20}%`;

}

stars.forEach(star=>{

star.addEventListener("click",()=>{

updateRating(Number(star.dataset.value));

});

});

reset.addEventListener("click",()=>{

updateRating(0);
ratingText.textContent="Choose your rating.";

});