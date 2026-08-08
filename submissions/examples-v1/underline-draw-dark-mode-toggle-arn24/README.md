# Underline Draw Dark Mode Toggle

A pure-CSS dark mode toggle for **EaseMotion CSS**. Hovering or focusing the
control "draws" an animated underline beneath the label text; the sun/moon
icon crossfades and rotates using EaseMotion's easing tokens. No JavaScript
is required — the toggle state is driven entirely by a native `<input
type="checkbox">` and the `:checked` selector.

Submitted for issue **#41427** as part of GSSoC '26.

## Preview

Open `demo.html` in a browser to see it live. Click the label (or tab to it
and press Space) to switch between light and dark states.

## Files

```
underline-draw-dark-mode-toggle-arn24/
├── demo.html    ← standalone live demo
├── style.css    ← component styles
└── README.md    ← this file
```

## Usage

1. Include EaseMotion CSS as usual:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css"
/>
```

2. Include this component's stylesheet:

```html
<link rel="stylesheet" href="style.css" />
```

3. Drop in the markup:

```html
<div class="ease-dmtoggle-wrapper-arn24">
  <input type="checkbox" id="easeDarkModeToggle" class="ease-dmtoggle-input-arn24" />
  <label for="easeDarkModeToggle" class="ease-dmtoggle-label-arn24">
    <span class="ease-dmtoggle-icon-arn24" aria-hidden="true">
      <!-- sun/moon svgs, see demo.html -->
    </span>
    <span class="ease-dmtoggle-text-arn24">
      Dark Mode
      <span class="ease-dmtoggle-underline-arn24"></span>
    </span>
  </label>
</div>
```

That's it — no JS wiring needed for the toggle animation itself. If you want
the checkbox state to actually switch your app's theme (rather than just the
demo's `body:has()` styling), listen for the native `change` event on
`#easeDarkModeToggle` in your own app code and swap a `data-theme` attribute
or class as you normally would.

## How it works

- **Underline draw**: `.ease-dmtoggle-underline-arn24` is a `0%`-wide bar
  that transitions to `100%` width on `:hover` / `:focus-visible`, and stays
  drawn while the checkbox is `:checked` — so the current state is visible
  without needing hover.
- **Icon swap**: the sun and moon SVGs are absolutely positioned on top of
  each other and crossfade with a rotate + scale transform, timed with
  `var(--ease-speed-slow)` and `var(--ease-ease-bounce)` for a slight
  overshoot.
- **Page theming**: `demo.html` includes an optional `body:has(...)` rule
  that retints the whole page when checked. This is progressive enhancement
  — the toggle control itself works in any browser; only the whole-page
  restyle depends on `:has()` support.

## Customization

Override these on `:root` or a parent element — the component falls back to
sensible defaults if EaseMotion's core variables aren't present:

```css
:root {
  --ease-color-primary: #6366f1;  /* underline + focus ring color */
  --ease-color-success: #10b981;  /* underline color while checked */
  --ease-speed-medium: 300ms;     /* underline draw speed */
  --ease-speed-slow: 600ms;       /* icon transition speed */
  --ease-radius-full: 9999px;
}
```

## Accessibility

- Built on a native `<input type="checkbox">` + `<label>`, so it's keyboard
  operable (Tab + Space) and announced correctly by screen readers without
  extra ARIA.
- A visible `:focus-visible` outline is included for keyboard users.
- Respects `prefers-reduced-motion: reduce` by disabling all transitions.
- Color contrast for text and icons meets WCAG AA against both the light
  and dark backgrounds used in the demo.

## Browser support

Works in all evergreen browsers. The optional whole-page `body:has()`
theming in `demo.html` requires `:has()` support (Chrome/Edge 105+, Safari
15.4+, Firefox 121+); the toggle control itself has no such dependency.

---

Contributed by **Archana Nair** ([@Archana7224](https://github.com/Archana7224)) for GSSoC '26.