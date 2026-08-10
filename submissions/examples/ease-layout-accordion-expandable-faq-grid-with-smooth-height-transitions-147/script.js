const items=document.querySelectorAll(".faq");

items.forEach(item=>{

const btn=item.querySelector(".question");

btn.addEventListener("click",()=>{

item.classList.toggle("active");

});

});