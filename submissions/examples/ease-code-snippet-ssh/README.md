# ease-code-snippet (`ease-code-snippet-ssh`)

A dark, syntax-highlighted code snippet display component with a copy button (fades in on hover), copied feedback (with `ease-fade-in` animation), and optional line numbers — built with **pure HTML + CSS**. No JavaScript, no external libraries.

---

## 1. What does this do?

It renders a polished, dark-themed code block ideal for documentation and tutorials. It supports syntax highlighting via semantic token classes (JavaScript, CSS, HTML, and more), shows a "Copy" button on hover, gives visual "✓ Copied!" feedback with a smooth fade-in animation when clicked, and optionally displays a line-numbers column.

---

## 2. How is it used?

Each snippet is wrapped in a `.code-snippet` container. A hidden checkbox controls the copy-feedback state; tokens are marked up using simple `<span class="tok-*">` classes.

```html
<article class="code-snippet code-snippet--numbered">
  <input type="checkbox" id="copy-toggle-1" class="code-snippet__state" />

  <header class="code-snippet__header">
    <div class="code-snippet__lang">
      <span class="code-snippet__dot code-snippet__dot--js"></span>
      <span>JavaScript</span>
    </div>
    <label for="copy-toggle-1" class="code-snippet__copy-btn">
      <span class="code-snippet__copy-default">📋 Copy</span>
      <span class="code-snippet__copy-success">✓ Copied!</span>
    </label>
  </header>

  <div class="code-snippet__body">
    <pre class="code-snippet__lines">
      <span class="ln">1</span>
      <span class="ln">2</span>
      <span class="ln">3</span>
    </pre>

    <pre class="code-snippet__code"><code><span class="tok-comment">// Greet a user</span>
<span class="tok-keyword">function</span> <span class="tok-fn">greet</span>(<span class="tok-param">name</span>) {
  <span class="tok-keyword">return</span> <span class="tok-string">`Hello, ${name}!`</span>;
}</code></pre>
  </div>
</article>
```

### Available modifiers & tokens

| Class                          | Purpose                                                |
| ------------------------------ | ------------------------------------------------------ |
| `.code-snippet--numbered`      | Enables the optional line-numbers column               |
| `.code-snippet__dot--js`       | Yellow language dot (JavaScript)                       |
| `.code-snippet__dot--css`      | Blue language dot (CSS)                                |
| `.code-snippet__dot--html`     | Orange language dot (HTML)                             |

**Syntax tokens** (general): `.tok-comment`, `.tok-keyword`, `.tok-string`, `.tok-fn`, `.tok-param`, `.tok-builtin`
**CSS-specific tokens**: `.tok-selector`, `.tok-property`, `.tok-value`, `.tok-pseudo`
**HTML-specific tokens**: `.tok-tag`, `.tok-attr`

Just open `demo.html` in any modern browser — no server, no build step, no dependencies.

---

## 3. Why is it useful?

This submission fits EaseMotion CSS's philosophy because it:

- **Pure CSS state management** — the copy button's "Copied!" feedback is driven by a hidden checkbox and the `:checked` sibling-selector pattern. No JavaScript required.
- **Animation-first** — uses the `ease-fade-in` keyframe requested in the issue, giving the "Copied!" feedback a smooth, professional micro-interaction.
- **Documentation-ready** — perfect for tutorials, docs pages, and component showcases. The VS Code Dark+ inspired token colors are familiar to every developer.
- **Flexible** — line numbers are opt-in via a single modifier class. Any language can be added by introducing new `.tok-*` classes.
- **Accessible** — uses semantic `<label>` controls for keyboard/screen-reader compatibility, high-contrast token colors, and respects `prefers-reduced-motion`.
- **Responsive** — adapts gracefully on mobile (copy button stays visible since there is no hover state on touch devices).
- **Self-contained** — zero dependencies, zero external assets, works offline.

It pairs naturally with the EaseMotion CSS documentation system and can be dropped into any project that needs a clean, animated code-display component.

---

## Acceptance Criteria (matches issue #19886)

- [x] Dark code block with monospace font
- [x] Copy button: fades in on hover
- [x] Copied feedback: button text changes with `ease-fade-in`
- [x] Optional line numbers column

---

## Browser Support

Works on all modern browsers:

- ✅ Chrome / Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

---

## Author

Submitted by **@soumyasekharshee265-ux** as part of issue [#19886](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/19886).