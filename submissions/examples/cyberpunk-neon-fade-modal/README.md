# Cyberpunk Neon Fade-In Modal

**Category:** Component — Interactions  
**Type:** Pure CSS  
**Folder:** `submissions/examples/cyberpunk-neon-fade-modal/`

---

## Overview

The Cyberpunk Neon Fade-In Modal is a responsive, keyboard-accessible pure CSS modal designed specifically for Cyberpunk Neon and futuristic HUD interface layouts, running on zero JavaScript overhead.

When activated, the page dims under a grid-patterned overlay with animated scanlines, while the modal card—constructed with sharp angled corner cuts, bright neon borders, and back-glow filters—scales up and slides smoothly into focus. Extensive CSS variables allow for granular adjustment of glowing radii, animations, text, and theme colors.

The component uses a pure CSS **Focus-Restoring URL-Hash Redirect** to return keyboard outline focus back to the triggering element on close.

---

## Features

- **Pure CSS Layout** — zero JavaScript required for all visual transitions, triggers, and close behaviors.
- **Cyberpunk HUD Aesthetics** — futuristic HUD panel design featuring sharp angled corner clips, gradient neon borders, and blurred glow shadows.
- **Backdrop scanlines** — decorative scanlines overlay in the background backdrop matching classic cyber-grid terminal designs.
- **Focus Restoration** — closing the modal (backdrop clicks or close buttons) redirects browser navigation focus back to the triggering button.
- **Configurable Custom Properties** = modular variables control glow spread, timings, initial scale, vertical translate offset, and border thickness.
- **A11y Compliant** — includes standard dialog accessibility tags (`role="dialog"`, `aria-modal="true"`), high-contrast outlines, and full screen-reader styling.
- **Reduced Motion** — automatically cancels scale transforms, background animations, and glow filters under `prefers-reduced-motion: reduce`.

---

## File Structure

```
submissions/examples/cyberpunk-neon-fade-modal/
├── demo.html      — Standalone demo page showing Cyan/Magenta themes and interactive knobs
├── style.css      — Raw styling of modal elements, keyframes, transitions, and clip paths
└── README.md      — This documentation
```

---

## Usage

### Minimal HTML Structure

```html
<!-- 1. The Trigger Button -->
<a href="#modal-id" id="trigger-id" class="btn-cyber-launch">
  Initialize Protocol
</a>

<!-- 2. The Modal Container (Targeted by Hash) -->
<div id="modal-id" class="cyber-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-body">
  
  <!-- Backdrop redirecting to trigger ID for focus restoration -->
  <a href="#trigger-id" class="cyber-modal-backdrop" aria-hidden="true" tabindex="-1"></a>
  
  <!-- Content Wrapper -->
  <div class="cyber-modal-content-wrapper" tabindex="-1">
    
    <!-- Neon blur glow panel backdrop -->
    <div class="cyber-modal-content-glow"></div>
    
    <!-- Main Clipped Content Card -->
    <div class="cyber-modal-content">
      
      <!-- Header with Title and Close Button -->
      <div class="cyber-modal-header">
        <h2 id="modal-title" class="cyber-modal-title">PROTOCOL_INIT</h2>
        <a href="#trigger-id" class="cyber-modal-close" aria-label="Close modal">&times;</a>
      </div>
      
      <!-- Body Text -->
      <p id="modal-body" class="cyber-modal-body">
        Connecting to mainframe...
        <span class="cyber-modal-body-meta">System Status // Active</span>
      </p>
      
      <!-- Footer with Action Buttons -->
      <div class="cyber-modal-footer">
        <a href="#trigger-id" class="btn-cyber btn-cyber-abort">Abort</a>
        <a href="#trigger-id" class="btn-cyber btn-cyber-action">Accept</a>
      </div>
      
    </div>
  </div>
</div>
```

---

## How It Works

### CSS Target Mechanism
Visual entry is triggered by the CSS `:target` pseudo-class. The container transitions between hidden and open states using `opacity` and `visibility`:

```css
.cyber-modal {
  opacity: 0;
  visibility: hidden;
}

.cyber-modal:target {
  opacity: 1;
  visibility: visible;
}
```

The internal content wrapper scales up and slides from a vertical offset (`translateY`) when targeted:

```css
.cyber-modal-content-wrapper {
  transform: scale(0.92) translateY(30px);
  opacity: 0;
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.cyber-modal:target .cyber-modal-content-wrapper {
  transform: scale(1) translateY(0);
  opacity: 1;
}
```

### Keyboard Focus Restoration
To ensure keyboard accessibility without JavaScript, all modal closing targets (the backdrop link, close "x" button, and cancel buttons) point to the triggering element's ID:
```html
<a href="#trigger-id" class="cyber-modal-close">&times;</a>
```

When activated by keypress or mouse, this navigation redirects the targeted URL hash to `#trigger-id`. The browser then:
1. Closes the modal (removing `:target` state).
2. Directs outline focus back to the triggering button (`#trigger-id`), preserving tabbing continuity for keyboard users.

---

## Customization

All HUD parameters and colors are customizable using CSS custom properties:

| CSS Custom Property | Default Value | Description |
|---|---|---|
| `--cyber-modal-duration` | `0.4s` | Animation transition duration |
| `--cyber-modal-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Deci-spring smooth decel easing curve |
| `--cyber-modal-scale-start` | `0.92` | Scale offset factor on entrance |
| `--cyber-modal-translate-y-start` | `30px` | Translation height offset on entrance |
| `--cyber-modal-backdrop-bg` | `rgba(3, 5, 10, 0.75)` | Dark overlay background mask color |
| `--cyber-modal-bg-color` | `#050811` | Carbon dark card surface background |
| `--cyber-modal-glow-color` | `#00f0ff` | Primary neon border highlight (Cyan) |
| `--cyber-modal-accent-color` | `#ff0055` | Secondary neon accent border (Magenta/Pink) |
| `--cyber-modal-accent-yellow` | `#fdee30` | Title bullet and focus indicator (Yellow) |
| `--cyber-modal-text-color` | `#c3cedc` | Body paragraphs color |
| `--cyber-modal-title-color` | `#ffffff` | Title heading text color |
| `--cyber-modal-glow-spread` | `20px` | Blur radius of the neon back-glow |
| `--cyber-modal-border-width` | `2px` | Clipped card double-border thickness |
| `--cyber-scanline-opacity` | `0.12` | Overlay scanline opacity inside backdrop |

### Customizing Theme Colors
Override `--cyber-modal-glow-color` or `--cyber-modal-accent-color` inline on the modal tag to change color schemes (e.g. for warning modals, info modals):

```html
<div id="warning-modal" class="cyber-modal" style="--cyber-modal-glow-color: #ffaa00; --cyber-modal-accent-color: #ff5500;">
  ...
</div>
```

---

## Browser Support

| Browser | Version | Notes |
|---|---|---|
| Chrome / Edge | 72+ | Full support |
| Firefox | 68+ | Full support (scanlines overlay uses vertical grid gradients) |
| Safari | 10+ | Full support |
| iOS Safari | 10+ | Full support |
| Samsung Internet | 11+ | Full support |

---

## Why This Effect Is Useful

Cyberpunk layouts emphasize high-tech HUD configurations, visual glitch details, and bright neon signals. Creating these rich layouts usually requires heavy JS UI libraries, introducing script parsing and layout delays.

This pure CSS cyberpunk modal delivers a high-fidelity visual experience in less than 3KB of CSS:
1. **Performance** — handles visual transitions directly in the browser's render thread, keeping HUD components performant and fluid.
2. **Highly Scalable Design** — standard CSS variables allow teams to swap color profiles dynamically, adapting to status logs or critical warnings.
3. **Accessibility First** — features custom focus styling, focus redirection, semantic role variables, and a quick reduced-motion override.

---

## License

Submitted under the same license as the EaseMotion CSS repository.
