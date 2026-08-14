# Basic Priority Label Row

## What it does

This submission adds a simple CSS-only priority label row for task lists, tickets, planning cards, and compact work queues.

It aligns task copy with a clear right-side priority label in one reusable layout.

## How to use it

Add the utility class to a row containing task text and a priority label:

```html
<div class="basic-priority-label-row">
  <div>
    <strong>Fix mobile spacing</strong>
    <p>Adjust layout gaps in the profile summary card.</p>
  </div>
  <span class="priority-label is-high">High</span>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across dashboards, task cards, admin panels, planning lists, and review queues. It keeps priority information easy to scan with CSS-only styling.

## Included features

- Task title, helper text, and priority label layout
- High, medium, and low priority examples
- Divider support between rows
- Responsive stacked layout on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the priority label row
- `README.md` - usage and contribution context
