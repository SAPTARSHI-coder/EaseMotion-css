# Cyberpunk Vertical Timeline Responsive Breakpoints Guide

This example demonstrates responsive breakpoint configuration for the
Cyberpunk Vertical Timeline.

## HTML Markup

```html
<section
  class="cyberpunk-timeline"
  aria-label="Project timeline"
>
  <article class="timeline-item">
    <h2>2077</h2>
    <p>Project initialization.</p>
  </article>
</section>
```

## CSS Custom Properties

```css
:root {
  --timeline-bg: #0d1117;
  --timeline-accent: #00e5ff;
  --timeline-text: #ffffff;
  --timeline-spacing: 2rem;
  --timeline-line-width: 3px;
}
```

These properties can be overridden to customize the timeline theme.

## Modifier Classes

### Compact

```html
<div class="cyberpunk-timeline compact">
  ...
</div>
```

Reduces spacing between timeline entries.

### Neon

```html
<div class="cyberpunk-timeline neon">
  ...
</div>
```

Changes the timeline accent color.

## Responsive Breakpoints

### Tablet

```css
@media (max-width: 768px) {
  .cyberpunk-timeline {
    padding-left: 1.5rem;
  }
}
```

### Mobile

```css
@media (max-width: 480px) {
  .cyberpunk-timeline {
    padding-left: 1rem;
  }
}
```

The breakpoints reduce spacing and marker positioning on smaller screens.

## Accessibility

- Use semantic elements for timeline content.
- Provide a descriptive label for the timeline.
- Maintain sufficient color contrast.
- Do not rely only on color to communicate information.
- Keep focus indicators visible for interactive elements.

## Keyboard Navigation

When timeline entries contain interactive controls:

- `Tab` moves focus forward.
- `Shift + Tab` moves focus backward.
- `Enter` or `Space` activates focused controls.
- Focus order should remain logical at every breakpoint.