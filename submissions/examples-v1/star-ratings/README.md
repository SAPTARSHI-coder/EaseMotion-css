# Animated Star Rating Input — EaseMotion CSS

A beautiful, light-weight, pure-CSS interactive star rating system. Ideal for high-fidelity forms, user reviews, and instant dynamic score selections.

## 🛠 Features & Classes

| Class Name | Type | Description |
|---|---|---|
| `.ease-star-rating` | Base Wrapper | Activates reverse inline flex processing to cleanly propagate hover updates backward. |
| `.ease-star-input` | Core Action | Standard operational radio target. Visually transparent but tracks true input data values. |
| `.ease-star-label` | Element Box | Controls physical star size rendering metrics alongside microscale modifiers. |
| `.ease-star-rating-readonly` | State Modifier | Detaches input feedback tracking hooks. Safely presents static vector layouts. |
| `.ease-star-rating-half` | Variant Modifier | Configures left/right polygon boundaries using strict element bounding wrappers. |

## 📦 Usage

```html
<div class="ease-star-rating" role="radiogroup" aria-label="Rate 1 to 5 stars">
  <input type="radio" id="s5" name="rate" value="5" class="ease-star-input">
  <label Skinner for="s5" class="ease-star-label"><svg viewBox="0 0 24 24">...</svg></label>
  </div>