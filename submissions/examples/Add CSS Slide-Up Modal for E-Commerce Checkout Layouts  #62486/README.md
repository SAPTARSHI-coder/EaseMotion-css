# CSS Slide-Up Modal for E-Commerce Checkout

An ultra-premium, native-feeling "Bottom Sheet" style Slide-Up modal designed for modern e-commerce checkouts. It recreates the famous iOS 3D card-stacking effect—where the main application shrinks backward into the void as the modal slides up—entirely using pure CSS and zero JavaScript.

## Features

- **Pure CSS State Management**: Flawlessly triggers the modal and backdrop using the robust hidden checkbox trick (`input[type="checkbox"] + label`).
- **3D Card Stacking Effect**: When the modal is triggered, the background `.app-layout` utilizes `transform: scale(0.93) translateY(12px)` and adds a `border-radius`. Over a pitch-black `<body>`, this brilliantly simulates the application being pushed into the background, providing immense spatial depth.
- **Physics-Based Slide**: The modal slides up from the bottom of the screen (`transform: translateY(100%)`) using a decelerating `cubic-bezier(0.32, 0.72, 0, 1)`, perfectly mimicking native mobile friction.
- **Fluid CSS Radio Buttons**: The payment selection workflow uses `input[type="radio"]` combined with CSS pseudo-elements (`::after`) to animate the active radio circles seamlessly when clicked.
- **Accessibility Integrated**: Strictly adheres to `@media (prefers-reduced-motion: reduce)` by bypassing the complex card-stacking background scale and the modal slide entirely, replacing them with a strict, non-disorienting opacity crossfade.

## File Structure

```
Add CSS Slide-Up Modal for E-Commerce Checkout Layouts  #62486/
├── demo.html     # Semantic layout mimicking a premium iOS-style checkout screen
├── style.css     # CSS rules encapsulating the 3D shrink effect and bottom-sheet slide
└── README.md     # Documentation and usage guide (this file)
```

## How It Works

### The 3D App Layout Shrink
Instead of just dimming a backdrop, this component elevates the experience by applying a CSS `scale` transformation to the entire app wrapper. 
1. We set the `body` background to `#000` (black).
2. The main app is wrapped in `.app-layout` with a light background.
3. When the hidden `.modal-state` checkbox is checked, we target `.app-layout` using the sibling combinator `~` and shrink it.
```css
.modal-state:checked ~ .app-layout {
  transform: scale(0.93) translateY(12px);
  border-radius: 24px;
}
```
This forces the bright app interface to shrink backwards into the black void, visually making room for the Slide-Up modal.

## Custom Properties

You can customize the layout physics and colors by tweaking the CSS variables in `style.css`:

```css
:root {
  --primary: #0f172a;       /* Main text/brand color (Slate 900) */
  --accent: #3b82f6;        /* Accent color (Blue 500) */
  
  /* Decelerating friction curve for smooth slide up */
  --ease-spring: cubic-bezier(0.32, 0.72, 0, 1);
}
```

## Usage

1. Open `demo.html` in a modern browser.
2. Click the "Change" payment method button to experience the 3D-stacking Slide-Up modal effect!
