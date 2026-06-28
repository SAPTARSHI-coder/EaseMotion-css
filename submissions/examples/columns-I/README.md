# Multi-Column Layout Utilities (ease-columns)

CSS columns utilities for newspaper-style text layout and masonry-like image grids.

## Files

| File | Description |
|------|-------------|
| 📄 [demo.html](./demo.html) | Interactive demo |
| 🎨 [style.css](./style.css) | Column styles |
| 📖 [README.md](./README.md) | Documentation |

## Classes

### Column Count
| Class | Columns |
|-------|---------|
| `ease-columns-2` | 2 columns |
| `ease-columns-3` | 3 columns |
| `ease-columns-4` | 4 columns |

### Column Gap
| Class | Gap Size |
|-------|----------|
| `ease-column-gap-sm` | 1rem |
| `ease-column-gap-md` | 2rem |
| `ease-column-gap-lg` | 3rem |

## Usage

```html
<!-- 2 columns with medium gap -->
<div class="ease-columns-2 ease-column-gap-md">
    <p>Content splits into 2 columns</p>
</div>

<!-- 3 columns with large gap -->
<div class="ease-columns-3 ease-column-gap-lg">
    <p>Newspaper style layout</p>
</div>

<!-- Masonry image grid -->
<div class="ease-columns-3 ease-column-gap-md">
    <img src="image1.jpg">
    <img src="image2.jpg">
    <img src="image3.jpg">
</div>