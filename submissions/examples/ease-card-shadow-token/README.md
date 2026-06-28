# fix: ease-card hover shadow design token

## Problem
`.ease-card:hover` had a hardcoded `box-shadow` value:
```css
box-shadow: 0 20px 40px rgba(0,0,0,0.15);
```
This could not be customized without overriding component CSS directly.

## Fix
Added two CSS custom properties:
- `--ease-shadow-card` — resting shadow
- `--ease-shadow-hover` — hover lift shadow

```css
:root {
  --ease-shadow-card: 0 2px 8px rgba(0, 0, 0, 0.08);
  --ease-shadow-hover: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.ease-card {
  box-shadow: var(--ease-shadow-card);
}

.ease-card:hover {
  box-shadow: var(--ease-shadow-hover);
}
```

## Customization
```css
/* Override in your project */
:root {
  --ease-shadow-hover: 0 20px 40px rgba(124, 58, 237, 0.25);
}
```

## Files
- `style.css` — token fix
- `demo.html` — live demo with default and themed variants