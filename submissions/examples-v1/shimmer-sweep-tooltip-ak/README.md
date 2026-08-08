# Shimmer Sweep Tooltip

A modern marketing-style tooltip built with pure HTML and CSS featuring a smooth shimmer sweep animation, glassmorphism styling, and responsive design.

## Features
- Customizable animation speed, colors, and border radius using CSS variables
- Pure HTML and CSS (No JavaScript)
- Smooth shimmer sweep animation
- Glassmorphism tooltip design
- Keyboard accessible (`:focus-visible` support)
- Responsive layout
- Customizable using CSS custom properties
- Lightweight and reusable

## Files

```text
shimmer-sweep-tooltip-ak/
├── demo.html
├── style.css
└── README.md
```

## Usage

```html
<button
    class="tooltip-trigger"
    aria-describedby="tooltip"
>
    Hover Me

    <span
        class="tooltip"
        id="tooltip"
        role="tooltip"
    >
        ✨ Smooth shimmer animation with pure CSS.
    </span>
</button>
```

## Customization

The component exposes CSS custom properties for easy customization.

```css
:root {
  --ease-primary: #6366f1;
  --ease-primary-hover: #4f46e5;
  --ease-tooltip-bg: rgba(15, 23, 42, 0.85);
  --ease-tooltip-border: rgba(255,255,255,.1);
  --ease-tooltip-speed: 1.2s;
  --ease-tooltip-transition: .3s;
  --ease-tooltip-radius: 8px;
}
```

## Preview

Displays a marketing-style button with a floating glassmorphism tooltip that reveals on hover or keyboard focus while a smooth shimmer sweeps across the tooltip surface.

## Why is it useful?

This component provides an elegant, reusable tooltip for landing pages, dashboards, and product interfaces. It follows EaseMotion CSS's animation-first philosophy by delivering smooth visual feedback using only CSS, without any JavaScript dependencies.