# Interactive Animation Playground

A self-contained, browser-only playground to preview, tweak, and copy CSS animations — built for EaseMotion CSS.

---

## 1. What does this do?

It provides an **interactive UI** to pick from 16 ready-made CSS animations, live-tune their `duration`, `delay`, `iteration-count`, and `timing-function`, watch the result on a preview element, and copy the generated CSS to the clipboard — all from a single HTML file with no build step or server.

---

## 2. How is it used?

Open `demo.html` directly in a browser. The page is composed of three regions: a controls panel, a preview stage, and a generated-CSS panel.

```html
<main class="pg-app">

  <!-- Controls -->
  <section class="pg-controls">
    <div class="ctrl">
      <label for="animation">Animation</label>
      <select id="animation">
        <option value="fadeIn">Fade In</option>
        <option value="bounce">Bounce</option>
        <!-- 14 more options... -->
      </select>
    </div>

    <div class="ctrl">
      <label for="duration">Duration <span class="ctrl-val" id="durationVal">1.00s</span></label>
      <input type="range" id="duration" min="0.1" max="5" step="0.05" value="1" />
    </div>

    <!-- delay, iteration, timing controls... -->
  </section>

  <!-- Preview -->
  <section class="pg-preview">
    <div class="preview-stage">
      <div id="previewBox" class="preview-box">
        <span class="preview-label">Preview</span>
      </div>
    </div>
  </section>

  <!-- Generated CSS -->
  <section class="pg-code">
    <header class="code-header">
      <span class="code-title">Generated CSS</span>
      <button id="copyBtn" class="btn btn-primary">Copy CSS</button>
    </header>
    <pre class="code-block"><code id="cssOutput"></code></pre>
  </section>

</main>