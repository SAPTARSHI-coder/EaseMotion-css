# CSS Rotate-Fade Tabs for Cyberpunk Neon Layouts

A pure CSS tabbed interface utilizing a 3D rotate-fade transition designed for cyberpunk neon layouts in EaseMotion CSS.

## Features
- **Pure CSS/HTML**: Utilizes the robust CSS "radio hack" (`<input type="radio">` coupled with `~` sibling selectors) to switch active tabs without requiring any JavaScript.
- **3D Rotate-Fade Animation**: Applies `perspective` to the container and smoothly transitions the content from a folded `rotateX(-90deg)` state to flat `rotateX(0deg)` using a snappy `cubic-bezier`.
- **Holographic Styling**: The active tab contents feature a pseudo-element scanline animation mimicking a holographic display.
- **Cyberpunk Aesthetic**: Neon cyan and purple highlights, blurred backdrop filters, grid backgrounds, and tech-oriented fonts.
- **Accessibility**: Includes robust `prefers-reduced-motion` fallbacks to substitute the 3D rotating and continuous scanning animations with standard accessible opacity fades.
- **Responsive Context**: Flexibly scales and adjusts its internal grid structures for narrower mobile devices.

## Usage

### HTML Structure
```html
<div class="rotate-tabs-wrapper">
  <!-- Radio Inputs (Hidden) -->
  <input type="radio" name="cyber-tabs" id="tab-1" class="tab-input" checked>
  <input type="radio" name="cyber-tabs" id="tab-2" class="tab-input">
  
  <!-- Tab Headers -->
  <div class="tab-headers">
    <label for="tab-1" class="tab-label">ARMORY</label>
    <label for="tab-2" class="tab-label">CYBERWARE</label>
    <div class="glow-indicator"></div>
  </div>
  
  <!-- Tab Contents -->
  <div class="tab-content-container">
    <div class="tab-content content-1">
      <div class="hologram-box">
        <h3 class="neon-title">PLASMA RIFLE V-7</h3>
        <p class="neon-text">Description...</p>
      </div>
    </div>
    <!-- Additional tab contents correspond to the radio inputs -->
  </div>
</div>
```

### CSS Custom Properties
Tweak the cyber visuals by adjusting these root variables:
- `--cyber-bg`: Page background.
- `--cyber-panel`: Background color of the tab interface (supports rgba for blur).
- `--cyber-primary`: Core accent color (default bright purple).
- `--cyber-secondary`: Secondary accent color (default bright cyan).
- `--transition-speed`: Timing for the rotate fade and slider animation.
- `--rotate-angle`: The initial angle for the inactive tabs (default `-90deg`).

## Integration
1. Drop the HTML snippet into your layout. 
2. Make sure the width of `.glow-indicator` matches your tab count (e.g. `33.333%` for 3, `50%` for 2).
3. Link the `style.css` stylesheet.
