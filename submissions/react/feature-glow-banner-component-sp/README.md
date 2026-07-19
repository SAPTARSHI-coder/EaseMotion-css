# Glow Banner Component

## Description

`GlowBanner` is a beginner-friendly React banner with a smooth interactive glow. Use it for notices, promotions, or status messages that should stand out gently.

## Why it is useful

- One reusable glowing banner component
- Works with EaseMotion-style utilities (`ease-glow-in`)
- Easy to toggle with `isGlowing`
- Respects `prefers-reduced-motion`

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `children` | ReactNode | Yes | — | Banner content |
| `isGlowing` | boolean | No | `true` | Enables the glow animation |
| `className` | string | No | `''` | Extra CSS classes |

## Usage

```jsx
import GlowBanner from './GlowBanner';

// Use EaseMotion utilities (e.g. className="ease-glow-in")
<GlowBanner>Hello</GlowBanner>

<GlowBanner isGlowing={true}>
  New theme available — try it now
</GlowBanner>
```

## Accessibility

- Uses `role="status"` and `aria-live="polite"` for announcements
- Under `prefers-reduced-motion: reduce`, animation stops and a static border glow remains

## Files

```
submissions/react/feature-glow-banner-component-sp/
├── GlowBanner.jsx
├── style.css
└── README.md
```
