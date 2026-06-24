# ease-card-glass Color Contract Fix

**Fixes:** [#4965](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/4965)  
**File affected:** `components/cards.css`, `core/variables.css`

---

## Problem

The `.ease-card-glass` class in `components/cards.css` uses a hardcoded `color: #ffffff`.

This works fine on dark backgrounds but **breaks on light backgrounds** — white text on a
semi-transparent white surface becomes completely invisible, violating WCAG AA contrast
requirements.

There was also no CSS variable controlling the text color, making it impossible for
developers to override without writing custom CSS to fight specificity.

---

## Fix

### 1. Replace hardcoded color with a CSS variable

**Before:**
```css
.ease-card-glass {
  color: #ffffff; /* hardcoded */
}
```

**After:**
```css
.ease-card-glass {
  color: var(--ease-card-glass-color, #ffffff); /* overridable, safe fallback */
}
```

### 2. Add a light-background variant

```css
.ease-card-glass-light {
  background: rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  color: var(--ease-card-glass-color, #0f172a);
  border-radius: var(--ease-radius-lg);
  padding: var(--ease-space-6);
}
```

---

## Usage

```html
<!-- On dark backgrounds (default) -->
<div class="ease-card ease-card-glass">
  <h3>Dark Background Card</h3>
  <p>White text, readable on dark.</p>
</div>

<!-- On light backgrounds -->
<div class="ease-card ease-card-glass-light">
  <h3>Light Background Card</h3>
  <p>Dark text, readable on light.</p>
</div>

<!-- Custom color override -->
<div class="ease-card ease-card-glass" style="--ease-card-glass-color: #fef9ff;">
  <h3>Custom Color</h3>
  <p>Override via CSS variable.</p>
</div>
```

---

## Demo

Open `demo.html` in a browser to see the before/after comparison on both
dark and light backgrounds.

---

## Checklist

- [x] Follows `ease-` naming convention
- [x] No breaking changes to existing `.ease-card-glass` on dark backgrounds
- [x] Includes `demo.html`, `style.css`, `README.md`
- [x] Fixes WCAG AA contrast violation