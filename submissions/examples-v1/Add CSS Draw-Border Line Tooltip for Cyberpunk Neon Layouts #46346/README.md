# CSS Draw-Border Line Tooltip for Cyberpunk Neon Layouts

A pure CSS tooltip component featuring a high-octane "Draw-Border Line" animation, styled for Cyberpunk/Sci-Fi Neon interfaces. It uses intense SVG drop-shadows to create a glowing laser effect tracing the perimeter of the tooltip.

## Features
- **Pure CSS**: Zero JavaScript required for the tooltip display, the glowing border animation, or the scanline effects.
- **Draw-Border Animation**: Utilizes an SVG `rect` with `pathLength="100"`. The `stroke-dashoffset` is animated from 100 to 0. Crucially, the stroke has multiple `drop-shadow` filters applied, creating a vibrant neon glow as it draws around the box.
- **Cyberpunk Aesthetic**: Features clipped corners (`clip-path`) on triggers, harsh contrast, monospaced typography (`Share Tech Mono`), and a CSS keyframe animated scanline inside the tooltip content to mimic a retro-futuristic HUD.
- **Entrance Easing**: Uses `steps(3, end)` for the tooltip entrance transition to create a slightly choppy, "digital glitch" materialization effect.
- **Responsive & Accessible**: Fully usable via keyboard tabbing utilizing `:focus-within`.
- **Custom Properties**: Easily tweak the neon colors via variables such as `--cyber-neon-danger`, `--cyber-neon-info`, and adjust speeds via `--draw-duration`.

## Usage

Include the `easemotion.css` framework and the local `style.css`. The animation relies on standard CSS transitions combined with `@starting-style` for the entrance, and heavily filtered SVG stroke properties for the glowing border tracing effect.

```html
<div class="tooltip-container">
  <!-- Cyberpunk Trigger Button -->
  <button class="cyber-trigger danger" aria-describedby="tooltip-cyber-1">
    WARN_SYS_01
    <div class="cyber-decor"></div>
  </button>
  
  <!-- Tooltip Wrapper -->
  <div class="tooltip-wrapper" id="tooltip-cyber-1" role="tooltip">
    <div class="tooltip-box">
      <!-- SVG for the glowing draw-border effect -->
      <svg class="tooltip-border-svg" aria-hidden="true" width="100%" height="100%">
        <rect x="0" y="0" width="100%" height="100%" pathLength="100" />
      </svg>
      
      <div class="tooltip-text">
        <!-- Text Content -->
        <!-- Optional Scanline Overlay -->
        <div class="scanline"></div>
      </div>
    </div>
  </div>
</div>
```
