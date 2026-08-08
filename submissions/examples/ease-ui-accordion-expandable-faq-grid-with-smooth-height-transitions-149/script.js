document.querySelectorAll(".faq").forEach(item=>{

item.querySelector(".question").onclick=()=>{

item.classList.toggle("active");

};

});