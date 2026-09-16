# Glow Badge Component (feature-glow-badge-component-XX)

## What it does
A small React badge component that pulses with a soft outward **glow**
to draw the eye, typically used for error counts, unread notifications,
or status indicators. The glow animates as an expanding, fading ring
around the badge.

## How to use
```jsx
import GlowBadge from './GlowBadge';

function App() {
  return (
    <button>
      Inbox
      <GlowBadge count={3} variant="error" />
    </button>
  );
}
```

Or with custom content instead of a count:
```jsx
<GlowBadge variant="info">New</GlowBadge>
```

### Props

| Prop      | Type                              | Default   | Description                                   |
|-----------|------------------------------------|-----------|------------------------------------------------|
| `count`   | number                             | —         | Numeric value to display (e.g. error count)    |
| `children`| node                                | —         | Custom content, used if `count` is not provided |
| `variant` | `'error' \| 'warning' \| 'info'`   | `'error'` | Controls badge color and glow tint             |

## Why it's useful
- **Draws attention naturally**: the pulsing glow is more noticeable
  than a static badge, without being as jarring as a bounce or shake.
- **Reusable across states**: `error`, `warning`, and `info` variants
  cover the most common badge use cases out of the box.
- **Accessible**:
  - Rendered with `role="status"` and an auto-generated `aria-label`
    (e.g. "3 errors") so screen readers announce the count meaningfully,
    not just a bare number.
  - Fully respects `prefers-reduced-motion: reduce` — the pulsing
    animation is disabled and replaced with a static glow ring for
    users who prefer reduced motion.
- **Lightweight**: pure CSS animation (box-shadow pulse), no dependencies.

## Accessibility notes
- `role="status"` combined with the derived `aria-label` ensures
  assistive tech announces meaningful context ("3 errors") rather than
  just the visible digit.
- Color is never the only signal — pair the badge with visible text
  context (e.g. "Inbox" in the example) so meaning isn't conveyed by
  color/glow alone.
- The glow animation is purely decorative and never delays the badge's
  content from being immediately readable.
