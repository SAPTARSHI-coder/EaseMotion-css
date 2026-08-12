# 3D Cylindrical Ferris Wheel Card Carousel

## What does this do?

This component implements a vertical revolving 3D card carousel where cards are arranged along the perimeter of a virtual cylinder (like a Ferris wheel). The cylinder rotates continuously along the X-axis (`rotateX`), and each card content layer applies a counter-rotation keyframe animation. This cancels out the cylinder's rotation locally, keeping all card contents upright and facing the viewer directly throughout the entire 3D revolution.

## How is it used?

Apply the `.carousel-stage` and `.carousel-cylinder` classes to your container wrappers, then position each `.card-slot` child along the X-axis circumference by setting its rotation and Z-translation:

```html
<div class="carousel-stage">
  <div class="carousel-cylinder">
    <!-- Slot 1 (0deg) -->
    <div class="card-slot slot-1">
      <div class="card-content">
        <!-- Content details -->
      </div>
    </div>

    <!-- Slot 2 (45deg) -->
    <div class="card-slot slot-2">
      <div class="card-content">
        <!-- Content details -->
      </div>
    </div>
  </div>
</div>
```

```css
/* Circumference Placement */
.slot-1 {
  transform: rotateX(0deg) translateZ(280px);
}
.slot-2 {
  transform: rotateX(45deg) translateZ(280px);
}
```

## Why is it useful?

Arranging cards in a revolving 3D space usually results in text becoming upside down, skewed, or completely unreadable as elements turn away from the viewer.

Key architectural advantages of this pure CSS approach:

- **Mathematical Counter-Rotation**: In nested 3D coordinate spaces, rotation and translations are calculated cumulatively. By applying a counter-rotation (`rotateX(-t - A_c)`) to the card content layer that matches the cylinder's rotation (`rotateX(t)`), we cancel the cylinder's rotation locally. This allows the cards to revolve in space while staying perfectly upright.
- **DRY Staggered Animation Synchronization**: Leverages a single `counter-spin` animation and a single `depth-fade` animation applied to all cards. They are synchronized with the cylinder's rotation speed by using negative `animation-delay` tokens calculated using the card's slot angle:
  `animation-delay: - (Angle / 360) * Duration;`
- **Dynamic Z-Depth Filtering**: Incorporates keyframes that dynamically reduce opacity and apply a blur filter (`filter: blur(...)`) to cards when their computed Z position is furthest from the screen (during the background phase of the loop). Cards scale up and achieve full focus as they approach the foreground.
- **Interactivity and Control**: Pauses the entire 3D rotation timeline smoothly upon hovering the stage (`animation-play-state: paused`), allowing the user to click links or read text.
- **Accessibility Friendly**: Detects user motion preferences via `@media (prefers-reduced-motion: reduce)`. When set, it disables 3D rotations and perspective, flattening the cards into a responsive grid instead.

## Tech Stack

- HTML5
- CSS3 (3D Transforms, CSS Perspective, Preserve-3d, Staggered keyframe delays, A11y Media Queries)

## Preview

Open `demo.html` directly in any modern web browser to view the revolving carousel.

## Contribution Notes

- Class naming was handled by the contributor (`pp`).
- Maintainer will rename classes to standard `ease-*` conventions (e.g. `.ease-3d-stage`, `.ease-ferris-card`) and match colors to standard design system values on merge.
