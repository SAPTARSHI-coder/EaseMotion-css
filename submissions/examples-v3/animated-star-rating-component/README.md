# Animated Star Rating Component

A reusable EaseMotion CSS example demonstrating a pure CSS-first star rating component with hover preview, keyboard-accessible selection, and read-only display variants.

## What this adds

- `.ease-rating` — interactive star rating using hidden radio inputs
- `.ease-rating-readonly` — display-only star rating with fractional fill
- `.ease-rating-sm`, `.ease-rating-lg`, `.ease-rating-xl` — size variants
- keyboard and screen reader friendly interaction
- responsive layout and lightweight styling

## Usage

```html
<link rel="stylesheet" href="style.css" />
<form class="ease-rating">
  <input type="radio" id="rating5" name="rating" value="5" />
  <label for="rating5">★</label>
  <input type="radio" id="rating4" name="rating" value="4" />
  <label for="rating4">★</label>
  <input type="radio" id="rating3" name="rating" value="3" />
  <label for="rating3">★</label>
  <input type="radio" id="rating2" name="rating" value="2" />
  <label for="rating2">★</label>
  <input type="radio" id="rating1" name="rating" value="1" />
  <label for="rating1">★</label>
</form>
```

## Demo

Open `submissions/examples/animated-star-rating-component/demo.html` in your browser to preview the component.
