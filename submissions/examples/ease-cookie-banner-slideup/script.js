document.addEventListener("DOMContentLoaded", () => {

    const banner = document.getElementById("cookieBanner");
    const acceptBtn = document.getElementById("acceptCookies");
    const declineBtn = document.getElementById("declineCookies");

    const COOKIE_KEY = "ease-cookie-consent";

    // Show banner only if user hasn't made a choice
    if (!localStorage.getItem(COOKIE_KEY)) {

        setTimeout(() => {
            banner.classList.add("show");
        }, 400);

    }

    function saveChoice(choice) {

        localStorage.setItem(COOKIE_KEY, choice);

        banner.classList.remove("show");

    }

    acceptBtn.addEventListener("click", () => {
        saveChoice("accepted");
    });

    declineBtn.addEventListener("click", () => {
        saveChoice("declined");
    });

});