# image-gallery-pr

An **image gallery grid** with hover zoom effect, caption overlay, and multiple layout options. Pure CSS.

## Preview

Open `demo.html` in your browser. No build step required.

## Layouts

| Layout | Class | Description |
|--------|-------|-------------|
| 2x2 Grid | `.gallery-grid-2-pr` | Two equal columns |
| 3 Column | `.gallery-grid-3-pr` | Three equal columns |
| Masonry | `.gallery-masonry-pr` | Mixed heights with spans |
| Auto Row | `.gallery-row-pr` | Auto-fit responsive columns |

## Aspect Ratios

| Ratio | Class | Best For |
|-------|-------|----------|
| Square | `.gallery-square-pr` | Instagram-style |
| Wide | `.gallery-wide-pr` | Landscapes, banners |
| Tall | `.gallery-tall-pr` | Portraits, stories |

## Usage

```html
&lt;div class="gallery-pr gallery-grid-3-pr"&gt;
  &lt;div class="gallery-item-pr gallery-wide-pr"&gt;
    &lt;img src="image.jpg" alt="Description" class="gallery-image-pr" /&gt;
    &lt;div class="gallery-overlay-pr"&gt;
      &lt;div class="gallery-icon-pr"&gt;↗&lt;/div&gt;
      &lt;div class="gallery-caption-pr"&gt;Title&lt;/div&gt;
      &lt;div class="gallery-desc-pr"&gt;Description&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;