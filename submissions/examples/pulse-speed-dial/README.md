


# Pulse Speed Dial (Gaming HUD Edition)

A high-performance, pure HTML/CSS floating action Speed Dial component designed for gaming HUD interfaces and dashboard control panels. Featuring multi-step concentric pulse animations, staggered radial deployment, and interactive neon accents, it requires zero JavaScript.

## Features

- **Pure HTML/CSS State Management**: Operates completely without JavaScript using the CSS checkbox hack (`:checked` state controller).
- **Multi-Step Concentric Pulse**: Three staggered ring animations pulsate continuously when closed to attract user interaction.
- **Gaming HUD Aesthetics**: Dark futuristic panel backgrounds, glowing borders, and vibrant neon accents (cyan, green, orange, purple).
- **Staggered Radial Arc Deployment**: Actions fan out in a precise radial arc (from $180^\circ$ left to $270^\circ$ up) with forward/reverse staggered transitions.
- **Pure CSS Tooltips**: Adaptive HUD-style tooltips appear above each action button on hover.
- **Fully Accessible**: Focusable with native keyboard navigation, uses focus-visible rings, and applies `visibility: hidden` when closed to prevent off-screen tabbing.

## Folder Structure

```text
submissions/examples/pulse-speed-dial-ag/
├── demo.html      # Full-page interactive demo
├── style.css      # Component and layout styling
└── README.md      # Documentation
```

## Usage Instructions

### 1. Structure the HTML

Copy the checkbox toggle, trigger label, and action items container into your document:

```html
<div class="em-pulse-dial-wrapper">
  <!-- Checkbox State Controller -->
  <input
    type="checkbox"
    id="em-pulse-dial"
    class="em-pulse-dial-toggle"
    aria-label="Toggle Gaming HUD Menu"
    aria-haspopup="true"
  />

  <!-- Trigger Button (FAB) -->
  <label for="em-pulse-dial" class="em-pulse-dial-trigger">
    <span class="em-pulse-rings">
      <span class="em-pulse-ring em-pulse-ring-1"></span>
      <span class="em-pulse-ring em-pulse-ring-2"></span>
      <span class="em-pulse-ring em-pulse-ring-3"></span>
    </span>
  </label>

  <!-- Speed Dial Action Buttons -->
  <div class="em-pulse-dial-actions" role="menu">
    <a
      href="#action1"
      class="em-pulse-dial-action em-action-profile"
      data-label="Profile"
      role="menuitem"
    >
      <!-- Icon SVG -->
    </a>
    <a
      href="#action2"
      class="em-pulse-dial-action em-action-quests"
      data-label="Quests"
      role="menuitem"
    >
      <!-- Icon SVG -->
    </a>
    <!-- Additional Actions -->
  </div>
</div>
```

### 2. Configure CSS Tokens

Override the custom properties at the `:root` level to align the HUD with your game or app colors:

```css
:root {
  /* Sizes */
  --em-dial-size: 60px;
  --em-action-size: 46px;

  /* Color Palette */
  --gaming-bg: #06070d;
  --gaming-panel: rgba(18, 20, 38, 0.85);

  /* Neon Themes */
  --neon-cyan: #00f2fe;
  --neon-magenta: #ff007f;
}
```

## Accessibility (a11y)

- Tabbing behaves natively: focusing the trigger and hitting `Space` or `Enter` toggles the checkbox state.
- Inactive action items are set to `visibility: hidden` and `pointer-events: none` to keep them out of the tab order when closed.
- Integrates with standard media queries to disable pulse animations for users who prefer reduced motion (`prefers-reduced-motion: reduce`).
