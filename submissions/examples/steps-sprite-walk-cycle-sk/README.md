# CSS steps() Sprite Walk Cycle

Three `steps()` timing function demonstrations: digit counter, discrete position walker, and simulated sprite strip cycling.

## Classes

| Class | Demo |
|---|---|
| `ease-digit-strip` / `ease-digit-inner` | Digit counter — `steps(10, end)` on `translateY` |
| `ease-step-walker` | Discrete position jumps — `steps(6, end)` on `translateX` |
| `ease-sprite-box` | Simulated sprite strip — `steps(8, start)` on `background-position` |

## How it works

`steps(N, direction)` divides the animation timeline into N equal discrete intervals instead of interpolating continuously.

- **Digit counter**: a vertical strip of digits animates `translateY(-100%)` in `steps(10, end)` — each step jumps exactly one digit height
- **Sprite cycling**: `background-position` advances by one frame width per step — `steps(frameCount, start)` is the standard sprite technique
- `--walk-speed` custom property controls animation duration on the sprite demo

## Usage

```css
.my-sprite {
  animation: sprite-advance var(--walk-speed) steps(8, start) infinite;
}
```

Closes #9614
