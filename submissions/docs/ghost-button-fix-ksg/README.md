# Ghost Button Hover Contrast Fix

## 1. What does this do?
Fixes a zero-contrast bug in the Ghost button variant where hovering over the button
on a dark background produced a solid white background while the text remained white,
making the label completely invisible. The fix ensures the text color inverts to a
dark value when the background fills on hover, maintaining WCAG AA contrast at all times.

## 2. How is it used?

Apply the fixed ghost button class to any `<button>` or `<a>` element:

```html
<!-- Ghost button on a dark surface (e.g. hero section) -->
<button class="ghost-btn">Get started</button>

<!-- With the ease-btn base class when used alongside the framework -->
<button class="ease-btn ghost-btn-fixed">Get started</button>
```

The fix uses two equally valid approaches (both shown in the demo):

### Approach A — Explicit text-color inversion on hover (most compatible)

```css
.ghost-btn {
  background-color: transparent;
  color: #ffffff;                      /* white text on dark bg */
  border: 2px solid #ffffff;
}

.ghost-btn:hover {
  background-color: #ffffff;
  color: #0f172a;                      /* ← FIX: invert to dark text */
  border-color: #ffffff;
}
```

### Approach B — Semi-transparent overlay (keeps white text, no fill)

```css
.ghost-btn-overlay {
  background-color: transparent;
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.6);
}

.ghost-btn-overlay:hover {
  background-color: rgba(255, 255, 255, 0.12);  /* subtle overlay, no fill */
  border-color: #ffffff;
  /* text stays white — contrast maintained because bg stays dark */
}
```

## 3. Why is it useful?

EaseMotion CSS is built on the principle of zero-surprise, human-readable classes. A
button labeled "Ghost" should never make its own label disappear. This is also a WCAG
1.4.3 (Contrast, Minimum) violation — white text on a white background has a contrast
ratio of 1:1, failing the required 4.5:1 for normal text.

The fix demonstrates both the correct pattern (text-color inversion) and the safe
alternative (translucent overlay), giving the maintainer two integration paths with
full before/after visual comparison.
