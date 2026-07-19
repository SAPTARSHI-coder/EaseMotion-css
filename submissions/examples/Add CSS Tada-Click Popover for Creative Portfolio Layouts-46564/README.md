# CSS Tada-Click Popover for Creative Portfolios

A pure CSS animated popover designed with a highly energetic "Tada" entrance animation triggered upon click/focus. Perfectly stylized for Creative Portfolios, this component embraces modern Neo-brutalist aesthetics: hard edges, bold thick borders, solid unblurred shadows, and vibrant contrasting colors.

## Features

- **Pure CSS Interaction**: No JavaScript required. Uses the native `:focus-within` pseudoclass for a seamless, accessible click-to-open and click-off-to-close interaction.
- **Neo-brutalist Aesthetics**: Breaks away from soft SaaS UI with stark 3px black borders, solid harsh drop shadows (`6px 6px 0px #000000`), and quirky hover translations (`transform: translate(-2px, -2px)`).
- **Accessible Design**: Fully supports native keyboard navigation. Users can Tab to the trigger button and press Enter or Space to reveal the popover. Built with semantic tags and proper ARIA attributes (`role="dialog"`, `aria-labelledby`).
- **Exaggerated Animations**: Exposes CSS Custom Properties (`var(--ease-...)`). By default, the Tada effect is highly exaggerated (`6deg` rotation, `1.15` scale growth) to perfectly match the playful and bold nature of creative portfolios.
- **Fully Responsive**: Scales cleanly on mobile viewports without breaking the harsh structural layout.

## Quick Start

1. Import the CSS from `style.css` into your project.
2. Structure your HTML to wrap the trigger element and the popover inside a `.popover-wrapper` container.

```html
<div class="popover-wrapper">
  <!-- Trigger Element -->
  <button class="trigger-btn" aria-describedby="creative-popover-content">
    Say Hello 👋
  </button>
  
  <!-- Popover Content -->
  <div id="creative-popover-content" class="ease-tada-popover" role="dialog">
    <div class="popover-content">
      <h2 id="popover-title">Let's collaborate!</h2>
      <p>I'm currently available for freelance design & engineering projects.</p>
      <a href="#" class="action-link">hello@creative.co</a>
    </div>
  </div>
</div>
```

## Customization Parameters

The animation and styling can be fully customized by overriding the CSS variables defined in the `:root` pseudo-class.

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--ease-tada-timing` | `0.75s` | Total duration of the tada entrance animation |
| `--ease-tada-easing` | `cubic-bezier(...)` | Easing function ensuring a bouncy entrance |
| `--ease-tada-rotation` | `6deg` | Maximum rotation angle (exaggerated for playful portfolios) |
| `--ease-tada-scale-shrink` | `0.9` | Scale factor during the initial anticipation phase |
| `--ease-tada-scale-grow` | `1.15` | Scale factor during the emphasis phase of the tada |

## Browser Support

- Chrome, Edge, Safari, Firefox (Recent Versions)
- Inherits `Space Grotesk` (via Google Fonts) combined with system fonts for a distinct geometric feel.

## Demo

Open `demo.html` in your browser to view a live, interactive showcase of the component.
