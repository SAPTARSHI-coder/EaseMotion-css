const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {

    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {

        accordionItems.forEach(acc => {
            if(acc !== item){
                acc.classList.remove("active");
            }
        });

        item.classList.toggle("active");

    });

});
