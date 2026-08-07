# Heat Map Grid Component (#43068)

### 1. What does this do?
This component introduces a data-density grid block perfect for rendering activity trackers or contribution metrics. It features a clean scale-in loading state and dynamic scale-out micro-interactions during hover.

### 2. How is it used?
Developers apply structural intensity classes across custom-sized matrix dimensions:

```html
<div class="heatmap-grid">
    <div class="heatmap-cell intensity-4"></div>
</div>