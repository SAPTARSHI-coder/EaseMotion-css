# Responsive Floating Label Input with Gradient Glow Styling

> Issue: [#81517](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/81517) / [#39036](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/39036)

A responsive floating label input component featuring an ambient gradient glow border effect on focus and input entry.

---

## ✨ Features & Architectural Highlights

- **Zero-JS State Management:** Pure CSS floating label transitions using `:focus` and `:not(:placeholder-shown)`.
- **Gradient Glow Border:** High-contrast linear gradient border glow powered by `:focus-within` and `:has()`.
- **Accessible & Responsive:** Adapts seamlessly across viewports with `@media (prefers-reduced-motion: reduce)` support.

---

## 🚀 Usage

1. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css" />
   ```
2. Use the HTML structure provided in `demo.html`.

---

## 📂 File Summary

- `demo.html` — Self-contained HTML demo page.
- `style.css` — Custom gradient glow floating label input styles.
- `README.md` — Technical documentation.
