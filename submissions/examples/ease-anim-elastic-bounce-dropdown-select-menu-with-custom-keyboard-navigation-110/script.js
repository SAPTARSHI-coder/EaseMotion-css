const dropdown=document.querySelector(".dropdown");
const button=document.querySelector(".select-btn");
const items=document.querySelectorAll(".menu li");

button.addEventListener("click",()=>{

dropdown.classList.toggle("active");

});

items.forEach(item=>{

item.addEventListener("click",()=>{

button.firstChild.textContent=item.textContent+" ";

dropdown.classList.remove("active");

});

});

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

dropdown.classList.remove("active");

}

});