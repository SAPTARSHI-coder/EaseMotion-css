# Star Rating Component

A CSS-only star rating component with hover-to-fill stars, half-star support, and readonly display. No JavaScript required for basic functionality.

## Demo

Open `demo.html` in your browser to see:
- Interactive 5-star rating (click to select)
- Readonly display with half-star support
- Large size variant
- Heart-shaped rating variant

## Usage

### Interactive Rating

```html
&lt;div class="star-rating"&gt;
  &lt;input type="radio" name="rating" id="star5" value="5"&gt;
  &lt;label for="star5"&gt;★&lt;/label&gt;
  &lt;input type="radio" name="rating" id="star4" value="4"&gt;
  &lt;label for="star4"&gt;★&lt;/label&gt;
  &lt;input type="radio" name="rating" id="star3" value="3" checked&gt;
  &lt;label for="star3"&gt;★&lt;/label&gt;
  &lt;input type="radio" name="rating" id="star2" value="2"&gt;
  &lt;label for="star2"&gt;★&lt;/label&gt;
  &lt;input type="radio" name="rating" id="star1" value="1"&gt;
  &lt;label for="star1"&gt;★&lt;/label&gt;
&lt;/div&gt;