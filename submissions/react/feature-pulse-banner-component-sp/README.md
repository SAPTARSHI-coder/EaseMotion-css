# Pulse Banner Component

## Description

`PulseBanner` is a beginner-friendly React banner with a smooth pulse animation for interactive attention states.

## Why it is useful

- Reusable pulsing banner for alerts and updates
- Uses EaseMotion-style utilities (`ease-pulse-in`)
- Simple `isPulsing` toggle
- Respects `prefers-reduced-motion`

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `children` | ReactNode | Yes | — | Banner content |
| `isPulsing` | boolean | No | `true` | Enables the pulse animation |
| `className` | string | No | `''` | Extra CSS classes |

## Usage

```jsx
import PulseBanner from './PulseBanner';

// Use EaseMotion utilities (e.g. className="ease-pulse-in")
<PulseBanner>Hello</PulseBanner>

<PulseBanner isPulsing={true}>
  Syncing your workspace…
</PulseBanner>
```

## Accessibility

- Uses `role="status"` and `aria-live="polite"`
- Under `prefers-reduced-motion: reduce`, pulse stops and a static accent border remains

## Files

```
submissions/react/feature-pulse-banner-component-sp/
├── PulseBanner.jsx
├── style.css
└── README.md
```
