# Animated Notification Alert Badge — Gradient Glow

CSS-only notification badge using a gradient glow and smooth state transitions.

## Markup

```html
<button class="notice" type="button" aria-label="Notifications, 3 unread"><span class="notice__icon">!</span><span class="notice__count">3</span></button>
```

Use native buttons for interactive notifications and keep the accessible name meaningful.

## Styling

The component exposes accent, surface, glow, radius, and transition values as CSS custom properties.

Use the design-token values provided by EaseMotion where available.

## Accessibility

Do not rely on the animated glow to communicate unread state.

Provide a useful accessible label and visible focus state.

## Responsive Behavior

Keep the badge compact while allowing it to scale with its parent.

## Reduced Motion

Disable pulsing and other decorative animation when `prefers-reduced-motion` is enabled.

## Testing

Test keyboard activation, focus visibility, contrast, zoom, narrow layouts, and reduced motion.

## Files

`README.md` documents usage.

`demo.html` contains the standalone demo.

`style.css` contains the pure CSS implementation.
