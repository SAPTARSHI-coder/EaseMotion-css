# MotionTimeline

MotionTimeline is a zero-dependency React sequencing system for EaseMotion CSS. It solves a different problem from staggered siblings: each step in the timeline can use a different animation type, a different duration, and a different gap while MotionTimeline calculates cumulative delays automatically.

This submission implements GSSoC 2026 issue #38757: [FEATURE] Add MotionTimeline React Components for Declarative Animation Sequencing.

## Feature Overview

MotionTimeline orchestrates declarative multi-stage animation timing. MotionStep acts as a lightweight descriptor for one stage in the sequence, and MotionTimeline computes when each stage should begin based on the previous stage's duration and gap.

## Problem Solved

Without MotionTimeline, multi-stage motion usually requires manual delay math, custom sequencing state, and careful handling of reverse playback. MotionTimeline keeps the React tree declarative while the timing logic stays centralized and predictable.

## Difference From AnimateGroup

AnimateGroup is for uniform staggered sibling animations where every child shares the same animation type, duration rule, and stagger step.

MotionTimeline is for heterogeneous sequencing where each step may have its own animation type, duration, and gap. The delay for each step is computed cumulatively from the previous step's resolved duration plus its gap.

## MotionTimeline API

```jsx
<MotionTimeline
  delay={200}
  reverse={false}
  tag="section"
  className="hero-sequence"
>
  <MotionStep type="fade-in" duration={300} gap={100}>
    <HeroTitle />
  </MotionStep>

  <MotionStep type="slide-up" duration={400} gap={150}>
    <HeroDescription />
  </MotionStep>

  <MotionStep type="zoom-in" duration={300}>
    <HeroCTA />
  </MotionStep>
</MotionTimeline>
```

## MotionStep API

```jsx
<MotionStep type="slide-up" duration="medium" gap={80} className="step-shell">
  <Card />
</MotionStep>
```

MotionStep is a declarative step descriptor. It does not calculate cumulative timing itself. MotionTimeline owns orchestration.

## Props Tables

### MotionTimeline

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `delay` | `number` | `0` | Initial timeline delay in milliseconds. Invalid values fall back to `0`. |
| `reverse` | `boolean` | `false` | Reverses sequencing order only. The rendered DOM order remains unchanged. |
| `tag` | `string` | `"div"` | Wrapper HTML tag rendered by MotionTimeline. |
| `className` | `string` | `""` | Optional wrapper class names. |
| `children` | `MotionStep children` | required | Timeline steps plus any non-MotionStep children to render unchanged. |

### MotionStep

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | required | EaseMotion animation name, such as `fade-in`, `slide-up`, or `zoom-in`. Invalid or empty values do not generate an `ease-` class. |
| `duration` | `"fast" \| "medium" \| "slow" \| number` | `"medium"` | Step duration. Keywords map to 150ms, 300ms, and 600ms. Invalid values fall back to `medium`. |
| `gap` | `number` | `0` | Non-negative spacing after the step finishes. Invalid values fall back to `0`. |
| `className` | `string` | `""` | Additional class names merged with the animated child or wrapper. |
| `children` | `ReactNode` | required | Step content to animate. |

## Duration Keyword Mapping

MotionTimeline uses the documented EaseMotion timing values for cumulative calculations:

- `fast = 150ms`
- `medium = 300ms`
- `slow = 600ms`

Keyword values also apply the matching helper class:

- `ease-duration-fast`
- `ease-duration-medium`
- `ease-duration-slow`

For finite numeric durations, MotionTimeline uses the numeric value for timing calculations and applies `animationDuration` inline in milliseconds.

Unsupported duration values fall back to `medium` and use `300ms` for timing calculations.

## Exact Cumulative Delay Algorithm

Gap is defined as spacing after the current step.

For normal sequencing, MotionTimeline does this for every MotionStep in order:

1. Assign the current delay to the step.
2. Advance the current delay by the step's resolved duration plus its gap.

Formula:

`stepDelay = timelineDelay + sum(previousStep.duration + previousStep.gap)`

## Worked Timing Example

Timeline delay = `0`

- Step 1: duration `300`, gap `100`, delay `0`
- Step 2: duration `400`, gap `150`, delay `400`
- Step 3: duration `300`, gap `0`, delay `950`

That means Step 2 starts after Step 1 finishes and its gap ends, and Step 3 starts after Step 2 finishes and its gap ends.

## Reverse Sequencing Semantics

When `reverse={true}`, MotionTimeline reverses the sequencing order only. The DOM order does not change.

Example with steps A, B, C:

- Rendered order: A, B, C
- Normal animation order: A -> B -> C
- Reverse animation order: C -> B -> A

Each step keeps its own duration and gap while the cumulative delay is assigned from the last normalized step back to the first.

## Safe Merging Rules

MotionTimeline preserves existing child props.

- Existing `className` values are merged with the submission classes.
- Existing inline `style` objects are copied before `animationDelay` or numeric `animationDuration` is added.
- Valid React element keys are preserved when children are cloned.

## Fragment Handling

Fragments are flattened where reasonably possible so MotionStep elements nested inside fragments can participate in the timeline. This keeps the component declarative without forcing the author to change markup shape.

## Non-MotionStep Child Behavior

Non-MotionStep children render unchanged and do not participate in cumulative timing. They are not deleted, reordered, or timed. This behavior is intentional and documented so MotionTimeline can coexist with separators, notes, or other content in the same wrapper.

## Text and Multiple-Child Handling

A MotionStep may contain a single valid React element, text, multiple children, or nested fragments.

- If the step contains one valid React element, MotionTimeline clones it and merges the animation classes and inline styles.
- If the step contains text or multiple children, MotionTimeline wraps the content in a deterministic span with the submission-scoped class `ease-motion-timeline-ag404-item`.

## Accessibility Behavior

The submission includes `prefers-reduced-motion: reduce` support in `style.css`.

When reduced motion is preferred:

- animation duration is minimized
- animation delay is removed
- transition duration is minimized

The implementation uses CSS only for this behavior and does not add JavaScript media-query listeners.

## Complete React Usage Example

```jsx
import React from "react";
import MotionTimeline, { MotionStep } from "./MotionTimeline";
import "./easemotion.min.css";

export default function HeroSequence() {
  return (
    <MotionTimeline delay={200} reverse={false} tag="section" className="hero-sequence">
      <MotionStep type="fade-in" duration={300} gap={100}>
        <h1>Build faster with motion</h1>
      </MotionStep>

      <MotionStep type="slide-up" duration={400} gap={150}>
        <p>Sequence each stage with its own timing and animation style.</p>
      </MotionStep>

      <MotionStep type="zoom-in" duration={300}>
        <a href="/docs">Read the docs</a>
      </MotionStep>
    </MotionTimeline>
  );
}
```

## Demo Instructions

Open `demo.html` in a browser to see the three-stage heterogeneous timeline. The demo includes a replay button, a normal/reverse toggle, an accessible live region, and visible timing fields for each step.

## File Structure

```text
submissions/react/motion-timeline-ag404/
├── MotionTimeline.jsx
├── demo.html
├── style.css
└── README.md
```

## Zero-Dependency Statement

This submission uses React only and does not add external runtime dependencies, package changes, workflows, or shared framework edits.
