# CSS Swing-Hover Popover for SaaS Showcases

A pure CSS animated popover featuring a smooth swing-hover interaction transition. Designed for modern SaaS interfaces, this component uses premium glassmorphism aesthetics and provides full keyboard accessibility.

## Features

- **Pure CSS**: No JavaScript required for the interaction or animation. Uses `:hover` and `:focus-within` for seamless interactions.
- **SaaS Aesthetics**: Glassmorphism effect with dark mode-ready gradients, blur, and subtle box shadows to create a premium feel.
- **Accessible**: Works seamlessly with keyboard navigation (via `focus-within`) and uses proper ARIA attributes.
- **Customizable**: Exposes CSS Custom Properties (`var(--ease-...)`) to easily control timing, easing, and swing rotation angle.
- **Responsive**: Adjusts smoothly to prevent overflow on smaller mobile screens.

## Quick Start

1. Include the CSS from `style.css` into your project.
2. Structure your HTML to wrap the trigger element and the popover inside a `.popover-wrapper` container.

```html
<div class="popover-wrapper" tabindex="0">
  <!-- Trigger Element -->
  <button class="trigger-btn" aria-describedby="popover-content">
    Hover or Focus Me
  </button>
  
  <!-- Popover Content -->
  <div id="popover-content" class="ease-swing-popover" role="tooltip">
    <div class="popover-content">
      <h3>Title</h3>
      <p>Content goes here.</p>
    </div>
  </div>
</div>
```

## Customization Parameters

The animation and styling can be fully customized by overriding the CSS variables defined in the `:root` pseudo-class.

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--ease-swing-timing` | `0.8s` | Total duration of the swing animation |
| `--ease-swing-easing` | `cubic-bezier(...)` | Easing function (default adds a slight bounce/back effect) |
| `--ease-swing-origin` | `bottom center` | Transform origin of the popover (where it swings from) |
| `--ease-swing-rotation` | `12deg` | Maximum rotation angle during the swing sequence |
| `--ease-swing-scale` | `0.9` | Starting scale of the popover before it swings in |

## Browser Support

- Chrome, Edge, Safari, Firefox (Recent Versions)
- Supports Backdrop Filter for the glassmorphism effect (includes `-webkit-` prefixes where necessary).

## Demo

Open `demo.html` in your browser to see a live showcase of the component in action.
