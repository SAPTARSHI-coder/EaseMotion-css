# CSS Ripple-Wave Tabs for Cyberpunk Neon Layouts

A pure CSS tabbed interface featuring a ripple-wave animation and a cyberpunk neon aesthetic for EaseMotion CSS.

## Features
- **Pure CSS/HTML**: Uses the CSS "radio hack" to handle active tab states without any JavaScript.
- **Ripple-Wave Animation**: Triggers a smooth radial-gradient ripple effect inside the tab content when switching tabs.
- **Animated Slider**: Includes a highlighted bottom border that slides dynamically between active tabs.
- **Cyberpunk Aesthetic**: Showcases glowing borders, neon text styles, dashed highlights, and a dark tech-focused color palette.
- **Accessibility**: Includes `prefers-reduced-motion` support which elegantly disables the ripples and slides in favor of instant transitions.
- **Responsive Context**: Adapts padding and font sizes gracefully for mobile screens.

## Usage

### HTML Structure
```html
<div class="tabs-wrapper">
  <!-- Radio Inputs (Hidden) -->
  <input type="radio" name="cyber-tabs" id="tab-1" class="tab-input" checked>
  <input type="radio" name="cyber-tabs" id="tab-2" class="tab-input">
  
  <!-- Tab Headers -->
  <div class="tab-headers">
    <label for="tab-1" class="tab-label">SYSTEM</label>
    <label for="tab-2" class="tab-label">NETWORK</label>
    <div class="tab-slider"></div>
  </div>
  
  <!-- Tab Contents -->
  <div class="tab-content-container">
    <div class="tab-content content-1">
      <div class="ripple-wave"></div>
      <h3 class="neon-title">SYSTEM DIAGNOSTICS</h3>
      <p class="neon-text">Content here...</p>
    </div>
    <!-- Add other contents corresponding to the tabs -->
  </div>
</div>
```

### CSS Custom Properties
Tweak the cyber visuals by adjusting these root variables:
- `--cyber-bg`: The outer background color.
- `--cyber-panel`: The background of the tab container.
- `--cyber-primary`: Neon primary color (default green/teal).
- `--cyber-secondary`: Hover and secondary accent color (default cyan/blue).
- `--transition-speed`: Global transition timings.

## Integration
1. Drop the HTML snippet into your layout. You can add more tabs by adding matching radio inputs, labels, and content divs.
2. Ensure the `width` of the `.tab-slider` is updated if you change the number of tabs (e.g., `width: 25%` for 4 tabs, `width: 50%` for 2 tabs).
3. Update the slider `transform: translateX(...)` logic in the CSS based on your number of tabs.
