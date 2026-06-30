# Animated Divider / Separator — Issue #14187

## What does this do?

Adds a complete animated divider/separator system to EaseMotion CSS. Includes horizontal dividers (solid, dashed, dotted, thick, gradient), text labels within dividers, vertical dividers for column layouts, and an animated variant with `scaleX(0)→(1)` reveal on page load.

## How is it used?

```html
<hr class="ease-divider" />
<!-- Default solid -->
<hr class="ease-divider ease-divider-dashed" />
<!-- Dashed -->
<hr class="ease-divider ease-divider-gradient" />
<!-- Gradient -->
<hr class="ease-divider ease-divider-animated" />
<!-- Animated reveal -->
<div class="ease-divider-text">OR</div>
<!-- With text -->
<hr class="ease-divider-vertical" />
<!-- Vertical divider -->
```

## What classes are available?

| Class                           | Description                                                    |
| ------------------------------- | -------------------------------------------------------------- |
| `.ease-divider`                 | Base horizontal divider (1px solid via `--ease-divider-color`) |
| `.ease-divider-dashed`          | Dashed border style                                            |
| `.ease-divider-dotted`          | Dotted border style                                            |
| `.ease-divider-thick`           | 2px height with rounded corners                                |
| `.ease-divider-gradient`        | Blue-to-purple gradient line                                   |
| `.ease-divider-text`            | Flex container with text centered between lines                |
| `.ease-divider-animated`        | `scaleX(0)→(1)` reveal via `@keyframes easeDividerReveal`      |
| `.ease-divider-vertical`        | 1px vertical divider for column layouts                        |
| `.ease-divider-vertical-dashed` | Dashed vertical divider                                        |

## Dark mode

Uses CSS custom properties `--ease-divider-color` and `--ease-divider-text-color` that react to `[data-theme="light"]` on the body.

## Why is it useful for EaseMotion CSS?

Dividers are a fundamental UI element missing from the library. This component provides multiple visual styles, animated page-load reveal, and vertical layout support.
