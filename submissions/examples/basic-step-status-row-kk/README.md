# Basic Step Status Row

## What it does

This submission adds a simple CSS-only step status row for onboarding cards, setup flows, checklists, and project progress sections.

It aligns a step marker, task title, helper text, and right-side status label in one compact row.

## How to use it

Add the utility class to a row containing a step marker, task copy, and status:

```html
<div class="basic-step-status-row">
  <span class="step-marker" aria-hidden="true">1</span>
  <div class="step-copy">
    <strong>Create workspace</strong>
    <p>Set up the main project area.</p>
  </div>
  <span class="step-state is-done">Done</span>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across onboarding panels, setup cards, dashboards, profile completion sections, and checklists without JavaScript or external libraries.

## Included features

- Step marker, title, helper text, and status layout
- Done, active, and pending status examples
- Divider support between rows
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the step status row
- `README.md` - usage and contribution context
