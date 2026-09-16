# EaseMotion CSS — Text Rendering Utilities

This directory implements core utility classes for controlling the CSS `text-rendering` property, alongside webkit antialiasing and typographic ligature features.

---

## What is Text Rendering?

The `text-rendering` property provides hints to the rendering engine about what trade-offs to make when drawing text on screen. It lets developers choose whether they want to prioritize rendering speed, layout legibility, or mathematical precision during geometric scale changes.

> [!TIP]
> Use `.rendering-legibility` for headings and block paragraphs to enable standard ligatures and kerning tables automatically. Use `.rendering-speed` for fast rendering on high-frequency UI updates.

---

## Utility Classes Reference

EaseMotion CSS provides clean and intuitive utility prefixes for configuring text rendering.

### 1. Text Rendering Options

| Utility Class           | Standard Class               | CSS Rule                              | Optimization Focus                                                        |
| :---------------------- | :--------------------------- | :------------------------------------ | :------------------------------------------------------------------------ |
| `.rendering-auto`       | `.text-rendering-auto`       | `text-rendering: auto;`               | Browser default: switches optimization targets dynamically based on size. |
| `.rendering-speed`      | `.text-rendering-speed`      | `text-rendering: optimizeSpeed;`      | Drawing Speed: disables kerning and ligatures for fast drawing.           |
| `.rendering-legibility` | `.text-rendering-legibility` | `text-rendering: optimizeLegibility;` | Legibility: enables kerning and text ligatures automatically.             |
| `.rendering-precision`  | `.text-rendering-precision`  | `text-rendering: geometricPrecision;` | Geometric Precision: renders font curves smoothly during animations.      |

### 2. Font Smoothing (Antialiasing)

Control the antialiasing algorithm used to paint text pixels:

| Utility Class              | CSS Rule                                        | Description                                                    |
| :------------------------- | :---------------------------------------------- | :------------------------------------------------------------- |
| `.font-smooth-subpixel`    | `-webkit-font-smoothing: subpixel-antialiased;` | Renders crisp text borders (default browser styling).          |
| `.font-smooth-antialiased` | `-webkit-font-smoothing: antialiased;`          | Grayscale smoothing: produces thinner, softer character edges. |

### 3. Font Ligatures

Configure whether character sequences (like `fi`, `ffl`, or code arrows `->`, `=>`) are combined into single graphical representations:

| Utility Class              | CSS Rule                                           | Description                                     |
| :------------------------- | :------------------------------------------------- | :---------------------------------------------- |
| `.ligatures-none`          | `font-variant-ligatures: none;`                    | Disables all text ligatures.                    |
| `.ligatures-normal`        | `font-variant-ligatures: normal;`                  | Enables standard ligatures.                     |
| `.ligatures-common`        | `font-variant-ligatures: common-ligatures;`        | Enables common typographic ligatures.           |
| `.ligatures-discretionary` | `font-variant-ligatures: discretionary-ligatures;` | Enables style-specific discretionary ligatures. |

---

## Usage Examples

### 1. Optimizing Article Reading Legibility

For standard reading paragraphs, combine legibility optimization with antialiased font smoothing on dark background cards:

```html
<article class="card rendering-legibility font-smooth-antialiased">
  <h2>A Typographic Journey</h2>
  <p>
    By enabling legibility rendering, the browser automatically applies advanced
    kerning metrics. Character pairs like "AV" fit together seamlessly,
    preventing gaps.
  </p>
</article>
```

### 2. Monospace Code Blocks with Ligatures

Programming fonts (like Fira Code) render ligatures for syntax symbols like `->` or `!==`. Ensure common ligatures are turned on:

```html
<pre
  class="rendering-legibility ligatures-common"
  style="font-family: 'Fira Code', monospace;"
>
  const double = (x) => x * 2;
  if (val !== null) { ... }
</pre>
```

### 3. Smooth Scaling Text Animations

If text scales dynamically using CSS transform transitions, use geometric precision to avoid jagged character lines or snapping during the motion sequence:

```html
<div class="rendering-precision animate-scale">Scaling Title</div>
```

---

## Browser Compatibility Notes

- **Ligature Support**: Ligatures require a font file that contains the corresponding glyph combinations. If the font file does not contain a ligature glyph for `fi`, the rule will not change rendering.
- **text-rendering support**: Supported across all major layout engines (Blink, Gecko, WebKit). Note that some browsers enable `optimizeLegibility` by default for text sizes over `20px`.
- **font-smoothing support**: Grayscale antialiasing is non-standard but widely supported in WebKit/Blink (macOS/Safari/Chrome) and Gecko (Firefox on macOS).

---

## Verification & Testing

Verify that your styles load correctly by launching `demo.html` in your web browser. Ensure the sandbox sliders apply CSS values dynamically. Run standard smoke tests to confirm build compliance:

```bash
npm test
```
