const skeletonCards = document.querySelectorAll(".skeleton-card");

skeletonCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.setProperty(
            "--glow",
            "1"
        );

    });


    card.addEventListener("mouseleave", () => {

        card.style.setProperty(
            "--glow",
            "0"
        );

    });

});