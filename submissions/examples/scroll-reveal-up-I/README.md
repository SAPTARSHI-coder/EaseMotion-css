 
# Scroll Reveal Up

Elements slide up from below while fading in when scrolled into view — stagger-friendly with nth-child delays.

## Files

- demo.html - Interactive demo
- style.css - Scroll reveal styles
- README.md - Documentation

## Classes

| Class | Speed |
|-------|-------|
| `ease-scroll-reveal-up` | 0.5s |
| `ease-scroll-reveal-up-fast` | 0.3s |
| `ease-scroll-reveal-up-slow` | 0.8s |

## Usage

```html
<div class="ease-scroll-reveal-up">
    <p>Content that slides up on scroll</p>
</div>

<!-- Staggered grid -->
<div class="card-grid">
    <div class="card ease-scroll-reveal-up">Card 1</div>
    <div class="card ease-scroll-reveal-up">Card 2</div>
    <div class="card ease-scroll-reveal-up">Card 3</div>
</div>