# Zoom Accordion Component (`feature-zoom-accordion-component-ab`)

Standalone **React track** submission for [Issue #50774](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/50774).

A beginner-friendly **Zoom Accordion** that uses a smooth **zoom attention seeker** when a panel opens — expressive, accessible, and CSS-first.

---

## What it does

- Accessible accordion with real `<button>` triggers
- Smooth zoom-in attention effect on the opened panel
- Single-panel mode via `children` **or** multi-panel mode via `items`
- Optional `allowMultiple` for independent panels
- Intensity presets: `soft` / `medium` / `strong`
- Respects `prefers-reduced-motion` (JS + CSS)

---

## Folder structure

```
submissions/react/feature-zoom-accordion-component-ab/
├── ZoomAccordion.jsx   ← React component (+ optional demo helper)
├── style.css           ← zoom accordion styles
└── README.md           ← this file
```

---

## Installation

Copy the folder into your React app and import:

```jsx
import ZoomAccordion from './ZoomAccordion';
// style.css is imported inside ZoomAccordion.jsx
```

---

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | `"Hello"` | Panel body (single-item mode) |
| `title` | `string` | `"Details"` | Header label (single-item mode) |
| `items` | `Array<{id?, title, content, defaultOpen?}>` | — | Multi-panel data |
| `allowMultiple` | `boolean` | `false` | Keep multiple panels open |
| `intensity` | `'soft' \| 'medium' \| 'strong'` | `'medium'` | Zoom strength |
| `defaultOpen` | `boolean` | `false` | Open first/single panel on mount |
| `className` | `string` | `''` | Extra classes |
| `label` | `string` | `"Zoom accordion"` | `aria-label` for the region |

---

## Usage

### Simple (matches issue example shape)

```jsx
import ZoomAccordion from './ZoomAccordion';

export default function App() {
  return (
    <ZoomAccordion title="Greeting" defaultOpen>
      Hello
    </ZoomAccordion>
  );
}
```

### Multi-item FAQ

```jsx
<ZoomAccordion
  intensity="medium"
  items={[
    {
      id: '1',
      title: 'What is EaseMotion?',
      content: 'An animation-first CSS framework.',
      defaultOpen: true,
    },
    {
      id: '2',
      title: 'Why zoom?',
      content: 'A short zoom cue draws attention to the opened answer.',
    },
  ]}
/>
```

### Optional demo helper

```jsx
import { ZoomAccordionDemoAb } from './ZoomAccordion';

export default function Playground() {
  return <ZoomAccordionDemoAb />;
}
```

---

## Why this is useful

Accordions often open with no visual emphasis. A controlled zoom cue:

1. Makes the newly opened panel feel intentional
2. Works as an attention seeker without looping forever
3. Stays declarative in React (`items` or `children`)
4. Ships with keyboard + ARIA patterns built in

A strong candidate for later curation into an official EaseMotion React helper.

---

## Accessibility

- Trigger is a real `<button>` with `aria-expanded` and `aria-controls`
- Panels use `role="region"` + `aria-labelledby`
- Closed panels use the `hidden` attribute
- Enter / Space activate the trigger
- Under `prefers-reduced-motion: reduce`, zoom animations are disabled

---

## Unique identifier

All classes, tokens, and keyframes use the **`-ab`** suffix to avoid collisions with other submissions.

---

## Checklist (issue acceptance)

- [x] Files live under `submissions/react/feature-zoom-accordion-component-ab/`
- [x] `ZoomAccordion.jsx` + `README.md` (+ `style.css`)
- [x] Unique identifier on folder / classes
- [x] Smooth zoom effect on expand
- [x] Accessibility + `prefers-reduced-motion` handled
- [x] README explains what / how / why
