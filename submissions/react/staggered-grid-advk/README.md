# StaggeredGrid

A layout wrapper that injects a per-item `--i` custom property so children can
share a single cascade-delay rule.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Items to stagger. |
| `step` | `number` | `60` | Delay per item in ms. |
| `maxDelay` | `number` | `600` | Ceiling; later items reuse the capped delay. |
| `animation` | `string` | `'ease-slide-up'` | EaseMotion entrance class applied to each child. |
| `as` | `elementType` | `'div'` | Element to render as the grid. |
| `className` | `string` | `''` | Extra classes. |

## Usage

```jsx
import StaggeredGrid from './StaggeredGrid';
import './style.css';

<StaggeredGrid animation="ease-fade-in" step={50}>
  {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
</StaggeredGrid>
```

## Why it fits EaseMotion CSS

This is the React counterpart to the custom-property stagger pattern used in the
CSS submissions. The component's only job is bookkeeping — computing `--i` — while
the animation itself stays entirely in CSS, applied through the framework's
existing `ease-*` entrance classes rather than any bespoke keyframes.

The `maxDelay` cap is the part most implementations miss. A naive `i * step`
stagger over a 200-item grid means the last card begins animating twelve seconds
after the first, long after the user has scrolled past. Clamping the index keeps
the cascade legible on short lists while guaranteeing a bounded settle time on
long ones.

`cloneElement` preserves each child's existing `className` and `style` rather than
overwriting them, so the wrapper composes with whatever the child already sets
instead of fighting it.

The reduced-motion block compresses the step to 20ms and shortens the duration
rather than removing the stagger, so the ordering cue survives while the grid
settles almost immediately.
