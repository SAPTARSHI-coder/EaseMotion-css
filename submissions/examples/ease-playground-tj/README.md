# Interactive Animation Playground

Closes #47379

## What does this do?
A self-contained playground where developers can tweak duration, delay, easing, rotation, scale, start/end color, direction, and iteration count, watch a live preview update instantly, and copy the generated CSS with one click.

## How is it used?
Open `demo.html` directly in a browser — no build step, server, or CDN required.

```html
<div class="playground" data-theme="light">
  <section class="playground-controls">
    <input type="range" id="ctrl-duration" min="0.1" max="3" step="0.1" value="0.6" />
    <!-- delay, easing, rotation, scale, colors, direction, iteration controls -->
  </section>

  <section class="playground-preview">
    <div class="preview-box" id="preview-box"></div>
  </section>

  <section class="playground-output">
    <button id="copy-btn">📋 Copy CSS</button>
    <pre class="output-code"><code id="output-code"></code></pre>
  </section>
</div>
```

Each control updates a `<style>` tag driving the live preview box and regenerates a ready-to-paste CSS block (`.ease-anim-demo` class + `@keyframes`) in the output panel. The theme toggle in the header switches the whole playground into dark mode via a `data-theme="dark"` attribute.

### Acceptance criteria coverage
- **Live preview updates instantly** — every input fires on `input`, rebuilding the keyframes and replaying the animation.
- **Generated CSS is copyable** — the Copy CSS button uses the Clipboard API with a `document.execCommand` fallback, plus an `aria-live` status message confirming the copy.
- **Responsive layout** — the controls/preview grid collapses to a single column under 700px.
- **Dark mode supported** — CSS custom properties swap via `[data-theme="dark"]`, covering background, surface, border, text, and accent colors.

## Why is it useful?
Right now, trying out an EaseMotion animation means editing CSS by hand and reloading the page to see the result. This playground turns that into direct manipulation — sliders and color pickers with an instant preview and copy-ready output — which matches EaseMotion's goal of making motion design fast and approachable, and gives the maintainer a reference UI that could be adapted into the framework's own docs site.