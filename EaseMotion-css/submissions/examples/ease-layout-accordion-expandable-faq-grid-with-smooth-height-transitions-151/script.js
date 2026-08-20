document.querySelectorAll(".faq").forEach(item=>{

const button=item.querySelector(".question");

button.onclick=()=>{

item.classList.toggle("active");

};

});