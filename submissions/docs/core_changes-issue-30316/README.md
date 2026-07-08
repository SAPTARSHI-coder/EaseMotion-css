# Reduced Motion System — EaseMotion CSS

**Issue:** [#30316 — Add a global reduced-motion CSS variable to disable all animations](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30316)

A motion reduction system for users with vestibular disorders or motion sensitivity. Provides a CSS variable (`--ease-motion-reduce`), a utility class (`.ease-reduce-motion`), and automatic `prefers-reduced-motion` support.

## Structure

```
submissions/docs/core_changes-issue-30316/
├── demo.html       # Demo with manual toggle and per-container reduction
├── style.css       # Variable, class, and media query definitions
└── README.md       # This file
```

## How to Use

### Global toggle (via CSS variable)
```css
:root { --ease-motion-reduce: 1; }
```

### Per-container (via class)
```html
<div class="ease-reduce-motion">
  <div class="ease-bounce">This won't animate</div>
</div>
```

### Auto-detect (via media query)
Automatically enabled when the user sets `prefers-reduced-motion: reduce` in their OS settings.

### Manual toggle (via JS, optional)
```js
document.documentElement.style.setProperty('--ease-motion-reduce', '1');
```

## Features

- **Three mechanisms:** CSS variable, utility class, and `@media (prefers-reduced-motion: reduce)`
- **Cascade-friendly:** Uses `@layer easemotion-base` for the variable and `@layer easemotion-reduce` for overrides
- **Comprehensive:** Targets `animation` and `transition` on all elements with `!important`
- **Accessible:** Respects user OS-level motion preferences automatically
- **Developer-friendly:** Simple toggle for manual control
