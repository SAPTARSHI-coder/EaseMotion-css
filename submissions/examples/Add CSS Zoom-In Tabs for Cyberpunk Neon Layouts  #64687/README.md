# CSS Zoom-In Tabs for Cyberpunk Neon Layouts

A pure CSS tabbed interface utilizing a smooth, spring-like zoom-in transition designed for cyberpunk neon layouts in EaseMotion CSS.

## Features
- **Pure CSS/HTML**: Relies entirely on the "radio hack" (`<input type="radio">` and `~` sibling selectors) to switch active tabs without requiring JavaScript.
- **Zoom-In Animation**: The active tab contents utilize a snappy `cubic-bezier` timing function attached to `transform: scale()` to pop into view.
- **Animated Background Slider**: Includes an underlying gradient highlight that slides smoothly behind the active tab headers.
- **Cyberpunk Aesthetic**: Features neon cyan and pink color combinations, monospace fonts, tech grid overlays, and sharp, angular borders.
- **Accessibility**: Includes `prefers-reduced-motion` settings which override the scale and slider animations in favor of simple, accessible opacity transitions.
- **Responsive Context**: Automatically drops decorative icons and resizes padding on smaller mobile screens to maintain a clean layout.

## Usage

### HTML Structure
```html
<div class="zoom-tabs-wrapper">
  <!-- Radio Inputs (Hidden) -->
  <input type="radio" name="cyber-tabs" id="tab-1" class="tab-input" checked>
  <input type="radio" name="cyber-tabs" id="tab-2" class="tab-input">
  
  <!-- Tab Headers -->
  <div class="tab-headers">
    <label for="tab-1" class="tab-label">OVERVIEW</label>
    <label for="tab-2" class="tab-label">MODULES</label>
    <div class="glow-indicator"></div>
  </div>
  
  <!-- Tab Contents -->
  <div class="tab-content-container">
    <div class="tab-content content-1">
      <div class="zoom-box">
        <h3 class="neon-title">SYSTEM OVERVIEW</h3>
        <p class="neon-text">Content here...</p>
      </div>
    </div>
    <!-- Additional tab contents correspond to the radio inputs -->
  </div>
</div>
```

### CSS Custom Properties
Tweak the cyber visuals by adjusting these root variables:
- `--cyber-bg`: Page background color.
- `--cyber-panel`: Background color of the tab interface block.
- `--cyber-primary`: Core accent color (default bright neon cyan).
- `--cyber-secondary`: Secondary accent color (default hot pink).
- `--transition-speed`: Timing for both the tab sliding indicator and the content zoom reveal.
- `--zoom-timing`: Timing function curve determining the spring-like bounce of the zoom.

## Integration
1. Drop the HTML snippet into your layout. 
2. Adjust the width of `.glow-indicator` depending on your tab count (e.g. `33.333%` for 3, `50%` for 2 tabs).
3. Update the `.glow-indicator` translation steps accordingly in the CSS.
