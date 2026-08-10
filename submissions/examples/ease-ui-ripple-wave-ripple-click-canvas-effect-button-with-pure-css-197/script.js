const button=document.querySelector(".ripple-btn");

button.addEventListener("click",(e)=>{

const circle=document.createElement("span");

const rect=button.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

circle.style.width=size+"px";
circle.style.height=size+"px";

circle.style.left=e.clientX-rect.left-size/2+"px";
circle.style.top=e.clientY-rect.top-size/2+"px";

circle.style.position="absolute";
circle.style.borderRadius="50%";
circle.style.background="rgba(255,255,255,.35)";
circle.style.transform="scale(0)";
circle.style.animation="clickRipple .6s ease-out";
circle.style.pointerEvents="none";

button.appendChild(circle);

circle.addEventListener("animationend",()=>circle.remove());

});

const style=document.createElement("style");

style.textContent=`
@keyframes clickRipple{
to{
transform:scale(4);
opacity:0;
}
}
`;

document.head.appendChild(style);