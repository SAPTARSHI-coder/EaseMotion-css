# Jello Accordion Component (`feature-jello-accordion-component-ab`)

Standalone **React track** submission for [Issue #50773](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/50773).

A beginner-friendly **Jello Accordion** with a smooth **entrance jello** animation — panels jiggle in on mount (staggered), and jello again when opened.

---

## What it does

- Accessible accordion with real `<button>` triggers
- Staggered jello entrance when the accordion mounts
- Replayable jello cue each time a panel opens
- Single-panel mode via `children` **or** multi-panel mode via `items`
- Intensity presets: `soft` / `medium` / `strong`
- Respects `prefers-reduced-motion` (JS + CSS)

---

## Folder structure

```
submissions/react/feature-jello-accordion-component-ab/
├── JelloAccordion.jsx   ← React component (+ optional demo helper)
├── style.css            ← jello accordion styles
└── README.md            ← this file
```

---

## Installation

```jsx
import JelloAccordion from './JelloAccordion';
// style.css is imported inside JelloAccordion.jsx
```

---

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | `"Hello"` | Panel body (single-item mode) |
| `title` | `string` | `"Details"` | Header label (single-item mode) |
| `items` | `Array<{id?, title, content, defaultOpen?}>` | — | Multi-panel data |
| `allowMultiple` | `boolean` | `false` | Keep multiple panels open |
| `intensity` | `'soft' \| 'medium' \| 'strong'` | `'medium'` | Jello strength |
| `defaultOpen` | `boolean` | `false` | Open first/single panel on mount |
| `enterOnMount` | `boolean` | `true` | Play staggered entrance jello |
| `className` | `string` | `''` | Extra classes |
| `label` | `string` | `"Jello accordion"` | `aria-label` for the region |

---

## Usage

### Simple (matches issue example shape)

```jsx
import JelloAccordion from './JelloAccordion';

export default function App() {
  return (
    <JelloAccordion title="Greeting" defaultOpen>
      Hello
    </JelloAccordion>
  );
}
```

### Multi-item FAQ

```jsx
<JelloAccordion
  intensity="medium"
  enterOnMount
  items={[
    {
      id: '1',
      title: 'What is EaseMotion?',
      content: 'An animation-first CSS framework.',
      defaultOpen: true,
    },
    {
      id: '2',
      title: 'Why jello?',
      content: 'A short jello entrance feels playful without looping forever.',
    },
  ]}
/>
```

### Optional demo helper

```jsx
import { JelloAccordionDemoAb } from './JelloAccordion';

export default function Playground() {
  return <JelloAccordionDemoAb />;
}
```

---

## Why this is useful

Accordions often appear statically. A controlled jello entrance:

1. Draws attention when the FAQ/list first lands
2. Softly celebrates each newly opened panel
3. Stays declarative in React (`items` or `children`)
4. Ships with keyboard + ARIA patterns built in

A strong candidate for later curation into an official EaseMotion React helper.

---

## Accessibility

- Trigger is a real `<button>` with `aria-expanded` and `aria-controls`
- Panels use `role="region"` + `aria-labelledby`
- Closed panels use the `hidden` attribute
- Enter / Space activate the trigger
- Under `prefers-reduced-motion: reduce`, jello animations are disabled

---

## Unique identifier

All classes, tokens, and keyframes use the **`-ab`** suffix to avoid collisions with other submissions.

---

## Checklist (issue acceptance)

- [x] Files live under `submissions/react/feature-jello-accordion-component-ab/`
- [x] `JelloAccordion.jsx` + `README.md` (+ `style.css`)
- [x] Unique identifier on folder / classes
- [x] Smooth jello entrance effect
- [x] Accessibility + `prefers-reduced-motion` handled
- [x] README explains what / how / why
