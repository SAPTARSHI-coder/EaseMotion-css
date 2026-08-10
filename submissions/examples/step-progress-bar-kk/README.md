# Step Progress Bar

## What it does

This submission creates a CSS-only step progress bar for multi-step flows. It shows completed, active, and upcoming stages so users can quickly understand where they are in a process.

## How to use it

Apply step state classes inside a shared progress container:

```html
<div class="step-progress">
  <div class="step active">
    <span class="step-circle">2</span>
    <p>Profile</p>
  </div>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, animation-first, and composable. The pattern is practical for onboarding screens, account setup flows, checkouts, and form progress interfaces.

## Included features

- Completed, active, and upcoming step states
- Connected progress line styling
- Responsive layout for smaller screens
- Clean onboarding and form-step presentation
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained demo that opens directly in a browser
- `style.css` - raw CSS for the step progress bar
- `README.md` - usage and contribution context
