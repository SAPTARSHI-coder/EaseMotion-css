# Expanding Image Accordion

A classic horizontal expanding image gallery, commonly seen on modern photography portfolios and high-end e-commerce sites.

### Usage
```html
<div class="ease-accordion-container">
    <div class="ease-accordion-panel" style="background-image: url('image1.jpg');">
        <div class="panel-content">
            <h3>Heading</h3>
            <p>Description text</p>
        </div>
    </div>
    <!-- Add more panels here -->
</div>
```

### Why is it useful?
Creating an expanding gallery used to require JavaScript to calculate exact pixel widths and animate the container bounds. 

This component achieves a flawless expansion and contraction effect natively using pure CSS Flexbox. By setting the base `.ease-accordion-panel` to `flex: 1` and simply transitioning the hover state to `flex: 5`, the browser natively recalculates the spatial distribution of the container with perfect smoothness, requiring absolutely no DOM manipulation or heavy JS animation libraries.
