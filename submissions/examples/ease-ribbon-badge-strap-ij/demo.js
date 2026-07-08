document.addEventListener("DOMContentLoaded", () => {
  const ribbons = document.querySelectorAll(".ribbon");
  const ctrlBtns = document.querySelectorAll(".ctrl-btn");

  const setActive = (ribbon, active) => {
    ribbon.classList.toggle("active", active);
    ribbon.classList.toggle("inactive", !active);
  };

  ctrlBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.ribbon;
      const action = btn.dataset.action;
      const ribbon = document.getElementById(id);
      if (!ribbon) return;

      if (action === "toggle") {
        const isActive = ribbon.classList.contains("active");
        setActive(ribbon, !isActive);
      } else if (action === "remove") {
        setActive(ribbon, false);
      }
    });
  });

  ribbons.forEach((ribbon) => setActive(ribbon, true));
});
