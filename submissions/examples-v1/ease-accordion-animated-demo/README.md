# Animated Accordion Component (`ease-accordion-animated-demo`)

A pure CSS, JavaScript-free accordion and collapsible component that uses the modern CSS Grid `0fr -> 1fr` technique for flawlessly smooth dynamic height transitions.

## 🚀 Features & EaseMotion Showcase

- **Zero JavaScript**: No messy event listeners or `Element.scrollHeight` calculations required. Uses the native `<input type="checkbox">` hack combined with CSS Grid.
- **Dynamic Height Animation**: Unlike legacy `max-height` hacks that caused timing glitches, animating `grid-template-rows: 0fr` to `1fr` allows the browser to interpolate the exact height perfectly.
- **Accessible & Customizable**: Fully keyboard navigable (thanks to hidden input focus) and easily themed via CSS variables (`--ease-accordion-duration`, `--ease-accordion-border`, etc.).

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

### Basic Structure

```html
<div class="ease-accordion">
  <div class="ease-accordion__item">
    <!-- 1. Hidden Toggle -->
    <input type="checkbox" id="item-1" class="ease-accordion__toggle" />

    <!-- 2. Clickable Header -->
    <label for="item-1" class="ease-accordion__header">
      <span>Section Title</span>
      <svg class="ease-accordion__icon">...</svg>
    </label>

    <!-- 3. Grid Animating Wrapper -->
    <div class="ease-accordion__content-wrapper">
      <div class="ease-accordion__body">
        <p>Your content here. Can be any dynamic height!</p>
      </div>
    </div>
  </div>
</div>
```
