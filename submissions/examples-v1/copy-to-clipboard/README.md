# Copy to Clipboard

Adds a **Copy** button to every code block. On hover, the button appears — on click, it copies the code and briefly shows **Copied!** confirmation.

## Usage

Wrap any `<pre><code>` block with `.ease-code-wrapper` and add the button:

```html
<div class="ease-code-wrapper">
  <pre><code>your code here</code></pre>
  <button class="ease-copy-btn" aria-label="Copy code">Copy</button>
</div>
```

Include `style.css` for styles and the JS snippet from `demo.html` for functionality.

## Files

| File        | Purpose            |
| ----------- | ------------------ |
| `demo.html` | Full working demo  |
| `style.css` | Copy button styles |
| `README.md` | This file          |
