# Validation Summary Panel

## What does this do?

This submission adds an accessible validation summary panel that lists form errors, links them to fields, and keeps each invalid control visually clear.

## How is it used?

Place the summary before the form fields and connect each summary link to the matching field id.

```html
<aside class="summary-panel" role="status" aria-live="polite">
  <strong>3 fields need attention</strong>
  <a href="#email">Email format is incomplete</a>
</aside>
<input id="email" aria-invalid="true">
```

## Why is it useful?

It gives EaseMotion a production-focused form feedback pattern that improves keyboard navigation, error recovery, and reduced-motion accessibility.
