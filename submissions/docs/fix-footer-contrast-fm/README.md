# What does this do?
This submission fixes the poor text contrast of the demo pages' footer in Light Mode by removing hardcoded inline styles and utilizing theme-aware CSS variables that satisfy WCAG AA contrast guidelines.

# How is it used?
Apply the `.demo-footer` class to the footer element and structure the paragraph and strong tags without hardcoded inline color styles:

```html
<footer class="demo-footer">
  <div class="ease-container">
    <p style="margin: 0;">
      Built with ❤️ using <strong>EaseMotion CSS</strong> — the
      animation-first, human-readable CSS framework.
    </p>
  </div>
</footer>
```

The accompanying theme-aware styles manage the text and highlight colors dynamically based on the active mode (Dark Mode by default, and Light Mode via `[data-theme="light"]` or prefers-color-scheme):

```css
.demo-footer {
  text-align: center;
  padding: var(--ease-space-12) 0;
  border-top: 1px solid var(--border-color);
  color: rgba(255, 255, 255, 0.3);
  font-size: var(--ease-text-sm);
}

.demo-footer strong {
  color: var(--ease-color-primary-light);
}

[data-theme="light"] .demo-footer {
  color: var(--page-text-muted);
  opacity: 1;
}

[data-theme="light"] .demo-footer strong {
  color: var(--ease-color-primary);
}
```

# Why is it useful?
It ensures that the footer content remains clearly legible and accessible to all users in Light Mode, while preserving the exact design aesthetic of Dark Mode, keeping in line with the project's dedication to high quality and WCAG contrast standard compliance.
