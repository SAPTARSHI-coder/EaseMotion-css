const input = document.getElementById("searchInput");

const cards = document.querySelectorAll(".doc-card");

const noResult = document.getElementById("noResult");

function highlight(text, keyword) {

    if (keyword === "") return text;

    const regex = new RegExp(`(${keyword})`, "gi");

    return text.replace(regex, "<mark>$1</mark>");

}

function searchDocs() {

    const value = input.value.trim().toLowerCase();

    let found = false;

    cards.forEach(card => {

        const title = card.querySelector("h2");

        const desc = card.querySelector("p");

        const titleText = title.textContent;

        const descText = desc.textContent;

        const combined = (titleText + " " + descText).toLowerCase();

        if (combined.includes(value)) {

            card.style.display = "block";

            found = true;

            title.innerHTML = highlight(titleText, value);

            desc.innerHTML = highlight(descText, value);

        }

        else {

            card.style.display = "none";

        }

    });

    noResult.classList.toggle("hide", found);

}

input.addEventListener("input", searchDocs);

document.addEventListener("keydown", function (e) {

    if ((e.ctrlKey && e.key === "k") || e.key === "/") {

        e.preventDefault();

        input.focus();

    }

});