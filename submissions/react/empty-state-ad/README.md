# EmptyState — empty state placeholder

> Issue: [#61724](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/61724)

A React component for the empty case of a data view, with a staggered entrance and variant-appropriate ARIA announcement.

## Description

Three variants that look similar but mean very different things — and each needs a different next action:

| Variant | Meaning | The action should |
|---|---|---|
| `empty` | Nothing exists yet | **Create** something |
| `no-results` | Things exist; the filter excluded them | **Clear** the filter |
| `error` | The fetch failed | **Retry** |

Collapsing these into one generic "no data" block is why users get told to "create your first project" when they have forty and mistyped a search.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'empty' \| 'no-results' \| 'error'` | `'empty'` | Sets tone, glyph, fallback title and ARIA role. Unknown values fall back to `empty`. |
| `title` | `string` | per-variant default | Heading text. |
| `description` | `string` | — | Supporting copy. Omitted entirely if not passed. |
| `icon` | `ReactNode` | per-variant glyph | Custom icon, replaces the default glyph. |
| `action` | `ReactNode` | — | Primary action node. |
| `secondaryAction` | `ReactNode` | — | Secondary action node. |
| `size` | `'sm' \| 'md'` | `'md'` | Padding and icon scale. |
| `animate` | `boolean` | `true` | Set `false` to skip the staggered entrance. |
| `className` | `string` | `''` | Merged onto the root. |

Any other props are spread onto the root element.

## Usage

```jsx
import EmptyState from './EmptyState';
import './style.css';

// Nothing created yet
<EmptyState
  variant="empty"
  title="No projects yet"
  description="Create your first project to get started."
  action={<button onClick={create}>New project</button>}
/>

// Filter excluded everything
<EmptyState
  variant="no-results"
  title="No transactions match those filters"
  description="Try widening the date range."
  action={<button onClick={reset}>Reset filters</button>}
/>

// Fetch failed
<EmptyState
  variant="error"
  description="We could not load your balances."
  action={<button onClick={retry}>Retry</button>}
  secondaryAction={<button onClick={contact}>Contact support</button>}
/>
```

## Why it fits EaseMotion

The entrance is applied to `> *:nth-child(n)` rather than to per-part classes, so icon, title, description and actions stagger correctly **regardless of which of them are actually rendered**. Because `description` and the action row are conditional, a class-per-part approach would leave gaps in the sequence whenever a part is omitted.

ARIA announcement is scoped to the variant: `role="alert"` with `aria-live="assertive"` for errors, so a failed fetch interrupts; `role="status"` with `aria-live="polite"` otherwise, so a routine empty list does not. Announcing every empty view assertively trains users to ignore the alerts that matter.

The entrance uses `animation-fill-mode: both`, so under `prefers-reduced-motion` it is **shortened to 1ms rather than removed** — removing it would leave the fill holding every child at `opacity: 0`, making the empty state invisible to exactly the users who opted out of motion.

An unknown `variant` falls back to `empty` rather than crashing on an undefined lookup: a typo'd prop should degrade, not white-screen the view.
