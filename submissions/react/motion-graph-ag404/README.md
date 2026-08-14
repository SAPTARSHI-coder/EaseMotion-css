# MotionGraph

MotionGraph is a zero-dependency React orchestration component for EaseMotion CSS. It models animation sequencing as a directed acyclic graph (DAG), allowing steps to depend on one or more earlier steps and allowing independent branches to animate in parallel.

This submission implements GSSoC 2026 issue #38792: **[FEATURE] Add MotionGraph React Components for Dependency-Aware Animation Orchestration**.

## Problem solved

Uniform staggering and linear timelines cannot naturally express branching motion. A hero illustration and description may both begin after a title, while a CTA should wait until both branches finish. MotionGraph calculates those dependency-aware start times automatically.

## API

```jsx
import { MotionGraph, MotionNode } from "./MotionGraph";

<MotionGraph delay={0} tag="section" className="hero">
  <MotionNode id="title" type="fade-in" duration={300}>
    <h1>Build with motion</h1>
  </MotionNode>

  <MotionNode id="copy" after="title" gap={100} type="slide-up" duration={400}>
    <p>Dependency-aware animation orchestration.</p>
  </MotionNode>

  <MotionNode id="art" after="title" gap={100} type="zoom-in" duration="slow">
    <Illustration />
  </MotionNode>

  <MotionNode id="cta" after={["copy", "art"]} gap={100} type="fade-in">
    <button>Get started</button>
  </MotionNode>
</MotionGraph>
```

## MotionGraph props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `delay` | `number` | `0` | Non-negative graph-level initial delay. |
| `tag` | `string` | `"div"` | Wrapper HTML tag. |
| `className` | `string` | `""` | Additional wrapper classes. |
| `children` | `ReactNode` | required | MotionNode and ordinary React children. |

## MotionNode props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | required | Unique graph node identifier. |
| `after` | `string \| string[]` | none | Dependency or dependencies that must finish first. |
| `type` | `string` | none | EaseMotion animation type. |
| `duration` | `"fast" \| "medium" \| "slow" \| number` | `"medium"` | Resolved animation duration. |
| `gap` | `number` | `0` | Delay after every dependency finishes before this node may start. |
| `className` | `string` | `""` | Classes merged onto the animated content. |
| `style` | `object` | none | Styles merged before timeline-controlled animation values. |
| `children` | `ReactNode` | required | Animated content. |

## Timing algorithm

For a root node:

`start = graphDelay`

For a dependent node:

`start = max(dependency.end) + gap`

and:

`end = start + resolvedDuration`

Using the maximum dependency end time creates a join barrier: a node with multiple dependencies waits for the slowest dependency branch.

## Parallel branches

Nodes with the same completed dependency can receive the same start time. MotionGraph therefore supports parallel branches without timers, promises, or external orchestration libraries.

## Validation and cycle detection

Every MotionNode requires a non-empty unique `id`. Missing dependencies, duplicate ids, and dependency cycles throw descriptive errors. Cycle detection uses depth-first traversal state and reports the detected dependency path.

## Duration normalization

- `fast` = 150ms
- `medium` = 300ms
- `slow` = 600ms
- finite non-negative numeric values are used directly
- invalid values fall back to `medium`

## React behavior

Fragments are recursively flattened. Only MotionNode elements participate in graph timing; ordinary children render unchanged. A single valid React element is cloned so its props and key are preserved. Text or multiple children are wrapped in a submission-scoped span.

Existing class names and styles are merged. MotionGraph intentionally controls `animationDelay` and numeric `animationDuration`.

## Accessibility

`style.css` uses `prefers-reduced-motion: reduce` to minimize animation duration, remove animation delay, and minimize transition duration. No JavaScript media-query listener is used.

## Demo

Open `demo.html` directly in a browser. It demonstrates a four-node diamond graph: A starts first; B and C branch in parallel; D waits for both branches. The Replay Graph button restarts the visualization.

## File structure

```text
submissions/react/motion-graph-ag404/
├── MotionGraph.jsx
├── demo.html
├── style.css
└── README.md
```

## Zero dependencies

The component uses React only and adds no runtime dependency, package change, workflow, or shared framework edit.
