const banner = document.getElementById("cookieBanner");

if (!localStorage.getItem("cookieConsent")) {
  requestAnimationFrame(() => banner.classList.add("show"));
}

document.getElementById("cookieAccept").addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "accepted");
  banner.classList.remove("show");
});

document.getElementById("cookieDecline").addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "declined");
  banner.classList.remove("show");
});
