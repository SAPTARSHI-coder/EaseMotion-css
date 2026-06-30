# Animated Accordion (`ease-accordion-icon`)

A fully responsive, JS-free accordion component utilizing the modern CSS Grid trick to achieve buttery-smooth `height: auto` animations. Built for the EaseMotion-css framework.

## 🚀 Features

- **Zero JavaScript**: Powered entirely by the HTML `<input type="checkbox">` relationship combined with the CSS `:checked` pseudo-class.
- **True `height: auto` Animation**: Historically, animating to an unknown height was impossible in CSS without fixed pixel counts or max-height hacks. This component uses a nested `display: grid` wrapper transitioning from `grid-template-rows: 0fr` to `1fr` to achieve a flawless, dynamic expansion.
- **Rotating Indicator**: The chevron icon utilizes a `transform: rotate(-180deg)` powered by a bouncy `cubic-bezier` timing function to provide crisp feedback on open/close states.
- **Dual Modes**:
  - For **Multiple Open** mode, use `<input type="checkbox">`.
  - For **Single Open** mode, simply switch to `<input type="radio" name="my-accordion">`. The CSS requires absolutely zero changes.

## 🛠️ Usage

Your accordion item requires a specific 3-layer nesting structure to make the grid animation work properly.

1. The hidden input controls the state.
2. The `<label>` acts as the clickable trigger.
3. The `.ease-accordion-content-wrapper` acts as the animated CSS Grid.
4. The `.ease-accordion-content` hides the overflow during the sliding phase.

```html
<div class="ease-accordion">
  <div class="ease-accordion-item">
    <!-- State Controller -->
    <input type="checkbox" id="acc-1" class="ease-accordion-input" />

    <!-- Trigger -->
    <label for="acc-1" class="ease-accordion-header">
      Heading Title
      <svg class="ease-accordion-icon">...</svg>
    </label>

    <!-- Grid Wrapper (Animates 0fr to 1fr) -->
    <div class="ease-accordion-content-wrapper">
      <!-- Overflow Mask -->
      <div class="ease-accordion-content">
        <p>Your content here. It can be any height!</p>
      </div>
    </div>
  </div>
</div>
```
