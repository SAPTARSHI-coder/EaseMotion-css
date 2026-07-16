# Standardized Z-Index Scale (`ease-z-index-scale`)

A demonstration of resolving stacking context bugs by migrating arbitrary `z-index` numbers into a standardized, predictable CSS variable scale.

## 🚀 Features & EaseMotion Showcase

- **Predictable Stacking Context**: Hardcoding `z-index: 9999` is a classic CSS anti-pattern that leads to "z-index wars" between components. By providing a fixed scale (`--em-z-sticky`, `--em-z-modal`, `--em-z-tooltip`), developers know exactly where their component lives in the 3D depth of the page.
- **Architectural Proposal**: This submission proposes adding this scale to `core/variables.css`. To pass the automated EaseMotion PR checks without modifying `core/` files, the variables are demonstrated locally inside this specific example's `style.css`.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

The proposed variable scale:
```css
:root {
  --em-z-hide: -1;
  --em-z-base: 0;
  --em-z-dropdown: 50;
  --em-z-sticky: 100;
  --em-z-overlay: 900;
  --em-z-modal: 1000;
  --em-z-tooltip: 1050;
}
