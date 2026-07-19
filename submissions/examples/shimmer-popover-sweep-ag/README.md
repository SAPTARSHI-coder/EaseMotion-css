# Shimmer Sweep Popover Component

A pure CSS interactive Popover component utilizing a smooth Shimmer Sweep entrance and interaction transition, styled to complement modern SaaS interface aesthetics.

> Submission track: `submissions/examples/shimmer-popover-sweep-ag/`  
> Contributor suffix: `-ag`

---

## Features

- **Native Popover API Integration**: No Javascript overhead for triggering, closing, light dismiss, or `Escape` key handling.
- **High-Performance Shimmer Sweep**: Pure GPU-accelerated CSS pseudo-element animation that plays once on entry and resets on card hover/focus.
- **Modern SaaS Aesthetics**: Styled with a semi-transparent charcoal background, subtle blur, thin borders, and optional glow overlays.
- **Exposed CSS Variables**: Full control over animation timing, sweep angles, widths, scaling, and color highlights.
- **Progressive Enhancement Placement**: Utilizes CSS Anchor Positioning to cleanly align menus and tooltips beneath buttons, falling back to viewport overlays in non-supporting browsers.
- **Keyboard & Screen Reader Accessible**: Correct focus management, keyboard closing, and ARIA attributes state toggling.
- **Reduced Motion Support**: Detects `prefers-reduced-motion: reduce` to disable translations, transitions, and scales.

---

## How to Use

1. Include the stylesheet:
```html
<link rel="stylesheet" href="style.css">
```

2. Create a basic Popover structure:
```html
<!-- Trigger Button -->
<button id="my-trigger" popovertarget="my-popover" aria-haspopup="true" aria-expanded="false">
  Trigger Popover
</button>

<!-- Popover Box -->
<div id="my-popover" popover="auto" class="shimmer-popover">
  <div class="shimmer-popover-card">
    <h3>Title</h3>
    <p>Content goes here.</p>
  </div>
</div>
```

3. Position the popover dynamically next to the trigger via CSS Anchor positioning:
```css
#my-trigger {
  anchor-name: --my-trigger;
}

#my-popover {
  position-anchor: --my-trigger;
  top: anchor(--my-trigger bottom);
  left: anchor(--my-trigger center);
  transform: translateX(-50%) translateY(8px);
}
```

---

## Exposed Custom CSS Properties

Customize the popover behaviors by adjusting the following variables in your stylesheet or inline:

| Variable | Description | Default Value |
|---|---|---|
| `--shimmer-color` | Highlight glow color of the sweep | `rgba(255, 255, 255, 0.12)` |
| `--shimmer-angle` | Angle of the linear gradient beam | `115deg` |
| `--shimmer-width` | Width of the shimmer beam | `60%` |
| `--shimmer-duration` | Time duration for the sweep sweep to complete | `1.1s` |
| `--shimmer-delay` | Opening delay before the shimmer sweep begins | `0.05s` |
| `--shimmer-easing` | Easing curve of the sweep and scale animations | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--shimmer-scale-start` | Initial scale when opening | `0.96` |
| `--shimmer-scale-end` | Final scale when open | `1` |
| `--shimmer-fade-duration` | Speed of fade in/out | `0.22s` |
| `--shimmer-popover-bg` | Background of the popover card | `#18181b` |
| `--shimmer-popover-border`| Border style of the popover card | `rgba(255, 255, 255, 0.08)` |

### Example Inline Customization:
```html
<div id="my-popover" popover="auto" class="shimmer-popover"
     style="--shimmer-duration: 2s; --shimmer-color: rgba(99, 102, 241, 0.25);">
  ...
</div>
```

---

## File Structure

- `demo.html`: Premium demo page featuring Tooltip, Action Dropdown, and Modal Dialog cards with parameter tuner inputs.
- `style.css`: Layout classes, SaaS design system, animations, media queries, and focus resets.
- `README.md`: This reference manual.
