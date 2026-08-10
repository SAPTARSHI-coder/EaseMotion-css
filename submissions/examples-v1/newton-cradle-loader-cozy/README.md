# ease-newton-cradle-loader-cozy

A CSS-only Newton's Cradle pendulum swing loader animation, fully customizable via CSS custom properties.

## What does this do?

Displays a Newton's Cradle with swinging pendulum balls that simulate the classic physics toy — left and right balls swing in alternating phases while the center balls remain stationary, creating a satisfying loading animation using only `@keyframes`.

## How to use it

Link `style.css` and add the markup:

```html
<link rel="stylesheet" href="style.css">

<!-- Default 5-ball cradle -->
<div class="ease-newton-cradle" role="status" aria-label="Loading">
  <div class="ease-newton-cradle__frame">
    <div class="ease-newton-cradle__ball-unit ease-newton-cradle__ball-unit--left">
      <div class="ease-newton-cradle__string"></div>
      <div class="ease-newton-cradle__ball"></div>
    </div>
    <div class="ease-newton-cradle__ball-unit">
      <div class="ease-newton-cradle__string"></div>
      <div class="ease-newton-cradle__ball"></div>
    </div>
    <div class="ease-newton-cradle__ball-unit">
      <div class="ease-newton-cradle__string"></div>
      <div class="ease-newton-cradle__ball"></div>
    </div>
    <div class="ease-newton-cradle__ball-unit">
      <div class="ease-newton-cradle__string"></div>
      <div class="ease-newton-cradle__ball"></div>
    </div>
    <div class="ease-newton-cradle__ball-unit ease-newton-cradle__ball-unit--right">
      <div class="ease-newton-cradle__string"></div>
      <div class="ease-newton-cradle__ball"></div>
    </div>
  </div>
  <div class="ease-newton-cradle__rail"></div>
  <span class="ease-newton-cradle__label">Loading…</span>
</div>
```

### Required element structure

| Element | Class | Role |
|---|---|---|
| Outer container | `ease-newton-cradle` | Root; set `role="status"` + `aria-label` for accessibility |
| Frame bar | `ease-newton-cradle__frame` | Horizontal top bar + side posts (CSS `::before`/`::after`) |
| Ball unit (× N) | `ease-newton-cradle__ball-unit` | Wraps one string + ball pair; pivot is at the top |
| Left swinger | `+ ease-newton-cradle__ball-unit--left` | Apply to the **first** ball unit |
| Right swinger | `+ ease-newton-cradle__ball-unit--right` | Apply to the **last** ball unit |
| String / wire | `ease-newton-cradle__string` | Vertical line connecting frame to ball |
| Ball | `ease-newton-cradle__ball` | The sphere; rendered with a radial-gradient highlight |
| Bottom rail | `ease-newton-cradle__rail` | Decorative base bar |
| Label (optional) | `ease-newton-cradle__label` | Text shown below the cradle |

You can use any number of balls (minimum 3 recommended). Only the first and last ball units need the `--left`/`--right` swing modifier.

### Size modifier classes

| Modifier class | Effect |
|---|---|
| *(none)* | Default — 28px balls, 80px strings |
| `ease-newton-cradle--sm` | Small — 18px balls, 55px strings |
| `ease-newton-cradle--lg` | Large — 40px balls, 110px strings, slower swing |

### Color theme modifier classes

| Modifier class | Theme |
|---|---|
| *(none)* | Indigo (default) |
| `ease-newton-cradle--gold` | Amber / gold |
| `ease-newton-cradle--steel` | Neutral steel gray |
| `ease-newton-cradle--rose` | Rose / pink |

## Customization

All visual properties are exposed as CSS custom properties on `:root`:

| Property | Default | Description |
|---|---|---|
| `--ncl-ball-color` | `#6366f1` | Main ball color |
| `--ncl-ball-highlight` | `#a5b4fc` | Specular highlight on the ball |
| `--ncl-ball-shadow` | `#312e81` | Deep shadow on the ball |
| `--ncl-string-color` | `#94a3b8` | String / wire color |
| `--ncl-frame-color` | `#475569` | Frame bar and post color |
| `--ncl-ball-size` | `28px` | Diameter of each ball |
| `--ncl-string-length` | `80px` | Length of each string |
| `--ncl-ball-gap` | `2px` | Gap between adjacent balls |
| `--ncl-frame-thickness` | `3px` | Thickness of the frame bar |
| `--ncl-swing-duration` | `0.75s` | Duration of one swing |
| `--ncl-swing-easing` | `cubic-bezier(…)` | Easing curve for the swing |

**Example — sky blue custom color via inline style:**

```html
<div class="ease-newton-cradle"
  style="--ncl-ball-color:#0ea5e9; --ncl-ball-highlight:#bae6fd; --ncl-ball-shadow:#0c4a6e;">
  ...
</div>
```

## Accessibility

- Add `role="status"` and `aria-label="Loading"` to the root element so assistive technologies announce the loading state.
- The `prefers-reduced-motion` media query disables all swing animations for users who have requested reduced motion in their OS settings — the cradle remains fully visible as a static illustration.

```html
<div class="ease-newton-cradle" role="status" aria-label="Loading">
  ...
</div>
```

## Why it fits EaseMotion CSS

EaseMotion CSS is animation-first. The Newton's Cradle is one of the most visually satisfying and immediately recognizable loader patterns — it communicates "something is happening" with a delightful, physics-inspired rhythm. The entire animation is powered by two `@keyframes` rules and a `cubic-bezier` easing that mirrors real pendulum physics, with zero JavaScript. It ships with:

- 4 built-in color themes plus inline CSS variable overrides
- 3 size variants for any context
- Full dark mode support via `[data-theme="dark"]`
- `prefers-reduced-motion` accessibility fallback
- `role="status"` / `aria-label` pattern for screen readers
- Flexible ball count (3–N balls, no code changes)

## Browser support

Uses CSS `transform`, `@keyframes`, `radial-gradient`, and CSS custom properties — supported in all current evergreen browsers.
