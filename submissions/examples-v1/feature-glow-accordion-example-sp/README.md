# Glow Accordion Example

## What does this do?

An accordion whose open panel shows a smooth glow effect (loading-style highlight).

## How is it used?

Open `demo.html` and expand a section:

```html
<div class="glow-accordion-sp">Hover me</div>
```

## Why is it useful?

Glow on the active accordion item helps users notice the expanded section, especially in denser FAQ or settings UIs. The demo stays pure HTML/CSS and beginner-friendly.

## Accessibility

- Native `<details>` / `<summary>` for keyboard support
- Visible `:focus-visible` styles on triggers
- Under `prefers-reduced-motion: reduce`, glow animation stops and a static outline remains

## Files

```
submissions/examples/feature-glow-accordion-example-sp/
├── demo.html
├── style.css
└── README.md
```
