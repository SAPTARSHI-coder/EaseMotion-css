# Neon Tooltip (Elastic Slide) — `NeonTooltipMp`

A React tooltip component styled for **cyberpunk neon** interfaces — glowing
gradient border, dark gradient backdrop, subtle sign-flicker on entrance —
that slides in with an **elastic slide** transition: it overshoots its
resting position slightly, then settles, simulating spring physics using
pure CSS keyframes.

## What does this do?

Wraps any trigger element (button, icon, text) and shows a neon-glow
tooltip on hover/focus/click, animated in with a bouncy elastic slide and a
brief flicker instead of a flat fade.

## How is it used?

```jsx
import NeonTooltipMp from "./NeonTooltipMp";

function Example() {
  return (
    <NeonTooltipMp
      content="SYSTEM // ONLINE"
      position="top"
      accent="cyan"
    >
      <button className="ease-hover-lift">hover me</button>
    </NeonTooltipMp>
  );
}
```

Rendered markup uses EaseMotion utility classes alongside the component's
own scoped classes:

```html
<span class="neon-tooltip-mp-wrapper">
  <button class="ease-hover-lift">hover me</button>
  <span
    class="ease-fade-in-mp neon-tooltip-mp neon-tooltip-mp--top neon-tooltip-mp--cyan neon-tooltip-mp--visible ease-elastic-slide-mp"
    role="tooltip"
  >
    <span class="neon-tooltip-mp__content">SYSTEM // ONLINE</span>
  </span>
</span>
```

## Why is it useful?

EaseMotion's philosophy is expressive, physics-feeling motion without
reaching for a JS animation library. This component packages that idea into
a ready-to-drop React block: developers building cyberpunk/neon/HUD-style
UIs get a themed, accessible tooltip with a distinctive elastic entrance and
neon-sign flicker, using only EaseMotion-style utility classes and one
scoped stylesheet — no extra dependencies.

## Props reference

| Prop        | Type                                          | Default    | Description                                                                 |
|-------------|-----------------------------------------------|------------|------------------------------------------------------------------------------|
| `children`  | `ReactNode`                                   | —          | The trigger element the tooltip is attached to.                             |
| `content`   | `string`                                       | `""`       | Text rendered inside the neon tooltip body.                                 |
| `position`  | `"top" \| "bottom" \| "left" \| "right"`       | `"top"`    | Which side of the trigger the tooltip slides in from / anchors to.          |
| `trigger`   | `"hover" \| "click"`                           | `"hover"`  | Interaction mode. `hover` also responds to keyboard focus/blur.             |
| `delay`     | `number` (ms)                                  | `80`       | Delay before showing the tooltip after the trigger event fires.             |
| `accent`    | `"cyan" \| "magenta" \| "purple"`              | `"cyan"`   | Neon glow / border color variant.                                            |
| `className` | `string`                                       | `""`       | Extra class(es) applied to the outer wrapper span.                          |
| `disabled`  | `boolean`                                      | `false`    | When `true`, suppresses showing the tooltip entirely.                       |

## Accessibility notes

- The tooltip element has `role="tooltip"` and toggles `aria-hidden`.
- Hover trigger mode also wires up `onFocus`/`onBlur` so keyboard users
  reach the tooltip via Tab.
- `prefers-reduced-motion: reduce` disables the elastic + flicker keyframes
  and falls back to a simple opacity transition.

## Files in this submission

- `NeonTooltipMp.jsx` — the component
- `style.css` — scoped styling + elastic slide keyframes (imported by the component)
- `README.md` — this file
