# Pulsating Wave Badge

A lightweight, accessible CSS-only badge with an expanding wave animation.

## What does it do?

The component creates a pill-shaped badge with two expanding pulse rings that create a subtle wave effect.

## How is it used?

Include `style.css` and apply the class to an element:

```html
<span class="pulsating-wave-badge-cws">
  New
</span>
```

The component requires no JavaScript or external dependencies.

## Why is it useful?

The badge works well for status indicators such as:

- New
- Live
- Active
- Online
- Available

The animation uses CSS transforms and opacity for smooth rendering and respects `prefers-reduced-motion` for users who request reduced motion.

## Accessibility

The decorative animation is disabled when:

```css
@media (prefers-reduced-motion: reduce)
```

is active.

## Files

```text
pulsating-wave-badge-cws/
├── demo.html
├── style.css
└── README.md
```
