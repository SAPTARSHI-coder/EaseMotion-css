# Pulse Text Component

## Description

`PulseText` is a beginner-friendly React component that applies a smooth pulse (attention seeker) animation to text. It is useful for labels, CTAs, status messages, and any copy that should gently draw the eye without being aggressive.

## Why it is useful

- One reusable component for pulsing text
- Works with EaseMotion-style utilities (`ease-fade-in`)
- Easy to toggle with an `isPulsing` prop
- Respects `prefers-reduced-motion`

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `children` | ReactNode | Yes | — | Text or nodes to display |
| `isPulsing` | boolean | No | `true` | Runs the pulse animation when `true` |
| `as` | string | No | `'span'` | HTML tag to render (`span`, `p`, `h2`, etc.) |
| `className` | string | No | `''` | Extra CSS classes |

## Usage

```jsx
import PulseText from './PulseText';

// Use EaseMotion utilities (e.g. className="ease-fade-in")
<PulseText>Hello</PulseText>

<PulseText isPulsing={true} as="strong">
  New update available
</PulseText>

<PulseText isPulsing={false} className="ease-fade-in">
  Static text
</PulseText>
```

## Accessibility

- Prefer wrapping meaningful copy in a semantic tag via the `as` prop
- When pulsing, `aria-live="polite"` is set so related text updates can be announced
- Under `prefers-reduced-motion: reduce`, the pulse is disabled and an underline fallback is used instead

## Files

```
submissions/react/feature-pulse-text-component-sp/
├── PulseText.jsx
├── style.css
└── README.md
```
