# Glassmorphism Fade-In Modal

A pure CSS modal pattern for glassmorphism interfaces. The demo uses a hidden checkbox and semantic labels to open and close the dialog without JavaScript.

## Files

- `demo.html` - Standalone modal preview with keyboard reachable controls.
- `style.css` - Scoped modal styles with configurable CSS custom properties.
- `README.md` - Usage notes for the component.

## Custom Properties

```css
.glass-fade-modal-demo {
  --gfm-duration: 260ms;
  --gfm-easing: cubic-bezier(0.22, 1, 0.36, 1);
  --gfm-scale-start: 0.96;
  --gfm-panel-bg: rgba(255, 255, 255, 0.14);
}
```

The modal honors `prefers-reduced-motion` and stacks its action buttons on narrow screens.