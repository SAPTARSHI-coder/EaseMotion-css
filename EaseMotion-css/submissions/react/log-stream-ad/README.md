# LogStream — auto-scrolling log viewer

> Issue: [#63827](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63827)

An auto-scrolling log that stops following the moment the reader scrolls up.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `lines` | `Array<{ id, level?, time?, text }>` | `[]` | Log lines. |
| `height` | `number` | `320` | Viewport height in px. |
| `maxLines` | `number` | `1000` | Older lines are dropped beyond this. |
| `showTime` | `boolean` | `true` | Render timestamps. |
| `label` | `string` | `'Log output'` | Accessible name. |
| `className` | `string` | `''` | Merged onto the root. |

Levels: `debug` · `info` · `warn` · `error`.

## Usage

```jsx
import LogStream from './LogStream';
import './style.css';

<LogStream lines={logLines} height={360} maxLines={2000} label="Build output" />
```

## Why it fits EaseMotion

**Auto-scroll that fights the reader is the failure this exists to fix.** You scroll up to read a stack trace, a new line arrives, and you are yanked back to the bottom. On a busy stream the log becomes genuinely unreadable — the one moment you need it to hold still is the one moment it will not.

Following stops the instant the user scrolls away from the bottom, and resumes only when they return there or press the jump control. The reader decides, not the stream. Lines that arrive while paused are **counted**, so the control reads "23 new lines" rather than a bare scroll button — which is the difference between an affordance and a nag.

**The scroll happens in `useLayoutEffect`, not `useEffect`.** With `useEffect` the new lines paint first and the scroll lands a frame later, so the viewport visibly jumps on every update. `useLayoutEffect` runs before paint, so the growth is invisible.

**Announcement is deliberately not wired to a live region.** A log emitting several lines a second would make a screen reader completely unusable — every line interrupting the last. The viewport is a focusable `role="log"` with `aria-live="off"`, readable on demand, and only **error-level** lines are announced politely.

Severity uses a glyph as well as colour, so level survives greyscale and print.

`maxLines` bounds memory and DOM size by dropping from the front — an unbounded log viewer is a slow memory leak on any long-running stream. Long lines wrap rather than forcing horizontal scrolling, because a stack trace that needs sideways scrolling per line is unreadable.
