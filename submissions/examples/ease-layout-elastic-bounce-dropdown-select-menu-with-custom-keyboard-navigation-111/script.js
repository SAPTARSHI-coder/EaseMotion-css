const dropdown=document.querySelector(".dropdown");
const button=document.querySelector(".dropdown-btn");
const items=document.querySelectorAll(".menu li");

button.onclick=()=>{

dropdown.classList.toggle("active");

};

items.forEach(item=>{

item.onclick=()=>{

button.firstChild.textContent=item.textContent+" ";

dropdown.classList.remove("active");

};

});

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

dropdown.classList.remove("active");

}

});