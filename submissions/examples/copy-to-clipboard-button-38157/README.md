# Copy-to-Clipboard Button for Class Names

> **Issue:** #38157 · **Track:** Standard (HTML/CSS) · **Author:** Ankit

1. **What does this do?** Adds an interactive, animated copy-to-clipboard button next to inline class names and code blocks, providing immediate visual feedback upon copying.
2. **How is it used?** Wrap your code element and the button in a `.copy-wrapper` container. Apply `.copy-btn` to the button element.
3. **Why is it useful?** It significantly improves the developer experience by allowing users to quickly grab exact class names without manual text selection, reducing friction when using the library.

---

## ✨ Features

- **Inline & Block Support:** Works beautifully next to inline class names (e.g., `ease-fade-in`) and larger code blocks.
- **Visual Feedback:** The icon animates from a "copy" icon to a "check" icon upon success.
- **Animated Tooltip:** Displays a smooth tooltip confirming the action ("Copied!").
- **Zero External Dependencies:** Built with pure HTML, CSS, and minimal vanilla JavaScript for the clipboard API.
- **Accessible:** Includes proper `aria-labels` and focus states for keyboard navigation.

---

## 🛠️ Usage Example

### Inline Code Example

```html
<span class="copy-wrapper inline">
  <code class="class-name">ease-hover-grow</code>
  <button class="copy-btn" aria-label="Copy class name" data-copy-text="ease-hover-grow" data-tooltip="Copy to clipboard">
    <svg class="icon-copy" ...></svg>
    <svg class="icon-check" ...></svg>
  </button>
</span>
```

### Code Block Example

```html
<div class="copy-wrapper block">
  <pre><code id="example-code-1">.ease-fade-in {
  animation: ease-fade-in 0.3s ease;
}</code></pre>
  <button class="copy-btn" aria-label="Copy code block" data-copy-target="#example-code-1" data-tooltip="Copy to clipboard">
    <svg class="icon-copy" ...></svg>
    <svg class="icon-check" ...></svg>
  </button>
</div>
```

---

## 📁 Files Included

| File | Purpose |
|------|---------|
| `demo.html` | Self-contained interactive demo demonstrating various use cases. |
| `style.css` | Scoped styles, animations, and tooltip logic for the copy buttons. |
| `README.md` | This documentation file. |

---

## 🎨 Design Philosophy

This implementation uses EaseMotion concepts like smooth transitions, scaled hover states, and clear micro-interactions to make the simple act of copying text feel premium and responsive.
