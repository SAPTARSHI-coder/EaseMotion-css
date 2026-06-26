# Ease Code Snippet

## What does this do?

A dark-themed code snippet component that displays formatted code with optional line numbers, a hover-activated copy button, and animated copy feedback.

---

## How is it used?

Open `demo.html` in any modern browser.

Example:

```html
<div class="code-snippet">

    <div class="code-header">
        <span>JavaScript</span>
        <button>Copy</button>
    </div>

    <div class="code-container">

        <div class="line-numbers">
            <span>1</span>
            <span>2</span>
            <span>3</span>
        </div>

        <pre><code>
function greet(name) {
    console.log(`Hello ${name}!`);
}
        </code></pre>

    </div>

</div>
```

Features included:

- Dark code block
- Monospace font
- Copy button
- "Copied!" feedback animation
- Optional line numbers
- Responsive layout

---

## Why is it useful?

Code snippet components are commonly used in documentation websites, developer portals, blogs, tutorials, and admin dashboards. This component offers a clean, modern presentation with subtle animations and an intuitive copy-to-clipboard interaction, aligning with EaseMotion CSS's animation-first philosophy.