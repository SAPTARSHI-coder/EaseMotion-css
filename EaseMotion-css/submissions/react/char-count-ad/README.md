# CharCount — character counter

> Issue: [#63568](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63568)

A character counter that announces on threshold crossings rather than on every keystroke.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | `''` | The text being counted. |
| `max` | `number` | — | Character limit. Omit for an unbounded count. |
| `warnAt` | `number` | `0.9` | Fraction of `max` that enters the warning band. |
| `showRemaining` | `boolean` | `false` | Count down instead of showing `n / max`. |
| `label` | `string` | `'characters'` | Noun used in announcements. |
| `size` | `'sm' \| 'md'` | `'md'` | Text size. |
| `className` | `string` | `''` | Merged onto the root. |

## Usage

```jsx
import CharCount from './CharCount';
import './style.css';

<textarea value={text} onChange={(e) => setText(e.target.value)} />
<CharCount value={text} max={280} warnAt={0.9} />
```

## Why it fits EaseMotion

**A counter in a live region that updates on every keystroke makes a textarea unusable with a screen reader.** Every character typed interrupts with "241 of 280", "242 of 280", "243 of 280" — the user cannot hear their own typing, and the counter becomes actively hostile.

So announcement is **threshold-based**. The visual counter updates continuously, but the live region only speaks when the *state* changes: on entering the warning band, and on crossing the limit. Nothing is announced while there is plenty of room. Returning to the safe state clears the message, so a stale warning is not re-read on refocus.

The visual counter is `aria-hidden` because the live region already carries the information — exposing both would double-read it.

**Length uses `Intl.Segmenter`.** `String.length` counts UTF-16 code units, so a single emoji costs 2 and a family emoji can cost 11. A user typing one emoji watches the counter jump by 11, which looks broken and, worse, is wrong about how much room is left. Grapheme segmentation counts what the user actually perceives as characters, with graceful fallbacks to code points and then code units.

The over-limit state changes font weight as well as colour, so it is not signalled by hue alone — and in forced-colors mode, where colour is discarded entirely, it falls back to an underline.
