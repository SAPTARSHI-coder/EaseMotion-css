# CSS Dropzone Menu

A pure CSS navigation menu that drops down from the header container with a fluid, staggered animation for individual navigation items without relying on JavaScript.

## What does this do?

It provides a smooth drop-down navigation interaction where the menu container enters from the top and individual navigation items appear sequentially using a CSS `--item-index` variable stagger delay.

## How is it used?

Include the CSS file and construct the HTML using a hidden checkbox toggle and a `<label>` trigger:

```html
<input type="checkbox" id="dropzone-toggle" class="ease-dropzone-checkbox">

<label for="dropzone-toggle" class="ease-dropzone-trigger" tabindex="0" role="button">
  <span>Menu</span>
  <span class="ease-trigger-icon"></span>
</label>

<div class="ease-dropzone-panel">
  <nav class="ease-dropzone-nav">
    <ul class="ease-dropzone-list">
      <li class="ease-dropzone-item" style="--item-index: 1;">
        <a href="#overview" class="ease-dropzone-link">Overview</a>
      </li>
      <li class="ease-dropzone-item" style="--item-index: 2;">
        <a href="#features" class="ease-dropzone-link">Features</a>
      </li>
      <li class="ease-dropzone-item" style="--item-index: 3;">
        <a href="#docs" class="ease-dropzone-link">Documentation</a>
      </li>
    </ul>
  </nav>
</div>
```

## Why is it useful?

It expands EaseMotion CSS's collection of zero-JavaScript navigation patterns, offering developers a performant, accessible (`:focus-visible`, semantic markup, `prefers-reduced-motion`) staggered menu entrance directly powered by standard CSS transitions and custom properties.
