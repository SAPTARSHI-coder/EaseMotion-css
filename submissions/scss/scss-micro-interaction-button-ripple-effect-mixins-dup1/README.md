# SCSS Utility: Micro-Interaction Button Ripple Effect Mixins (#28424)

A highly satisfying micro-interaction SCSS module for the EaseMotion CSS framework that adds CSS-only ripple bursts to buttons when clicked, heavily inspired by Material Design but built entirely without JavaScript.

## 📦 What's included?

- `_micro-interaction-button-ripple-effect-mixins.scss`: The SCSS partial containing the pseudo-element scaling math and animation keyframes.
- `style.css`: The compiled output of the mixins.
- `demo.html`: An interactive demo showing light and dark ripple variants.

## 🛠 Usage via SCSS Mixins

Import the partial and include the mixin on any interactive element (buttons, cards, links).

```scss
@import 'micro-interaction-button-ripple-effect-mixins';

.my-submit-button {
  // Setup your button as usual
  background-color: #10b981;
  color: white;
  border-radius: 8px;
  
  // @include ease-button-ripple($ripple-color, $duration);
  // Default is a white 40% opacity ripple taking 0.6s
  @include ease-button-ripple();
}

.my-cancel-button {
  background-color: #e2e8f0;
  color: #0f172a;
  
  // Use the dark variant for light backgrounds
  @include ease-button-ripple-dark();
}
```

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled, simply add the classes to your `<button>` elements.

```html
<!-- Applies a primary blue button with a white ripple -->
<button class="ease-ripple-light">Save Changes</button>

<!-- Applies a light gray button with a dark ripple -->
<button class="ease-ripple-dark">Cancel</button>
```

## 🚀 Why this fits EaseMotion

The **EaseMotion** philosophy is about providing satisfying, tactile feedback to users. When a user clicks a button, a sudden, harsh state change can feel jarring. The "Ripple" effect is the gold standard for click-feedback, confirming the interaction immediately while gracefully resolving the animation. 

Historically, this effect required JavaScript to calculate the exact X and Y coordinates of the mouse click to center the ripple. This mixin provides a brilliant **CSS-only alternative** utilizing the `:active` pseudo-class and a perfectly centered `::after` pseudo-element that bursts outward, achieving 95% of the visual satisfaction with 0% of the JavaScript overhead.
