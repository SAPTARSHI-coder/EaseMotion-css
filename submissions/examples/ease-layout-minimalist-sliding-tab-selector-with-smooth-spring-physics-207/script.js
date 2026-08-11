const tabs=document.querySelectorAll(".tab");
const indicator=document.querySelector(".indicator");

tabs.forEach((tab,index)=>{

tab.onclick=()=>{

document.querySelector(".active").classList.remove("active");

tab.classList.add("active");

if(window.innerWidth>520){

const width=window.innerWidth<=768?105:140;

indicator.style.transform=`translateX(${index*width}px)`;

}

};

});