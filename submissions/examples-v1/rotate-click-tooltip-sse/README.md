# Rotate-Click Tooltip — Minimalist Tech

## 1. What does this do?

A pure CSS animated tooltip that reveals its content using a smooth **rotate + scale** transition triggered by a **click** (toggle state via a hidden checkbox), designed for minimalist tech UI layouts with **zero JavaScript**.

## 2. How is it used?

Wrap a hidden checkbox, a `<label>` trigger, and a tooltip bubble inside a single container. The checkbox drives the toggle state entirely in CSS.

```html
<div class="tooltip-wrap">
    <input type="checkbox" id="tip-1" class="tooltip-toggle" />
    <label for="tip-1" class="tooltip-trigger" aria-label="Show tooltip">
        <span class="trigger-icon">i</span>
    </label>
    <span class="tooltip-bubble" role="tooltip">
        Your tooltip text here.
    </span>
</div>
```

### Text variant

```html
<div class="tooltip-wrap">
    <input type="checkbox" id="tip-2" class="tooltip-toggle" />
    <label for="tip-2" class="tooltip-trigger tooltip-trigger--text">
        Click me
    </label>
    <span class="tooltip-bubble" role="tooltip">
        Any helpful message.
    </span>
</div>
```

### Customization

All animation parameters are exposed via CSS custom properties and can be overridden inline or via a parent selector:

| Property           | Default                          | Purpose                    |
| ------------------ | -------------------------------- | -------------------------- |
| `--tt-duration`    | `380ms`                          | Animation duration         |
| `--tt-easing`      | `cubic-bezier(0.22, 1, 0.36, 1)` | Animation easing           |
| `--tt-rotate-from` | `-12deg`                         | Initial rotation angle     |
| `--tt-scale-from`  | `0.6`                            | Initial scale factor       |
| `--tt-offset`      | `14px`                           | Distance from trigger      |
| `--tt-bubble-bg`   | `#ffffff`                        | Tooltip background color   |
| `--tt-bubble-text` | `#0f1115`                        | Tooltip text color         |

Example override:

```html
<div class="tooltip-wrap" style="--tt-duration: 600ms; --tt-rotate-from: -20deg;">
    ...
</div>
```

## 3. Why is it useful?

- **Zero JavaScript overhead** — perfect fit for EaseMotion's pure-CSS philosophy.
- **Keyboard accessible** — Tab to focus, Space to toggle; includes `focus-visible` outline.
- **Fully responsive** — bubble adapts to small screens with wrapping and centered text.
- **Respects `prefers-reduced-motion`** — instantly finalizes animation for users who prefer less motion.
- **Highly customizable** — every timing, easing, and scale parameter is exposed as a CSS custom property.
- **Modern minimalist aesthetic** — matches clean tech interfaces with a soft, elegant rotate-click reveal.

This component adds a highly requested, modern aesthetic pattern to the EaseMotion examples library, allowing users to implement complex animation states with zero JavaScript overhead.
