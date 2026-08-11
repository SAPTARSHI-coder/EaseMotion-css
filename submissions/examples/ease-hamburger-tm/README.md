# ease-hamburger

Animated hamburger menu icon that smoothly morphs into a close (X) icon on click.

**Issue:** [#61980](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/61980)
**Folder:** `submissions/examples/ease-hamburger-tm`

---

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--hamburger-bar-color` | `#1e293b` | Bar fill color |
| `--hamburger-bar-width` | `24px` | Width of each bar |
| `--hamburger-bar-height` | `3px` | Thickness of each bar |
| `--hamburger-bar-radius` | `3px` | Bar corner radius |
| `--hamburger-gap` | `5px` | Gap between bars |
| `--hamburger-size` | `40px` | Button touch target size |
| `--hamburger-transition` | `0.35s cubic-bezier(...)` | Animation timing |

---

## Style Variants

| Class | Behavior |
|---|---|
| `.hamburger.cross` | Bars rotate and morph into an X |
| `.hamburger.arrow` | Top/bottom bars angle inward to form arrow |
| `.hamburger.minus` | Top and bottom bars collapse to center |
| `.hamburger.fall` | Bounce animation — bars "fall" into X |
| `.hamburger.slide` | Bars slide in from left before forming X |
| `.hamburger.anim-arrow` | Bars slide and rotate into arrow |

---

## Size Variants

| Class | Button Size |
|---|---|
| `.sm` | 32px |
| *(default)* | 40px |
| `.lg` | 56px |
| `.xl` | 72px |

---

## Color Variants

| Class | Effect |
|---|---|
| `.primary` | Accent indigo bars |
| `.danger` | Red bars |
| `.success` | Green bars |
| `.light` | White bars |
| *(default)* | `--hamburger-bar-color` |

---

## Shape Variants

| Class | Effect |
|---|---|
| `.round-sm` | Small border radius |
| `.round-0` | Square, no radius |
| `.outline` | Transparent bg, colored border |

---

## Accessibility

- `aria-label="Toggle menu"` on every button
- `:focus-visible` outline for keyboard navigation
- `prefers-reduced-motion` support — falls back to instant transition
- `prefers-color-scheme: dark` support — bars adapt to light text
- Fully operable via keyboard (Enter / Space)

---

## Usage

Add `ease-hamburger-tm/style.css` to your page, then use:

```html
<link rel="stylesheet" href="submissions/examples/ease-hamburger-tm/style.css">

<button class="hamburger cross" onclick="this.classList.toggle('cross')" aria-label="Toggle menu">
  <div class="hamburger-icon">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
</button>
```

Toggle the `cross` class on click to morph between hamburger and X states.
