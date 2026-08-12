# Glassmorphism Fade-In Modal

**Category:** Component — Interactions  
**Type:** Pure CSS  
**Folder:** `submissions/examples/glassmorphism-fade-modal/`

---

## Overview

The Glassmorphism Fade-In Modal is a fully responsive, keyboard-accessible pure CSS modal featuring frosted-glass panels and backdrop blurs, running on zero JavaScript overhead.

When triggered, the background blurs and dims into a dark ambient wash while the modal content card smoothly scales up and slides into view. Custom properties allow complete configuration over timing, easing, scale factor, overlay color, glass opacity, and blur intensity.

The modal implements a pure CSS **Focus-Restoring URL-Hash Redirect** technique to ensure that when a keyboard user closes the modal, the keyboard focus returns to the element that triggered it.

---

## Features

- **Pure CSS Overlay** — zero JavaScript required for all visual transitions and open/close interactions.
- **Frosted Glass Panel** — premium glassmorphism styling utilizing `backdrop-filter`, multi-layer translucent borders, and subtle inner glows.
- **Focus Restoration** — clicking the backdrop or close button returns focus to the triggering element using URL-hash navigation.
- **Configurable Tokens** — extensive CSS variables for timing, easing, backdrop blur, scale offset, and text/theme colors.
- **Light Theme Variant** — includes a `.glass-modal-light` modifier class for light, high-contrast layouts.
- **A11y Optimized** — supports standard dialog attributes (`role="dialog"`, `aria-modal="true"`), visible focus indicators, and custom styles.
- **Reduced Motion** — automatically disables transforms and transitions when `prefers-reduced-motion: reduce` is enabled.

---

## File Structure

```
submissions/examples/glassmorphism-fade-modal/
├── demo.html      — Isolated demo containing dark/light variants and configurator controls
├── style.css      — Raw styling containing transitions, variables, layouts, and accessibility
└── README.md      — This documentation
```

---

## Usage

### Minimal HTML Structure

```html
<!-- 1. The Trigger Button -->
<a href="#modal-id" id="trigger-id" class="btn">
  Open Modal
</a>

<!-- 2. The Modal Container (Targeted by Hash) -->
<div id="modal-id" class="glass-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-body">
  
  <!-- Backdrop redirecting to trigger ID for focus restoration -->
  <a href="#trigger-id" class="glass-modal-backdrop" aria-hidden="true" tabindex="-1"></a>
  
  <!-- Modal Content Box -->
  <div class="glass-modal-content" tabindex="-1">
    
    <!-- Header with Title and Close Button -->
    <div class="glass-modal-header">
      <h2 id="modal-title" class="glass-modal-title">Modal Title</h2>
      <a href="#trigger-id" class="glass-modal-close" aria-label="Close modal">&times;</a>
    </div>
    
    <!-- Body Content -->
    <p id="modal-body" class="glass-modal-body">
      Your content goes here...
    </p>
    
    <!-- Footer with Action Buttons -->
    <div class="glass-modal-footer">
      <a href="#trigger-id" class="btn btn-secondary">Cancel</a>
      <a href="#trigger-id" class="btn btn-primary">Confirm</a>
    </div>
    
  </div>
</div>
```

---

## How It Works

### CSS Target Mechanism
The modal is triggered using the CSS `:target` pseudo-class. The container is hidden by default:

```css
.glass-modal {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
```

When the user clicks the trigger, the URL hash updates to matching ID (`#modal-id`), activating the `:target` selector:

```css
.glass-modal:target {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
```

The scale and translate transitions on the child content card are triggered immediately when the parent matches `:target`:

```css
.glass-modal-content {
  transform: scale(0.93) translateY(20px);
  opacity: 0;
  transition: transform 0.45s ease, opacity 0.45s ease;
}

.glass-modal:target .glass-modal-content {
  transform: scale(1) translateY(0);
  opacity: 1;
}
```

### Keyboard Focus Restoration
In a pure CSS modal, once a user closes the modal, they lose their focus outline position and are returned to the top of the body container.

To prevent this, this component links all closing mechanisms (the close button, backdrop, and cancel buttons) back to the trigger button's ID:
```html
<a href="#trigger-id" class="glass-modal-close">&times;</a>
```

When clicked or activated with the keyboard, the URL hash switches to `#trigger-id`. This:
1. Closes the modal (since the target ID is no longer `#modal-id`).
2. Moves browser focus directly back to the trigger button, allowing screen readers and keyboard users to resume navigation seamlessly.

---

## Customization

All design tokens are modular and can be customized inline or globally:

| CSS Custom Property | Default Value | Description |
|---|---|---|
| `--glass-modal-duration` | `0.45s` | Animation speed for both background and content card |
| `--glass-modal-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Outward ease curve (ultra-smooth decelerating) |
| `--glass-modal-scale-start` | `0.93` | Starting scale factor of the card (eases to `1`) |
| `--glass-modal-translate-y-start` | `20px` | Starting translation height offset of the card |
| `--glass-modal-backdrop-bg` | `rgba(8, 10, 15, 0.45)` | Backdrop mask color and overlay opacity |
| `--glass-modal-backdrop-blur` | `8px` | Backdrop filter blur intensity |
| `--glass-modal-bg` | `rgba(255, 255, 255, 0.07)` | Frosted glass panel background color |
| `--glass-modal-blur` | `20px` | Glass panel frosted filter blur intensity |
| `--glass-modal-border` | `rgba(255, 255, 255, 0.12)` | Glass panel translucent border stroke |
| `--glass-modal-shadow` | *(Multi-layer shadow)* | Exterior drop shadow and inner highlight values |
| `--glass-modal-text` | `#cbd5e1` | Primary text color inside the modal body |
| `--glass-modal-text-muted` | `#94a3b8` | Close icon and secondary text label color |
| `--glass-modal-title-color` | `#ffffff` | Modal header title text color |
| `--glass-modal-accent` | `#6c63ff` | Primary action button and focus outline color |

### Light Mode Override
Add the `.glass-modal-light` modifier class to change variables for light theme structures:

```html
<div id="modal-light" class="glass-modal glass-modal-light" role="dialog" aria-modal="true">
  ...
</div>
```

---

## Browser Support

| Browser | Version | Notes |
|---|---|---|
| Chrome / Edge | 76+ | Full support |
| Firefox | 70+ | Full support (requires `layout.css.backdrop-filter.enabled` in older configs) |
| Safari | 9+ | Full support (includes `-webkit-backdrop-filter` fallback) |
| iOS Safari | 9+ | Full support |
| Samsung Internet | 12+ | Full support |

> **Performance Tip:** If applying complex CSS background effects underneath the modal backdrop, verify frame rates on lower-end mobile devices. The component optimizes performance by using moderate blur amounts (`8px` on backdrop, `20px` on panel) and avoiding excessive nested filters.

---

## Why This Effect Is Useful

Modals are key transactional junctions in web layouts. Traditional JavaScript libraries introduce bundle bloat and script parsing costs to show/hide overlays. 

This pure CSS glassmorphic modal delivers a native-feeling desktop experience at a cost of less than 2KB of CSS:
1. **Immediate Execution** — visual interactions are handled by the browser's style engine, avoiding hydration delays or thread blocking.
2. **Design Cohesion** — the light and dark frosted-glass themes adapt to background patterns dynamically, creating high-end editorial aesthetics.
3. **Accessibility Out-of-the-box** — focus restoration, screen-reader semantic roles, and reduced-motion states are integrated directly into the markup pattern.

---

## License

Submitted under the same license as the EaseMotion CSS repository.
