# ease-code-block

Styled code blocks with syntax highlighting support and copy functionality.

## Files

| File | Description |
|------|-------------|
| 📄 [demo.html](./demo.html) | Interactive demo |
| 🎨 [style.css](./style.css) | Code block styles |
| 📖 [README.md](./README.md) | Documentation |

## Classes

| Class | Description |
|-------|-------------|
| `ease-code-block` | Base code block container |
| `ease-code-block-lines` | With line numbers |
| `ease-code-block-rounded` | Rounded corners |
| `ease-code-block-dark` | Dark theme variant |

## Structure

```html
<div class="ease-code-block">
    <div class="code-header">
        <span class="code-lang">HTML</span>
        <button class="copy-btn">📋 Copy</button>
    </div>
    <pre><code>Your code here</code></pre>
</div>

### Usage
<!-- Basic code block -->
<div class="ease-code-block">
    <div class="code-header">
        <span class="code-lang">JavaScript</span>
        <button class="copy-btn">📋 Copy</button>
    </div>
    <pre><code>console.log('Hello World');</code></pre>
</div>

<!-- With line numbers -->
<div class="ease-code-block ease-code-block-lines">
    <!-- same structure -->
</div>

<!-- Rounded variant -->
<div class="ease-code-block ease-code-block-rounded">
    <!-- same structure -->
</div>
