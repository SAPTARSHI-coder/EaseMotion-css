# Floating Action Hub with Morphing Radial Expand

A modern, accessible Floating Action Button (FAB) component featuring trigonometric arc expansion, morphing plus-to-cross icon state, staggered spring physics, glassmorphism backdrop overlay, and Web Audio click feedback.

## Features

- 🎯 **Morphing Plus-to-Cross Trigger**: Animated rotate and scale transition converting the plus icon into a dismiss cross on activation.
- 📐 **Trigonometric Radial Arc**: Sub-action buttons fan out smoothly along customizable arc positions (`bottom-right` 90°, `bottom-center` 180°, `bottom-left` 90°, and `center` 360°).
- ⚡ **Staggered Spring Physics**: Staggered transition delays (`calc(var(--i) * 45ms)`) with custom cubic-bezier spring curves for fluid fan-out and reverse sequence collapsing.
- 🔮 **Glassmorphism & Audio Feedback**: Frosted glass backdrop blur with synthesized Web Audio chimes on open, close, and item clicks.
- ♿ **Full Accessibility**: Complete keyboard support (<kbd>Tab</kbd>, <kbd>Arrow Keys</kbd>, <kbd>Escape</kbd>), `aria-expanded`, `aria-hidden`, and focus ring indicators.

## File Structure

```text
submissions/examples/floating-action-radial-jc/
├── demo.html    # Interactive demo showcasing the component
├── index.html   # Main entry demo page
├── style.css    # Responsive CSS design system & radial animation styles
├── script.js    # Radial angle calculation, audio synthesis & accessibility
└── README.md    # Component documentation & customization guide
```

## Quick Start

### 1. HTML Markup

```html
<div id="radial-fab-container" class="fab-container position-bottom-right" data-position="bottom-right" style="--distance: 130px; --total: 3;">
  <!-- Glass Backdrop -->
  <div class="fab-backdrop" id="fab-backdrop"></div>

  <!-- Radial Sub-Buttons -->
  <div class="fab-menu" id="fab-menu" role="menu" aria-hidden="true">
    <button class="fab-item" style="--i: 0;" data-action="Add Note" tabindex="-1">
      <span class="fab-icon">/* SVG */</span>
      <span class="fab-tooltip">New Note</span>
    </button>
    <button class="fab-item" style="--i: 1;" data-action="Upload" tabindex="-1">
      <span class="fab-icon">/* SVG */</span>
      <span class="fab-tooltip">Upload</span>
    </button>
    <button class="fab-item" style="--i: 2;" data-action="AI Draft" tabindex="-1">
      <span class="fab-icon">/* SVG */</span>
      <span class="fab-tooltip">AI Draft</span>
    </button>
  </div>

  <!-- Main Trigger Button -->
  <button class="fab-trigger" id="fab-trigger" aria-expanded="false" aria-haspopup="true" aria-controls="fab-menu">
    <span class="fab-trigger-icon">/* Plus SVG */</span>
  </button>
</div>
```

### 2. Include CSS & JavaScript

```html
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
```

## Customizable Parameters

### CSS Variables

| Parameter | Default | Description |
| :--- | :--- | :--- |
| `--distance` | `130px` | Radial expansion arc radius. |
| `--total` | `5` | Total count of sub-action items. |
| `--i` | `0..N` | Zero-based index per sub-button for staggered transitions. |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring easing curve for fan-out. |
| `--fab-primary-bg` | Gradient | Background gradient of primary trigger button. |

### Positioning Modes

The component supports 4 pre-configured positioning modes via the `data-position` attribute:

- `bottom-right`: 90° arc (fans up and left from 180° to 270°).
- `bottom-center`: 180° fan arc (fans from left 180° through top to right 360°).
- `bottom-left`: 90° arc (fans up and right from 270° to 360°).
- `center`: 360° radial circle surrounding the trigger button.

## Accessibility

- **ARIA Attributes**: Manages `aria-expanded="true/false"` on trigger and `aria-hidden="true/false"` on the menu.
- **Focus Management**: Dynamically updates `tabindex="0"` when active and `tabindex="-1"` when closed so hidden buttons are skipped during regular tab flows.
- **Keyboard Controls**:
  - <kbd>Space</kbd> / <kbd>Enter</kbd>: Toggle menu open/closed.
  - <kbd>Escape</kbd>: Immediately close menu and return focus to main trigger button.
  - <kbd>Arrow Left / Up / Right / Down</kbd>: Navigate sequentially between radial sub-action items.
- **Reduced Motion**: Respects `@media (prefers-reduced-motion: reduce)` by disabling transitions and animations for motion-sensitive users.
