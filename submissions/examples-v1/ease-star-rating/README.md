# ease-star-rating

`ease-star-rating` is a five-star rating display that previews a gold rating as a user hovers over each star.

## Available classes

- `ease-star-rating`: Creates the flex container and spacing between the stars.
- `ease-star`: Styles an individual star and animates its color and scale.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<div class="ease-star-rating" aria-label="Five-star rating">
  <span class="ease-star">&#9733;</span>
  <span class="ease-star">&#9733;</span>
  <span class="ease-star">&#9733;</span>
  <span class="ease-star">&#9733;</span>
  <span class="ease-star">&#9733;</span>
</div>
```

## Hover effect

Hovering anywhere over the rating temporarily turns all five stars gold. Hovering an individual star keeps that star and the preceding stars gold, resets the following stars to slate, and scales the hovered star for an animated rating preview.
