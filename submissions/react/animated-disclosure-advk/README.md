# AnimatedDisclosure

A controlled-or-uncontrolled disclosure section that animates open to its real
content height.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `summary` | `ReactNode` | — | Trigger content. |
| `children` | `ReactNode` | — | Panel content. |
| `defaultOpen` | `boolean` | `false` | Initial state when uncontrolled. |
| `open` | `boolean` | — | Supply to control externally. |
| `onToggle` | `(open: boolean) => void` | — | Fired with the next state. |
| `className` | `string` | `''` | Extra classes. |

## Usage

```jsx
import AnimatedDisclosure from './AnimatedDisclosure';
import './style.css';

<AnimatedDisclosure summary="Shipping details">
  <p>Dispatched within two working days.</p>
</AnimatedDisclosure>

<AnimatedDisclosure summary="Controlled" open={isOpen} onToggle={setIsOpen}>
  <p>Parent owns the state.</p>
</AnimatedDisclosure>
```

## Why it fits EaseMotion CSS

Accordions in React almost always measure `scrollHeight` in an effect and write a
pixel `maxHeight`. That re-measures on every content change, breaks when the panel
contains images that load late, and produces the wrong easing because the declared
range rarely matches the real height.

Transitioning `grid-template-rows` from `0fr` to `1fr` lets the browser resolve
the true height itself, so there is no measurement, no ref, and no resize
observer — the animation is entirely CSS and the component only owns the boolean.

Two details are easy to get wrong. `aria-expanded` and `aria-controls` must pair
the button with the panel, and `useId` generates the link without the caller
supplying ids. And `hidden` has to be overridden back to `display: grid`, because
`hidden` implies `display: none`, which would remove the grid formatting context
and prevent the track from animating at all.

Supporting both controlled and uncontrolled use means it drops into a form where
the parent owns state, or stands alone, without a second component.
