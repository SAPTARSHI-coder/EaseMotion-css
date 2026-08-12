# JsonViewer — collapsible JSON tree

> Issue: [#63826](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63826)

A collapsible JSON tree with cycle safety and lazy expansion.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `data` | `any` | — | The value to render. Returns `null` if `undefined`. |
| `rootLabel` | `string` | `'root'` | Label for the top node. |
| `defaultOpen` | `number` | `1` | Depth auto-expanded on mount. |
| `label` | `string` | `'JSON data'` | Accessible tree name and header title. |
| `className` | `string` | `''` | Merged onto the root. |

## Usage

```jsx
import JsonViewer from './JsonViewer';
import './style.css';

<JsonViewer data={payload} label="API response" defaultOpen={2} />
```

## Why it fits EaseMotion

**Cycle safety.** `JSON.stringify` throws on circular references, and a naive recursive renderer does something worse — it infinite-loops and hangs the tab. A `Set` of ancestors along the current path detects the cycle and renders a `[circular reference]` marker instead, so pasting a live object graph is survivable.

**Lazy expansion.** Children render only once a node is open, so a 10,000-node payload costs one root render rather than ten thousand. Rendering everything and hiding it with CSS is the usual shortcut, and it is precisely why these viewers lock up on large inputs — the DOM is fully built whether you look at it or not.

**Type shown, not just coloured.** `"42"` and `42` are different values and look identical in a colour-only viewer to anyone who cannot distinguish the hues. Strings are quoted, and every leaf carries its type in its accessible name — "count, number, 42".

Two smaller details: each branch's accessible name includes its entry count and expanded state, so a screen reader user knows whether opening a node is worth it; and the copy action `await`s inside a `try`, because `JSON.stringify` throws on the same circular structures the tree handles gracefully — surfacing the failure rather than leaving the button silently inert.

The nesting guide line uses logical `border-inline-start` and `padding-inline-start`, so the tree indents correctly in RTL.
