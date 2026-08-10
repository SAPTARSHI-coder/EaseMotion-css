const showToast = document.querySelector("#showToast");

const closeToast = document.querySelector("#closeToast");

const toast = document.querySelector("#toast");


let timer;



function openToast(){

    toast.classList.add("show");


    clearTimeout(timer);


    timer = setTimeout(()=>{

        closeNotification();

    },4000);

}



function closeNotification(){

    toast.classList.remove("show");

}



showToast.addEventListener(
    "click",
    openToast
);



closeToast.addEventListener(
    "click",
    closeNotification
);