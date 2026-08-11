# Wobble-Focus Popover -- E-Commerce Checkout Example

A pure CSS popover component with a smooth "wobble-focus" entrance animation, styled for e-commerce checkout forms. Zero JavaScript is used for the animation itself -- JS only toggles visibility and manages accessibility state.

## Feature Overview

- Wobble-focus keyframe animation combining scale + rotation for a tactile, springy focus effect
- Fully keyboard accessible (aria-expanded, aria-describedby, role="tooltip", Escape-to-close)
- Customizable via CSS custom properties: duration, easing, and scale
- Responsive across desktop, tablet, and mobile
- Designed to complement checkout/payment form UI patterns

## Installation

Copy the three files into your project Open demo.html directly in a browser, or extract style.css and the popover markup into your own checkout form.

## Usage

Markup pattern:

```html
<div class="form-group popover-wrapper">
  <label for="cvv">CVV</label>
  <input type="text" id="cvv">
  <button class="info-btn" aria-describedby="cvv-popover" aria-expanded="false" data-popover-trigger>i</button>
  <div class="popover" id="cvv-popover" role="tooltip">
    <p>The 3-digit security code found on the back of your card.</p>
  </div>
</div>
```

Toggle the is-visible class on the .popover element (via JS, as shown in demo.html) to trigger the wobble-focus animation.

## Customization

All animation parameters are exposed as CSS custom properties on :root:

```css
:root {
  --wobble-duration: 0.6s;
  --wobble-easing: cubic-bezier(0.36, 0.07, 0.19, 0.97);
  --wobble-scale: 1.06;
}
```

- Speed: override --wobble-duration globally, or use the .popover--fast modifier for a snappier 0.4s variant.
- Intensity: increase --wobble-scale for a more pronounced pop, or reduce it for subtlety.
- Width: use .popover--wide for longer help text.

## Accessibility

- Popover trigger uses aria-expanded and aria-describedby to associate the button with its popover content.
- role="tooltip" identifies the popover to assistive technology.
- Escape key closes the active popover and returns focus to the trigger button.
- Animation is disabled automatically when prefers-reduced-motion: reduce is set.

## Browser Compatibility

Tested and working in Chrome, Firefox, Safari, and Edge.