const showToast = document.querySelector("#showToast");

const closeToast = document.querySelector("#closeToast");

const toast = document.querySelector("#toast");


let dismissTimer;



function showNotification(){

    toast.classList.add("show");


    clearTimeout(dismissTimer);


    dismissTimer = setTimeout(()=>{

        hideNotification();

    },4000);

}



function hideNotification(){

    toast.classList.remove("show");

}



showToast.addEventListener(
    "click",
    showNotification
);



closeToast.addEventListener(
    "click",
    hideNotification
);