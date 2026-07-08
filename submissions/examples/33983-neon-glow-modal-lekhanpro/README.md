# Neon Glow Modal

A pure CSS modal for marketing landing pages. The component opens with a neon glow entrance using the `:target` pattern, so it works without JavaScript.

## Files

- `demo.html` - Standalone landing-page style modal demo.
- `style.css` - Scoped component styles and animation tokens.
- `README.md` - Usage and customization notes.

## Custom Properties

```css
.ngm-shell {
  --ngm-duration: 300ms;
  --ngm-easing: cubic-bezier(0.22, 1, 0.36, 1);
  --ngm-scale-start: 0.94;
  --ngm-glow-color: #22d3ee;
  --ngm-accent-color: #a855f7;
}
```

The modal is responsive, keyboard reachable through standard links, and respects `prefers-reduced-motion`.