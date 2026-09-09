# EaseMotion CSS — Interactive Code Snippet Copy (`ease-code-snippet-copy-ik`)

Syntax-highlighted code block component (`ease-code-block`) featuring line numbers, language headers, and micro-animated copy buttons (`ease-copy-btn`).

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a code block presentation container (`ease-code-block`) that formats code snippets with dark-mode syntax highlights, window control dots, and spring scale copy buttons (`ease-copy-btn`).

---

## 2. How is it used?

Include the code block markup structure in your documentation pages:

```html
<div class="ease-code-block">
  <div class="code-topbar">
    <span class="code-lang">CSS</span>
    <button class="ease-copy-btn">Copy</button>
  </div>
  <pre><code>.ease-card { prop: val; }</code></pre>
</div>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS focuses on documentation quality. The Code Snippet Copy component delivers smooth 60fps copy button scale micro-interactions (`transform: scale(1.05)`) while preserving readable monospace font stacks.
