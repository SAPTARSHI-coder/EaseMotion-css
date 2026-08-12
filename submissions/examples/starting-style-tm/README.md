# Starting Style

A self-contained EaseMotion-css submission that demonstrates the `starting style` pattern using the framework's design tokens.

## Features

- Default `.starting-style` rule backed by `--ease-color-primary-alpha` and `--ease-color-primary-dark`
- Four size variants (`-sm`, `-md`, `-lg`, `-xl`) using `--ease-space-*` and `--ease-radius-*` tokens
- Six color variants (`-primary`, `-secondary`, `-success`, `-danger`, `-warning`, `-info`) that map directly to `--ease-color-*` tokens
- Three shape variants (`-pill`, `-rounded`, `-square`) using `--ease-radius-*` tokens
- Light variants (`-primary-light`, `-success-light`, `-danger-light`) using `--ease-color-*-alpha` tokens for subtle backgrounds
- Hover, focus-visible, and active states animated with `--ease-speed-fast` + `--ease-ease-out`
- Disabled state via `[disabled]` attribute selector
- Full dark mode support via `prefers-color-scheme: dark`
- Reduced-motion support via `prefers-reduced-motion: reduce`
- Inline and block display helpers

## Usage

```html
<div class="starting-style starting-style-md starting-style-primary">
  Hello world
</div>
```

## Why is it useful?

EaseMotion-css already provides a comprehensive token system (`--ease-color-*`, `--ease-space-*`, `--ease-radius-*`, `--ease-shadow-*`). This submission turns `starting style` into a composable class set so designers and engineers can mix and match variants without writing new CSS. Each rule references a real design token, so the entire pattern automatically respects the maintainer's design system decisions — including any future token additions.

The submission also demonstrates two important EaseMotion patterns:

1. **Token-first composition** — every visual property (`color`, `background`, `border-radius`, `padding`) comes from a `--ease-*` variable, never a hard-coded value.
2. **Motion-respectful defaults** — `prefers-reduced-motion` zeros out transitions, and `prefers-color-scheme: dark` swaps the surface tokens for the dark palette.

## Token reference

| Variant | Token(s) used |
| --- | --- |
| Default | --ease-color-primary-alpha, --ease-color-primary-dark |
| Primary | --ease-color-primary |
| Secondary | --ease-color-secondary |
| Success | --ease-color-success |
| Danger | --ease-color-danger |
| Warning | --ease-color-warning |
| Info | --ease-color-info |
| Sizes | --ease-space-*, --ease-radius-{sm,md,lg,xl} |
| Shapes | --ease-radius-{sm,md,full} |
| Motion | --ease-speed-fast, --ease-ease-out |

## Accessibility

- `:focus-visible` outline uses `--ease-color-primary` at 2px width for clear keyboard focus.
- Disabled state halves opacity and disables pointer events.
- Reduced-motion preference disables all transitions.

## Files

- `style.css` — All rules for `.starting-style` and variants, plus layout, dark mode, and reduced motion.
- `demo.html` — Six interactive demo cards showing every variant in context.
- `README.md` — This file.
