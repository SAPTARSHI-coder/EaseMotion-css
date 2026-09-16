const stars = document.querySelectorAll(".star");
const number = document.getElementById("rating-number");
const text = document.getElementById("rating-text");
const progress = document.getElementById("progress-fill");

const messages = {
1:"Needs Improvement",
2:"Fair",
3:"Good",
4:"Excellent",
5:"Outstanding ⭐"
};

let rating = 0;

function update(value){

stars.forEach((star,index)=>{
star.classList.toggle("active",index<value);
});

number.textContent=`${value} / 5`;
text.textContent=messages[value] || "Hover or tap a star to preview your rating.";
progress.style.width=`${value*20}%`;

}

stars.forEach(star=>{

star.addEventListener("mouseenter",()=>{
update(Number(star.dataset.value));
});

star.addEventListener("click",()=>{
rating=Number(star.dataset.value);
update(rating);
});

});

document.querySelector(".stars").addEventListener("mouseleave",()=>{
update(rating);
});

document.getElementById("submit-btn").addEventListener("click",()=>{

if(rating===0){
alert("Please select a rating.");
return;
}

alert(`Thanks! You rated ${rating}/5`);

});