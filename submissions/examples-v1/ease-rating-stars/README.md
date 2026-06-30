# Animated Rating Stars (`ease-rating-stars`)

An interactive, pure-CSS 5-star rating selector with smooth hover transitions and bouncy scale animations. Built for the EaseMotion-css framework.

## 🚀 Features

- **Pure CSS Logic**: Utilizes the "Right-To-Left Sibling Trick" to apply cascading styles without any Javascript logic.
- **Dynamic Fill State**: Automatically changes SVG properties (`fill` and `stroke`) simultaneously when hovered or checked.
- **Bouncy Feedback**: When a rating is clicked, the selected stars scale up using a `cubic-bezier` timing function, giving the user an immediate and satisfying tactile response.

## 🛠️ Usage

To use this component, you **must** arrange the HTML backwards (from 5 down to 1). The `flex-direction: row-reverse;` on the wrapper visually flips them back to standard 1-to-5 order, allowing the CSS `~` sibling selector to correctly target stars to the left.

```html
<div class="ease-rating-stars">
  <!-- Reverse Order is Mandatory! -->
  <input type="radio" id="star5" name="rating" value="5" class="ease-rating-input" />
  <label for="star5" class="ease-rating-label">
    <svg>...</svg>
  </label>

  <!-- Repeat down to star 1 -->
</div>
