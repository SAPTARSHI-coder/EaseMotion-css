# Flash Drawer Component

## What does this do?

A React drawer that flashes with a glow, then slides out on close.

## How is it used?

```jsx
import FlashDrawer from './FlashDrawer';

<FlashDrawer title="Menu">Hello</FlashDrawer>
```

## Why is it useful?

Flash exits make dismissals feel intentional on side panels and mobile menus without a heavy animation library.

## Accessibility

- `role="dialog"` with `aria-modal` and labelled title
- Close button has `aria-label`
- Under `prefers-reduced-motion: reduce`, flash/slide is replaced by a simple fade

## Files

```
submissions/react/feature-flash-drawer-component-sum/
├── FlashDrawer.jsx
├── style.css
└── README.md
```

Related issue: #50748
