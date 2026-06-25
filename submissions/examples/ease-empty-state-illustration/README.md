# ease-empty-state-illustration

## What does this do?
A beautiful, highly interactive set of empty state components featuring:
- Floating illustration animation using `ease-float`
- Staggered entry transitions for title, description, and action button on page load
- Support for multiple variants: `no-data`, `no-results`, and `no-connection`

## How is it used?
Loom the structure using standard semantic tags. Add the helper stagger classes to trigger entry animations:

```html
<div class="empty-state-card no-data">
  <!-- Float Animation -->
  <div class="illustration-container ease-float stagger-in stagger-1">
    <!-- SVG illustration here -->
  </div>
  <!-- Staggered Entrance Elements -->
  <h2 class="title stagger-in stagger-2">No Records Found</h2>
  <p class="text stagger-in stagger-3">Your database is currently empty.</p>
  <button class="cta-btn stagger-in stagger-4">Add Project</button>
</div>
```

## Why is it useful?
It provides standard patterns for empty states with micro-animations that improve user delight. It is fully CSS-driven, lightweight, responsive, and includes accessibility considerations like high-contrast gradients and SVG outlines.

## Tech Stack
- HTML
- CSS (Vanilla, No JavaScript)

## Preview
Open `demo.html` directly in your browser to see the animation in action.
