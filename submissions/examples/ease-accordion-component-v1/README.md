# ease-accordion

Smooth collapse and expand accordion using CSS Grid micro-transitions — dynamic height, no JavaScript required.

## Files

| File | Description |
|------|-------------|
| 📄 [demo.html](./demo.html) | Interactive demo |
| 🎨 [style.css](./style.css) | Accordion styles |
| 📖 [README.md](./README.md) | Documentation |

## Classes

| Class | Description |
|-------|-------------|
| `ease-accordion` | Base accordion container |
| `ease-accordion-header` | Accordion header section |
| `ease-accordion-trigger` | Clickable button to toggle |
| `ease-accordion-panel` | Collapsible panel (CSS Grid) |
| `ease-accordion-content` | Inner content wrapper |
| `ease-accordion-primary` | Blue theme variant |
| `ease-accordion-success` | Green theme variant |
| `ease-accordion-warning` | Orange theme variant |

## Usage

```html
<div class="ease-accordion">
    <div class="ease-accordion-header">
        <button class="ease-accordion-trigger">
            <span>Question Title</span>
            <span class="accordion-icon">▼</span>
        </button>
    </div>
    <div class="ease-accordion-panel">
        <div class="ease-accordion-content">
            <p>Answer content goes here.</p>
        </div>
    </div>
</div> 
