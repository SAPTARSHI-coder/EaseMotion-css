/* ============================================================
   ease-toast — JavaScript
   Manages toast show/hide lifecycle.
   ============================================================ */

(function () {
  "use strict";

  function showToast(opts) {
    var container = opts.container || document.querySelector(".ease-toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "ease-toast-container ease-toast-top-right";
      document.body.appendChild(container);
    }

    var toast = document.createElement("div");
    toast.className = "ease-toast";
    if (opts.variant) toast.classList.add("ease-toast-" + opts.variant);

    if (opts.html) {
      toast.innerHTML = opts.html;
    } else {
      var body = document.createElement("div");
      body.className = "ease-toast-body";
      body.textContent = opts.message || "";
      toast.appendChild(body);

      var close = document.createElement("button");
      close.className = "ease-toast-close";
      close.innerHTML = "&times;";
      close.addEventListener("click", function () { dismiss(toast); });
      toast.appendChild(close);
    }

    container.appendChild(toast);

    var duration = opts.duration || 4000;
    if (duration > 0) {
      setTimeout(function () { dismiss(toast); }, duration);
    }

    return toast;
  }

  function dismiss(toast) {
    if (toast.classList.contains("ease-toast-out")) return;
    toast.classList.add("ease-toast-out");
    toast.addEventListener("animationend", function () { toast.remove(); });
  }

  window.easeToast = {
    show: showToast,
    dismiss: dismiss
  };
})();
