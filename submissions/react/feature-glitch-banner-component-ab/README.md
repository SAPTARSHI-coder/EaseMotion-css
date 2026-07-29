# Glitch Banner Component (`feature-glitch-banner-component-ab`)

Standalone **React track** submission for [Issue #50776](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/50776).

A beginner-friendly **Glitch Banner** that doubles as a **loading indicator** — chromatic RGB split, clip jitter, and soft scanlines while `loading` is true.

---

## What it does

- Renders an accessible status banner with a smooth glitch effect
- Plays glitch motion while `loading={true}` (loading indicator mode)
- Supports intensity + color variants
- Detects `prefers-reduced-motion` in JS and CSS (layers hide / animations stop)
- Keeps decorative glitch clones `aria-hidden` so screen readers hear the message once

---

## Folder structure

```
submissions/react/feature-glitch-banner-component-ab/
├── GlitchBanner.jsx   ← React component (+ optional demo helper)
├── style.css          ← glitch styles + tokens
└── README.md          ← this file
```

---

## Installation

1. Copy the folder into your React app (or import from this submission path).
2. Ensure React 17+ is available.
3. Import the component and stylesheet:

```jsx
import GlitchBanner from './GlitchBanner';
// style.css is imported inside GlitchBanner.jsx
```

---

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | `"Hello"` | Banner message |
| `loading` | `boolean` | `true` | Enables glitch + loading dots |
| `intensity` | `'soft' \| 'medium' \| 'strong'` | `'medium'` | Glitch strength / speed |
| `variant` | `'primary' \| 'success' \| 'danger' \| 'neutral'` | `'primary'` | Color theme |
| `className` | `string` | `''` | Extra classes |
| `label` | `string` | auto | `aria-label` override |
| `as` | `string` | `'aside'` | Wrapper element tag |

---

## Usage

```jsx
import GlitchBanner from './GlitchBanner';

export default function App() {
  return (
    <GlitchBanner loading intensity="medium" variant="primary">
      Hello
    </GlitchBanner>
  );
}
```

### Toggle loading state

```jsx
function SyncStatus({ isSyncing }) {
  return (
    <GlitchBanner loading={isSyncing} variant="success">
      {isSyncing ? 'Syncing EaseMotion tokens…' : 'All tokens synced'}
    </GlitchBanner>
  );
}
```

### Optional demo helper

```jsx
import { GlitchBannerDemoAb } from './GlitchBanner';

export default function Playground() {
  return <GlitchBannerDemoAb />;
}
```

---

## Why this is useful

Loading banners are easy to ignore. A controlled glitch cue:

1. Signals “in progress” without a spinner-only UI
2. Feels expressive and on-brand for an animation-first framework
3. Stays declarative in React via a single `loading` prop
4. Degrades cleanly for reduced-motion users

A strong candidate for later curation into an official EaseMotion React helper.

---

## Accessibility

- Wrapper uses `role="status"`, `aria-live="polite"`, and `aria-busy`
- Chromatic layers are decorative (`aria-hidden="true"`)
- Real text content remains in the accessibility tree once
- Under `prefers-reduced-motion: reduce`, glitch animations are disabled (JS + CSS)
- Prefer short, clear loading copy; avoid flashing large page regions infinitely in production UIs if users are photosensitive — use `soft` intensity or disable when idle

---

## Unique identifier

All classes, tokens, and keyframes use the **`-ab`** suffix to avoid collisions with other submissions.

---

## Checklist (issue acceptance)

- [x] Files live under `submissions/react/feature-glitch-banner-component-ab/`
- [x] `GlitchBanner.jsx` + `README.md` (+ `style.css`)
- [x] Unique identifier on folder / classes
- [x] Smooth glitch loading effect
- [x] Accessibility + `prefers-reduced-motion` handled
- [x] README explains what / how / why
