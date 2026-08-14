# Animation Duration Reference Table

A quick-reference table for EaseMotion CSS animation durations, so developers can choose appropriate timings without inspecting the source code.

## What it does
Maps each duration token to its value and recommended use case, with usage examples.

## Files
- `demo.html` — rendered reference table
- `style.css` — table styling
- `README.md` — this guide with the table + usage examples

## Reference

| Class / token | Key | Duration | Use case |
| --- | --- | --- | --- |
| `--ease-speed-fast` | fast | 150ms | Micro-interactions, hovers, toggles |
| `--ease-speed-medium` | medium | 300ms | Standard UI transitions, reveals |
| `--ease-speed-slow` | slow | 600ms | Large surfaces, page transitions |
| `var(--ease-duration, 1s)` | custom | overridable | Animation mixins & custom timing |

## Usage examples
```css
/* Fast hover */
.btn { transition: color var(--ease-speed-fast) var(--ease-ease); }

/* Medium reveal */
.panel { transition: opacity var(--ease-speed-medium) var(--ease-ease); }

/* Slow page transition */
.page { transition: transform var(--ease-speed-slow) var(--ease-ease); }

/* Custom duration via animation mixin */
.my-element {
  --ease-duration: 1.2s;
  animation: spin var(--ease-duration) linear infinite;
}
```

## Choosing a duration
- Use **fast (150ms)** for feedback the user should barely perceive (hovers, toggles, ripples).
- Use **medium (300ms)** for the bulk of UI motion (panels, cards, accordions).
- Use **slow (600ms)** for large surfaces or full-page transitions where the eye needs time to track movement.
- Override with `--ease-duration` for animation mixins and bespoke timing.

## Accessibility
- Always pair durations with `@media (prefers-reduced-motion: reduce)` to disable or shorten motion for users who request it.
- Keep motion under ~500ms for individual transitions to avoid vestibular discomfort.

Closes #63794
