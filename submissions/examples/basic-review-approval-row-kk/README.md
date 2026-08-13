# Basic Review Approval Row

## What it does

This submission adds a simple CSS-only review approval row for workflow panels,
review dashboards, task approvals, and release checklists.

It presents a review type icon, review name, helper text, review time, and
approval state in one compact reusable row.

## How to use it

Add the base row class with a review icon, copy area, time label, and state
pill:

```html
<article class="basic-review-approval-row">
  <span class="review-icon is-approved" aria-hidden="true">AP</span>
  <div class="review-copy">
    <strong>Design review</strong>
    <p>Approved by the product design reviewer.</p>
  </div>
  <span class="review-time">8m ago</span>
  <span class="review-state is-approved">Approved</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
workflow and collaboration interfaces. The row can be reused inside approval
dashboards, release checklists, review panels, and task boards while staying
lightweight and CSS-only.

## Included features

- Approved, pending, and changes-requested review examples
- Review timing metadata
- Approval state pills
- Long text truncation for review descriptions
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the review approval row
- `README.md` - usage and contribution context
