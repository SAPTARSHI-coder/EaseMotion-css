# Audio Player Deck Component

An encapsulated digital audio control layout handling fluid linear tracking range modifications, clean play/pause toggle micro-interactions, and visual boundaries safe from content reflow shifts.

## Functional Controls
- **State Variable Class Switches:** Modular toggle loops shifting track container imagery scales using hardware-accelerated transforms.
- **Coordinate Vector Progress Bars:** Precision layout-width bindings managing structural track completion values.
- **Muted Track Sliders:** Specialized background overrides custom styling sliders away from standard browser presets.

## Usage Layout Structure
```html
<div class="ease-player-container">
  <div class="ease-player-art-frame"> ... </div>
  <div class="ease-timeline-wrapper"> ... </div>
  <div class="ease-controls-tray"> ... </div>
</div>
```

Closes #12473
