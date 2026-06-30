# Copy-to-Clipboard Button for Code Blocks

1. **What does this add?** A "Copy" button that appears on hover over any code block, copies the snippet to the clipboard on click via the `navigator.clipboard` API, and briefly shows a "Copied!" confirmation before resetting.
2. **How is it used?**

```html
<div class="code-block-wrapper">
  <pre><code class="language-html">
    &lt;button class="ease-btn ease-btn-primary"&gt;Primary&lt;/button&gt;
  </code></pre>
  <button class="copy-btn" aria-label="Copy code">Copy</button>
</div>
```

```js
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const wrapper = btn.closest(".code-block-wrapper");
    const code = wrapper.querySelector("code").innerText;
    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = "Copied!";
      btn.classList.add("copied");
      setTimeout(() => {
        btn.textContent = "Copy";
        btn.classList.remove("copied");
      }, 1500);
    });
  });
});
```

3. **Why is it useful?** EaseMotion CSS is developer-facing documentation — developers frequently copy class names and snippets. A one-click copy button removes the friction of manual selection, fits the project's clean, minimal, dependency-free philosophy (pure JS, no libraries), and matches familiar UX patterns from GitHub, MDN, and Tailwind docs.
