# Zoom-In Popover (Cyberpunk Neon)

### 1. What does this do?

A pure CSS interactive popover component designed with a futuristic Cyberpunk Neon aesthetic that materializes using a smooth, configurable zoom-in scale transition when hovered or focused.

### 2. How is it used?

Wrap the trigger element and the popover element in a container with the class `.em-cyber-popover-wrapper`, styling them using `.em-cyber-popover-trigger` and `.em-cyber-popover`:

```html
<div class="em-cyber-popover-wrapper">
  <button
    class="em-cyber-popover-trigger"
    aria-haspopup="dialog"
    aria-expanded="false"
  >
    Access Node
  </button>

  <div
    class="em-cyber-popover"
    role="dialog"
    aria-labelledby="popover-heading"
    aria-describedby="popover-desc"
  >
    <div class="em-cyber-popover-header">
      <h2 class="em-cyber-popover-title" id="popover-heading">Dossier 09-B</h2>
      <span class="em-cyber-popover-status">Encrypted</span>
    </div>

    <p class="em-cyber-popover-body" id="popover-desc">
      System details and diagnostics data stream.
    </p>

    <button class="em-cyber-popover-btn" type="button">Decrypt Stream</button>
  </div>
</div>
```

Include the CSS variables in the wrapper class to override defaults if necessary:

```css
.my-custom-popover {
  --em-popover-scale-from: 0.5;
  --em-popover-duration: 200ms;
  --em-popover-cyan: #00ff66; /* Customize theme primary */
}
```

### 3. Why is it useful?

It provides a completely JavaScript-free, highly performant interactive popover solution. It fits EaseMotion's philosophy by using standard CSS properties (`transform`, `opacity`, `visibility`) rather than layout-shifting hacks, and delivers premium, motion-rich visual aesthetics that remain responsive and highly accessible out of the box.

---

## Technical Details

### Folder Structure

```
submissions/examples/zoom-in-popover-cyberpunk-neon-ag/
├── demo.html    # Standalone component demonstration
├── style.css    # Scoped cyberpunk neon styles & transition definitions
└── README.md    # Documentation and usage guide
```

### Customization via CSS Variables

The component exposes the following variables to customize style and motion behavior:

| Variable                     | Description                                   | Default                             |
| ---------------------------- | --------------------------------------------- | ----------------------------------- |
| `--em-popover-scale-from`    | The starting scale factor of the popover zoom | `0.3`                               |
| `--em-popover-duration`      | Timing duration of the zoom transition        | `250ms`                             |
| `--em-popover-ease-in`       | Spring overshoot curve used during zoom-in    | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `--em-popover-ease-out`      | Shrink curve used when popover collapses      | `cubic-bezier(0.25, 1, 0.5, 1)`     |
| `--em-popover-bg`            | Background color of the popover card          | `rgba(10, 5, 24, 0.96)`             |
| `--em-popover-cyan`          | Color used for neon cyan highlights           | `#00f7ff`                           |
| `--em-popover-magenta`       | Color used for neon magenta highlights        | `#ff00d4`                           |
| `--em-popover-border-radius` | Border radius of the trigger and popover      | `4px`                               |

### Accessibility Notes

- **Keyboard Navigation**: Uses `:focus-within` on the wrapper, allowing keyboard users to tab to the trigger to open the popover, and then tab _into_ the popover's buttons/links without the popover collapsing prematurely.
- **ARIA Semantics**: Implements `role="dialog"`, `aria-haspopup="dialog"`, `aria-labelledby`, and `aria-describedby` matching the trigger to ensure screen readers announce popover contents appropriately.
- **Reduced Motion**: Disables spring scale transitions and transforms under `prefers-reduced-motion: reduce`, instantly showing the popover to prevent motion sickness.
- **High Contrast Mode**: Targets system colors using the `@media (forced-colors: active)` media query to fall back to legible system colors on high-contrast systems.

### Responsive Behavior

- Avoids viewport overflow and layout breaks on narrow screen viewports using responsive max-widths and relative calculations.
- Layout remains fully stable and optimized on screen widths down to 320px.
