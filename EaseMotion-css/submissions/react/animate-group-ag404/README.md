# AnimateGroup

AnimateGroup is a zero-dependency React component for EaseMotion CSS that applies declarative staggered animation timing to a group of children. This submission implements GSSoC 2026 issue #38742: `[FEATURE] Add AnimateGroup React Component for Declarative Staggered Animations`.

## Feature Overview

AnimateGroup automatically assigns EaseMotion-compatible animation classes and staggered inline delays to each child element. It is designed for grids, cards, lists, dashboards, and any repeated UI where sequential motion should be readable without manually calculating delay values for each item.

## Problem Solved

Without a wrapper like AnimateGroup, staggered animation usually means repeating `animation-delay` math across every child, manually reversing order, and carefully merging styles and classes to avoid breaking existing props.

AnimateGroup centralizes that logic in one reusable React component.

## AnimateGroup API

```jsx
<AnimateGroup
  type="slide-up"
  stagger={100}
  delay={200}
  duration="medium"
  reverse={false}
  tag="div"
  className="my-grid"
>
  <Card />
  <Card />
  <Card />
</AnimateGroup>
```

## Props Table

| Prop        | Type                                     | Default    | Description                                                                 |
| ----------- | ---------------------------------------- | ---------- | --------------------------------------------------------------------------- |
| `type`      | `string`                                 | required   | EaseMotion animation name, such as `fade-in`, `slide-up`, or `zoom-in`.     |
| `stagger`   | `number`                                 | `100`      | Milliseconds added between each child animation.                            |
| `delay`     | `number`                                 | `0`        | Initial delay applied before the first animation starts.                    |
| `duration`  | `"fast" \| "medium" \| "slow" \| number` | `"medium"` | Keyword duration class or a numeric duration in milliseconds.               |
| `reverse`   | `boolean`                                | `false`    | When true, delay order is calculated from the last child back to the first. |
| `tag`       | `string`                                 | `"div"`    | Wrapper element rendered by AnimateGroup.                                   |
| `className` | `string`                                 | `""`       | Optional wrapper class names.                                               |
| `children`  | `ReactNode`                              | required   | React children to animate.                                                  |

## Installation / Copy Usage

Copy `AnimateGroup.jsx` into your React project and import it where needed.

```jsx
import AnimateGroup from "./AnimateGroup";
import "./easemotion.min.css";

export default function Example() {
  return (
    <AnimateGroup
      type="slide-up"
      stagger={100}
      delay={200}
      duration="medium"
      reverse={false}
      tag="section"
      className="feature-grid"
    >
      <article className="card">One</article>
      <article className="card">Two</article>
      <article className="card">Three</article>
    </AnimateGroup>
  );
}
```

## Complete React Example

```jsx
import React from "react";
import AnimateGroup from "./AnimateGroup";
import "./easemotion.min.css";

function PricingCard({ title, price }) {
  return (
    <article className="pricing-card">
      <h3>{title}</h3>
      <strong>{price}</strong>
    </article>
  );
}

export default function PricingSection() {
  return (
    <AnimateGroup
      type="slide-up"
      stagger={120}
      delay={180}
      duration="medium"
      reverse={false}
      tag="div"
      className="pricing-grid"
    >
      <PricingCard title="Starter" price="$0" />
      <PricingCard title="Growth" price="$19" />
      <PricingCard title="Pro" price="$49" />
      <PricingCard title="Enterprise" price="$99" />
    </AnimateGroup>
  );
}
```

## Stagger Delay Calculation

AnimateGroup calculates each child delay with this formula:

`delay + staggerIndex * stagger`

Normal order:

* child 0 -> `delay`
* child 1 -> `delay + stagger`
* child 2 -> `delay + 2 * stagger`

Reverse order:

* child 0 -> `delay + 2 * stagger`
* child 1 -> `delay + 1 * stagger`
* child 2 -> `delay`

This implementation keeps the base delay intact and only changes the stagger index calculation.

## Reverse Stagger Behavior

When `reverse={true}`, the last child receives the first available stagger slot.

That means the visual entrance starts from the end of the collection and walks backward to the beginning, while the original child order in the React tree remains unchanged.

## Numeric and Keyword Durations

AnimateGroup supports both duration modes:

* `fast`, `medium`, and `slow` add EaseMotion duration classes: `ease-duration-fast`, `ease-duration-medium`, and `ease-duration-slow`.
* A numeric duration applies an inline `animationDuration` value in milliseconds without replacing the child's existing style object.
* Unsupported duration values fall back to the default `medium` duration class.

## Accessibility Behavior

The submission includes `prefers-reduced-motion` support in `style.css`.

When a user prefers reduced motion, the generated animated elements minimize animation duration and remove staggered animation delays instead of forcing full motion playback.

The component avoids JavaScript media-query listeners, keeping the behavior CSS-driven.

## Edge Cases

* `null`, `undefined`, and boolean children are ignored by React's child normalization.
* Fragments are flattened where reasonably possible so nested groups still receive stagger timing.
* Contextual identity is retained while recursively flattening fragment children.
* Text nodes and other non-element children are wrapped in a `span` so animation classes can still be applied.
* Generated wrapper elements receive deterministic submission-scoped keys.
* Existing `className` values are merged safely.
* Existing inline `style` objects are merged safely.
* Child keys are preserved by cloning valid React elements instead of recreating them.
* Animation `type` values are trimmed before EaseMotion class names are generated.
* Unsupported duration keywords safely fall back to `medium`.

## Demo Instructions

Open `demo.html` in a browser to see the staggered slide-up demo.

The page shows five cards, a replay button, a normal/reverse toggle, and a visual code example of the intended React API.

## File Structure

```text
submissions/react/animate-group-ag404/
├── AnimateGroup.jsx
├── demo.html
├── style.css
└── README.md
```

## Zero-Dependency Statement

This submission uses React only and does not add any external runtime dependencies, build steps, or package changes.
