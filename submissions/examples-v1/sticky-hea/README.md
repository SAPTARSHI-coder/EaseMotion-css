# Hardware-Accelerated Sticky Navigation Header (Cross-Browser Optimized)

A premium, glassmorphism sticky navigation header engineered for high-performance viewport scrolling. This component leverages GPU acceleration to eliminate layout thrashing and filter flickering loops, while including fallback vendor prefixes to guarantee stable positioning support on older iOS and Safari platforms.

## ✨ Features

* **GPU Promoted Layers:** Uses `will-change` and 3D transforms (`translateZ(0)`) to ensure ultra-smooth scrolling performance even with high-diffusion backdrop blurs.
* **Glassmorphism Design:** A sleek, modern aesthetic using subtle translucent backgrounds, border masks, and a high-diffusion backdrop blur filter.
* **Cross-Engine Compatibility:** Outfitted with the legacy WebKit vendor prefix (`position: -webkit-sticky;`) alongside standard sticky declarations to protect structural behavior across older Safari versions and mobile iOS devices.

## 📂 Submission Files

* `demo.html` — Self-contained interactive dark theme canvas used to verify sticky positioning behavior during active scroll conditions.
* `style.css` — High-performance style rules linking perfectly into relative framework token sheets.

## 🛠️ Class References

| Class Name | Description |
| :--- | :--- |
| `.alm-sticky-header` | The core navigation bar container layer pinned above canvas elements using cross-browser safe sticky parameters. |
| `.alm-nav-logo` | High-visibility branding logo typography container. |
| `.alm-nav-menu` | Flex layout configuration wrapper for header navigation links. |
| `.alm-nav-link` | Individual relative menu hyperlink anchors. |
| `.alm-scroll-canvas` | Main wrapper simulating structural scroll depth. |
| `.alm-dummy-section` | UI test panel container exhibiting gradient masks. |

## 🚀 Quick Usage Example

```html
<link rel="stylesheet" href="style.css">

<header class="alm-sticky-header">
  <div class="alm-nav-logo">⚡ EaseMotion</div>
  <nav>
    <ul class="alm-nav-menu">
      <li><a href="#" class="alm-nav-link">Home</a></li>
      <li><a href="#" class="alm-nav-link">Features</a></li>
    </ul>
  </nav>
</header>
