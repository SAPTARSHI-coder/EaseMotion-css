# CSS Scale-Hover Popover for Cyberpunk Neon Layouts

A pure CSS, JavaScript-free scale-hover popover component designed for cyberpunk neon layouts in EaseMotion CSS.

## Features
- **Pure CSS/HTML**: Uses `:hover` and `:focus-within` pseudo-classes to display the popover without any JavaScript.
- **Scale Animation**: Utilizes a dynamic `cubic-bezier` transition that scales the popover into view from its bottom center origin.
- **Cyberpunk Aesthetic**: Showcases glowing borders, backdrop filters (blur), neon text shadows, and a subtle scanline grid background.
- **Accessibility**: Includes `prefers-reduced-motion` to fall back to simple opacity fades.
- **Responsive**: Fully responsive and works smoothly across devices. (Note: Hover effects behave dynamically based on touch events on mobile).

## Usage

### HTML Structure
```html
<div class="popover-wrapper">
  <!-- Trigger Element -->
  <button class="cyber-btn" aria-haspopup="dialog" aria-expanded="false">
    ACCESS DATA
  </button>
  
  <!-- Popover Content -->
  <div class="scale-popover" role="dialog" aria-label="Data Information">
    <div class="popover-content">
      <h3 class="neon-title">DATA LINK: SECURE</h3>
      <p class="neon-text">Encrypted payload retrieved successfully.</p>
    </div>
  </div>
</div>
```

### CSS Custom Properties
Customize the visual theme using these variables at the top of the stylesheet:
- `--cyber-bg`: Deep dark background color.
- `--cyber-primary`: Primary color (default cyan/teal).
- `--cyber-secondary`: Secondary accent (default magenta).
- `--popover-bg`: Semi-transparent background for the popover (supports backdrop-filter).
- `--transition-speed`: Animation duration (e.g., `0.4s`).
- `--hover-timing`: Custom bezier curve for the pop scale effect.

## Integration
1. Drop the HTML snippet where you need a popover trigger.
2. Link the `style.css` stylesheet or integrate its variables and classes into your CSS architecture.
