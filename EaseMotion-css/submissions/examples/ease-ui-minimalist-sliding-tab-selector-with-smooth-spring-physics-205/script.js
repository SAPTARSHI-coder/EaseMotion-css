const tabs=document.querySelectorAll(".tab");
const indicator=document.querySelector(".indicator");

tabs.forEach((tab,index)=>{

tab.addEventListener("click",()=>{

tabs.forEach(t=>t.classList.remove("active"));

tab.classList.add("active");

indicator.style.transform=`translateX(${index*100}%)`;

});

});