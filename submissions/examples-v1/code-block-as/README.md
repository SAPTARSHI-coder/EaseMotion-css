# Code Block

### What does this do?

It shows a styled code block with a window style title bar that has traffic light dots, a filename, and a copy button, plus a body with line numbers. It works for any preformatted snippet.

### How is it used?

```html
<figure class="code-block">
  <figcaption class="cb-bar">
    <span class="cb-dots"><span></span><span></span><span></span></span>
    <span class="cb-file">button.css</span>
    <button class="cb-copy" type="button"><svg>...</svg>Copy</button>
  </figcaption>
  <pre class="cb-body"><code><span class="cb-line">.btn {</span><span class="cb-line">}</span></code></pre>
</figure>
```

Wrap each line in a `cb-line` span so the CSS counter can number it. Optional token classes (`k`, `s`, `f`, `c`) tint keywords, strings, selectors, and comments.

### Why is it useful?

Docs and blogs show code snippets in a framed block. This presents a code block with a window style header, a copy affordance, and line numbers, using only CSS. The copy button is a real button with a focus ring and its transition is removed under reduced motion.
