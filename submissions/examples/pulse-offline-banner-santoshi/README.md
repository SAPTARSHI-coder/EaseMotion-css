# Pulse Offline Banner

A modern connection-status banner for EaseMotion CSS that alerts users when they've lost their internet connection, with a slow radar-style pulse animation behind the warning icon. Built entirely with HTML and CSS — no JavaScript required for the component's appearance or animation.

## 🧩 Project Overview

When a user's connection drops, they need to notice it quickly but without feeling alarmed. This banner uses a warm red-to-orange gradient (rather than a harsh pure red) and a gentle, continuous pulse — two rings expanding and fading behind the icon, offset in time so the motion never resets abruptly. The result reads as "actively searching for a signal" rather than a jarring error flash.

This is a static presentational demo of the banner's appearance and motion. Wiring it up to real connectivity events (`window.addEventListener('offline', ...)` / `navigator.onLine`) in a production app is a small addition left to the consuming project, since that logic is app-specific rather than part of the visual component.

## ✨ Features

- Responsive offline notification banner, centered and card-based
- Continuous radar-style pulse animation using two time-offset expanding rings
- Warm red-to-orange warning theme with a glowing icon badge
- Rounded corners and a soft, layered drop shadow
- Smooth fade-in entrance animation (`ease-fade-in` utility class)
- Semantic, accessible markup: `role="alert"` and `aria-live="assertive"` so screen readers announce the banner immediately
- Real `<button>` for the Retry action, fully keyboard operable with a visible focus ring
- `prefers-reduced-motion` support disables the pulse and fade-in for users who request it
- Fully responsive across desktop, tablet, and mobile

## 🛠 Technologies Used

- HTML5 (semantic `<section role="alert">`, inline SVG icon)
- CSS3 (Flexbox, custom properties, keyframe animations, media queries)
- Google Fonts: Poppins (heading), Inter (body text)
- No JavaScript, no external UI frameworks

## 📁 Folder Structure

submissions/examples/pulse-offline-banner-santoshi/
├── demo.html   # Banner markup with an inline SVG offline icon
├── style.css   # Design tokens, pulse animation, fade-in, responsive rules
└── README.md   # This file

## ⚙ Installation

No build tools or dependencies are required — this is a static HTML/CSS component.

```bash
# Clone the repository
git clone https://github.com/your-username/easemotion-css.git

# Navigate to this component's folder
cd easemotion-css/submissions/examples/pulse-offline-banner-santoshi

# Open the demo directly in your browser
open demo.html   # macOS
# or
start demo.html  # Windows
```

## 🚀 Usage

1. Open `demo.html` in any modern browser to preview the banner as-is.
2. To use it in a real app, copy the `.offline-banner` markup and `style.css` rules into your project.
3. Toggle the banner's visibility (e.g. `display: none` / `flex`) from your own connectivity-detection JavaScript when the `offline` / `online` window events fire — the component itself only needs to be shown or hidden, no other logic is required.
4. Wire the **Retry** button's click handler to your app's reconnect/reload logic.

## 📸 Screenshots

<details>
<summary>🖼 Offline banner with pulse animation (click to expand)</summary>

_Add a screenshot of the banner here._

</details>

## 🚀 Future Improvements

- Auto-hide with a matching fade-out once connectivity is restored
- A "Reconnecting..." intermediate state while a retry is in progress
- An online-restored success banner variant using a green/teal palette
- Optional toast-style positioning (top or bottom of viewport) as an alternative to the centered card layout

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.