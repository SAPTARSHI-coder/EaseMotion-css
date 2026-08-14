# ease-counter Animated Number Count-Up Utility

## What does this do?

Animates a number counting up from 0 to a target value when it scrolls into view, commonly used for stats sections ("500+ users", "99% uptime"). CSS handles entrance styling; vanilla-JS drives the count using `requestAnimationFrame`.

## How is it used?

```html
<!-- Basic usage -->
<span class="ease-counter" data-target="500">0</span>

<!-- With suffix -->
<span class="ease-counter" data-target="99" data-suffix="%">0</span>

<!-- With prefix -->
<span class="ease-counter" data-target="500" data-prefix="$">0</span>
```

### CSS Classes

| Class | Purpose |
|-------|---------|
| `.ease-counter` | Counter element with `data-target` attribute |
| `.ease-counter.ease-counting` | Active counting state |
| `.ease-counter.ease-counted` | Completed state |

### Data Attributes

| Attribute | Purpose |
|-----------|---------|
| `data-target` | The final number to count up to |
| `data-suffix` | Text appended after the number (e.g., "+", "%") |
| `data-prefix` | Text prepended before the number (e.g., "$") |
| `data-duration` | Animation duration in ms (default: 2000) |

## Why is it useful?

The demo page shows stat cards ("42+ Utilities", "12 Animations") — a count-up utility makes those numbers animate on load/scroll instead of appearing static:

- ✅ Reinforces the "animation-first" philosophy
- ✅ Uses efficient `requestAnimationFrame`
- ✅ Intersection Observer for scroll trigger
- ✅ Lightweight, no dependencies
- ✅ CSS classes for styling states
