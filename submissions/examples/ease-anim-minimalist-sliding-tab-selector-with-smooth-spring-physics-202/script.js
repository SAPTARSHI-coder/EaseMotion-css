const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const slider = document.getElementById("slider");

tabs.forEach((tab,index)=>{

tab.addEventListener("click",()=>{

tabs.forEach(t=>t.classList.remove("active"));
panels.forEach(p=>p.classList.remove("active"));

tab.classList.add("active");
panels[index].classList.add("active");

if(window.innerWidth>768){
slider.style.left=`calc(${index*25}% + 8px)`;
}

});

});

window.addEventListener("resize",()=>{

if(window.innerWidth<=768){

slider.style.display="none";

}else{

slider.style.display="block";

const active=document.querySelector(".tab.active");

slider.style.left=`calc(${active.dataset.index*25}% + 8px)`;

}

});