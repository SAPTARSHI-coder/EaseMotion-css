# Confetti Toggle Switch (#41922)

### 1. What does this do?
This is a modern, dark-mode toggle switch component that launches a colorful radial burst of confetti particles from the sliding toggle thumb when flipped to the active (ON) state.

### 2. How is it used?
Integrate this component into any layout utilizing pure HTML semantic structures with zero script configuration:

```html
<div class="toggle-wrapper">
  <input type="checkbox" id="my-toggle" class="confetti-checkbox">
  <label for="my-toggle" class="toggle-track">
    <div class="toggle-thumb">
      <span class="particle" style="--tx: -30px; --ty: -30px; --bg: #ff007f;"></span>
    </div>
  </label>
</div>