# EaseMotion — Sticky Header Sandbox

A lightweight, hardware-accelerated sticky navigation header featuring a premium glassmorphism effect. This sandbox demonstrates how to implement a flawless `backdrop-filter` that remains smooth during scrolling, specifically resolving common repainting and flickering artifacts in WebKit (Safari/iOS) and Firefox browsers.

## 🚀 Features

* **Premium Glass Surface:** Utilizes `backdrop-filter: blur(12px)` combined with semi-transparent backgrounds and borders for a modern UI aesthetic.
* **Hardware Acceleration:** Forces GPU layer promotion using `transform: translateZ(0)` and `perspective: 1000px` to ensure silky-smooth scrolling.
* **Stability Patches:** Incorporates `backface-visibility: hidden` and `will-change` to prevent browser paint-loop flickering and preserve filter integrity.
* **Zero Dependencies:** Pure HTML and CSS. No JavaScript required.
* **Custom Properties (Variables):** Built with a clean CSS variable architecture for easy theming and spacing adjustments.

## 📁 Project Structure

* `demo.html`: The main demonstration file containing the layout and long-scroll canvas to test the sticky behavior.
* `style.css`: The primary stylesheet containing the core component rules and hardware-acceleration patches.

## 🛠️ Usage

1. Clone or download the files to your local machine.
2. Open `demo.html` in any modern web browser (Chrome, Safari, Firefox, Edge).
3. Scroll up and down the page to observe the sticky header. Notice how the glass blur effect smoothly filters the text beneath it without visual jitter.

## 🧠 Technical Highlights

Creating a sticky header with `backdrop-filter` often introduces rendering bugs on certain browsers. The core of this component relies on a highly optimized CSS stack applied to the `.alm-sticky-header` class to guarantee stability:

```css
/* High-Diffusion Backdrop Blur */
-webkit-backdrop-filter: blur(12px);
backdrop-filter: blur(12px);

/* Stability Patches */
-webkit-backface-visibility: hidden;
backface-visibility: hidden;

/* GPU Layer Promotion */
will-change: transform, backdrop-filter;
transform: translateZ(0);
perspective: 1000px;
