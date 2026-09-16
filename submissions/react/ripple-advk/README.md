# Ripple

A pointer-origin ripple effect, exposed both as a hook and as a ready-made
button.

## API

### `useRipple({ disabled })`

Returns `{ rippleProps, rippleNodes }`. Spread `rippleProps` onto the host
element and render `rippleNodes` inside it.

### `<RippleButton>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Button label. |
| `className` | `string` | `''` | Extra classes. |

Remaining props are forwarded to the `<button>`.

## Usage

```jsx
import RippleButton, { useRipple } from './Ripple';
import './style.css';

<RippleButton onClick={save}>Save</RippleButton>

function Card(props) {
  const { rippleProps, rippleNodes } = useRipple();
  return <div {...rippleProps}>{props.children}{rippleNodes}</div>;
}
```

## Why it fits EaseMotion CSS

Ripples give a press an origin, which makes touch interfaces feel responsive on
devices with no hover state to rely on. The animation itself is pure CSS; React
only tracks where each press happened.

Two implementation details are worth noting. The wave diameter is
`max(width, height) * 2` because a circle centred at an arbitrary press point must
reach the farthest corner — sizing it to the element's width leaves an unfilled
gap when the press is near an edge.

Each wave is removed on its own `animationend` rather than a shared
`setTimeout`. Timer-based cleanup drifts out of sync with the CSS duration and
leaks nodes under rapid clicking, where several ripples overlap; keying removal to
the actual animation guarantees each is cleaned up exactly once.

Under reduced motion the hook returns early and emits no waves at all, so nothing
animates — and the stylesheet supplies an `:active` background change so the press
still acknowledges itself.
