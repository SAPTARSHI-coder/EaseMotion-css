# Jello Icon Component

## What does this do?

A React icon that enters with a smooth jello wobble animation.

## How is it used?

```jsx
import JelloIcon from './JelloIcon';

<JelloIcon label="Success">★</JelloIcon>
```

## Why is it useful?

Jello entrances draw soft attention to status icons without a heavy motion library — fitting EaseMotion’s readable, animation-first style.

## Accessibility

- `role="img"` with `aria-label`
- Under `prefers-reduced-motion: reduce`, jello skew is replaced by a simple fade

## Files

```
submissions/react/feature-jello-icon-component-sum/
├── JelloIcon.jsx
├── style.css
└── README.md
```

Related issue: #50757
