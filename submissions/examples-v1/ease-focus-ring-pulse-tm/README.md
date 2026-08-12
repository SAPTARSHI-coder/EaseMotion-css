# ease-focus-ring-pulse

Animated, accessible focus ring pulse for EaseMotion CSS.

## Keyframes

```css
@keyframes focusPulse { 0% { box-shadow: 0 0 0 0 rgba(108, 99, 255, 0.7); } 70% { box-shadow: 0 0 0 8px rgba(108, 99, 255, 0); } 100% { box-shadow: 0 0 0 0 rgba(108, 99, 255, 0); } }
:focus-visible { outline: none; animation: focusPulse 1.5s ease-in-out infinite; }
```

## Variants

- `focusPulse` - standard pulsing ring
- `focusPulseInset` - inset ring for inputs
