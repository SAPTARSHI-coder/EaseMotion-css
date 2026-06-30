# Expandable Card (`ease-card-expand`)

A purely CSS-powered expandable card component utilizing the hidden checkbox technique to trigger a smooth fullscreen modal transition. Built for the EaseMotion-css framework.

## 🚀 Features

- **Zero JavaScript**: Entirely reliant on the HTML `<label>` and `<input type="checkbox">` relationship combined with the CSS `:checked` pseudo-class.
- **Backdrop Blur**: Includes an animated dark backdrop behind the expanded card that supports clicking to dismiss.
- **Hardware Accelerated**: The pop-out effect utilizes `transform: scale()` and `transform: translateY()` driven by a bouncy `cubic-bezier` timing function to ensure 60fps smoothness.
- **Multiple Triggers**: The close button (×) and the background backdrop are both bound to the same hidden checkbox, allowing multiple intuitive ways for the user to close the card.

## 🛠️ Usage

Ensure your trigger card, your hidden checkbox, and your expanded modal are all siblings within the DOM structure.

```html
<!-- 1. The Controller -->
<input type="checkbox" id="my-card-toggle" class="ease-card-input" />

<!-- 2. The Trigger (Small Card) -->
<label for="my-card-toggle" class="ease-card-thumb">
  <h3>Click me!</h3>
</label>

<!-- 3. The Expanded View -->
<div class="ease-card-expanded">
  <!-- Clicking this closes the card -->
  <label for="my-card-toggle" class="ease-card-backdrop"></label>

  <div class="ease-card-content">
    <!-- Clicking this closes the card -->
    <label for="my-card-toggle" class="ease-card-close">×</label>
    <h2>Expanded Content</h2>
  </div>
</div>
```
