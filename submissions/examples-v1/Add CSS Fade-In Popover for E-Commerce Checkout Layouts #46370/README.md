# CSS Fade-In Popover for E-Commerce Checkout Layouts

A pure CSS popover implementation specifically tailored for E-Commerce Checkout interfaces, demonstrating a smooth fade-in animation using modern CSS transitions and `@starting-style`.

## Features
- **Pure CSS**: Zero JavaScript required for the interaction or animation.
- **Smooth Fade-In**: Utilizes CSS transitions mapping to EaseMotion tokens with a slight scale effect for an elegant entrance.
- **E-Commerce Aesthetic**: Styled to fit seamlessly within a checkout flow (e.g., entering promo codes).
- **Responsive**: Adapts to its container size seamlessly.
- **Keyboard Accessible**: Leverages `:focus-within` to remain open and accessible when navigating via keyboard.
- **Customizable**: Exposes custom parameters (`--popover-fade-duration`, `--popover-fade-easing`, `--popover-scale-start`) to easily tweak the motion feel.

## Usage

Include the `easemotion.css` framework and the local `style.css`. The animation relies on standard CSS transitions combined with the new CSS `@starting-style` rule for animating elements from `display: none`.

```html
<div class="popover-container">
  <button class="promo-trigger" aria-expanded="false" aria-controls="promo-popover">Add Promo Code</button>
  
  <div class="popover-wrapper" id="promo-popover" role="dialog" aria-label="Promo Code Entry">
    <div class="popover-content">
      <!-- Popover Content Goes Here -->
    </div>
  </div>
</div>
```
