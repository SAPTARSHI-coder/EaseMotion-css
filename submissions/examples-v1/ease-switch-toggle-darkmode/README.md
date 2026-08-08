# Component: `ease-switch-toggle-darkmode`

## What does this do?
It implements accessible, state-based dark mode toggle switches featuring smooth sliding thumbs, animated moon/sun icons, and a scenic shifting backdrop, driven entirely by CSS custom properties and native input bindings.

## How is it used?
Use any of the three switch structures in your HTML code:

### 1. Classic Sliding Switch
```html
<label class="switch-track" for="switch1">
  <input type="checkbox" id="switch1" class="switch-input" />
  <div class="switch-classic">
    <div class="switch-thumb">
      <!-- Sun Icon (SVG) -->
      <svg class="icon-svg icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">...</svg>
      <!-- Moon Icon (SVG) -->
      <svg class="icon-svg icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">...</svg>
    </div>
  </div>
</label>
```

### 2. Scenic Changing Backdrop Switch
```html
<label class="switch-track" for="switch2">
  <input type="checkbox" id="switch2" class="switch-input" />
  <div class="switch-scenic">
    <!-- Day Clouds -->
    <div class="scenic-cloud scenic-cloud--1"></div>
    <div class="scenic-cloud scenic-cloud--2"></div>
    
    <!-- Night Stars -->
    <div class="scenic-stars">
      <div class="scenic-star scenic-star--1"></div>
      <div class="scenic-star scenic-star--2"></div>
      <div class="scenic-star scenic-star--3"></div>
    </div>
    
    <div class="switch-thumb">
      <svg class="icon-svg icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">...</svg>
      <svg class="icon-svg icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">...</svg>
    </div>
  </div>
</label>
```

### 3. Minimal Icon Button
```html
<label class="switch-track" for="switch3">
  <input type="checkbox" id="switch3" class="switch-input" />
  <div class="switch-icon-only">
    <svg class="icon-svg icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">...</svg>
    <svg class="icon-svg icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">...</svg>
  </div>
</label>
```

Add a lightweight script to listen to checked changes and toggle the `data-theme` attribute on the root html node:
```javascript
const checkboxes = document.querySelectorAll('.switch-input');
checkboxes.forEach(cb => {
  cb.addEventListener('change', (e) => {
    const theme = e.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  });
});
```

## Why is it useful?
Many dark mode toggles rely on heavy scripting or toggle multiple elements individually. This component supports a robust, **CSS-first approach**:
1. **State-Driven Styling**: By linking the checkbox state directly to the adjacent CSS wrapper (`.switch-input:checked + .switch-classic`), all transitions (thumb offset, cloud transforms, star visibility, moon scale/rotation) are handled by hardware-accelerated CSS animations.
2. **Accessible by Design**: The switches utilize standard native `<input type="checkbox">` elements, which remain hidden but readable. They support keyboard focus indicators (`:focus-visible` styling) and standard spacebar toggling out-of-the-box.
3. **Responsive Visual Showcase**: Integrates smoothly into custom frameworks by setting global `--bg-primary`, `--text-primary` tokens on `:root` and `[data-theme="dark"]` for instant page-wide transitions.
4. **Reduced Motion Fallbacks**: Features complete vestibular-friendly overrides in `@media (prefers-reduced-motion: reduce)` that turn off all sliding offsets and rotation transforms.

## Preview
Open `demo.html` directly in your browser to preview the three variations.
