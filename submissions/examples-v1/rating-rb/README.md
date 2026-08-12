# Star Rating Component

A pure CSS star rating system with interactive selection and read-only display modes. No JavaScript required.

## Files

- `demo.html` — Live preview with interactive, display, size, and dark mode variants
- `style.css` — All rating styles, animations, and layout helpers

## How It Works

### Interactive Rating
Uses hidden radio buttons inside a `flex-direction: row-reverse` container. The `~` general sibling selector highlights the hovered/checked star and all stars to its left visually.

```html
&lt;fieldset class="rating"&gt;
  &lt;input type="radio" id="star5" name="rating" value="5" /&gt;
  &lt;label for="star5"&gt;&lt;div class="star"&gt;&lt;/div&gt;&lt;/label&gt;
  &lt;!-- ... repeat for 4, 3, 2, 1 --&gt;
&lt;/fieldset&gt;