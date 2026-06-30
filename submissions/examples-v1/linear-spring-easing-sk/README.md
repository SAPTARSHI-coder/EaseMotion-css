# linear() Spring Easing

Three spring easing presets using CSS `linear()` timing function with N-stop value encoding.

## Classes / Custom Properties

| Property | Description |
|---|---|
| `--spring-snappy` | Quick overshoot, fast settle |
| `--spring-wobbly` | More oscillation, bouncy feel |
| `--spring-stiff` | Minimal overshoot, controlled |

## Usage

```css
.my-element {
  animation: pop-in 0.6s var(--spring-snappy) both;
}
```

## How it works

`linear()` accepts N value stops that encode any arbitrary easing curve. Unlike `cubic-bezier()` (4 control points max), a spring curve with overshoot can be encoded precisely. Each stop is a progress value at an optional percentage of the animation timeline.

`@supports not (animation-timing-function: linear(0, 1))` provides a `cubic-bezier` fallback for older browsers.

Closes #9586
