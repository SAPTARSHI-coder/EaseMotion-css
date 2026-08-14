# Cyberpunk Vertical Timeline Quickstart Guide

A basic example showing how to use and customize the Cyberpunk Vertical Timeline.

## Basic HTML

```html
<div class="cyberpunk-timeline" aria-label="Project timeline">
  <article class="timeline-item">
    <h2>2077</h2>
    <p>Project initialization.</p>
  </article>
</div>
```

## CSS Custom Properties

The timeline can be customized using CSS variables:

```css
:root {
  --timeline-bg: #0d1117;
  --timeline-accent: #00e5ff;
  --timeline-text: #ffffff;
  --timeline-line-width: 3px;
  --timeline-spacing: 2rem;
}
```

Override these properties to create a custom theme.

## Modifier Classes

### Compact

```html
<div class="cyberpunk-timeline compact">
  ...
</div>
```

The `compact` modifier reduces spacing between timeline entries.

### Neon

```html
<div class="cyberpunk-timeline neon">
  ...
</div>
```

The `neon` modifier changes the timeline accent color.

## Accessibility

- Use semantic elements such as `main` and `article`.
- Use appropriate heading levels for timeline entries.
- Provide a descriptive label for the timeline.
- Maintain sufficient color contrast.
- Do not rely on color alone to communicate information.

## Keyboard Navigation

If timeline entries contain interactive controls:

- `Tab` moves focus forward.
- `Shift + Tab` moves focus backward.
- `Enter` or `Space` activates focused controls.
- Keep visible focus indicators for keyboard users.

## Quick Start

1. Copy `demo.html` into your project.
2. Include `style.css`.
3. Add timeline entries using the `.timeline-item` class.
4. Override the CSS custom properties to match your theme.