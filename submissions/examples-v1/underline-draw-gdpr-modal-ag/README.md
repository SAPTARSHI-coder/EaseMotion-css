# Underline Draw GDPR Modal

A sleek, responsive, Dark Mode-inspired GDPR modal that leverages the `.ease-underline-draw` animation for interactive action links.

## 🌟 What is this?
This component provides a robust boilerplate for a Cookie/GDPR consent banner. It implements an elegant `underline-draw` hover effect on the action links, delivering a premium feel using only CSS.

## 🛠️ How it uses EaseMotion CSS
This component strictly adheres to the EaseMotion CSS architecture:
- **Design Tokens:** Relies entirely on `var(--ease-color-neutral-*)`, `var(--ease-space-*)`, and `var(--ease-radius-*)` for consistent spacing and colors.
- **Motion First:** Implements a buttery smooth `scaleX` transition on the `::after` pseudo-element, perfectly timed using `var(--ease-speed-medium)` and `var(--ease-ease)`.
- **Pure CSS:** Zero JavaScript required. It is responsive via standard CSS media queries.

## 🚀 How to use it

1. Ensure the core EaseMotion CSS framework is linked in your HTML.
2. Add the component's HTML to the bottom of your `<body>`.

```html
<div class="ease-gdpr-modal">
  <div class="ease-gdpr-content">
    <h3 class="ease-gdpr-title">We value your privacy</h3>
    <p class="ease-gdpr-text">
      We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
    </p>
  </div>
  <div class="ease-gdpr-actions">
    <a href="#" class="ease-gdpr-link ease-underline-draw">Decline</a>
    <a href="#" class="ease-gdpr-link ease-underline-draw ease-gdpr-primary">Accept All</a>
  </div>
</div>
```

3. Include the `style.css` provided in this directory to enable the `.ease-gdpr-modal` layout and `.ease-underline-draw` hover utility.

## 📱 Responsiveness
The modal is fixed to the bottom of the viewport. On mobile devices, it stacks vertically. On tablets and desktops (width >= 768px), it aligns the text and action links horizontally.
