# Pulsing Glow Status Badge

A pure-CSS infinite pulsing animation for indicator badges simulating a live radar pulse.

## How to use

1. Include the styles in your CSS:
   ```css
   @import "style.css";
   ```

2. Add the markup to your HTML:
   ```html
   <span class="status-badge status-online">
     <span class="pulse-ring"></span>
     <span class="pulse-dot"></span>
     Live
   </span>
   ```

## Design Details
- **Smooth Animation Curve:** Animates the outer ring using a custom `cubic-bezier(0.25, 0, 0, 1)` transition to mimic a natural light pulse dissipation.
- **Hardware-Accelerated Scale & Opacity:** Prevents rendering delays by strictly changing the scale transform and opacity properties.
