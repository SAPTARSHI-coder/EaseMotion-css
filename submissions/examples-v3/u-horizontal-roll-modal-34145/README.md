# Horizontal Roll Modal (Neumorphic Soft Layout)

**Category:** Component — Soft UI  
**Type:** Pure CSS  
**Folder:** `submissions/examples/u-horizontal-roll-modal-34145/`

---

## Overview

The Horizontal Roll Modal is a responsive, keyboard-accessible pure CSS modal designed for neumorphic interfaces using a smooth horizontal roll entrance animation with zero JavaScript.

The component combines soft UI shadows with a left-to-right rolling transition using CSS transforms, perspective and configurable motion variables. A blurred backdrop and subtle depth effects create a polished user experience.

It also preserves keyboard accessibility through URL hash navigation, ensuring focus returns to the triggering control when the modal closes.

---

## Features

- **Pure CSS Overlay** — zero JavaScript required for all visual triggers, close mechanisms, and animations.
- **Soft UI Bevels** — soft neumorphic layout using double box-shadow offsets and convex surface rendering.
- **Tactile Micro-Interactions** — round close buttons and primary links transition from raised (convex) to pressed (concave inset) states on hover/click.
- **Focus Restoration** — closing the modal redirects the browser target back to the trigger button, restoring keyboard tabbing flow.
- **Configurable Custom Properties** — simple CSS variables control offset scales, timings, base surface colors, shadows, and inset highlights.
- **A11y Compliant** — includes standard dialog accessibility tags (`role="dialog"`, `aria-modal="true"`), high-contrast outlines, and visible focus indicator states.
- **Horizontal Roll Animation** — modal enters from the left using perspective, translateX and rotateY transforms.
- **Reduced Motion** — automatically disables rolling animation for users who prefer reduced motion.

---

## File Structure

```
submissions/examples/u-horizontal-roll-modal-34145/
├── demo.html      — Standalone demo page showing light and dark themes and interactive sliders
├── style.css      — Raw styling of Neumorphic shadows, button states, transitions, and overlays
└── README.md      — This documentation
```

---

## Usage

### Minimal HTML Structure

```html
<!-- 1. The Trigger Button -->
<a href="#modal-id" id="trigger-id" class="btn-soft-trigger">
  Launch Modal
</a>

<!-- 2. The Modal Container (Targeted by Hash) -->
<div id="modal-id" class="soft-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-body">
  
  <!-- Backdrop redirecting to trigger ID for focus restoration -->
  <a href="#trigger-id" class="soft-modal-backdrop" aria-hidden="true" tabindex="-1"></a>
  
  <!-- Content Wrapper -->
  <div class="soft-modal-content" tabindex="-1">
    
    <!-- Header with Title and Close Button -->
    <div class="soft-modal-header">
      <h2 id="modal-title" class="soft-modal-title">Tactile Surface</h2>
      <a href="#trigger-id" class="soft-modal-close" aria-label="Close modal">&times;</a>
    </div>
    
    <!-- Body Text -->
    <p id="modal-body" class="soft-modal-body">
      Content text goes here...
    </p>
    
    <!-- Footer with Action Buttons -->
    <div class="soft-modal-footer">
      <a href="#trigger-id" class="btn-soft">Cancel</a>
      <a href="#trigger-id" class="btn-soft btn-soft-primary">Confirm</a>
    </div>
    
  </div>
</div>
```

---

## How It Works

### CSS Target Mechanism
Visual entry is triggered by the CSS `:target` pseudo-class. The container transitions between hidden and open states using `opacity` and `visibility`:

```css
.soft-modal {
  opacity: 0;
  visibility: hidden;
}

.soft-modal:target {
  opacity: 1;
  visibility: visible;
}
```

The internal content wrapper performs a horizontal roll entrance using `translateX`, `rotateY`, `perspective` and `scale` when the modal is targeted:

```css
.soft-modal-content {
  transform:
    perspective(1200px)
    translateX(-320px)
    rotateY(-28deg)
    scale(.88);
  opacity: 0;
}

.soft-modal:target .soft-modal-content {
  transform:
    perspective(1200px)
    translateX(0)
    rotateY(0deg)
    scale(1);
  opacity: 1;
}
```

### Keyboard Focus Restoration
To ensure keyboard accessibility without JavaScript, all modal closing targets (the backdrop link, close "x" button, and cancel buttons) point to the triggering element's ID:
```html
<a href="#trigger-id" class="soft-modal-close">&times;</a>
```

When activated by keypress or mouse, this navigation redirects the targeted URL hash to `#trigger-id`. The browser then:
1. Closes the modal (removing `:target` state).
2. Directs outline focus back to the triggering button (`#trigger-id`), preserving tabbing continuity for keyboard users.

---

## Customization

All Neumorphic parameters and colors are customizable using CSS custom properties:

| CSS Custom Property | Default Value | Description |
|---|---|---|
| `--soft-modal-duration` | `0.42s` | Transition fade/scale timing |
| `--soft-modal-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decel ease-out curve |
| `--soft-modal-scale-start` | `0.96` | Starting scale factor of modal content |
| `--soft-modal-translate-x-start` | `-320px` | Starting horizontal roll distance |
| `--soft-modal-rotate-start` | `-28deg` | Starting horizontal roll angle |
| `--soft-modal-backdrop-bg` | `rgba(224, 232, 246, 0.45)` | Backdrop mask color and overlay opacity |
| `--soft-modal-backdrop-blur` | `5px` | Backdrop filter blur radius |
| `--soft-modal-bg-color` | `#e0e8f6` | Neumorphic surface base color |
| `--soft-modal-shadow-dark` | `10px 10px 24px rgba(163, 177, 198, 0.65)` | Primary dark shadow (bottom-right offset) |
| `--soft-modal-shadow-light` | `-10px -10px 24px rgba(255, 255, 255, 0.85)` | Primary light shadow (top-left offset) |
| `--soft-modal-shadow-inset-dark` | `inset 3px 3px 6px rgba(163, 177, 198, 0.55)` | Bevel inset dark shadow (pressed states) |
| `--soft-modal-shadow-inset-light` | `inset -3px -3px 6px rgba(255, 255, 255, 0.85)` | Bevel inset light shadow (pressed states) |
| `--soft-modal-text-color` | `#4b5563` | Paragraphs/body text color |
| `--soft-modal-text-muted` | `#8292b0` | Close icon and secondary labels color |
| `--soft-modal-title-color` | `#1f2937` | Title heading text color |
| `--soft-modal-accent` | `#6c63ff` | Focus outline and active link highlights |

### Customizing Dark Theme
Add the `.soft-modal-dark` modifier class to change variables for dark soft layouts:

```html
<div id="modal-dark" class="soft-modal soft-modal-dark" role="dialog" aria-modal="true">
  ...
</div>
```

---

## Browser Support

| Browser | Version | Notes |
|---|---|---|
| Chrome / Edge | 70+ | Full support |
| Firefox | 68+ | Full support |
| Safari | 9+ | Full support |
| iOS Safari | 9+ | Full support |
| Samsung Internet | 10+ | Full support |

---

## Why This Effect Is Useful

The Horizontal Roll Modal combines neumorphic styling with a smooth rolling entrance to guide user attention while preserving accessibility and responsive behavior. This component achieves visual depth at less than 3KB of raw CSS code:
1. **Zero Bundle Bloat** — visual triggers are handled by the browser's native target rendering, avoiding hydration delays.
2. **Dynamic Customization** — CSS custom properties allow designers to swap base surface tokens inline to dynamically adapt components to themes.
3. **Accessibility Integrated** — focus restoration redirect, clear tab indexes, visible focus outlines, and full reduced-motion configurations are baked into the layout.

---

## License

Submitted under the same license as the EaseMotion CSS repository.
