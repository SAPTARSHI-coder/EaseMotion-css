# Ease Flip Card

A lightweight, pure CSS 3D flip card component — no JavaScript required.
Great for pricing tiers, flashcards, profile cards, or any two-sided content.

## Usage

```html
<div class="ease-flip-card" tabindex="0">
  <div class="ease-flip-card-inner">
    <div class="ease-flip-card-front">
      <!-- front content -->
    </div>
    <div class="ease-flip-card-back">
      <!-- back content -->
    </div>
  </div>
</div>
```

## Classes

| Class                    | Purpose                                                        |
|---------------------------|-----------------------------------------------------------------|
| `.ease-flip-card`         | Outer container. Sets 3D `perspective`.                        |
| `.ease-flip-card-inner`   | Handles the `rotateY(180deg)` flip transition.                  |
| `.ease-flip-card-front`   | Front-facing content. Hidden when flipped.                     |
| `.ease-flip-card-back`    | Back-facing content. Pre-rotated 180deg, hidden until flipped.  |

## Behavior

- Flips on **hover** and on **keyboard focus** (`:focus-within`) for accessibility.
- Uses `backface-visibility: hidden` so the reverse side doesn't show through mid-flip.
- Smooth `cubic-bezier(0.4, 0.2, 0.2, 1)` easing for a natural motion feel.

## Customization

- Adjust `.ease-flip-card` width/height to resize the card.
- Change `background` colors on `.ease-flip-card-front` / `-back` to match your theme.
- Swap `rotateY` for `rotateX` if you want a vertical flip instead.