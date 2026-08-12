const card = document.querySelector(".zoom-card");

const observer = new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{

        card.style.setProperty(
            "--ease-zoom-progress",
            entry.intersectionRatio
        );

    });

},
{
    threshold:[0,0.25,0.5,0.75,1]
});

observer.observe(card);