# CSS-Only Animated Tooltip (`ease-animated-tooltip`)

A lightweight, purely CSS-powered tooltip component featuring smooth fade and slide-in animations with a directional arrow. 

## 🚀 Features & EaseMotion Showcase

- **Zero JavaScript**: Entirely driven by CSS `:hover` and `:focus-within` states.
- **Directional Modifiers**: Includes 4 directional modifiers (`--top`, `--bottom`, `--left`, `--right`).
- **Smooth Animations**: Uses a clean `opacity` and `transform` transition to softly fade and slide into place.
- **Accessible**: Triggered by both mouse hover and keyboard focus (`:focus-within`).
- **CSS Custom Properties**: Fully customizable through variables.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is at the top of the `style.css` file.

```html
<!-- Wrap your trigger element and tooltip inside a parent -->
<div class="ease-tooltip-parent">
  <button>Hover me</button>
  <div class="ease-tooltip ease-tooltip--top" role="tooltip">
    I am a tooltip!
  </div>
</div>
