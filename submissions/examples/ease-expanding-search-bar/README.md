# CSS-Only Expanding Search Bar (`ease-expanding-search-bar`)

A sleek, minimalistic search input that seamlessly expands from a circular icon into a full text bar using strictly CSS (no JavaScript). 

## 🚀 Features

- **Zero-JS**: Powered entirely by the CSS `:focus-within` and `:hover` pseudo-classes.
- **Fluid Animation**: Uses `cubic-bezier(0.4, 0, 0.2, 1)` for a premium, non-linear expansion curve.
- **Accessible**: Includes an `.sr-only` label for screen readers. The `pointer-events: none` on the SVG icon ensures clicking the icon correctly focuses the underlying input.
- **Dark Mode Support**: Uses `prefers-color-scheme` to automatically adapt the color tokens to dark environments.
- **Reduced Motion**: Respects OS-level accessibility settings by disabling the width transition for users who prefer reduced motion.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. 

### How it works

The core trick relies on setting a fixed closed width on the container, and hiding the input's text using `opacity: 0` and `cursor: pointer`. When the user clicks the container, the input receives focus. We detect this using `.ease-search-container:focus-within`, which triggers the container to expand its width to `280px` and reveals the input's text natively!

## 🔗 Related Issue
Resolves Issue #17777
