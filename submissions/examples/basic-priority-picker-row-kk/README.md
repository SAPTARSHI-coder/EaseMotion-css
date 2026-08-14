# Basic Priority Picker Row

## What it does

This submission adds a CSS-only priority picker row for task boards, issue
trackers, project dashboards, and settings panels.

It shows a priority marker, priority label, helper text, response target, scope,
and low, medium, or high state in one compact reusable row.

## How to use it

Add the base row class with a priority marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-priority-picker-row">
  <span class="priority-mark is-medium" aria-hidden="true">MD</span>
  <div class="priority-copy">
    <strong>Medium priority</strong>
    <p>Default choice for normal tasks and planned improvements.</p>
  </div>
  <span class="priority-target">3 days</span>
  <span class="priority-scope">Default</span>
  <span class="priority-state is-medium">Medium</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
task and project interfaces. Developers can reuse the same row pattern in issue
forms, project boards, task filters, and settings panels while keeping the
implementation lightweight and CSS-only.

## Included features

- Low, medium, and high priority examples
- Priority marker badges
- Response target metadata
- Scope metadata
- Priority state styling
- Long text truncation for compact panels
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the priority picker row
- `README.md` - usage and contribution context
