# Magnetic Button Component – EaseMotion CSS

A premium, interactive call-to-action button that follows the cursor on hover. Uses vanilla JavaScript to track relative mouse coordinates and CSS transitions to snap back smoothly on mouseleave.

Located in: `submissions/examples/ease-magnetic-button/`

---

## Overview

A magnetic button follows the user's cursor when they hover close to it, giving the UI a tactile, physical quality.

1. **Outer Capture Zone:** The component is wrapped inside a slightly padded container (`.ease-magnetic-wrap`). This expands the active hover area, attracting the cursor before it physically touches the button border.
2. **Inner Parallax Depth:** The button body follows the cursor with standard strength (max displacement of `18px`), while the text and icons float slower (max displacement of `8px`). This difference in translation speeds creates a 3D parallax depth effect.
3. **No-Lag Transitions:** Leverages a CSS transition speed split: it tracks the cursor quickly with a `100ms` transition on hover, and snaps back elastically over a smooth `600ms` transition when the mouse leaves.

---

## Features

- **Parallax Feedback:** Text/icons move independently of the button body.
- **Micro-Responsive:** Follows the mouse dynamically and snaps back when the cursor leaves.
- **Multiple Preset Designs:** Includes `Primary Solid`, `Success Solid`, `Outline Glow`, `Dark Slate`, and `Glassmorphism` themes.
- **FAB Support:** Pre-styled for perfectly circular Floating Action Buttons (FAB).
- **Responsive & Lightweight:** Optimized event listener logic cache DOM references, rendering efficiently with zero lag.

---

## How It Works

1. **Capture Wrapper:** The container `.ease-magnetic-wrap` has transparent padding and registers mouse movements.
2. **Distance Calculation:** As the cursor moves over the wrapper, we calculate the coordinate displacement from the center of the element:
   ```javascript
   const rect = wrap.getBoundingClientRect();
   const relX = clientX - (rect.left + rect.width / 2);
   const relY = clientY - (rect.top + rect.height / 2);
   ```
3. **Relative Displacement:** We normalize this offset between `-1` and `1` relative to the bounds and translate the elements using inline styles:
   ```javascript
   const xRatio = relX / (rect.width / 2);
   btn.style.transform = `translate(${xRatio * btnStrength}px, ...)`;
   ```
4. **Transition duration Toggle:** During hover, CSS updates the transform transitions to a fast speed (`100ms`). On mouseleave, the inline styles are cleared and the default slow transitions (`600ms`) smooth the return to the origin.

---

## Usage

### 1. HTML Markup

Wrap the button in a capture container with the corresponding class names:

```html
<div class="ease-magnetic-wrap">
  <button class="ease-magnetic-btn">
    <span class="ease-magnetic-content">
      Click Me
    </span>
  </button>
</div>
```

To use other visual styles, append the helper modifier classes to the button:
- Success Solid: `.ease-btn-success`
- Dark Charcoal: `.ease-btn-dark`
- Outline Glow: `.ease-btn-outline-glow`
- Glassmorphism: `.ease-btn-glass`
- Circle FAB: `.ease-btn-circle`

### 2. JavaScript Integration

Add the following tracking script at the bottom of the body (before `</body>`):

```javascript
document.querySelectorAll('.ease-magnetic-wrap').forEach(wrap => {
  const btn = wrap.querySelector('.ease-magnetic-btn');
  const content = wrap.querySelector('.ease-magnetic-content');

  wrap.addEventListener('mousemove', function(e) {
    const rect = wrap.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);

    const btnStrength = 18;      // Max button translation range (px)
    const contentStrength = 8;   // Max content translation range (px)

    const xRatio = relX / (rect.width / 2);
    const yRatio = relY / (rect.height / 2);

    btn.style.transform = `translate(${xRatio * btnStrength}px, ${yRatio * btnStrength}px)`;
    if (content) {
      content.style.transform = `translate(${xRatio * contentStrength}px, ${yRatio * contentStrength}px)`;
    }
  });

  wrap.addEventListener('mouseleave', function() {
    btn.style.transform = '';
    if (content) content.style.transform = '';
  });
});
```
