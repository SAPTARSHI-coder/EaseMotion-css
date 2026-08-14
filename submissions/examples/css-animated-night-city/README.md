# CSS Animated Night City

What does this do?
This component renders a responsive silhouette of a city skyline with animated, twinkling lit windows entirely using CSS.

How is it used?
Include the HTML structure containing `.night-city`, `.skyline`, `.building`, and `.window` classes, and link the accompanying `style.css`.

```html
<div class="night-city" role="img" aria-label="Silhouette of a city skyline with animated lit windows">
  <div class="sky">
    <div class="moon"></div>
    <div class="stars"></div>
  </div>
  <div class="skyline">
    <div class="building b1">
      <div class="window"></div>
      <!-- Add more windows as needed -->
    </div>
    <!-- Add more buildings -->
  </div>
</div>
```

Why is it useful?
It provides a visually appealing, lightweight background or banner element without relying on JavaScript or heavy image assets, fitting EaseMotion's philosophy of pure CSS UI patterns.
