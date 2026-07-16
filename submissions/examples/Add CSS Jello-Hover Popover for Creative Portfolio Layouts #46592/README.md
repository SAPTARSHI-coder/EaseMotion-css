# CSS Jello-Hover Popover for Creative Portfolios

A pure CSS animated popover that utilizes an exaggerated, bouncy "Jello" entrance animation triggered upon hover and focus. Designed for highly creative, Neo-brutalist portfolio layouts, this component leverages harsh borders, solid offset shadows, and vibrant colors to make a memorable impression.

## Features

- **Pure CSS Interaction**: Operates entirely without JavaScript. Uses native `:hover` and `:focus-within` pseudoclasses to guarantee the popover appears naturally when moused over or tabbed to via keyboard.
- **Neo-brutalist / Pop Art Aesthetics**: Specifically styled for modern creative portfolios. Features thick `3px` solid black borders, harsh unblurred drop shadows (`6px 6px 0px #000`), a dotted background grid, and high-saturation colors (Cyan, Hot Pink, Mint Green).
- **Accessible Design**: Fully supports keyboard navigation. It utilizes `tabindex="0"` on the wrapper and proper ARIA attributes (`role="tooltip"`, `aria-describedby`) to ensure screen readers understand the context of the appearing content.
- **Exaggerated Jello Animation**: Exposes CSS Custom Properties (`var(--ease-...)`). The jello animation (`@keyframes ease-jello-hover`) has been dialed up with a `12deg` base skew, causing it to aggressively wobble on both axes as if it were a physical block of jello snapping into place.
- **Quirky Interactive Elements**: Internal links mimic physical stamped buttons that depress (`translate(3px, 3px)`) and lose their shadow when clicked.

## Quick Start

1. Import the CSS from `style.css` into your project.
2. Structure your HTML to wrap the trigger element and the popover inside a `.popover-wrapper` container.

```html
<div class="popover-wrapper" tabindex="0">
  <!-- Trigger Element -->
  <button class="trigger-btn" aria-describedby="jello-portfolio-popover">
    Let's Connect 🪩
  </button>
  
  <!-- Popover Content -->
  <div id="jello-portfolio-popover" class="ease-jello-popover" role="tooltip">
    <div class="popover-content">
      <h2>Available for work</h2>
      <p>Content goes here.</p>
      
      <div class="social-links">
        <a href="#" class="social-btn">Twitter</a>
        <a href="#" class="social-btn">Dribbble</a>
      </div>
    </div>
  </div>
</div>
```

## Customization Parameters

The animation and styling can be fully customized by overriding the CSS variables defined in the `:root` pseudo-class.

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--ease-jello-timing` | `0.8s` | Total duration of the jello entrance animation |
| `--ease-jello-easing` | `cubic-bezier(...)` | Easing function ensuring a lively, snappy entrance |
| `--ease-jello-skew` | `12deg` | Maximum initial degree of skew applied to both axes (highly exaggerated) |
| `--ease-jello-scale-start` | `0.8` | The initial scale size before the jello bounce expands it to 100% |

## Browser Support

- Chrome, Edge, Safari, Firefox (Recent Versions)
- Inherits `Space Mono` (via Google Fonts) to reinforce the technical/creative visual aesthetic.

## Demo

Open `demo.html` in your browser to view a live, interactive showcase of the component simulating a creative portfolio's contact/availability widget.
