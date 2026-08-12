# CSS Skew-Active Popover for Cyberpunk Neon Layouts

A pure CSS, JavaScript-free skew-active popover component designed for cyberpunk neon layouts in EaseMotion CSS.

## Features
- **Pure CSS/HTML**: Relies entirely on the CSS "checkbox hack" to manage the active/inactive state of the popover dynamically.
- **Skew & Scale Animation**: Uses a combination of `skewX` and `scaleY` transitions, giving a sharp, fast, fold-out effect when toggled on.
- **Cyberpunk Aesthetic**: Showcases high-contrast offset `box-shadow` styles (solid instead of blurred), skewed elements, italicized aggressive fonts, and CRT scanline backgrounds.
- **Accessibility**: Includes robust `prefers-reduced-motion` fallbacks to substitute the skewing fold-out with standard opacity fades, and removes skews from elements for clearer reading.
- **Responsive**: Fully responsive and scales down elegantly on smaller viewports.

## Usage

### HTML Structure
```html
<div class="popover-wrapper">
  <!-- Checkbox logic -->
  <input type="checkbox" id="popover-toggle" class="popover-toggle-input">
  
  <!-- Trigger Button -->
  <label for="popover-toggle" class="cyber-btn">
    ENGAGE PROTOCOL
  </label>
  
  <!-- Popover Content -->
  <div class="skew-popover" role="dialog" aria-label="Protocol Status">
    <div class="popover-content">
      <h3 class="neon-title">PROTOCOL DELTA-9</h3>
      <p class="neon-text">Engagement sequence initiated.</p>
      
      <!-- Content Elements -->
      
      <label for="popover-toggle" class="close-btn">DISENGAGE</label>
    </div>
  </div>
</div>
```

### CSS Custom Properties
Easily theme the layout by tweaking these root variables:
- `--cyber-bg`: Deep background color.
- `--cyber-primary`: Primary accent color (default hot pink).
- `--cyber-secondary`: Secondary accent color (default bright cyan).
- `--popover-bg`: Popover container background.
- `--skew-speed`: The speed of the fold-out skew animation.
- `--skew-timing`: The CSS cubic-bezier timing function.

## Integration
1. Add the HTML snippet to your layout.
2. Link the `style.css` stylesheet.
3. If using multiple popovers, ensure the IDs for `popover-toggle` and their corresponding `<label for="...">` are unique per component.
