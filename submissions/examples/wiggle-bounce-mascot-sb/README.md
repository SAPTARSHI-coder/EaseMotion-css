# EaseMotion: Wiggle Bounce Mascot

A friendly CSS-only blob mascot that bounces idle, wiggles its ears, blinks, and reacts faster when hovered/focused.

## How is it used?
Drop the `.mascot-wrap` block anywhere; the mascot is pure CSS divs:
```html
<div class="mascot-wrap"><div class="shadow"></div><div class="mascot" tabindex="0">...</div></div>
```
Hover or focus to wake it.

## Why is it useful?
Adds personality with zero JavaScript — body bounce, ear wiggle and eye blink are independent keyframes so the motion feels organic. Accessible via `tabindex`/`role` and respects reduced-motion.

## Tailoring Variable Hooks

| Variable | Baseline | Purpose |
| :--- | :--- | :--- |
| `--body` | `#ffd23f` | Mascot body color |
| `--accent` | `#7c5bff` | Scene accent |


---
_Self-contained, dependency-free HTML + CSS. Open `demo.html` directly in a browser._
