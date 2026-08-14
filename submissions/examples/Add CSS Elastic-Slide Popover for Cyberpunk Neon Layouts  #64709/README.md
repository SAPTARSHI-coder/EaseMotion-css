# CSS Elastic-Slide Popover for Cyberpunk Neon Layouts

A fully pure CSS, JavaScript-free elastic slide popover featuring a cyberpunk neon aesthetic for EaseMotion CSS.

## Features
- **Pure CSS/HTML**: No JavaScript required, utilizing the robust "checkbox hack" for state management.
- **Elastic Animation**: Uses a custom `cubic-bezier` timing function to create a smooth, elastic pop effect.
- **Cyberpunk Aesthetic**: Features neon colors, glowing box-shadows, clipped corners (`clip-path`), and grid backgrounds.
- **Accessibility**: Includes `prefers-reduced-motion` support for sensitive users, falling back to simple fades.
- **Responsive**: Adapts gracefully to mobile and desktop viewports.

## Usage

### HTML Structure
```html
<div class="popover-wrapper">
  <!-- Checkbox logic -->
  <input type="checkbox" id="popover-toggle" class="popover-toggle-input">
  
  <!-- Trigger Button -->
  <label for="popover-toggle" class="cyber-btn">
    INITIATE UPLINK
  </label>
  
  <!-- Popover Content -->
  <div class="elastic-popover" role="dialog" aria-label="Uplink Information">
    <div class="popover-content">
      <h3 class="neon-title">SYSTEM STATUS: ONLINE</h3>
      <p class="neon-text">Connection established.</p>
      <label for="popover-toggle" class="close-btn" aria-label="Close popover">ABORT</label>
    </div>
  </div>
</div>
```

### CSS Custom Properties
Easily theme the layout by tweaking these root variables:
- `--cyber-bg`: Background color.
- `--cyber-primary`: Primary neon color (default cyan).
- `--cyber-secondary`: Secondary neon color (default magenta).
- `--cyber-accent`: Accent color for warnings or close actions (default red/pink).
- `--popover-bg`: Popover background with opacity.
- `--transition-speed`: Global speed for the popover entrance.
- `--elastic-timing`: The `cubic-bezier` function dictating the elastic bounce effect.

## Integration
1. Drop the HTML snippet into your project.
2. Link the `style.css` stylesheet or merge it into your main CSS.
3. Ensure the IDs for the input and labels match if creating multiple popovers on a single page.
