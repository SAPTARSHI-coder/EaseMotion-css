# Ease Flip Axis

`ease-flip-x` and `ease-flip-y` add axis-specific 3D entrance flips for cards, panels, badges, and reveal content. The matching `ease-flip-x-out` and `ease-flip-y-out` classes provide exit motion in the same visual language.

## Usage

```html
<div class="flip-stage">
  <article class="flip-panel ease-flip-x">Horizontal flip</article>
</div>

<div class="flip-stage">
  <article class="flip-panel ease-flip-y">Vertical flip</article>
</div>
```

Add `perspective` on a parent wrapper so the 3D rotation has depth. The demo uses `.flip-stage`, but any parent element can set `perspective: 900px`.

## Classes

| Class              | Behavior                                        |
| ------------------ | ----------------------------------------------- |
| `.ease-flip-x`     | Enters from `rotateX(90deg)` and fades in.      |
| `.ease-flip-y`     | Enters from `rotateY(90deg)` and fades in.      |
| `.ease-flip-x-out` | Exits toward `rotateX(90deg)` while fading out. |
| `.ease-flip-y-out` | Exits toward `rotateY(90deg)` while fading out. |

All animations use ease-out timing and respect `prefers-reduced-motion`.
