# CSS Shape-Outside Component Utilities

Relates to feature request **#41196**.

## 1. What does this do?

Provides utility classes (`.ease-shape-circle` and `.ease-shape-polygon`) that leverage the CSS `shape-outside` property. This allows text and inline content to naturally flow around complex geometric shapes instead of standard rectangular bounding boxes, creating magazine-style editorial layouts purely with CSS.

## 2. How is it used?

The element must be floated (`float: left` or `float: right`) for `shape-outside` to work.

**HTML Setup**
```html
<div class="ease-shape-circle float-left"></div>
<p>
  This text will automatically wrap around the circular curve of the element,
  creating a visually engaging layout without any SVG wrappers or JavaScript.
</p>
```

**CSS Mechanism**
```css
.ease-shape-circle {
  float: left;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  
  /* Tells inline content to wrap around a circular boundary */
  shape-outside: circle(50%);
}

.ease-shape-polygon {
  float: right;
  width: 250px;
  height: 250px;
  
  /* Wraps text around a custom angled polygon */
  shape-outside: polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%);
  
  /* Often paired with clip-path so the visible background matches the text boundary */
  clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%);
}
```

## 3. Why is this useful for EaseMotion CSS?

Most CSS frameworks focus heavily on rigid grid and flexbox layouts. While effective, they rarely provide utilities for more organic, editorial-inspired layouts. Supporting `shape-outside` empowers developers to create visually engaging landing pages, blogs, and portfolios with modern CSS, perfectly aligning with EaseMotion's goal of lightweight, expressive, dependency-free styling.
