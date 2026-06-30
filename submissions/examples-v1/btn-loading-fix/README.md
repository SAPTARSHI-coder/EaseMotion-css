# ease-btn-loading Layout Shift Fix

**Fixes:** [#5030](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5030)  
**File affected:** `components/buttons.css`

---

## Problem

The `.ease-btn-loading` class adds a spinner using `::after` with
`display: inline-block` and `margin-left`. This appends the spinner
**after** the button text, making the button wider than its resting
state and causing a visible layout shift.

This breaks:
- Side-by-side button comparisons
- `.ease-btn-group` layouts (adjacent buttons shift)
- Fixed-width containers

---

## Fix

Use `position: absolute` on the spinner so it overlays the button
center instead of being appended after the text. Hide the text with
`color: transparent` so the button keeps its original width.

**Before (buggy):**
```css
.ease-btn-loading {
  pointer-events: none;
}

.ease-btn-loading::after {
  content: '';
  display: inline-block;        /* appended after text = wider button */
  width: 0.85em;
  height: 0.85em;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ease-kf-rotate 0.7s linear infinite;
  margin-left: var(--ease-space-2);
}
```

**After (fixed):**
```css
.ease-btn-loading {
  pointer-events: none;
  position: relative;
  color: transparent !important;  /* hide text, keep width */
}

.ease-btn-loading::after {
  content: '';
  position: absolute;             /* centered overlay, no extra width */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1em;
  height: 1em;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: ease-kf-rotate 0.7s linear infinite;
}
```

---

## Demo

Open `demo.html` to see the before/after comparison including button
groups and all size variants.

---

## Checklist

- [x] Button width stays identical between normal and loading states
- [x] Works with all size variants (sm, default, lg)
- [x] Button group layout stays intact
- [x] No breaking changes to button API
- [x] Includes `demo.html`, `style.css`, `README.md`