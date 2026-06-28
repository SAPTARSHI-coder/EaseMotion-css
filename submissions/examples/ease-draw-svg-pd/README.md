# SVG Stroke Drawing Utilities (`ease-draw-svg-pd`)

A performance-first, pure CSS solution to create high-fidelity stroke line art revealing sequences using structural `stroke-dasharray` and `stroke-dashoffset` path parameters. This utility provides smooth line drawing effects perfect for hero illustrations, icons, and loading states without relying on external JavaScript animation libraries.

---

## 🛠️ Technical Principle

The SVG drawing animation relies entirely on native browser CSS mechanics:

1. **`stroke-dasharray`**
   Breaks the SVG outline path into a series of distinct dashes and gaps. By setting this value equal to or greater than the total path length, the entire path becomes one long dash followed by an equally long gap.

2. **`stroke-dashoffset`**
   Changes the starting position of where that dash begins rendering. By transitioning `stroke-dashoffset` from the total path length down to `0` via CSS `@keyframes`, the outline gracefully draws itself onto the screen.

---

## 🔍 How to Calculate SVG Path Lengths

To make the stroke animation look perfect, you need to know the exact length of your SVG path. Here is the easiest way to find it using browser Developer Tools:

1. Open your `demo.html` file in any modern web browser (Chrome, Edge, Firefox).
2. Right-click on your SVG element and select **Inspect** to open the Elements panel.
3. Select the specific `<path>` element you want to animate.
4. Go to the **Console** tab in DevTools and type the following command:

```js
$0.getTotalLength();
```

5. Press **Enter**.

The browser will output the exact numeric path length (for example, `342.59`). You can then use this number to fine-tune your `stroke-dasharray` and `stroke-dashoffset` values inside your CSS configuration.

---

## 🧩 Integration with Existing Entrance Animations

This utility can easily be combined with traditional EaseMotion CSS entrance behaviors. By stacking wrapper classes or using modular animation delays, you can establish complex interactive micro-timelines.

### Draw and Fade Fill

Combine `.ease-draw-path` with `.ease-draw-fill` to completely outline an illustration before softly revealing its structural background color fill.

### Staggered Arrivals

Chain together temporal utility classes like:

* `.ease-draw-delay-100`
* `.ease-draw-delay-200`
* `.ease-draw-delay-300`
* `.ease-draw-delay-400`
* `.ease-draw-delay-500`

This creates smooth left-to-right staggered entrances for icon sets, logos, or navigation panels during page load.

---

## 📁 Workspace Directory Map

### `demo.html`

Standalone presentation sandbox featuring three interactive examples:

* Logo outline drawing
* Staggered SVG icon rows
* Cursive handwriting signature animation

### `style.css`

Pure utility stylesheet containing:

* Stroke drawing utilities
* Animation speed presets
* Delay modifiers
* CSS custom properties
* Performance-optimized transition variables

---

Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**
