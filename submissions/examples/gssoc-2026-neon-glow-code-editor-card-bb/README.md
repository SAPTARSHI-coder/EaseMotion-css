# Neon Glow Code Editor Snippet Card (GSSoC 2026)

## 1. What does this do?
The **Neon Glow Code Editor Snippet Card** component renders a developer syntax code snippet card with animated conic border path rotating glow (`conic-gradient`), line number indicators, window controls, and copy interaction feedback.

## 2. How is it used?
Link the stylesheet in your HTML head:
```html
<link rel="stylesheet" href="style.css">
```
Embed the `.editor-card` structure inside documentation pages or blog posts:
```html
<div class="editor-card">
  <div class="neon-border-glow"></div>
  <div class="editor-header">...</div>
  <div class="code-container">
    <pre><code>...</code></pre>
  </div>
</div>
```

## 3. Why is it useful?
- **Sleek Developer Experience**: Ideal for presenting code samples and CSS animation guides in modern developer documentation.
- **Hardware-Accelerated Glow**: Uses CSS conic gradient rotation for vivid neon border reflections without degrading scroll performance.
- **Dark Mode Syntax Highlighting**: Custom color tokens tailored for dark mode contrast accessibility.
