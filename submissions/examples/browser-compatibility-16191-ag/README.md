# Browser Compatibility Matrix

This submission triages and resolves the compatibility table rendering issues by providing a properly structured Markdown table matrix alongside a real-time CSS feature-detection playground.

---

## Compatibility Matrix

Below is the verified browser support matrix for key modern CSS features utilized across the EaseMotion CSS library:

| Feature | Chrome / Edge | Safari | Firefox | Fallback Behavior |
| :--- | :--- | :--- | :--- | :--- |
| **Grid Subgrid** | 104+ | 16+ | 71+ | Standard Grid wrap |
| **Scroll Timelines** | 115+ | 17+ | 120+ | Standard scrolling |
| **Backdrop Filter** | 76+ | 9+ | 70+ | solid color opacity |
| **preserve-3d** | 36+ | 9+ | 16+ | Flat 2D transformations |

---

## Verification Steps

1. Open `demo.html` in your browser.
2. The grid cards will dynamically inspect support using CSS `@supports` selectors.
3. Verify that features supported by your browser display `Supported` in green, while unsupported features display `Unsupported` in red.
