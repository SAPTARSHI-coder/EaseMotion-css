# ease-blur-in-left

Element blurs into focus while sliding in from the left, creating a premium entrance feel.

## Usage

```html
<div class="ease-blur-in-left">Your content</div>
```

## How it works

The element starts 30px to the left of its final position (`translateX(-30px)`), blurred
(`blur(10px)`), and fully transparent (`opacity: 0`). As the `ease-out` timing function runs,
it slides into place, sharpens, and fades in — all simultaneously over 0.6s. `forwards` keeps
the final sharp, visible, in-place state after the animation completes.

## Why it's useful

- Gives entrances a "premium" polished feel — combining blur and motion reads as more
  intentional than a plain fade or slide alone.
- Single drop-in class, no JavaScript needed.
- Useful for cards, list items, or hero content entering from off-screen.

## Behavior

- `translateX(-30px) + blur(10px) + opacity(0)` → `translateX(0) + blur(0) + opacity(1)`
- Easing: `ease-out`
- Duration: `0.6s`