# ColorPicker — swatch picker with contrast preview

> Issue: [#63821](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63821)

A swatch-based colour picker where every swatch has a name, and contrast against a target surface is shown up front.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `swatches` | `Array<{ value, name }>` | `[]` | Hex values with human names. Renders `null` if empty. |
| `value` | `string` | — | Selected hex. Unmatched falls back to the first swatch. |
| `onChange` | `(value: string) => void` | — | |
| `contrastAgainst` | `string` | — | Surface hex; enables the contrast preview. |
| `label` | `string` | `'Colour'` | Accessible group name. |
| `className` | `string` | `''` | Merged onto the root. |

## Keyboard

<kbd>Tab</kbd> enters the group (**one** stop); <kbd>←</kbd><kbd>→</kbd><kbd>↑</kbd><kbd>↓</kbd> move between swatches with wrap-around; <kbd>Home</kbd>/<kbd>End</kbd> jump to the ends.

## Usage

```jsx
import ColorPicker from './ColorPicker';
import './style.css';

<ColorPicker
  label="Tag colour"
  contrastAgainst="#0b1120"
  value={colour}
  onChange={setColour}
  swatches={[
    { value: '#38bdf8', name: 'Sky' },
    { value: '#34d399', name: 'Emerald' },
    { value: '#f87171', name: 'Rose' },
  ]}
/>
```

## Why it fits EaseMotion

**A grid of coloured squares is the definitive colour-only interface.** To a user who cannot distinguish the hues, every swatch is identical and the control conveys nothing at all. Every swatch therefore carries a **name**, shown for the selection and always present in the accessible name.

**Radiogroup, not a row of buttons.** Tabbing through twenty-four colours to reach the next control is its own accessibility problem. Roving `tabIndex` makes the palette a single tab stop with arrow-key movement.

**The contrast preview answers a different question than the swatch does.** A colour chosen for a tag or a label will have text on it, and "does this look nice" and "can anyone read text on it" are unrelated. The ratio is computed with WCAG relative luminance against `contrastAgainst` and shown as pass/fail — and it is appended to each swatch's **accessible name** too, so a screen reader user gets the same information the visual badge shows rather than an inaccessible visual-only hint.

Selection is marked by a ring **and** a check glyph. A ring alone can be nearly invisible against a swatch of similar tone, which is exactly the situation a colour picker guarantees will occur.

The check uses a dual text-shadow rather than a computed per-swatch foreground — it reads on both light and dark swatches without the component needing to solve contrast twice.

`forced-colors: active` matters more here than usual: swatch backgrounds are discarded entirely in high-contrast mode, so the check glyph and a `Highlight` outline become the only indicators of which colour is selected.
