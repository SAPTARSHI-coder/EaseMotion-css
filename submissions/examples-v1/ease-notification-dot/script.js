const addButton = document.getElementById("add-notification");
const clearButton = document.getElementById("clear-notifications");
const badgeWrap = document.getElementById("badge-wrap");
const badgePing = document.getElementById("badge-ping");
const badge = document.getElementById("notification-badge");
const announcement = document.getElementById("notification-announcement");

let notificationCount = 3;

function formatCount(value) {
  return value > 99 ? "99+" : String(value);
}

function updateAnnouncement(value) {
  announcement.textContent =
    value === 0
      ? "no unread notifications"
      : `${value} unread notification${value === 1 ? "" : "s"}`;
}

function triggerBadgePop() {
  badge.classList.remove("is-popped");
  void badge.offsetWidth;
  badge.classList.add("is-popped");
}

function updateBadge() {
  const isEmpty = notificationCount === 0;
  const displayValue = formatCount(notificationCount);

  badge.textContent = displayValue;
  badge.setAttribute(
    "aria-label",
    `${notificationCount} unread notification${notificationCount === 1 ? "" : "s"}`
  );
  updateAnnouncement(notificationCount);

  if (isEmpty) {
    badge.classList.add("is-hidden");
    badge.setAttribute("aria-hidden", "true");
    badgeWrap.classList.add("is-hidden");
  } else {
    badge.classList.remove("is-hidden");
    badge.setAttribute("aria-hidden", "false");
    badgeWrap.classList.remove("is-hidden");
    triggerBadgePop();
  }
}

function playPingAnimation() {
  badgePing.style.animation = "none";
  void badgePing.offsetWidth;
  badgePing.style.animation = "";
}

function addNotification() {
  notificationCount += 1;
  updateBadge();
  playPingAnimation();
}

function clearNotifications() {
  notificationCount = 0;
  updateBadge();
}

addButton.addEventListener("click", addNotification);
clearButton.addEventListener("click", clearNotifications);

updateBadge();
