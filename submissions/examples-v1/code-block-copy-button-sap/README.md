# Code Block Copy Button Demo

A simple documentation-style code block demo with a top-right clipboard button for quick copy access.

## What does this do?
This demo adds a copy button to each code block so users can copy snippet text without manually selecting it.

## How is it used?
Wrap the snippet in a `pre` / `code` block and place a `button` near the top-right.

Example:

```html
<div class="code-card">
  <div class="code-card__header">
    <span>CSS snippet</span>
    <button class="copy-btn" type="button" aria-label="Copy CSS snippet" data-copy-target="css-code">📋</button>
  </div>
  <pre class="code-block"><code id="css-code">/* code here */</code></pre>
</div>
```

## Why is it useful?
Documentation copy buttons improve developer workflow by making long snippets easier to reuse, reducing friction and errors when copying code from docs.
