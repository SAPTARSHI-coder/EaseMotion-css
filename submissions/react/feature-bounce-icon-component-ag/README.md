# Bounce Icon Component (React)

## Description
A React component that applies a multi-step "bounce" exit/attention animation to an icon when clicked. Commonly used for notification bells, action confirmations, or gamification elements.

## Usage
```jsx
import BounceIconAG from './BounceIconAG';
<BounceIconAG icon="🔔" label="Notify" onClick={() => console.log('clicked')} />
```

## Props
- `icon`: The emoji or icon character to display (default: `🚀`).
- `label`: Accessible text label shown below the icon (default: `'Launch'`).
- `onClick`: Optional callback fired when clicked.

## Accessibility
- The button has an `aria-label` matching the text label.
- The icon `span` has `aria-hidden="true"` so screen readers don't read emoji names.
- **Reduced Motion**: Replaces the multi-step bounce keyframe with a simple scale pulse.
