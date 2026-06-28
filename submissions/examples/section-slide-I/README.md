 
# Section Slide Horizontal on Scroll

Section slides in from the side when scrolled into view using IntersectionObserver.

## Files

- demo.html - Interactive demo
- style.css - Slide animation styles
- README.md - Documentation

## Classes

| Class | Direction | Speed |
|-------|-----------|-------|
| `ease-section-slide-left` | Left → Center | 0.6s |
| `ease-section-slide-right` | Right → Center | 0.6s |
| `ease-section-slide-left-slow` | Left → Center | 0.8s |
| `ease-section-slide-right-fast` | Right → Center | 0.3s |

## Usage

```html
<!-- Slide from left -->
<div class="ease-section-slide-left">
    <p>Content slides in from left</p>
</div>

<!-- Slide from right -->
<div class="ease-section-slide-right">
    <p>Content slides in from right</p>
</div>

<!-- Custom speed -->
<div class="ease-section-slide-left-slow">
    <p>Slow slide from left</p>
</div>