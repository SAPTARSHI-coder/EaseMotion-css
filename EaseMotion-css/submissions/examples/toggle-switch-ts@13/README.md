# Animated Toggle Switch (`ease-toggle-ts`)

## Description
This submission adds an **Animated Toggle Switch** to EaseMotion CSS.

It is a pure CSS toggle switch built using a hidden checkbox and animated track/thumb elements. When the toggle is checked, the thumb slides smoothly to the right and the track color changes.

## Features
- Pure CSS, zero JavaScript
- Smooth animated thumb movement
- Keyboard accessible with visible focus state
- Customizable colors and size using CSS variables
- Disabled state support
- Includes `prefers-reduced-motion` support

## How to Use
Create a label with a hidden checkbox and the toggle elements:

```html
<label class="ease-toggle-ts">
  <input type="checkbox" class="ease-toggle-input-ts" checked />
  <span class="ease-toggle-track-ts" aria-hidden="true">
    <span class="ease-toggle-thumb-ts"></span>
  </span>
  <span class="ease-toggle-text-ts">Notifications</span>
</label>
```

## Customization
You can change the active color using CSS variables:

```html
<label class="ease-toggle-ts" style="--toggle-on-ts: #4ade80;">
  <input type="checkbox" class="ease-toggle-input-ts" />
  <span class="ease-toggle-track-ts" aria-hidden="true">
    <span class="ease-toggle-thumb-ts"></span>
  </span>
  <span class="ease-toggle-text-ts">Dark Mode</span>
</label>
```

## Demo
Open `demo.html` directly in your browser. No server is required.

## Checklist
- [x] Code is placed inside `submissions/examples/toggle-switch-ts/`
- [x] Includes `demo.html`
- [x] Includes `style.css`
- [x] Includes `README.md`
- [x] Follows unique suffix naming rule
- [x] No changes made to `core/`
- [x] No changes made to `components/`