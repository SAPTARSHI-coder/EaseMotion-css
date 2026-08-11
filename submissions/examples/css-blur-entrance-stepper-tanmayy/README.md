# CSS Blur-Entrance Stepper

A pure-CSS animated stepper/wizard component utilizing a Blur-Entrance interaction aesthetic, designed specifically for Minimalist Tech layouts (e.g., SaaS onboarding or platform setup flows). It features smooth `filter: blur()` and opacity transitions, creating a soft, premium feel without relying on JavaScript.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a fully functional multi-step wizard. As a user progresses through the steps (e.g., clicking "Continue"), the current panel fades out and blurs, while the new panel fades in and unblurs (`filter: blur(12px)` to `blur(0)`). The navigation indicators at the top also automatically update their active states based on the current step.

### 2. How is it used?

The component relies on a pure CSS radio-button hack for state management. The hidden `.stepper-radio` inputs control both the visual state of the top navigation indicators and the visibility of the absolute-positioned `.stepper-panel` elements. The buttons inside the panels (like "Continue" or "Back") are actually HTML `<label>` elements linked to the respective radio button's `id`.

```html
<!-- Example: Stepper Layout -->
<div class="stepper-container">
  
  <!-- Hidden Radio State Controllers -->
  <input type="radio" name="stepper_control" id="step-1" checked>
  <input type="radio" name="stepper_control" id="step-2">
  
  <!-- Navigation Indicators -->
  <div class="stepper-nav">
    <div class="nav-step step-1-indicator">...</div>
    <div class="nav-step step-2-indicator">...</div>
  </div>
  
  <!-- Stepper Panels -->
  <div class="stepper-panels">
    
    <div class="stepper-panel panel-1">
      <!-- Content -->
      <label for="step-2" class="btn btn-primary">Continue</label>
    </div>
    
    <div class="stepper-panel panel-2">
      <!-- Content -->
      <label for="step-1" class="btn btn-secondary">Back</label>
    </div>
    
  </div>
  
</div>
```

**Customization via CSS Properties:**
You can adjust the animation physics via root variables:

```css
:root {
  --stepper-transition-duration: 0.5s;
  --stepper-transition-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
}
```

### 3. Why is it useful?

In complex SaaS applications, breaking forms down into multi-step wizards drastically reduces cognitive load. However, standard JS-driven steppers can feel rigid if animations aren't perfectly tuned. By utilizing the CSS `filter: blur()` property during the transition, you achieve a highly polished, "macOS-like" aesthetic that feels incredibly smooth. Managing the state entirely through CSS radio buttons ensures zero JavaScript execution overhead, providing an instantly responsive UI that gracefully degrades for users with `prefers-reduced-motion` enabled.
