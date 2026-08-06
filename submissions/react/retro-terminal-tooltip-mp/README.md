# Terminal Tooltip (Elastic Slide) — `TerminalTooltipMp`

A React tooltip component styled like a retro CRT terminal (green phosphor
text, scanlines, blinking caret) that enters with an **elastic slide**
transition — it slides in, slightly overshoots its resting position, then
settles, simulating spring physics using pure CSS keyframes.

## What does this do?

Wraps any trigger element (button, icon, text) and shows a terminal-styled
tooltip on hover/focus/click, animated in with a bouncy elastic slide instead
of a flat fade.

## How is it used?

```jsx
import TerminalTooltipMp from "./TerminalTooltipMp";

function Example() {
  return (
    <TerminalTooltipMp content="root@ease:~$ status: ok" position="top">
      <button className="ease-hover-lift">hover me</button>
    </TerminalTooltipMp>
  );
}
```

Rendered markup uses EaseMotion utility classes alongside the component's
own scoped classes:

```html
<span class="term-tooltip-mp-wrapper">
  <button class="ease-hover-lift">hover me</button>
  <span
    class="ease-fade-in-mp term-tooltip-mp term-tooltip-mp--top term-tooltip-mp--visible ease-elastic-slide-mp"
    role="tooltip"
  >
    <span class="term-tooltip-mp__prompt">$</span>
    <span class="term-tooltip-mp__content">root@ease:~$ status: ok</span>
    <span class="term-tooltip-mp__caret"></span>
  </span>
</span>
```

## Why is it useful?

EaseMotion's philosophy is expressive, physics-feeling motion without
reaching for a JS animation library. This component packages that idea into
a ready-to-drop React block: developers building retro/hacker/dev-tool style
UIs get a themed, accessible tooltip with a distinctive elastic entrance,
using only EaseMotion-style utility classes and one scoped stylesheet — no
extra dependencies.

## Props reference

| Prop        | Type                                          | Default    | Description                                                                 |
|-------------|-----------------------------------------------|------------|------------------------------------------------------------------------------|
| `children`  | `ReactNode`                                   | —          | The trigger element the tooltip is attached to.                             |
| `content`   | `string`                                       | `""`       | Text rendered inside the terminal tooltip body.                             |
| `position`  | `"top" \| "bottom" \| "left" \| "right"`       | `"top"`    | Which side of the trigger the tooltip slides in from / anchors to.          |
| `trigger`   | `"hover" \| "click"`                           | `"hover"`  | Interaction mode. `hover` also responds to keyboard focus/blur.             |
| `delay`     | `number` (ms)                                  | `80`       | Delay before showing the tooltip after the trigger event fires.             |
| `className` | `string`                                       | `""`       | Extra class(es) applied to the outer wrapper span.                          |
| `disabled`  | `boolean`                                      | `false`    | When `true`, suppresses showing the tooltip entirely.                       |

## Accessibility notes

- The tooltip element has `role="tooltip"` and toggles `aria-hidden`.
- Hover trigger mode also wires up `onFocus`/`onBlur` so keyboard users
  reach the tooltip via Tab.
- `prefers-reduced-motion: reduce` disables the elastic keyframes and falls
  back to a simple opacity transition.

## Files in this submission

- `TerminalTooltipMp.jsx` — the component
- `style.css` — scoped styling + elastic slide keyframes (imported by the component)
- `README.md` — this file
