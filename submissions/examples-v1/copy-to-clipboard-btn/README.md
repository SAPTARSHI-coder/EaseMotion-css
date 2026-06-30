# Copy-to-Clipboard Button for Code Blocks

## Feature Overview

This feature adds a **“Copy” button** to every code block in the EaseMotion CSS documentation. The button appears on hover (or remains visible depending on styling). When clicked, it copies the snippet to the clipboard and briefly shows a **“Copied!”** confirmation state before resetting.

## Why This Matters

EaseMotion CSS is developer-facing documentation. Developers often copy class names, HTML snippets, and CSS variables directly from the docs. Currently, they must manually select and copy text — a friction point that slows adoption. A one-click copy button:

- Improves developer experience.
- Aligns with EaseMotion’s philosophy of clean, minimal, dependency-free design.
- Matches standard UX patterns seen in GitHub, MDN, and Tailwind docs.

## Demo Snippets

### HTML

```html
<div class="code-block-wrapper">
  <pre><code class="language-html">
    &lt;button class="ease-btn ease-btn-primary"&gt;Primary&lt;/button&gt;
  </code></pre>
  <button class="copy-btn" aria-label="Copy code">Copy</button>
</div>
```
