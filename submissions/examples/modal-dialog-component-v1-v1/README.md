# Modal Dialog component

## What does this do?

A fully functional modal dialog system using the native CSS :target pseudo-class for state management. Features include a semi-transparent backdrop with a blur effect, smooth entry/exit animations (scale-up/fade-in), semantic Header/Body/Footer structure, mobile responsiveness, and automatic light/dark mode theming via CSS variables.

## How is it used?

Add the class to any HTML element:

```html
<!-- Trigger Button -->
<a href="#demo-modal" class="btn">Open Modal</a>

<!-- Modal Structure -->
<div id="demo-modal" class="ease-modal-overlay">
  <div class="ease-modal">
    <div class="ease-modal-header">
      <h3>Confirm Action</h3>
      <a href="#" class="ease-modal-close" aria-label="Close">&times;</a>
    </div>
    <div class="ease-modal-body">
      <p>This is a pure CSS modal. No JavaScript required!</p>
    </div>
    <div class="ease-modal-footer">
      <a href="#" class="btn btn-secondary">Cancel</a>
      <a href="#_" class="btn btn-primary">Confirm</a>
    </div>
  </div>
</div>
```

## Why is it useful?

It aligns with Ease CSS principles by being animation-first (using `transform`, `opacity`, `backdrop-filter`), having human-readable logic (state tied to URL hash), composable (wraps any content), and dependency-free.

Since Ease CSS currently has nothing to handle modals and dialogs, I found it to be a fitting addition

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open demo.html directly in your browser to see the effect.

## Contribution Notes

- Contributed by Man1ac-1773
- Date : June 1st, 2026
