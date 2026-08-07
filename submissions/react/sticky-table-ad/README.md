# StickyTable — sticky headers and pinned columns

> Issue: [#63818](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63818)

A data table with a sticky header row and optionally pinned leading columns.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `columns` | `Array<{ key, label, align?, width? }>` | `[]` | Column definitions. |
| `rows` | `Array<object>` | `[]` | Row data, keyed by column `key`. |
| `pinnedColumns` | `number` | `0` | Leading columns to pin. Clamped to the column count. |
| `getKey` | `(row, index) => key` | index | Stable React key. |
| `caption` | `string` | — | Table caption, also used as the region label. |
| `maxHeight` | `number` | `420` | Scroll viewport height in px. |
| `className` | `string` | `''` | Merged onto the root. |

**Pinned columns need an explicit `width`.** Offsets are computed from declared widths; an unmeasurable column cannot be positioned correctly and falls back to 160px.

## Usage

```jsx
import StickyTable from './StickyTable';
import './style.css';

<StickyTable
  caption="Quarterly revenue"
  pinnedColumns={1}
  columns={[
    { key: 'account', label: 'Account', width: '180px' },
    { key: 'q1', label: 'Q1', align: 'end' },
    { key: 'q2', label: 'Q2', align: 'end' },
  ]}
  rows={data}
  getKey={(r) => r.id}
/>
```

## Why it fits EaseMotion

**The layering is the hard part.** Three overlapping sticky regions exist: the header row (sticky top), the pinned columns (sticky left), and the corner cells (both). A single z-index cannot resolve them:

- If the header wins, pinned cells scroll under it correctly — but the corner disappears behind the header the moment you scroll right.
- If the pinned column wins, the corner survives — but body rows slide *over* the header.

The corner needs a **higher** z-index than either, which is only obvious once you have watched it fail. Three explicit tiers (pinned = 2, header = 3, corner = 4) resolve it.

**`border-collapse: collapse` is incompatible with sticky cells.** Collapsed borders belong to the *table*, not the cell — so they scroll away and leave sticky headers with no bottom edge, floating over the content. `separate` plus `box-shadow` borders keeps the edge attached to the cell.

**Pinned leading cells are `<th scope="row">`, not `<td>`.** That is what lets a screen reader announce "Revenue, Northwind" instead of reading a bare number with no context — the same reason the column is pinned visually.

Two smaller details: the edge shadow is drawn only on the **last** pinned column, so a two-column pin gets one divider rather than two; and `forced-colors` restores an opaque `Canvas` background on sticky cells, because high-contrast mode discards backgrounds and rows would otherwise show through the header.
