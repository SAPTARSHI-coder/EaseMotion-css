# DiffView — inline diff renderer

> Issue: [#63573](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63573)

A read-only diff viewer where added and removed lines are distinguishable without colour.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `lines` | `Array<{ type, text, oldLine?, newLine? }>` | `[]` | Diff lines. Renders `null` if empty. |
| `filename` | `string` | — | Shown in the header. |
| `showLineNumbers` | `boolean` | `true` | Render old/new line-number gutters. |
| `wrap` | `boolean` | `false` | Wrap long lines instead of scrolling. |
| `label` | `string` | `'Diff'` | Accessible name for the figure. |
| `className` | `string` | `''` | Merged onto the root. |

Line types: `add` · `remove` · `context` · `meta`. Unknown types fall back to `context`.

## Usage

```jsx
import DiffView from './DiffView';
import './style.css';

<DiffView
  filename="src/parser.js"
  lines={[
    { type: 'meta', text: '@@ -12,7 +12,9 @@' },
    { type: 'context', text: 'function parse(value) {', oldLine: 12, newLine: 12 },
    { type: 'remove', text: '  return value.split(" ");', oldLine: 13 },
    { type: 'add', text: '  if (!value) return null;', newLine: 13 },
    { type: 'add', text: '  return value.trim().split(/\\s+/);', newLine: 14 },
  ]}
/>
```

## Why it fits EaseMotion

**Diffs are the worst common offender for colour-only encoding.** Added and removed lines are typically distinguished purely by a green or red tint — so to a user with deuteranopia the two are the same pale grey band, and the diff conveys nothing about direction.

Every line here carries three independent cues: a `+` / `-` gutter symbol, a distinct inset border, and a screen-reader word ("Added", "Removed"). The diff is therefore readable in greyscale, in print, and aloud.

**Line numbers are drawn via CSS `content` from a `data-line` attribute**, not as text nodes. This matters practically: selecting and copying a diff rendered with text-node line numbers pastes the numbers interleaved with the code, so the snippet has to be cleaned by hand. Generated content is not part of the selection, so a copy yields the code alone.

The `forced-colors` block is deliberate rather than boilerplate. High-contrast mode discards both the background tint **and** the inset border, which would leave the gutter symbol as the only differentiator — so it is made bold there to compensate. The print block does the same job for paper, where the tints vanish too.

`min-width: max-content` on each line keeps long code lines from collapsing inside the horizontally scrolling body, and is released when `wrap` is set.
