# RetroTooltip

A React tooltip component styled for **retro terminal** interfaces, animated
entirely with **EaseMotion**'s `Elastic Slide` utility classes.
---

## ✨ Features

- Retro terminal look: monospace font, phosphor-green glow, scanline-style border.
- Motion is driven purely by **EaseMotion** utility classes — no custom
  transition/animation logic is written in JS or component CSS.
- Supports 4 anchor positions: `top`, `bottom`, `left`, `right`.
- Keyboard accessible (`onFocus` / `onBlur`) and screen-reader friendly
  (`role="tooltip"`, `aria-describedby`).
- Zero dependencies besides `react` and `easemotion`.

---

## 📦 Installation

```bash
npm install easemotion
```

Import EaseMotion's stylesheet once, globally (e.g. in `index.js` / `main.jsx`):

```js
import "easemotion/dist/easemotion.css";
```

Then copy `RetroTooltip.jsx` and `RetroTooltip.css` into your project.

---

## 🚀 Usage

```jsx
import RetroTooltip from "./RetroTooltip";

function App() {
  return (
    <div className="terminal-screen">
      <RetroTooltip label="> run diagnostics_" position="top">
        <button className="retro-btn">HOVER ME</button>
      </RetroTooltip>
    </div>
  );
}

export default App;
```

### With custom timing

```jsx
<RetroTooltip
  label="Connection: SECURE"
  position="right"
  duration="450"
  delay="100"
>
  <span>STATUS</span>
</RetroTooltip>
```

---

## 🧩 Props

| Prop               | Type                                         | Default | Description                                                                 |
|---------------------|-----------------------------------------------|---------|-------------------------------------------------------------------------------|
| `children`          | `ReactNode`                                   | —       | The trigger element the tooltip is attached to.                              |
| `label`              | `string`                                      | —       | Tooltip text content.                                                        |
| `position`           | `"top" \| "bottom" \| "left" \| "right"`      | `"top"` | Anchor side of the tooltip relative to the trigger.                          |
| `duration`           | `"150" \| "300" \| "450" \| "600"`            | `"300"` | Maps to EaseMotion's `em-duration-*` scale.                                  |
| `delay`              | `"0" \| "100" \| "200" \| "300"`              | `"0"`   | Maps to EaseMotion's `em-delay-*` scale.                                     |
| `disabled`           | `boolean`                                     | `false` | Disables the tooltip trigger entirely.                                       |
| `className`          | `string`                                      | `""`    | Extra class(es) applied to the wrapper `<span>`.                             |
| `tooltipClassName`   | `string`                                      | `""`    | Extra class(es) applied to the tooltip bubble itself.                        |

---

## 🎛️ EaseMotion Classes Used

| Class                          | Purpose                                                    |
|---------------------------------|-------------------------------------------------------------|
| `em-animate`                    | Marks the element as an EaseMotion-controlled animated node |
| `em-slide-elastic-up`           | Elastic slide-in from below (used for `position="top"`)     |
| `em-slide-elastic-down`         | Elastic slide-in from above (used for `position="bottom"`)  |
| `em-slide-elastic-left`         | Elastic slide-in from the right (used for `position="left"`)|
| `em-slide-elastic-right`        | Elastic slide-in from the left (used for `position="right"`)|
| `em-duration-{150\|300\|450\|600}` | Controls animation duration                               |
| `em-delay-{0\|100\|200\|300}`      | Controls animation start delay                             |
| `em-ease-elastic`               | Applies EaseMotion's elastic easing curve                   |

---

## 🎨 Styling

`RetroTooltip.css` is **optional** — it only supplies the retro-terminal
look (green phosphor glow, monospace font, terminal border) and does **not**
define any enter/exit motion; all motion comes from EaseMotion.

---

## ♿ Accessibility

- The trigger element is described by the tooltip via `aria-describedby`.
- The tooltip bubble uses `role="tooltip"`.
- Tooltip shows/hides on both mouse (`hover`) and keyboard (`focus`/`blur`)
  interaction, so keyboard-only users get the same experience.

---

## 📄 License

MIT — feel free to adapt for your own retro-terminal UI kit.