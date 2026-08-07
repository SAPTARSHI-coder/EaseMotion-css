# CSS Grid Container Query Unit (cqw) Loop Fix

## What does this do?
This fix addresses a critical CSS rendering issue where using `cqw` (container query width) units directly in grid children caused infinite calculation loops in certain browsers.

## The Problem

When container query units like `cqw` are applied to grid child elements, some browsers enter an infinite calculation loop because:

1. The grid container size depends on its children
2. The children's size depends on container queries
3. This creates a circular dependency

## The Solution

This fix uses a two-part approach:

1. **Container Query Scoping**: Apply `container-type: inline-size` to an intermediate wrapper (`.alm-card-container-wrapper`) instead of the direct grid children.

2. **Stable Grid Template**: Use `min(100%, 280px)` instead of just `280px` in `minmax()` to prevent auto-fit track calculation loops.

## Usage

```html
<div class="alm-sandbox-stage">
  <div class="alm-auto-fit-grid">
    <div class="alm-card-container-wrapper">
      <div class="alm-responsive-card">
        <h3 class="alm-card-title">Card Title</h3>
        <p class="alm-card-body">Card content here...</p>
      </div>
    </div>
    <!-- More cards... -->
  </div>
</div>
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.alm-sandbox-stage` | Outer container with dark theme styling |
| `.alm-auto-fit-grid` | Grid container with stabilized auto-fit |
| `.alm-card-container-wrapper` | Container query scope wrapper |
| `.alm-responsive-card` | Card with container-relative typography |

## Benefits

- ✅ No more browser rendering loops
- ✅ Fluid typography that scales with card width
- ✅ Responsive grid that adapts to container size
- ✅ Works across modern browsers

## Browser Support

- Chrome 105+
- Firefox 110+
- Safari 16+
