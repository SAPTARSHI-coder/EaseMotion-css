 
# Hero Section Component

Hero section component with full-width container, centered content wrapper, overlay for image backgrounds, and entrance animations.

## Files

- demo.html - Interactive demo
- style.css - Hero section styles
- README.md - Documentation

## Classes

| Class | Description |
|-------|-------------|
| `ease-hero` | Full-width hero container |
| `ease-hero-content` | Centered content wrapper |
| `ease-hero-content-left` | Left-aligned content wrapper |
| `ease-hero-overlay` | Overlay for image backgrounds |
| `ease-hero-image` | Hero with background image |
| `ease-hero-dark` | Dark theme hero |
| `ease-hero-gradient` | Gradient background hero |
| `ease-hero-left` | Left-aligned hero |
| `ease-hero-video` | Video background hero |

## Usage

```html
<section class="ease-hero">
    <div class="ease-hero-content">
        <h1>Title</h1>
        <p>Description</p>
        <button>CTA</button>
    </div>
</section>

<!-- With overlay -->
<section class="ease-hero ease-hero-image">
    <div class="ease-hero-overlay"></div>
    <div class="ease-hero-content">
        <h1>Title</h1>
    </div>
</section>