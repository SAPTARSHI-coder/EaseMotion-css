# Animated Tabs

A modern animated tab component built with pure HTML and CSS. It uses radio inputs to switch between content panels without JavaScript.

## Features

- Pure HTML and CSS tabs.
- Smooth fade/slide panel animation.
- Modern glassmorphism UI.
- Keyboard focus support.
- Responsive layout.
- Supports `prefers-reduced-motion`.

## Usage

Copy the HTML structure from `demo.html` and link `style.css`.

```html
<div class="tabs">
  <input type="radio" name="demo-tabs" id="tab-1" checked />
  <input type="radio" name="demo-tabs" id="tab-2" />

  <nav class="tab-nav">
    <label for="tab-1">Overview</label>
    <label for="tab-2">Features</label>
  </nav>

  <div class="tab-panels">
    <article class="tab-panel" id="panel-1">
      <h2>Overview</h2>
      <p>Content here.</p>
    </article>

    <article class="tab-panel" id="panel-2">
      <h2>Features</h2>
      <p>Content here.</p>
    </article>
  </div>
</div>