# MotionToast

A dismissible React toast whose exit animation is allowed to finish before the
component unmounts.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Toast body content. |
| `title` | `string` | — | Optional bold heading line. |
| `tone` | `'info' \| 'success' \| 'warning' \| 'danger'` | `'info'` | Visual tone; `danger` also raises the ARIA politeness. |
| `duration` | `number` | `6000` | Auto-dismiss delay in ms. `0` disables it. |
| `onDismiss` | `() => void` | — | Called after the leave animation ends. Remove the toast here. |
| `className` | `string` | `''` | Extra classes. |

## Usage

```jsx
import MotionToast from './MotionToast';
import './style.css';

{toasts.map((t) => (
  <MotionToast
    key={t.id}
    tone={t.tone}
    title={t.title}
    onDismiss={() => remove(t.id)}
  >
    {t.message}
  </MotionToast>
))}
```

## Why it fits EaseMotion CSS

The recurring bug in React toast components is that the parent removes the item
from state the moment dismissal is requested, so React unmounts the node
immediately and the CSS leave animation never plays — the toast simply vanishes.
This component separates the two: clicking close sets `is-leaving`, and
`onDismiss` fires from `onAnimationEnd`, so the parent removes the toast only
once the animation has genuinely completed.

That structure is why the reduced-motion block substitutes differently-named
keyframes rather than setting `animation: none`. With no animation there is no
`animationend` event, `onDismiss` would never fire, and the toast would become
undismissable — a reduced-motion preference turning into a functional dead end.
Short fade keyframes keep the event contract intact.

The timer pauses on hover and focus so a slow reader is not raced by the
auto-dismiss, which is what WCAG 2.2.1 asks for, and `danger` toasts use
`role="alert"` with `aria-live="assertive"` so failures interrupt rather than
queue.
