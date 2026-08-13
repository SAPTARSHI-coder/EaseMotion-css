# Basic Requirement Check Row

## What it does

This submission adds a simple CSS-only requirement check row for checklist panels, compliance cards, review sections, setup flows, and onboarding summaries.

It aligns a check marker, requirement title, helper copy, and small state label in one compact layout.

## How to use it

Add the utility class to a row containing a marker, requirement copy, and state:

```html
<div class="basic-requirement-check-row">
  <span class="requirement-marker is-complete" aria-hidden="true">OK</span>
  <div class="requirement-copy">
    <strong>Demo file included</strong>
    <p>The component opens directly in any browser.</p>
  </div>
  <span class="requirement-state is-complete">Complete</span>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across checklists, review panels, setup cards, onboarding sections, and compliance-style summaries. It keeps requirement states easy to scan with pure HTML and CSS.

## Included features

- Check marker, title, helper copy, and state label layout
- Complete, review, and pending examples
- Divider support between rows
- Text truncation for long helper copy
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the requirement check row
- `README.md` - usage and contribution context
