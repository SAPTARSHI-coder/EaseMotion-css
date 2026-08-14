# `ease-native-theme-card`

> **EaseMotion CSS — Issue #61971**
> A focused, single-component demonstration of the CSS `light-dark()` function,
> toggled via a pure-CSS checkbox sibling combinator. Zero JavaScript.

---

## 1. What does this do?

`ease-native-theme-card` showcases how a UI card can define **both its light and
dark color values inline, at the property level**, using the native
[`light-dark()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)
CSS color function introduced in CSS Color Level 5.

Instead of the traditional approach of duplicating a whole color palette inside a
`@media (prefers-color-scheme: dark)` block, every color-bearing declaration
carries both values in a single call:

```css
.ease-native-theme-card {
  background: light-dark(#ffffff, #1e293b);   /* white  / dark-slate */
  color:      light-dark(#0f172a, #f8fafc);   /* ink    / off-white  */
  border:     1px solid light-dark(#e2e8f0, #334155);
  box-shadow: 0 10px 25px -5px
              light-dark(rgba(0,0,0,0.1), rgba(0,0,0,0.5));
}
```

The browser picks the **first argument** when the resolved `color-scheme` is
`light`, and the **second argument** when it is `dark`. No media query, no
custom-property swap, no class toggling is involved — the color resolution
happens at **computed-value time** inside the rendering engine itself.

---

## 2. How is it used?

### Minimal setup

```html
<!-- 1. Hidden checkbox — sits before .ease-theme-wrapper in the DOM -->
<input type="checkbox" id="theme-switch" class="theme-checkbox" hidden>

<!-- 2. Clickable label — toggling the checkbox drives the theme -->
<label for="theme-switch" class="theme-toggle-label">Toggle Theme</label>

<!-- 3. Wrapper — receives the toggled color-scheme via CSS sibling rule -->
<div class="ease-theme-wrapper">
  <div class="ease-native-theme-card">
    <!-- card content -->
  </div>
</div>
```

### The CSS sibling toggle

```css
/* Default: both schemes allowed; system preference wins */
:root { color-scheme: light dark; }

/* Checkbox checked  → force dark  on the wrapper and all its descendants */
.theme-checkbox:checked ~ .ease-theme-wrapper {
  color-scheme: dark;
}

/* Checkbox unchecked → force light on the wrapper and all its descendants */
.theme-checkbox:not(:checked) ~ .ease-theme-wrapper {
  color-scheme: light;
}
```

Setting `color-scheme` on `.ease-theme-wrapper` propagates downward through the
DOM. Every `light-dark()` call inside any descendant element automatically
re-resolves to match the new scheme — **no JavaScript, no class mutations, no
CSS variable overrides needed**.

### Controlling the card directly in your own markup

If you integrate the card into a page that already manages `color-scheme`
elsewhere (e.g., on `<html>`), just drop the card markup and its CSS; it
will inherit whichever scheme is active:

```css
/* Parent page sets the scheme once */
html { color-scheme: light dark; }

/* Card colors resolve correctly in both modes — nothing else to do */
.ease-native-theme-card {
  background: light-dark(#ffffff, #1e293b);
  color:      light-dark(#0f172a, #f8fafc);
}
```

---

## 3. Why is it useful?

### The old way — what we replace

The conventional theming pattern requires:

1. **A base variable block** on `:root` for light values.
2. **A duplicated variable block** inside `@media (prefers-color-scheme: dark)`
   (or under a `.dark-mode` class if you want a user override).
3. **Every component** references those variables via `var()`.
4. **A JavaScript toggle** to add/remove a class when the user clicks a button,
   and `localStorage` calls to persist the choice.

```css
/* ❌ Old approach — boilerplate multiplied across the codebase */
:root {
  --card-bg:     #ffffff;
  --card-text:   #0f172a;
  --card-border: #e2e8f0;
}
@media (prefers-color-scheme: dark) {
  :root {
    --card-bg:     #1e293b;
    --card-text:   #f8fafc;
    --card-border: #334155;
  }
}
.ease-native-theme-card {
  background:   var(--card-bg);
  color:        var(--card-text);
  border-color: var(--card-border);
}
```

The problems with this pattern:

| Problem | Impact |
|---|---|
| Variable set duplicated in `@media` block | Every new color requires editing two places |
| JS class toggler required for user override | Runtime dependency; breaks without JS |
| `localStorage` needed for persistence | Extra code; SSR hydration mismatches |
| Media query block grows with every component | Maintenance burden scales with codebase size |
| No easy per-subtree override | Forcing a section to always be dark requires ad-hoc classes |

### The `light-dark()` way — what we gain

```css
/* ✅ New approach — single declaration, colocated values */
:root { color-scheme: light dark; }

.ease-native-theme-card {
  background: light-dark(#ffffff, #1e293b);
  color:      light-dark(#0f172a, #f8fafc);
  border:     1px solid light-dark(#e2e8f0, #334155);
}
```

**Benefits:**

- **No `@media` duplication** — light and dark values live side-by-side in one
  declaration; updating a color means changing one line, not two.
- **No JavaScript theme toggler** — the CSS checkbox + sibling combinator
  technique used in this component is 100% CSS; no event listeners, no
  `classList.toggle`, no `localStorage`.
- **No heavy CSS-variable architecture** — there is no indirection through a
  token layer. The card's colors are self-contained; you can read them at a
  glance without jumping to `:root`.
- **Per-subtree overrides for free** — setting `color-scheme: dark` on any
  ancestor forces every `light-dark()` call in its subtree to resolve to its
  dark value, enabling sidebars or panels to stay dark while the rest of the
  page is light.
- **Composable with other CSS functions** — `light-dark()` works inside
  `color-mix()`, `rgba()`, gradients, and `box-shadow` shorthand without any
  special handling.
- **Browser-native performance** — color resolution happens at computed-value
  time in the style engine; there is no paint or layout invalidation beyond
  what a color change already causes.

---

## Browser Support

`light-dark()` is part of **CSS Baseline 2024** (widely available):

| Browser | Minimum version |
|---|---|
| Chrome / Edge | 123+ (March 2024) |
| Firefox | 120+ (November 2023) |
| Safari | 17.5+ (May 2024) |
| Samsung Internet | 25+ |
| Opera | 109+ |

---

## Files

| File | Purpose |
|---|---|
| [`demo.html`](./demo.html) | Self-contained HTML demo — open directly in a browser |
| [`style.css`](./style.css) | All styles using `light-dark()` for every color property |
| [`README.md`](./README.md) | This documentation |
