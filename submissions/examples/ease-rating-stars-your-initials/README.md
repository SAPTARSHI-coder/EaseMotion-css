# ease-rating-stars

Pure CSS star rating component for EaseMotion CSS. Interactive ratings, read-only displays, and half-star precision — all without JavaScript.

## Features

- **Interactive 5-star rating** — Click or keyboard-navigate to select
- **Hover preview** — Hover over stars to preview the rating before clicking
- **Half-star precision** — CSS gradient text for precise read-only displays
- **Read-only mode** — Static star displays for reviews and aggregate scores
- **Size modifiers** — Small (1rem), Default (1.5rem), Large (2.25rem), XL (3rem)
- **Color variants** — Primary, Success, Danger, Info, Rose with matching glow
- **Gap spacing** — Tight, default, or wide spacing between stars
- **Staggered entrance animation** — Stars bounce in sequentially on page load
- **Numeric score badge** — Styled rating value display alongside stars
- **Accessible** — Screen reader text, keyboard navigation, `focus-visible`, `prefers-reduced-motion`
- **Zero JavaScript** — Pure CSS radio-input hack with `row-reverse` flex

## Usage

### Basic Interactive Rating

```html
&lt;div class="ease-rating"&gt;
  &lt;input type="radio" id="star5" name="rating" value="5" class="ease-rating-input"&gt;
  &lt;label for="star5" class="ease-rating-label"&gt;
    &lt;span class="ease-rating-visually-hidden"&gt;5 stars&lt;/span&gt;
  &lt;/label&gt;
  
  &lt;input type="radio" id="star4" name="rating" value="4" class="ease-rating-input"&gt;
  &lt;label for="star4" class="ease-rating-label"&gt;
    &lt;span class="ease-rating-visually-hidden"&gt;4 stars&lt;/span&gt;
  &lt;/label&gt;
  
  &lt;input type="radio" id="star3" name="rating" value="3" class="ease-rating-input"&gt;
  &lt;label for="star3" class="ease-rating-label"&gt;
    &lt;span class="ease-rating-visually-hidden"&gt;3 stars&lt;/span&gt;
  &lt;/label&gt;
  
  &lt;input type="radio" id="star2" name="rating" value="2" class="ease-rating-input"&gt;
  &lt;label for="star2" class="ease-rating-label"&gt;
    &lt;span class="ease-rating-visually-hidden"&gt;2 stars&lt;/span&gt;
  &lt;/label&gt;
  
  &lt;input type="radio" id="star1" name="rating" value="1" class="ease-rating-input"&gt;
  &lt;label for="star1" class="ease-rating-label"&gt;
    &lt;span class="ease-rating-visually-hidden"&gt;1 star&lt;/span&gt;
  &lt;/label&gt;
&lt;/div&gt;