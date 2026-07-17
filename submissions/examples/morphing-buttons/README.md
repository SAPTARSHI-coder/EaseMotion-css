# Morphing SVG Interactive Buttons

## What does this do?

This is a collection of tactile, interactive buttons containing SVG icons that morph fluidly between states (such as Hamburger to Close, Play to Stop, and Plus to Checkmark) when clicked or hovered using pure CSS transformations and path transitions.

## How is it used?

1. Add the SVG structures to your buttons:

```html
<!-- Toggle 1: Hamburger to Close 'X' -->
<button class="ease-morph-btn ease-morph-hamburger">
  <svg viewBox="0 0 24 24">
    <line class="line-top" x1="4" y1="6" x2="20" y2="6"></line>
    <line class="line-middle" x1="4" y1="12" x2="20" y2="12"></line>
    <line class="line-bottom" x1="4" y1="18" x2="20" y2="18"></line>
  </svg>
</button>

<!-- Toggle 2: Play to Stop -->
<button class="ease-morph-btn ease-morph-play">
  <svg viewBox="0 0 24 24">
    <path></path>
  </svg>
</button>

<!-- Toggle 3: Plus to Checkmark -->
<button class="ease-morph-btn ease-morph-plus">
  <svg viewBox="0 0 24 24">
    <path class="line-vertical"></path>
    <path class="line-horizontal"></path>
  </svg>
</button>
```

2. Link the stylesheet to your page:

```html
<link rel="stylesheet" href="style.css" />
```

3. Toggle the active state using a simple JavaScript class toggle:

```javascript
const buttons = document.querySelectorAll(".ease-morph-btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("ease-active");
  });
});
```

## Why is it useful?

Web buttons traditionally rely on basic opacity changes, static icon swaps, or heavy JS libraries to toggle icons. These buttons use pure CSS transforms and the SVG `d` path transitions supported natively in modern browsers. This provides high-end fluid morphing transitions using standard, lightweight CSS and SVG markup, enhancing UI action feedback quality.

## Tech Stack

- HTML
- CSS (custom properties, path morphing)
- JavaScript (lightweight class toggles)

## Customization

Override these properties in your styles to customize button themes and colors:

- `--ease-morph-bg`: Button background surface (default: `rgba(30, 41, 59, 0.45)`).
- `--ease-morph-border`: Button outline border (default: `rgba(255, 255, 255, 0.08)`).
- `--ease-morph-primary`: Active toggle menu color (default: `#6c63ff`).
- `--ease-morph-success`: Play/Plus active stroke success color (default: `#22c55e`).
- `--ease-morph-danger`: Stop/Close active stroke danger color (default: `#ef4444`).
- `--ease-speed-medium`: Morph transition speed (default: `300ms`).

## Preview

Open `demo.html` directly in your browser to see the effect in action.

## Contribution Notes

- Class naming was handled by the contributor (prefixed with `ease-`)
- Maintainer will review and standardize before merging
