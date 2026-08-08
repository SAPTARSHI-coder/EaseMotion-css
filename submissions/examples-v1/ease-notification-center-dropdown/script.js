const bell = document.getElementById("notificationBell");
const dropdown = document.getElementById("notificationDropdown");
const markAllReadBtn = document.getElementById("markAllRead");
const countBadge = document.getElementById("notificationCount");

bell.addEventListener("click", () => {
    dropdown.classList.toggle("is-open");
});

markAllReadBtn.addEventListener("click", () => {

    const unreadItems =
        document.querySelectorAll(".is-unread");

    unreadItems.forEach(item => {
        item.classList.remove("is-unread");
    });

    countBadge.textContent = "0";
});

document.addEventListener("click", (event) => {

    if (
        !bell.contains(event.target) &&
        !dropdown.contains(event.target)
    ) {
        dropdown.classList.remove("is-open");
    }

});