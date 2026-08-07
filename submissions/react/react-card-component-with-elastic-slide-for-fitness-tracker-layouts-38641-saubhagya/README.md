# FitnessTrackerCard

[![React](https://img.shields.io/badge/React-%E2%89%A518.0.0-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributing)

A themeable, animated React card component for fitness-tracker dashboards.
Built on the **EaseMotion** CSS utility classes — an elastic slide-in on
mount, a lift + shimmer on hover, and a spring-back grow effect on the
call-to-action button.

![FitnessTrackerCard preview](./preview.png)
<!-- Replace with an actual screenshot or GIF before publishing. -->

---

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Props API](#props-api)
- [Styling & Theming](#styling--theming)
- [Accessibility](#accessibility)
- [Browser Support](#browser-support)
- [Folder Structure](#folder-structure)
- [Testing](#testing)
- [Versioning](#versioning)
- [Contributing](#contributing)
- [License](#license)

---

## Features

-  **Motion out of the box** — elastic mount animation, hover lift, shimmer sweep, and a spring-back CTA button, all via the EaseMotion utility classes.
-  **One-prop theming** — pass a single `accentColor` and the badge, progress bar, and button restyle together through a CSS custom property.
-  **Accessible by default** — semantic `progressbar` ARIA attributes, labeled CTA, visible focus ring, and full `prefers-reduced-motion` support.
-  **Responsive** — stat grid and typography adapt below 480px.
-  **Zero heavy dependencies** — React + `prop-types` only.
-  **Type-safe props at runtime** — validated with PropTypes and sensible defaults, so the component renders sanely even with partial props.

## Requirements

| Dependency   | Version   |
|--------------|-----------|
| React        | ≥ 18.0.0  |
| React DOM    | ≥ 18.0.0  |
| prop-types   | ≥ 15.0.0  |

> The component uses `color-mix()` in CSS (button hover/shadow states), which requires a modern browser — see [Browser Support](#browser-support).

## Installation

```bash
npm install prop-types
```

Then copy `FitnessTrackerCard.jsx` and `FitnessTrackerCard.css` into your
project (e.g. `src/components/FitnessTrackerCard/`), or install directly
from this submission's path if it's published as a package.

## Quick Start

```jsx
import FitnessTrackerCard from "./FitnessTrackerCard";

function App() {
  return (
    <FitnessTrackerCard
      title="Morning Walk"
      steps={9200}
      progress={92}
      goal={10000}
      trend="+8%"
      heartRate={112}
      calories={620}
      distance="7.2 km"
      activeMinutes={55}
      accentColor="#2563eb"
      onButtonClick={() => alert("Workout started!")}
    />
  );
}

export default App;
```

Run the bundled demo entry point (`main.jsx`) in a Vite or CRA project by
pointing your `index.html` root script at it.

### Multiple cards / theme variants

```jsx
<div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
  <FitnessTrackerCard title="Running" accentColor="#dc2626" trend="+5%" />
  <FitnessTrackerCard title="Cycling" accentColor="#2563eb" trend="+18%" />
  <FitnessTrackerCard title="Swimming" accentColor="#0891b2" trend="-2%" />
</div>
```

## Props API

| Prop            | Type       | Required | Default              | Description                                                                                       |
|-----------------|------------|:--------:|-----------------------|-----------------------------------------------------------------------------------------------------|
| `title`         | `string`   | No       | `"Daily Activity"`   | Main card heading.                                                                                  |
| `subtitle`      | `string`   | No       | `"Fitness Tracker"`  | Small label above the title.                                                                        |
| `steps`         | `number`   | No       | `8450`                | Current step count. Formatted with `toLocaleString()`.                                              |
| `progress`      | `number`   | No       | `84`                  | Progress bar fill percentage. Values outside `0–100` are clamped.                                   |
| `goal`          | `number`   | No       | `10000`               | Target step goal, shown at the end of the progress bar.                                             |
| `trend`         | `string`   | No       | `"+12%"`              | Badge text showing trend vs. a prior period.                                                        |
| `heartRate`     | `number`   | No       | `128`                  | Heart rate stat (bpm).                                                                                |
| `calories`      | `number`   | No       | `540`                  | Calories burned stat.                                                                                |
| `distance`      | `string`   | No       | `"6.8 km"`             | Distance stat. Include the unit in the string, e.g. `"5 mi"`.                                       |
| `activeMinutes` | `number`   | No       | `48`                    | Active minutes stat.                                                                                  |
| `buttonText`    | `string`   | No       | `"View Workout"`       | Label for the call-to-action button.                                                                  |
| `accentColor`   | `string`   | No       | `"#16a34a"`             | Any valid CSS color (hex, rgb, hsl, named). Drives badge/progress/button theme via `--accent-color`.  |
| `onButtonClick` | `function` | No       | `() => {}`              | Click handler for the CTA button. Receives the native React click event.                              |

All props are optional — the component renders a complete, sensible card
with zero props passed.

## Styling & Theming

- **CSS custom property**: `accentColor` is written to `--accent-color`
  inline on the card root. `FitnessTrackerCard.css` reads that variable for
  the badge text, progress fill gradient, and button background/hover/shadow
  states, so a single prop re-skins the whole card — no CSS edits required.
- **CTA button**: uses a `700` font weight and an accent-tinted `box-shadow`
  for visual weight, plus a `translateY(-2px)` lift and stronger shadow on
  hover, layered on top of the `ease-hover-grow` scale animation.
- **Opting out of an animation**: each EaseMotion effect is a discrete class
  name (`ease-slide-in-from-bottom`, `ease-card-lift`, `ease-hover-shimmer`,
  `ease-hover-grow`) on the root `className` string — remove any of them to
  disable just that interaction without touching the others.
- **Reduced motion**: all animations and transitions are disabled under
  `prefers-reduced-motion: reduce`, per the media query in
  `FitnessTrackerCard.css`.

## Accessibility

- Progress bar exposes `role="progressbar"` with `aria-valuenow`,
  `aria-valuemin="0"`, `aria-valuemax="100"`, and a descriptive
  `aria-label`.
- CTA button has an explicit `aria-label` matching its visible text, and a
  visible `:focus-visible` outline for keyboard navigation.
- Color contrast for text and stat values targets WCAG AA against the
  default card background; if you pass a custom `accentColor`, verify
  contrast for the badge and button text against your chosen color.
- Respects `prefers-reduced-motion` system setting.

## Browser Support

Tested against the latest two major versions of:

| Browser         | Supported |
|-----------------|:---------:|
| Chrome / Edge   |         |
| Firefox         |         |
| Safari          |  (17+)  |

Relies on `color-mix()` (Baseline 2023) for button hover/shadow tinting. In
browsers without `color-mix()` support, the button falls back to the flat
`--accent-color` background with no tint shift — layout and functionality
are unaffected.

## Folder Structure

```
submissions/react/
├── FitnessTrackerCard.jsx   # component (React + PropTypes)
├── FitnessTrackerCard.css   # EaseMotion utilities + component styles
├── main.jsx                 # example render entry point
└── README.md                # this file
```

## Testing

No test suite ships with this submission. Recommended setup for consumers:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

Suggested coverage:
- Renders with default props and no crash on empty props.
- `progress` values above 100 / below 0 are clamped in the rendered width.
- `onButtonClick` fires on CTA click.
- `accentColor` is reflected as the `--accent-color` inline style.

## Versioning

This component follows [Semantic Versioning](https://semver.org/). Given a
version number `MAJOR.MINOR.PATCH`:
- **MAJOR** — breaking prop/behavior changes.
- **MINOR** — new props or features, backward compatible.
- **PATCH** — bug fixes, styling tweaks, no API changes.

## Contributing

1. Fork the repo and create a branch: `git checkout -b feat/your-feature`.
2. Keep changes scoped to `FitnessTrackerCard.jsx` / `.css` unless adding a
   new file is necessary.
3. Update this README's [Props API](#props-api) table for any prop changes.
4. Open a PR with a clear description of the change and, where relevant, a
   before/after screenshot or GIF.

## License

MIT — free to use, modify, and distribute in personal and commercial
projects.
