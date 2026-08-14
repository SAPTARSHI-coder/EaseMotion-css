# Neumorphic Soft Shadow Elevation Mixin

> A reusable SCSS mixin and utility module for creating **neumorphic (soft UI) shadow elevations** — the signature dual light + dark shadow effect that makes elements appear extruded from or pressed into the surface.

**Author:** [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux)  
**Issue:** [#27650](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/27650)  
**Track:** SCSS Integration

---

## What Does This Do?

Provides a **core `ease-neumorphic` mixin** supporting three shadow types (`raised`, `pressed`, `flat`), plus **6 preset elevation-level mixins**, an **interactive mixin** with hover + active states, and matching utility classes. Perfect for cards, buttons, form inputs, toggles, and any soft-UI design system.

---

## Files

| File | Purpose |
|------|---------|
| `_neumorphic-soft-shadow-elevation-mixin-sou.scss` | Main SCSS partial (mixins + utility classes) |
| `style.css` | Compiled CSS output |
| `demo.html` | Standalone browser demo |
| `README.md` | This documentation |

---

## Configurable Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `$ease-neu-bg` | `#e0e5ec` | Base surface color (light neumorphic grey) |
| `$ease-neu-distance` | `8px` | Shadow offset distance |
| `$ease-neu-blur` | `16px` | Shadow blur radius |
| `$ease-neu-light-color` | `rgba(255,255,255,0.9)` | Highlight color |
| `$ease-neu-dark-color` | `rgba(163,177,198,0.6)` | Shadow color |
| `$ease-neu-radius` | `12px` | Default border-radius for `.ease-neu-surface` |

---

## Mixins

| Mixin | Purpose |
|-------|---------|
| `ease-neumorphic($distance, $blur, $light, $dark, $type)` | Full-control neumorphic shadow |
| `ease-neu-flat` | Very subtle raised effect |
| `ease-neu-low` | Small raised elevation |
| `ease-neu-medium` | Standard raised elevation |
| `ease-neu-high` | Prominent raised elevation |
| `ease-neu-pressed` | Standard inset (pressed) effect |
| `ease-neu-deep-pressed` | Prominent inset (pressed) effect |
| `ease-neu-interactive` | Raised → deeper on hover → pressed on active |

---

## Utility Classes

`.ease-neu-flat` · `.ease-neu-low` · `.ease-neu-medium` · `.ease-neu-high` · `.ease-neu-pressed` · `.ease-neu-deep-pressed` · `.ease-neu-interactive` · `.ease-neu-surface`

---

## Usage

### 1. Utility Classes (HTML)

```html
<!-- A raised card -->
<div class="ease-neu-surface ease-neu-medium">
  <h3>Card Title</h3>
  <p>Some content...</p>
</div>

<!-- Interactive button (raised → pressed on click) -->
<button class="ease-neu-interactive">Click Me</button>

<!-- Pressed form input -->
<input type="text" class="ease-neu-pressed" placeholder="Type here..." />
```

### 2. Mixins (SCSS)

```scss
@import 'neumorphic-soft-shadow-elevation-mixin-sou';

.my-card {
  background: #e0e5ec;
  border-radius: 16px;
  padding: 2rem;
  @include ease-neu-medium;
}

.my-button {
  @include ease-neu-interactive(6px, 12px);
}

.custom-toggle {
  // Full control: distance=10, blur=20, custom colors, pressed type
  @include ease-neumorphic(10px, 20px, white, #b8c3d1, 'pressed');
}
```

---

## Why Is This Useful?

- ✅ **Signature soft-UI look** in one class or `@include`
- ✅ **Three shadow types** — raised, pressed, flat — cover every neumorphic scenario
- ✅ **Six preset elevation levels** — from barely-there to prominent
- ✅ **Interactive variant** — realistic press animation on click
- ✅ **Fully configurable** — override colors, distance, blur to match any palette
- ✅ **No magic numbers** — dual-shadow math handled for you
- ✅ **Fits EaseMotion's philosophy** — small, composable, class-based

---

## Design Tips

- Neumorphism works best on **low-contrast backgrounds** (typically the same color as the surface).
- The default palette (`#e0e5ec` with white + `#a3b1c6` shadows) is the classic soft-UI grey. Override the color variables to match your brand.
- Avoid using neumorphism on text-only elements — the low contrast can hurt readability. Use it on **containers, controls, and cards**.

---

## Demo

Open `demo.html` in any modern browser to see all elevation levels, pressed variants, interactive buttons (click them!), and a pressed-style form input.

---

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge, Opera) that support CSS `box-shadow` with multiple values and the `inset` keyword — effectively every browser released in the last decade.
