# Responsive Image Gallery Grid

A CSS-only masonry and uniform image gallery with hover zoom effect, overlay captions, and responsive breakpoints. Perfect for portfolios, photo galleries, and product showcases.

## Demo

Open `demo.html` in your browser to see:
- Masonry layout with mixed sizes (tall, wide items)
- Uniform grid with equal cells
- Hover zoom with sliding overlay
- Responsive: 3 columns → 2 columns → 1 column

## Usage

### Masonry Layout

```html
&lt;div class="gallery-grid gallery-masonry"&gt;
  &lt;div class="gallery-item"&gt;
    &lt;img src="photo1.jpg" alt="Description"&gt;
    &lt;div class="gallery-overlay"&gt;
      &lt;h3&gt;Title&lt;/h3&gt;
      &lt;p&gt;Caption&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="gallery-item gallery-item-tall"&gt;
    &lt;img src="photo2.jpg" alt="Description"&gt;
    &lt;div class="gallery-overlay"&gt;
      &lt;h3&gt;Tall Item&lt;/h3&gt;
      &lt;p&gt;Spans 2 rows&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="gallery-item gallery-item-wide"&gt;
    &lt;img src="photo3.jpg" alt="Description"&gt;
    &lt;div class="gallery-overlay"&gt;
      &lt;h3&gt;Wide Item&lt;/h3&gt;
      &lt;p&gt;Spans 2 columns&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;