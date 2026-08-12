# Card Glow Effects & Active Outline High Contrast Mode Fix

## 1. What does this do?
Provides transparent outline fallbacks and explicit `@media (forced-colors: active)` system color borders for glowing cards and interactive elements so boundaries and focus states remain visible in Windows High Contrast Mode when `box-shadow` is stripped by the OS.

## 2. How is it used?
Apply the glow utility classes directly to card or button containers:

```html
<!-- Glowing Pulse Card with High Contrast Outline Support -->
<div class="glow-card glow-pulse">
  <h3>Card Title</h3>
  <p>Content goes here...</p>
</div>

<!-- Interactive Glowing Button -->
<button class="glow-button" type="button">Action</button>
```

## 3. Why is it useful?
In Windows High Contrast Mode (`@media (forced-colors: active)`), operating systems completely strip CSS `box-shadow` glow effects for contrast enforcement. Without transparent `outline` fallbacks or system color borders (`CanvasText`, `Highlight`, `ButtonText`), card components lose all visible boundaries and interactive focus rings. Adding these rules guarantees WCAG 2.1 accessibility compliance and seamless usability across high-contrast themes.
