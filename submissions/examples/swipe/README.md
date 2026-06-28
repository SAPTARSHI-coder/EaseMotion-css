# ease-swipe

Swipe-in slide animation from any screen edge using translateX/translateY keyframes. Zero JavaScript required.

## Usage

    <div class="ease-swipe ease-swipe-left">Slides in from left</div>
    <div class="ease-swipe ease-swipe-right">Slides in from right</div>
    <div class="ease-swipe ease-swipe-top">Slides in from top</div>
    <div class="ease-swipe ease-swipe-bottom">Slides in from bottom</div>

## Variants

| Class | Description |
|---|---|
| ease-swipe | Base swipe (defaults to left) |
| ease-swipe-left | Swipe in from left edge (100%) |
| ease-swipe-right | Swipe in from right edge (100%) |
| ease-swipe-top | Swipe in from top edge (100%) |
| ease-swipe-bottom | Swipe in from bottom edge (100%) |
| ease-swipe-sm | Subtle 40px partial swipe |
| ease-swipe-fast | 250ms duration |
| ease-swipe-slow | 900ms duration |
| ease-swipe-bounce | Spring overshoot easing |
| ease-swipe-linear | Linear easing |
| ease-delay-100 | 100ms delay |
| ease-delay-200 | 200ms delay |
| ease-delay-300 | 300ms delay |
| ease-delay-500 | 500ms delay |

## Notes

- Add overflow-x: hidden on the parent to prevent scrollbars during full-width swipes
- Combine ease-swipe-sm for subtle entrance effects on cards and list items
- Use delay variants for staggered group swipe-ins
- ease-swipe-bounce adds a satisfying spring overshoot effect

## Submission

- **Author:** sudha09-git
- **Issue:** #3867
- **Files:** style.css, demo.html
