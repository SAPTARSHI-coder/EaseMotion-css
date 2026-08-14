# CSS Glitch-Flicker Tabs for Cyberpunk Neon Layouts

A pure CSS tabbed component that implements intense glitch and flicker animations designed for cyberpunk neon layouts in EaseMotion CSS.

## Features
- **Pure CSS/HTML**: Relies entirely on the "radio hack" (`<input type="radio">` and `~` sibling combinators) to switch active tabs without requiring JavaScript.
- **Flicker Animation**: The active tab header features a custom `@keyframes` opacity flicker animation, simulating a malfunctioning neon tube.
- **Content Entrance Glitch**: Tab contents violently shake and glitch into place when loaded, powered by a fast, aggressive keyframe transform animation.
- **Continuous Text Glitch**: Titles feature an advanced `clip-path` text duplication technique using `::before` and `::after` pseudo-elements that constantly slice and offset the title text.
- **Cyberpunk Aesthetic**: High contrast colors, raw CRT scanline backgrounds, and bold monospace typography.
- **Accessibility**: Includes `prefers-reduced-motion` support which elegantly falls back by removing all rapid shaking, clipping, and flickering, showing only clean static text when enabled.
- **Responsive Context**: Cleanly scales for mobile interfaces without breaking the layout.

## Usage

### HTML Structure
```html
<div class="glitch-tabs-wrapper">
  <!-- Radio Inputs (Hidden) -->
  <input type="radio" name="cyber-tabs" id="tab-1" class="tab-input" checked>
  <input type="radio" name="cyber-tabs" id="tab-2" class="tab-input">
  
  <!-- Tab Headers -->
  <div class="tab-headers">
    <label for="tab-1" class="tab-label">OVERRIDE</label>
    <label for="tab-2" class="tab-label">DATABANKS</label>
  </div>
  
  <!-- Tab Contents -->
  <div class="tab-content-container">
    <div class="tab-content content-1">
      <div class="glitch-effect-box">
        <!-- Must include data-text attribute matching the text for the clip-path glitch to work -->
        <h3 class="neon-title" data-text="SYSTEM OVERRIDE">SYSTEM OVERRIDE</h3>
        <p class="neon-text">Content here...</p>
      </div>
    </div>
    <!-- Additional tab contents correspond to the radio inputs -->
  </div>
</div>
```

### CSS Custom Properties
Tweak the cyber visuals by adjusting these root variables:
- `--cyber-bg`: Page background.
- `--cyber-panel`: Background color of the tab interface.
- `--cyber-primary`: Core accent color (default bright yellow).
- `--cyber-secondary`: Secondary accent color (default cyan).
- `--cyber-accent`: Tertiary accent color for red-shift glitching (default hot pink).

## Integration
1. Inject the HTML into your page. Note that the `data-text` attribute on the `.neon-title` elements is **required** for the continuous text glitch effect to function correctly.
2. Link the `style.css` stylesheet to apply all layout handling and keyframe animations.
