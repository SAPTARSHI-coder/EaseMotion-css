# ease-tooltip

<<<<<<< HEAD
## What does this do?

A CSS-only animated tooltip component that appears on hover and keyboard focus — no JavaScript required. The bubble fades in and slides 4px into position using `opacity` + `transform` transitions, consistent with EaseMotion's existing motion language.

## How is it used?

Wrap any trigger element with a `<span class="tooltip">` and set the tooltip text via the `data-tip` attribute:

```html
<!-- Default: tooltip above -->
<span class="tooltip" data-tip="Save changes">
  <button>Save</button>
</span>

<!-- Bottom -->
<span class="tooltip tooltip-bottom" data-tip="Opens in new tab">
  <button>Learn more</button>
</span>

<!-- Left -->
<span class="tooltip tooltip-left" data-tip="Go back">
  <button>←</button>
</span>

<!-- Right -->
<span class="tooltip tooltip-right" data-tip="Copy to clipboard">
  <button>Copy</button>
</span>
```

### Semantic color variants

Override `--tooltip-bg` for contextual meaning:

```html
<!-- Success -->
<span class="tooltip tooltip-success" data-tip="Changes saved">
  <button>Save</button>
</span>

<!-- Danger -->
<span class="tooltip tooltip-danger" data-tip="Cannot be undone">
  <button>Delete</button>
</span>
```

```css
.tooltip-success { --tooltip-bg: var(--ease-color-success-dark, #15803d); }
.tooltip-danger  { --tooltip-bg: var(--ease-color-danger-dark,  #b91c1c); }
.tooltip-warning { --tooltip-bg: var(--ease-color-warning-dark, #b45309); }
.tooltip-info    { --tooltip-bg: #0369a1; }
```

### Custom speed or offset

```css
/* Slower tooltip on a specific element */
.my-element { --tooltip-speed: var(--ease-speed-medium); }

/* More breathing room between trigger and bubble */
.my-element { --tooltip-offset: 12px; }
```

## Why is it useful?

Tooltips are one of the most commonly needed UI primitives — yet EaseMotion CSS had no tooltip component at all. The VISION.md roadmap explicitly lists "Modal & tooltip components" as **Planned v1.2**.

This submission accelerates that milestone with a zero-JS implementation:

- **Pure CSS** — `::before` (bubble) + `::after` (arrow) pseudo-elements on the wrapper
- **No extra markup overhead** — text lives in `data-tip`, not a separate element
- **4 position variants** — top (default), bottom, left, right
- **Keyboard accessible** — triggers on `:focus-within`, not just `:hover`
- **Token-driven** — all values use existing `--ease-*` custom properties
- **`prefers-reduced-motion` safe** — transitions disabled, tooltip still shows
- **Composable** — works on buttons, icon buttons, inline text, cards

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--tooltip-bg` | `var(--ease-color-neutral-900)` | Bubble background color |
| `--tooltip-color` | `var(--ease-color-neutral-50)` | Bubble text color |
| `--tooltip-speed` | `var(--ease-speed-fast)` | Transition duration |
| `--tooltip-offset` | `8px` | Gap between trigger and bubble |
| `--tooltip-radius` | `var(--ease-radius-sm)` | Bubble border radius |
| `--tooltip-max-width` | `220px` | Maximum bubble width |

## Tech Stack

- HTML
- CSS only (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to see all variants.

## Contribution Notes

- Class names used: `.tooltip`, `.tooltip-top`, `.tooltip-bottom`, `.tooltip-left`, `.tooltip-right`
- Maintainer will rename to `ease-tooltip`, `ease-tooltip-bottom`, etc. before merging
- No changes made to `core/`, `components/`, or any existing files
=======
Animated, accessible tooltips built with **100% pure CSS** — no JavaScript. Implements [Issue #627](https://github.com/EaseMotion/EaseMotion-css/issues/627).

## What it does

Wrap any focusable or hoverable control in an `.ease-tooltip` container. Tooltip text comes from `data-tooltip`. The label is rendered with `::after` (bubble) and `::before` (arrow), both absolutely positioned pseudo-elements.

On `:hover` and `:focus-within`, the tooltip **fades in** (`opacity: 0` → `1`) and **slides 4px** into place over **150ms** with `ease` timing — matching EaseMotion’s native motion pattern (fade + subtle directional slide).

## Usage

```html
<!-- Top (default) -->
<span class="ease-tooltip" data-tooltip="Save your work">
  <button type="button" class="ease-btn ease-btn-primary">Save</button>
</span>

<!-- Explicit position -->
<span class="ease-tooltip" data-tooltip="More options" data-position="bottom">
  <button type="button" class="ease-btn ease-btn-primary">Menu</button>
</span>
```

### Attributes

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-tooltip` | any string | — | Text shown in the bubble (`content: attr(data-tooltip)`) |
| `data-position` | `top`, `bottom`, `left`, `right` | `top` | Placement relative to the trigger |

### Position behavior

| Position | Motion on show |
|----------|----------------|
| `top` (default) | Fades in, slides **up** 4px |
| `bottom` | Fades in, slides **down** 4px |
| `left` | Fades in, slides **left** 4px |
| `right` | Fades in, slides **right** 4px |

## Accessibility

- **Keyboard:** Tooltips appear when focus moves inside the wrapper (`:focus-within`), so tabbing to a nested `<button>` or `<a>` reveals the label.
- **Reduced motion:** Under `prefers-reduced-motion: reduce`, only opacity is animated; slide transforms are disabled.

## Files

| File | Purpose |
|------|---------|
| `style.css` | Component styles (copy into your bundle or link directly) |
| `demo.html` | Live preview of all four positions + default |
| `README.md` | This guide |

## Preview

Open `demo.html` in a browser. No build step or server required.

## Tech stack

- HTML5 (`data-*` attributes)
- CSS3 (`::before`, `::after`, `transition`, `attr()`)
- Zero JavaScript
>>>>>>> upstream/main
