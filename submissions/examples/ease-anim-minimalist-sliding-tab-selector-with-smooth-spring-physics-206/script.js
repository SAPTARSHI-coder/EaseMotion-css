const tabs=document.querySelectorAll(".tab");
const indicator=document.querySelector(".indicator");

tabs.forEach((tab,index)=>{

tab.onclick=()=>{

document.querySelector(".tab.active").classList.remove("active");

tab.classList.add("active");

indicator.style.transform=`translateX(${index*130}px)`;

if(window.innerWidth<=768){

indicator.style.transform=`translateX(${index*95}px)`;

}

};

});