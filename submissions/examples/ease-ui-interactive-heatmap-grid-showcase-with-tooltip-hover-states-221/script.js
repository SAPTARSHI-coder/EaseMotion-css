const cells = document.querySelectorAll(".cell");


cells.forEach((cell)=>{

    const value = cell.dataset.value;


    cell.style.setProperty(
        "--value",
        value
    );


    cell.addEventListener("mouseenter",()=>{

        cell.setAttribute(
            "aria-label",
            `Activity ${value}%`
        );

    });


});