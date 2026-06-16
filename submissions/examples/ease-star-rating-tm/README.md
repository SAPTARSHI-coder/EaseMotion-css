# Animated Star Rating Component

## What does this do?
An animated star rating component using the CSS radio-button hack for interaction. Features smooth fill animations when hovering and selecting stars, with support for hover preview, read-only display, and half-star rendering.

## How is it used?
Interactive (clickable) stars using the radio hack:

    <div class="ease-stars" role="radiogroup" aria-label="Rate this product">
      <label class="ease-star-label">
        <input type="radio" name="rating" value="5" class="ease-star-input">
        <span class="ease-star">&#9733;</span>
      </label>
      <label class="ease-star-label">
        <input type="radio" name="rating" value="4" class="ease-star-input">
        <span class="ease-star">&#9733;</span>
      </label>
      <!-- ... more stars ... -->
    </div>

For read-only display use `.ease-stars-readonly` on the container and add `.ease-star-filled` classes manually. Use `.ease-stars-lg` for larger stars.

## Why is it useful?
Star ratings are one of the most common UI patterns for product reviews, feedback forms, and content rating systems. The animated fill effect provides immediate visual feedback and makes the rating process feel responsive and enjoyable.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to interact with the star rating component.

## Contribution Notes
- Uses the CSS radio-button hack (`:checked ~ label .ease-star`) for selecting stars without JavaScript
- Hover preview fills all stars up to and including the hovered one using `:hover ~ label` sibling selectors
- Smooth fill animation using `color` and `transform: scale()` transitions
- Half-star support using CSS gradient on `.ease-star-half`
- Reduced-motion safe: stars snap to state instantly when `prefers-reduced-motion: reduce`
