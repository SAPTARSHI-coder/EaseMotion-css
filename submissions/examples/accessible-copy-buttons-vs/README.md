# Accessible Copy Buttons

## 1. What does this do?

Demonstrates how adding a descriptive `aria-label` to documentation copy buttons tells screen-reader users exactly what will be copied, instead of announcing a generic "Copy" for every button on the page.

## 2. How is it used?

Apply the pattern to any copy button next to a code snippet:

```html
<!-- ❌ Before — every button announces identically as "Copy, button" -->
<button data-copy="--ease-speed-fast">Copy</button>

<!-- ✅ After — screen reader announces "Copy --ease-speed-fast variable, button" -->
<button
  aria-label="Copy --ease-speed-fast variable"
  data-copy="--ease-speed-fast"
>
  Copy Variable
</button>

<button aria-label="Copy ease-btn-primary class" data-copy="ease-btn-primary">
  Copy Class
</button>
```

The JavaScript in `copy.js` handles:

- Clipboard write (Clipboard API with `execCommand` fallback)
- Temporary `aria-label` update to "… — Copied!" during the feedback window
- An `aria-live="polite"` region that announces "Copied [target]" to screen readers

## 3. Why is it useful?

EaseMotion CSS targets developers who copy CSS variables and utility class names from documentation. When multiple copy buttons appear on the same page without descriptive labels, keyboard and screen-reader users cannot distinguish them. Adding a precise `aria-label` is a one-attribute fix that brings the copy workflow to WCAG 2.1 SC 4.1.2 (Name, Role, Value) compliance, making the documentation genuinely usable for everyone.
