const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const slider = document.getElementById("slider");

tabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        panels.forEach(p => p.classList.remove("active"));

        tab.classList.add("active");
        panels[index].classList.add("active");

        if (window.innerWidth > 768) {
            slider.style.left = `${8 + index * 25}%`;
        }

    });

});

window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
        slider.style.display = "none";
    } else {
        slider.style.display = "block";
        const active = document.querySelector(".tab.active");
        slider.style.left = `${8 + active.dataset.tab * 25}%`;
    }
});