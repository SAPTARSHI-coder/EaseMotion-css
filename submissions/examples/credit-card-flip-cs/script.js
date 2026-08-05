(() => {
  "use strict";

  const card = document.querySelector("#creditCard");
  const flipControl = document.querySelector("#flipControl");
  const paymentForm = document.querySelector("#paymentForm");
  const formStatus = document.querySelector("#formStatus");

  const inputs = {
    number: document.querySelector("#cardNumber"),
    name: document.querySelector("#cardName"),
    expiry: document.querySelector("#cardExpiry"),
    cvv: document.querySelector("#cardCvv")
  };

  const previews = {
    number: document.querySelector("#cardNumberPreview"),
    name: document.querySelector("#cardNamePreview"),
    expiry: document.querySelector("#cardExpiryPreview"),
    cvv: document.querySelector("#cardCvvPreview"),
    brand: document.querySelector("#cardBrand"),
    brandBack: document.querySelector("#cardBrandBack")
  };

  const digitsOnly = (value) => value.replace(/\D/g, "");

  const formatCardNumber = (value) => {
    return digitsOnly(value)
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  const formatExpiry = (value) => {
    const digits = digitsOnly(value).slice(0, 4);

    if (digits.length < 3) {
      return digits;
    }

    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  };

  const detectBrand = (number) => {
    const digits = digitsOnly(number);

    if (/^4/.test(digits)) return "VISA";
    if (/^(5[1-5]|2[2-7])/.test(digits)) return "MASTERCARD";
    if (/^3[47]/.test(digits)) return "AMEX";
    if (/^6(?:011|5)/.test(digits)) return "DISCOVER";
    return "CARD";
  };

  const setFlipped = (shouldFlip) => {
    card.classList.toggle("is-flipped", shouldFlip);
    flipControl.setAttribute("aria-pressed", String(shouldFlip));
    flipControl.textContent = shouldFlip ? "Show card front" : "Show card back";
  };

  inputs.number.addEventListener("input", (event) => {
    const formatted = formatCardNumber(event.target.value);
    const brand = detectBrand(formatted);

    event.target.value = formatted;
    previews.number.textContent = formatted || "•••• •••• •••• ••••";
    previews.brand.textContent = brand;
    previews.brandBack.textContent = brand;
  });

  inputs.name.addEventListener("input", (event) => {
    const normalizedName = event.target.value
      .replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ' -]/g, "")
      .replace(/\s{2,}/g, " ")
      .toUpperCase();

    event.target.value = normalizedName;
    previews.name.textContent = normalizedName.trim() || "YOUR NAME";
  });

  inputs.expiry.addEventListener("input", (event) => {
    const formatted = formatExpiry(event.target.value);
    event.target.value = formatted;
    previews.expiry.textContent = formatted || "MM/YY";
  });

  inputs.cvv.addEventListener("input", (event) => {
    const digits = digitsOnly(event.target.value).slice(0, 4);
    event.target.value = digits;
    previews.cvv.textContent = digits || "•••";
  });

  inputs.cvv.addEventListener("focus", () => setFlipped(true));

  inputs.cvv.addEventListener("blur", (event) => {
    if (!event.relatedTarget?.matches("#flipControl")) {
      setFlipped(false);
    }
  });

  flipControl.addEventListener("click", () => {
    setFlipped(!card.classList.contains("is-flipped"));
  });

  card.addEventListener("pointerdown", () => {
    card.classList.add("is-touching");
  });

  card.addEventListener("pointerup", () => {
    window.setTimeout(() => card.classList.remove("is-touching"), 700);
  });

  card.addEventListener("pointercancel", () => {
    card.classList.remove("is-touching");
  });

  paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Preview updated — no payment data was submitted.";

    window.setTimeout(() => {
      formStatus.textContent = "";
    }, 3200);
  });
})();
