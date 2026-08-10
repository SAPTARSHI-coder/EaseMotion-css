# ease-hamburger Animated Hamburger Menu Icon

## What does this do?

A CSS-only hamburger menu icon that smoothly morphs into a close ('X') icon when toggled. Uses the checkbox hack for pure CSS state management or the `.is-active` class for JS-controlled state.

## How is it used?

### CSS-Only Version (Checkbox Hack)
```html
<label class="ease-hamburger" for="menu-toggle">
  <span class="ease-hamburger-line"></span>
  <span class="ease-hamburger-line"></span>
  <span class="ease-hamburger-line"></span>
</label>
<input type="checkbox" id="menu-toggle">
```

### JavaScript Version
```html
<button class="ease-hamburger" id="menu-btn">
  <span class="ease-hamburger-line"></span>
  <span class="ease-hamburger-line"></span>
  <span class="ease-hamburger-line"></span>
</button>
```

### CSS
```css
.ease-hamburger.is-active .ease-hamburger-line:nth-child(1) { /* ... */ }
.ease-hamburger.is-active .ease-hamburger-line:nth-child(2) { /* ... */ }
.ease-hamburger.is-active .ease-hamburger-line:nth-child(3) { /* ... */ }
```

### JavaScript
```js
document.getElementById('menu-btn').classList.toggle('is-active');
```

### Size Variants

| Class | Size |
|-------|------|
| `.ease-hamburger-sm` | 24px |
| `.ease-hamburger` | 36px (default) |
| `.ease-hamburger-lg` | 48px |

## Why is it useful?

A smooth, satisfying hamburger-to-X animation is a cornerstone of mobile-first UI. Pure CSS implementation with `--ease-out-expo` timing for a snappy feel:

- ✅ Pure CSS, no JavaScript required (checkbox hack)
- ✅ Smooth morphing animation
- ✅ Uses `--ease-out-expo` timing variable
- ✅ Multiple size variants
- ✅ Fully accessible
