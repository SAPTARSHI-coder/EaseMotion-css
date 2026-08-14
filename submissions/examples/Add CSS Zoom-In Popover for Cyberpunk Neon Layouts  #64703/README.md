# CSS Zoom-In Popover for Cyberpunk Neon Layouts

A pure CSS zoom-in popover component designed for cyberpunk neon interfaces in EaseMotion CSS.

## Features
- **Pure CSS/HTML**: Showcases interaction using the robust HTML checkbox hack for popover state management, eliminating the need for JavaScript.
- **Zoom Animation**: Applies a dramatic, spring-like zoom-in effect using a custom `cubic-bezier` timing function attached to `transform: scale()`.
- **Cyberpunk Aesthetic**: Packed with neon glowing borders, dashed rotating decorative elements, a grid-based stat display, and clipping path buttons.
- **Accessibility**: Includes `prefers-reduced-motion` fallbacks which override the `scale()` animation with accessible, straight opacity transitions.
- **Responsive Context**: Adjusts its internal stat grid cleanly for mobile screens.

## Usage

### HTML Structure
```html
<div class="popover-wrapper">
  <!-- Checkbox logic -->
  <input type="checkbox" id="zoom-toggle" class="popover-toggle-input">
  
  <!-- Trigger Button -->
  <label for="zoom-toggle" class="cyber-btn">
    INITIATE UPLINK
  </label>
  
  <!-- Popover Content -->
  <div class="zoom-popover" role="dialog" aria-label="Uplink Interface">
    <div class="popover-content">
      <div class="neon-ring"></div>
      <h3 class="neon-title">UPLINK CONNECTED</h3>
      <p class="neon-text">Content here...</p>
      
      <!-- Grid Cells -->
      
      <label for="zoom-toggle" class="close-btn">TERMINATE</label>
    </div>
  </div>
</div>
```

### CSS Custom Properties
Tweak the cyber visuals by adjusting these root variables:
- `--cyber-bg`: Page background color.
- `--cyber-primary`: Core accent color (default bright neon green).
- `--cyber-secondary`: Secondary accent color (default cyan-blue).
- `--cyber-accent`: Action/warning color for close buttons (default red).
- `--popover-bg`: Popover container background.
- `--zoom-speed`: Transition time for the scale-in reveal (e.g., `0.4s`).
- `--zoom-timing`: Timing function curve dictating the spring-like effect.

## Integration
1. Drop the HTML snippet wrapper into your interface.
2. Link the `style.css` stylesheet or adapt its variables to match your global cyberpunk design system.
