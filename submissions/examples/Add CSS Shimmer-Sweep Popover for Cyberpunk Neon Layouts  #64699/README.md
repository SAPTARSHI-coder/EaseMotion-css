# CSS Shimmer-Sweep Popover for Cyberpunk Neon Layouts

A pure CSS shimmer-sweep popover component crafted for cyberpunk neon designs in EaseMotion CSS.

## Features
- **Pure CSS/HTML**: Showcases interaction using `:hover` and `:focus-within` to present the popover seamlessly without JavaScript.
- **Sweep Reveal**: Utilizes a snappy `clip-path: inset()` transition that sweeps the popover content into view horizontally.
- **Continuous Shimmer**: Features an endless, delayed gradient sweep keyframe animation (`@keyframes sweepShimmer`) that mimics light scanning across the popover box.
- **Cyberpunk Aesthetic**: Detailed with bright neon borders, dynamic clipped button edges, strong contrasts, and a futuristic font theme.
- **Accessibility**: Includes `prefers-reduced-motion` fallbacks to substitute sweeping and shimmering with simple, accessible fades.
- **Responsive Context**: Smartly positions the popover to the right on desktop, and cleanly stacks below the trigger on mobile constraints.

## Usage

### HTML Structure
```html
<div class="popover-wrapper">
  <!-- Trigger Element -->
  <button class="cyber-btn" aria-haspopup="dialog" aria-expanded="false">
    DECRYPT LOGS
  </button>
  
  <!-- Popover Content -->
  <div class="shimmer-popover" role="dialog" aria-label="Decrypted Logs">
    <div class="shimmer-effect"></div>
    <div class="popover-content">
      <h3 class="neon-title">CLASSIFIED ARCHIVE</h3>
      <p class="neon-text">Logs decrypted successfully.</p>
    </div>
  </div>
</div>
```

### CSS Custom Properties
Tweak the cyber visuals by adjusting these root variables:
- `--cyber-bg`: The dark space background.
- `--cyber-primary`: Neon cyan base color.
- `--cyber-secondary`: Hot pink accent for hovers and highlights.
- `--cyber-accent`: Yellow highlights for bold text data.
- `--popover-bg`: The popover's semi-transparent container base.
- `--sweep-speed`: Transition time for the `clip-path` reveal (e.g., `0.5s`).
- `--shimmer-speed`: Keyframe duration for the scanning light gradient (e.g., `2s`).

## Integration
1. Inject the HTML wrapper around your interface actions.
2. Link `style.css` and customize it to match your global cyberpunk styling system.
