# StatusDot — service status indicator

> Issue: [#63564](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63564)

A status indicator where every state carries a distinct shape as well as a colour.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `status` | `'operational' \| 'degraded' \| 'outage' \| 'maintenance' \| 'unknown'` | `'unknown'` | Sets colour, shape and default label. Unknown values degrade to `unknown`. |
| `label` | `string` | — | Service name; prefixes the announcement. |
| `showLabel` | `boolean` | `false` | Render the status text visibly instead of screen-reader-only. |
| `live` | `boolean` | `false` | Pulse to indicate a current reading. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Mark size. |
| `className` | `string` | `''` | Merged onto the root. |

## Status shapes

| Status | Shape | Colour |
|---|---|---|
| `operational` | filled circle | green |
| `degraded` | diamond | amber |
| `outage` | square | red |
| `maintenance` | hollow ring | blue |
| `unknown` | hollow ring | grey |

## Usage

```jsx
import StatusDot from './StatusDot';
import './style.css';

<StatusDot status="operational" label="Payments API" live />
<StatusDot status="degraded" label="Search" showLabel />
<StatusDot status="outage" label="Webhooks" showLabel />
```

## Why it fits EaseMotion

**Status UI is the canonical colour-only interface.** A green dot and a red dot are identical to a user with deuteranopia — roughly 1 in 12 men. Every state here carries a distinct shape, so status is readable in greyscale and by anyone. This is the whole reason the component exists rather than being a styled `<span>`.

**The pulse is bound to `live`, not to severity.** An outage is not more "live" than an operational service. What the pulse communicates is *this reading is current*, which is a different axis from how bad the status is — conflating them makes a stale outage look active and a fresh green look inert.

The pulse halo is a pseudo-element rather than a `box-shadow` on the mark itself. That matters for the diamond: a shadow would inherit the `rotate(45deg)`, so the halo would pulse as a rotating square and read as a rendering glitch. As a pseudo-element with `border-radius: inherit`, the halo matches the mark's own shape.

The announcement is `"{label}: {status}"` because a bare "Degraded performance" leaves a screen reader user asking *what* is degraded. Under `prefers-reduced-motion` the infinite pulse is removed outright — shortening a loop only makes it faster.
