# Nav Drawer Slide

Navigation drawer that slides in from the left with push/overlay effect. Menu items stagger in sequentially with smooth transitions.

## Features

- Slide-in drawer from left with translateX transition
- Overlay and Push mode support
- Menu items stagger in with configurable delays
- Close on item click, overlay click, or Escape key
- Animated hamburger icon that transforms to close
- Backdrop overlay with fade transition

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--nds-duration` | `0.3s` | Transition duration |
| `--nds-drawer-bg` | `#1e293b` | Drawer background color |
| `--nds-item-hover` | `#334155` | Menu item hover background |
| `--nds-overlay-bg` | `rgba(0,0,0,0.5)` | Backdrop overlay color |
| `--nds-radius` | `0` | Drawer border radius |
| `--nds-width` | `280px` | Drawer width |

## Usage

Open `demo.html` in a browser. Click the hamburger icon to open the drawer. Toggle between Overlay and Push mode using the dropdown.
