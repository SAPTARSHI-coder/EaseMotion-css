# ease-floating-action-menu

A smooth, pure CSS Floating Action Menu that triggers expansion on hover. Featuring springy pop-up micro-animations and a rotatable trigger icon, all styled beautifully.

## Usage
Open `demo.html` in your browser. Wrap the trigger button and menu structure inside the `.ease-fam-container` div, and position it as desired.

## Custom Properties
| Property | Default | Description |
|---|---|---|
| `--fam-primary` | `#3b82f6` | Primary action button color |
| `--fam-secondary` | `#ffffff` | Secondary action menu background color |
| `--fam-bg` | `#f8fafc` | Canvas backdrop color |

## Notes
Uses `cubic-bezier(0.175, 0.885, 0.32, 1.275)` transition timing functions to create a playful bounce/spring effect when items emerge. Pointer events are toggled via CSS when active/hovered to avoid floating layout issues.
