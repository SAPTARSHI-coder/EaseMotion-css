# ease-card-pr-2

Image card with gradient overlay for text readability and hover zoom effect.

## Features

- Full-bleed image background with `object-fit: cover`
- Bottom gradient overlay for text contrast
- Tag badge with glassmorphism blur effect
- Title and subtitle positioned at bottom
- Hover zoom effect on image (scale 1.08)
- Arrow link with gap animation on hover
- 3 aspect ratio variants: portrait, wide, square

## Files

- `style.css` — the image card styles
- `demo.html` — working demo with all ratio variants
- `README.md` — usage documentation

## Usage

```html
&lt;div class="card-pr-2"&gt; &lt;img src="image.jpg" alt="Description"
class="card-pr-2-image"&gt; &lt;div class="card-pr-2-overlay"&gt; &lt;span
class="card-pr-2-tag"&gt;Category&lt;/span&gt; &lt;h3
class="card-pr-2-title"&gt;Card Title&lt;/h3&gt; &lt;p
class="card-pr-2-subtitle"&gt;Description text here&lt;/p&gt; &lt;a href="#"
class="card-pr-2-action"&gt; Explore &lt;svg&gt;→&lt;/svg&gt; &lt;/a&gt;
&lt;/div&gt; &lt;/div&gt;
```
