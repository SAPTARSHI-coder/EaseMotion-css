const cube=document.getElementById("cube");
const buttons=document.querySelectorAll(".controls button");

const rotations={
front:"rotateX(0deg) rotateY(0deg)",
back:"rotateY(180deg)",
right:"rotateY(-90deg)",
left:"rotateY(90deg)",
top:"rotateX(-90deg)",
bottom:"rotateX(90deg)"
};

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

cube.style.animation="none";
cube.style.transform=rotations[button.dataset.rotate];

});

});