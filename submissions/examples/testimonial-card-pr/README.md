# testimonial-card-pr

**Styled testimonial cards** with decorative quotation marks, avatar layouts, star ratings, and hover effects.

## Preview

Open `demo.html` in your browser. No build step required.

## Layouts

| Layout | Class | Description |
|--------|-------|-------------|
| Stacked | none (default) | Avatar above text, centered |
| Inline | `.testimonial-inline-pr` | Avatar left of text |

## Variants

| Variant | Class | Description |
|---------|-------|-------------|
| Default | none | Standard card |
| Featured | `.testimonial-featured-pr` | Larger, highlighted border |
| Compact | `.testimonial-compact-pr` | Smaller padding and text |
| Dark | `.testimonial-dark-pr` | Dark background, light text |
| Gradient BG | `.testimonial-bg-pr` | Subtle gradient background |

## Usage

```html
&lt;div class="testimonial-pr"&gt;
  &lt;span class="testimonial-quote-pr"&gt;"&lt;/span&gt;
  &lt;div class="testimonial-stars-pr"&gt;★★★★★&lt;/div&gt;
  &lt;p class="testimonial-text-pr"&gt;Quote text here...&lt;/p&gt;
  &lt;div class="testimonial-author-pr"&gt;
    &lt;img src="avatar.jpg" alt="Name" class="testimonial-avatar-pr" /&gt;
    &lt;div&gt;
      &lt;p class="testimonial-name-pr"&gt;Author Name&lt;/p&gt;
      &lt;p class="testimonial-role-pr"&gt;Role at Company&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;