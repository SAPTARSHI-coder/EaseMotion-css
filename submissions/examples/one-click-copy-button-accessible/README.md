# one-click-copy-button-accessible

**GSSoC · EaseMotion CSS Submission**

A self-contained documentation gallery that pairs live animation previews with a one-click **Copy Class** button, so developers can grab EaseMotion utility class names without manual text selection. This version is enhanced with accessibility support, keyboard navigation, and reliable clipboard fallback behaviors.

---

## What does this do?

This example demonstrates a reusable **one-click copy** pattern for animation documentation. Each card in the grid shows:

1. A **live preview** of the animation (fade-in, slide-left, bounce, and more).
2. The **exact class name string** displayed in a monospace badge.
3. A **[Copy Class]** button that copies that string to the clipboard instantly.

### Key Enhancements

- **Keyboard Accessibility (A11y)**: Animation cards are focusable (`tabindex="0"`) and replayable with the keyboard (`Enter` or `Space` key). Clear focus indicators are visible for both stages and copy buttons.
- **Focus Retention**: Instead of using the physical `disabled` attribute (which removes the focused element and throws screen reader focus back to the page body), it uses `aria-disabled="true"` to gracefully deactivate click actions during the success state.
- **Robust Clipboard API**: Falls back gracefully to `document.execCommand('copy')` if the modern `navigator.clipboard` API throws an error or fails due to browser permissions.
- **Scroll Jump Prevention**: Uses `{ preventScroll: true }` when focusing the fallback textarea to prevent sudden page layouts jumps.
- **Failure Visual States**: Displays error states and `❌ Failed` indicators when copying is unsuccessful.

---

## Structure

```
submissions/examples/one-click-copy-button-accessible/
├── demo.html   — Animation card grid + inline clipboard script
├── style.css   — Layout, card grid, copy-button states, demo animations
└── README.md   — This file
```

### `demo.html`

- Renders a responsive grid of six animation cards (`ease-fade-in`, `ease-slide-in-left`, `ease-slide-up`, `ease-bounce`, `ease-zoom-in`, `ease-pulse`).
- Each card footer pairs a `<code>` class label with a `.copy-class-btn` button.
- Includes a hidden `<textarea>` (`#clipboard-fallback`) for clipboard fallback in non-secure (HTTP) or older browser environments.
- Inline script wires up:
  - `navigator.clipboard.writeText()` on secure contexts with error fallback.
  - `textarea` + `document.execCommand('copy')` fallback when the Clipboard API is unavailable.
  - Keyboard handlers for replaying entrance animations on stages.
  - 2-second success/failure feedback loop on copy buttons.

### `style.css`

- Matches the EaseMotion submission layout system: dark surface tokens, DM Serif / DM Sans / JetBrains Mono typography, and responsive card grid.
- Styles `.copy-class-btn` with hover, focus-visible, and `.copied` / `[aria-disabled="true"]` / `.failed` states.
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
