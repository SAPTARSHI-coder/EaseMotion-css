# Copy to Clipboard Button

## What does this do?

Adds a small copy button to a code block. The button appears when the code block is hovered or focused, making the snippet easy to copy without keeping the interface crowded.

---

## How is it used?

```html
<div class="code-block-wrapper">
  <pre><code>&lt;div class="ease-fade-in"&gt;
  Smooth, minimal motion.
&lt;/div&gt;</code></pre>
  <button class="copy-btn" type="button" aria-label="Copy code preview">
    Copy
  </button>
</div>
```

The button is positioned in the top-right corner of the code preview and fades in on hover or keyboard focus. On touch devices, it stays visible because hover is not available.

## Why is it useful?

Code examples are common in documentation, tutorials, and component demos. A copy button helps users quickly reuse snippets while keeping the code block clean and readable.
