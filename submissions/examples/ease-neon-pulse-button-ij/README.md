# ease-neon-pulse-button

A highly engaging, cyberpunk-inspired neon button component. It features a glowing border that transitions into a solid illuminated background on hover, accompanied by a continuous expanding ring pulse animation.

## Usage
Open `demo.html` in your browser. Copy the `.ease-neon-pulse-button` class and the `@keyframes` block into your CSS. 

## Design System
| Property | Default | Description |
|---|---|---|
| `--neon-color` | `#0ea5e9` | The primary glow color for text, border, and shadows |
| `--neon-bg` | `#0f172a` | Background color for previewing the glow |

## Notes
The pulse animation utilizes multiple `box-shadow` values, including an `inset` shadow, to give the button a 3D fluorescent tube feel. The outer expanding ring is created using a 0px spread shadow that scales outward and fades to `rgba(..., 0)` simultaneously.
