# Accessible Horizontal Roll Tooltip

A pure CSS tooltip component featuring a smooth horizontal roll-inspired reveal animation using `clip-path`, designed for responsive and accessible web interfaces without JavaScript.

## Features

- Pure CSS implementation
- Smooth horizontal roll-inspired reveal animation
- Responsive design for desktop and mobile devices
- Keyboard accessible using `:focus-within` and `:focus-visible`
- Customizable through CSS custom properties
- Supports `prefers-reduced-motion`
- No JavaScript required

## Usage

```html
<div class="tooltip-wrapper">
    <button
        class="tooltip-button"
        aria-describedby="roll-tooltip">
        Hover Me
    </button>

    <span
        id="roll-tooltip"
        role="tooltip"
        class="tooltip">
        Smooth Horizontal Roll Animation
    </span>
</div>
```

## Customization

The component exposes standard CSS custom properties for easy customization.

```css
:root{
    --tooltip-bg:#1f2937;
    --tooltip-color:#ffffff;

    --button-bg:#2563eb;
    --button-hover:#1d4ed8;

    --duration:0.7s;
    --easing:cubic-bezier(0.22,1,0.36,1);

    --tooltip-radius:10px;
    --tooltip-padding:10px 16px;
}
```

## Accessibility

- Supports keyboard navigation using `:focus-visible` and `:focus-within`
- Uses semantic HTML with `role="tooltip"` and `aria-describedby`
- Respects the user's `prefers-reduced-motion` setting

## Why is it useful?

This component provides a modern tooltip interaction with a smooth horizontal roll-inspired reveal while maintaining accessibility, responsiveness, and zero JavaScript overhead. It can be easily integrated into dashboards, portfolios, landing pages, forms, and modern UI designs.