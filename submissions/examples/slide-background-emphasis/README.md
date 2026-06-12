# Animation: Slide Background Emphasis

## What does this do?

A pure CSS looping gradient slide animation that sweeps a linear gradient horizontally across a button element, creating a smooth, breathing emphasis effect. The gradient position animates infinitely on hover or when the emphasis class is applied.

## How is it used?

```html
<!-- Default purple-blue gradient -->
<button class="slide-bg-btn slide-bg-emphasis">Slide Effect</button>

<!-- Cyan-teal variant -->
<button class="slide-bg-btn slide-bg-emphasis-cyan">Cyan Variant</button>

<!-- Pink-orange variant -->
<button class="slide-bg-btn slide-bg-emphasis-pink">Pink Variant</button>
```

Apply `.slide-bg-emphasis` (or variant classes) to any button or container element with `.slide-bg-btn` base styling.

## Why is it useful?

- **Lightweight & performant**: Animates only `background-position` — no layout thrashing, GPU-friendly
- **Pure CSS**: Zero JavaScript dependencies
- **Cross-browser compatible**: Works seamlessly on Chrome, Firefox, Safari, and Edge
- **Customizable**: Easy to adjust gradient colors, duration, or easing function
- **Visually engaging**: Creates an ambient, breathing emphasis effect perfect for CTAs and interactive components

---

Submitted by: @hematejaswi-30  
Date: 2026-05-31  
Status: **Pending review**
