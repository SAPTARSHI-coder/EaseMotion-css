# CSS Wobble on Click

A playful button component that executes a full "wobble" animation immediately after being clicked, built entirely without JavaScript.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript event listeners. 
- **The Trigger Trick**: Standard CSS `:active` animations stop abruptly the moment the mouse is released. This component uses the `:focus:not(:active)` selector trick to reset the animation state during the click (`:active`), and perfectly trigger the full `wobble` keyframe sequence the moment the mouse is released (`:focus`).
- **Keyboard Friendly**: Because the animation is tied to the `:focus` state, it acts as an immediate, delightful visual cue when a user tabs to the button via keyboard navigation.
- **Accessible**: Functions as a semantic `<button>` with clear hover and focus states. Respects user preferences by gracefully disabling the transform wobble animations and active scaling via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML button directly into your layout. 

```html
<button type="button" class="wobble-btn">
  Click Me
</button>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--btn-bg`: Background color of the button (default: `#8b5cf6`)
- `--btn-hover`: Hover state color (default: `#7c3aed`)
- `--btn-active`: Pressed state color (default: `#6d28d9`)
- `--shadow-color`: The ambient drop shadow color (default: `rgba(139, 92, 246, 0.4)`)

## Browser Support
Works flawlessly in all modern browsers (Chrome, Firefox, Safari, Edge). The `:focus:not(:active)` pseudo-class combination is standard CSS behavior supported universally.
