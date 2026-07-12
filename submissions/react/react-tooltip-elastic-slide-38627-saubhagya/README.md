# React Tooltip – Elastic Slide (Cyberpunk Neon)

A React component that displays a tooltip with a smooth **elastic slide**
transition, built on top of a small reusable **EaseMotion** CSS utility
layer and skinned with a **Cyberpunk Neon** theme.

```
submissions/react/
├── ReactTooltipElasticSlide.jsx   # the component
├── EaseMotion.css                 # required — motion utility classes (em-*)
├── CyberpunkTheme.css             # optional — neon skin (cp-*)
├── main.jsx                       # demo entry point (all 4 positions)
└── README.md
```

---

## ✨ Features

- 🚀 **Elastic slide** animation (spring-like cubic-bezier bounce)
- 🌈 **Customizable neon colors** (`accent` + `glow`)
- 📍 **4 positions**: top, bottom, left, right
- ⏱ **Stagger delays** via the `delay` prop
- ♿ **Accessible**: keyboard focus (`:focus-within`) + ARIA attributes
- 🎨 **Fully themeable** with CSS variables and custom class hooks
- 🔄 **Reduced motion** support (`prefers-reduced-motion`)

---

## 📦 Installation

Copy the following files into your project:

```
src/components/ReactTooltipElasticSlide/
├── ReactTooltipElasticSlide.jsx
├── EaseMotion.css
└── CyberpunkTheme.css
```

Both CSS files are already imported inside `ReactTooltipElasticSlide.jsx`,
so you don't need to import them again yourself — just import the component.

---

## 🎮 Usage

```jsx
import ReactTooltipElasticSlide from "./ReactTooltipElasticSlide";

function MyComponent() {
  return (
    <ReactTooltipElasticSlide
      tooltip="Hello Cyberpunk!"
      position="top"
      accent="#00fff7"
      glow="#ff00ff"
      delay={200}
    >
      <button>Hover me</button>
    </ReactTooltipElasticSlide>
  );
}
```

A ready-to-run demo covering all four positions, custom colors, a staggered
delay, and the `disabled` state lives in `main.jsx`.

---

## 🔧 Props

| Prop                | Type       | Default              | Description |
|----------------------|------------|------------------------|--------------|
| `children`           | `ReactNode` | — (required)          | The trigger element (hover/focus reveals the tooltip). |
| `tooltip`             | `string`    | `"Cyberpunk Tooltip"` | Text content shown inside the tooltip box. |
| `position`            | `string`    | `"top"`                | One of `"top"`, `"bottom"`, `"left"`, `"right"`. Invalid values fall back to `"top"`. |
| `accent`              | `string`    | `"#00fff7"`             | Primary neon color (border, text, inner glow). |
| `glow`                | `string`    | `"#ff00ff"`             | Secondary outer-glow color. |
| `delay`               | `number`    | `0`                     | Animation delay in ms — useful for staggering multiple tooltips. |
| `className`           | `string`    | `""`                    | Extra class(es) merged onto the outer wrapper. |
| `tooltipClassName`    | `string`    | `""`                    | Extra class(es) merged onto the tooltip box. |
| `disabled`            | `boolean`   | `false`                 | When `true`, renders only `children` — no tooltip markup or listeners. |

---

## 🎨 Styling

### CSS variables

The component exposes three CSS custom properties, set inline per instance:

- `--cp-accent` — primary neon color
- `--cp-glow` — secondary glow color
- `--em-delay` — animation delay (set via the `delay` prop)

Override any of them globally on an ancestor, or per instance via props:

```css
.my-page {
  --cp-accent: #39ff14; /* neon green, applies to every tooltip inside */
  --cp-glow: #00b8ff;
}
```

### Custom class hooks

- Wrapper: `.cp-tooltip-wrapper`, plus `.cp-top` / `.cp-bottom` / `.cp-left` / `.cp-right`
- Trigger: `.cp-tooltip-trigger`
- Tooltip box: `.cp-tooltip-box` (+ your `tooltipClassName`), with its arrow via `::after`

Swap out `CyberpunkTheme.css` for your own stylesheet targeting these same
hooks to reskin the tooltip completely — the `em-*` classes from
`EaseMotion.css` should stay untouched, since that's what drives the motion.

---

## ⚙️ How it works

1. The trigger (`children`) sits inside a `<span>` (`.em-group`) that
   captures hover and keyboard focus.
2. The tooltip is positioned absolutely and starts hidden, scaled to `0.6`
   and offset in the direction opposite its `position`.
3. On hover/focus, `EaseMotion.css` animates it back to
   `translate(0) scale(1)` using:

   ```css
   transition:
     opacity 0.45s ease,
     transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.45),
     visibility 0.45s;
   ```

   The `cubic-bezier(0.175, 0.885, 0.32, 1.45)` curve slightly overshoots
   past `scale(1)` before settling — the "elastic" bounce.
4. `prefers-reduced-motion: reduce` disables the transform and leaves only
   a quick opacity fade for users who've asked for less motion.

### Positioning fix (top / bottom)

Earlier drafts placed the top/bottom tooltip at `bottom: 140%` /
`top: 140%`, which pushed it too far from the trigger. This is now
`100%`, so the tooltip sits flush against the trigger with just its own
slide offset (`translateY(±12px)`) providing the motion. `.em-relative`
also sets `overflow: visible` so the tooltip is never clipped by a
wrapper with `overflow: hidden`.

---

## ♿ Accessibility

- The trigger is focusable (`tabIndex={0}`), so keyboard users can reveal
  the tooltip via `:focus-within`, not just `:hover`.
- The tooltip box uses `role="tooltip"` and is linked to the trigger with
  `aria-describedby`, using a unique id from React's `useId`.
- `pointer-events: none` is applied while hidden so it never blocks clicks
  on elements underneath it.

---

## 🧪 Example demo

Run `main.jsx` to see the component in action with all four positions,
custom neon colors, a staggered delay, and a disabled instance:

```bash
npm run dev
```

Then hover (or Tab-focus) each button to see the neon tooltip slide in
with a bounce — including top and bottom, now fixed.

---

## 📄 License

MIT — free to use in personal and commercial projects.
