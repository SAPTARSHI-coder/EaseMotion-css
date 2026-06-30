# EaseMotion — Animation Names as CSS Custom Properties

Expose all `@keyframes` animation names as `--ease-anim-*` CSS variables for type-safe, autocompletable usage in CSS and JavaScript.

## Motivation

- **Before**: `animation-name: ease-fade-in;` (brittle string, easy to mistype)
- **After**: `animation-name: var(--ease-anim-fade-in);` (single source of truth)

## Files

| File        | Purpose                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------- |
| `demo.html` | Side-by-side comparison (string vs variable), JS playground, variable reference table, auto-generation script |
| `style.css` | Demo layout and styles                                                                                        |

## Variable Convention

```
--ease-anim-{name}
```

Where `{name}` is the keyframe name after the `ease-` prefix:

| Variable                       | Value            |
| ------------------------------ | ---------------- |
| `--ease-anim-fade-in`          | `ease-fade-in`   |
| `--ease-anim-fade-out`         | `ease-fade-out`  |
| `--ease-anim-slide-up`         | `ease-slide-up`  |
| `--ease-anim-bounce-in`        | `ease-bounce-in` |
| `--ease-anim-pulse`            | `ease-pulse`     |
| `--ease-anim-shake`            | `ease-shake`     |
| ... and all other `@keyframes` |

## Auto-Generation

A script at `scripts/generate-animation-vars.js` scans `core/animations.css` for `@keyframes` declarations and emits the variable definitions. Run it after adding new animations:

```bash
node scripts/generate-animation-vars.js
```

## JavaScript Usage

```js
// Read the variable value
const name = getComputedStyle(document.documentElement)
  .getPropertyValue("--ease-anim-fade-in")
  .trim();
element.style.animationName = name;

// Or set via variable (browser resolves in style attr)
element.style.animationName = "var(--ease-anim-fade-in)";
```

## Adding to `core/variables.css`

```css
:root {
  --ease-anim-fade-in: ease-fade-in;
  --ease-anim-fade-out: ease-fade-out;
  --ease-anim-slide-up: ease-slide-up;
  --ease-anim-slide-down: ease-slide-down;
  /* … auto-generated from core/animations.css … */
}
```
