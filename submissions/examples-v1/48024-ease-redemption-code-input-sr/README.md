# Ease Redemption Code Input

An animated **Redemption / Gift-Code Input** component built entirely with **HTML** and **CSS** — no JavaScript. A gift-card style panel pops in with a staggered entrance, three segmented code fields validate live using the native `pattern` attribute, and the redeem button unlocks itself only once the full code is valid — all driven by CSS state selectors.

Created for issue **#48024 — Create the ease-redemption-code-input component**.

---

## Features

- Pure HTML & CSS, zero JavaScript
- Gift-card panel with springy pop-in and staggered content reveal
- Periodic shimmer sweep across the card and a gently bouncing gift icon
- Segmented code input (`XXXX – XXXX – XXXX`) with monospace styling and letter-spacing
- Live validation with **no scripting**: `pattern="[A-Za-z0-9]{4}"` + `required` drive `:valid` / `:invalid` styling
- Wrong input triggers a shake animation and error coloring; valid segments turn green
- Success / error status messages toggled purely via `:has()` on the form
- Redeem button stays visually disabled (grayscale + no pointer events) until every segment is filled and valid
- Focus lift animation and glow on the active segment
- Responsive down to small phones
- Respects `prefers-reduced-motion`
- Themeable via CSS custom properties

---

## Folder Structure

```text
48024-ease-redemption-code-input-sr/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

```html
<link rel="stylesheet" href="style.css">

<form class="ease-redemption-card erci-form" aria-label="Redeem a gift code">

  <span class="erci-icon" aria-hidden="true">🎁</span>
  <h2>Redeem your gift code</h2>
  <p class="erci-hint">Enter the 12-character code from your gift card</p>

  <div class="erci-segments">
    <input class="erci-segment" type="text" placeholder="XXXX"
           maxlength="4" pattern="[A-Za-z0-9]{4}" required
           aria-label="Code part 1 of 3" autocomplete="off">
    <span class="erci-dash" aria-hidden="true">–</span>
    <input class="erci-segment" type="text" placeholder="XXXX"
           maxlength="4" pattern="[A-Za-z0-9]{4}" required
           aria-label="Code part 2 of 3" autocomplete="off">
    <span class="erci-dash" aria-hidden="true">–</span>
    <input class="erci-segment" type="text" placeholder="XXXX"
           maxlength="4" pattern="[A-Za-z0-9]{4}" required
           aria-label="Code part 3 of 3" autocomplete="off">
  </div>

  <p class="erci-status" role="status">
    <span class="erci-ok">✓ Code looks good — ready to redeem!</span>
    <span class="erci-bad">⚠ Each part must be exactly 4 letters or digits.</span>
  </p>

  <button type="submit" class="erci-redeem">Redeem code</button>

</form>
```

Open **demo.html** directly in any modern browser to preview the component.

---

## How It Works

- **Entrance** — the card uses an `erci-pop-in` keyframe with a slight overshoot, and each direct child gets `erci-rise-in` with an incremental `animation-delay` for a staggered reveal.
- **Validation without JS** — each segment declares `pattern="[A-Za-z0-9]{4}"` and `required`. CSS reacts to the resulting `:valid` / `:invalid` states: a filled-but-wrong segment gets `erci-shake` plus error colors, a correct one turns green.
- **Form-level states via `:has()`** — the success message shows when the form contains no `:invalid` segment (i.e. all three are filled and correct); the error message shows when any filled, unfocused segment is `:invalid`; the redeem button is grayed out and made unclickable while any segment is `:invalid`.
- **Shimmer** — a skewed gradient pseudo-element sweeps across the card on a loop for a gift-card feel.

---

## Customization

All key values are exposed as CSS custom properties on `:root`:

| Variable | Purpose |
| --- | --- |
| `--erci-accent` | Primary accent color (focus glow, button gradient, icon) |
| `--erci-success` / `--erci-error` | Validation state colors |
| `--erci-bg` / `--erci-card-bg` | Page and card backgrounds |
| `--erci-border` | Border color |
| `--erci-radius` | Card corner radius |
| `--erci-duration` | Entrance animation duration |
| `--erci-ease` | Easing curve used across animations |

The segment count and length are controlled in the HTML (`maxlength` + `pattern`), so a 6-character two-segment code needs no CSS changes.

---

## Accessibility

- Semantic `<form>`, `<label>`-equivalent `aria-label`s on each segment ("Code part 1 of 3", …)
- Status message container uses `role="status"` so screen readers announce validity changes
- Fully keyboard operable; visible focus styling on segments and button
- Decorative icon and dashes marked `aria-hidden="true"`
- Honors `prefers-reduced-motion` by collapsing all animations and transitions

---

## Browser Support

Chrome, Edge, Firefox, and Safari (modern versions). The `:has()` selector powers the status messages and button gating; in browsers without `:has()`, the inputs still validate and style themselves individually, so the component degrades gracefully.

---

## License

Created as a submission for the **EaseMotion CSS** examples library.
