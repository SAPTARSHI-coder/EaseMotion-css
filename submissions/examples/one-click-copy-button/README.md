# one-click-copy-button

**GSSoC · EaseMotion CSS Submission**

A self-contained documentation gallery that pairs live animation previews with a one-click **Copy Class** button, so developers can grab EaseMotion utility class names without manual text selection.

---

## What does this do?

This example demonstrates a reusable **one-click copy** pattern for animation documentation. Each card in the grid shows:

1. A **live preview** of the animation (fade-in, slide-left, bounce, and more).
2. The **exact class name string** displayed in a monospace badge.
3. A **[Copy Class]** button that copies that string to the clipboard instantly.

After a successful copy, the button shows **✓ Copied!** for exactly 2 seconds, enters a disabled visual state, then gracefully reverts to **Copy Class**.

---

## Structure

```
submissions/examples/one-click-copy-button/
├── demo.html   — Animation card grid + inline clipboard script
├── style.css   — Layout, card grid, copy-button states, demo animations
└── README.md   — This file
```

### `demo.html`

- Renders a responsive grid of six animation cards (`ease-fade-in`, `ease-slide-in-left`, `ease-slide-up`, `ease-bounce`, `ease-zoom-in`, `ease-pulse`).
- Each card footer pairs a `<code>` class label with a `.copy-class-btn` button.
- Includes a hidden `<textarea>` (`#clipboard-fallback`) for clipboard fallback in non-secure (HTTP) or older browser environments.
- Inline script wires up:
  - `navigator.clipboard.writeText()` on secure contexts.
  - `textarea` + `document.execCommand('copy')` fallback when the Clipboard API is unavailable.
  - 2-second success feedback loop on every copy button.

### `style.css`

- Matches the EaseMotion submission layout system: dark surface tokens, DM Serif / DM Sans / JetBrains Mono typography, and responsive card grid.
- Styles `.copy-class-btn` with hover, focus-visible, and `.copied` / `:disabled` success states.
- Defines self-contained keyframe previews so the demo runs without linking the full library.

---

## How is it used?

Open `demo.html` in a browser (or serve the folder locally). Click **Copy Class** on any card — the class name is placed on your clipboard ready to paste into HTML:

```html
<div class="ease-fade-in">Welcome</div>
```

To integrate the pattern into your own docs, reuse this markup shape:

```html
<div class="anim-card__footer">
  <code class="anim-card__class">ease-slide-in-left</code>
  <button type="button" class="copy-class-btn">Copy Class</button>
</div>
```

Attach the same click handler from `demo.html` to all `.copy-class-btn` elements, reading the class string from the adjacent `<code>` node.

---

## Why is it useful?

Copying utility class names from documentation is a small task that adds up quickly:

- **No selection friction** — developers avoid triple-clicking, drag-selecting, or accidentally copying trailing whitespace from tables.
- **Fewer typos** — the copied string is always the exact class name shown beside the button.
- **Immediate confirmation** — the 2-second **✓ Copied!** state removes guesswork about whether the action succeeded.
- **Broad compatibility** — the Clipboard API path covers modern HTTPS contexts; the hidden textarea fallback keeps copy working on HTTP and legacy browsers.
- **Faster iteration** — browse animations visually, copy a class, paste into your project, and preview in seconds.

This pattern is especially valuable in animation libraries like EaseMotion CSS, where class names are the primary API surface and documentation pages list dozens of utilities side by side.

---

## Browser support

| Feature                                         | Support                                                      |
| ----------------------------------------------- | ------------------------------------------------------------ |
| Clipboard API (`navigator.clipboard.writeText`) | Chrome, Firefox, Safari, Edge on HTTPS                       |
| Textarea fallback (`execCommand('copy')`)       | Older browsers and non-secure (HTTP) contexts                |
| CSS animations                                  | All modern browsers; disabled under `prefers-reduced-motion` |

---

_Submitted for GSSoC · EaseMotion CSS open-source project._
