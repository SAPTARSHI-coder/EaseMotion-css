# CSS Elastic-Slide Carousel for Cyberpunk Neon Layouts

A pure CSS, lightweight carousel featuring an elastic sliding animation and cyberpunk neon aesthetics, built for **EaseMotion CSS**.

## ✨ Features
- **Pure CSS**: No JavaScript required. Uses the radio button hack for state management.
- **Elastic Animation**: Smooth sliding with a custom `cubic-bezier` for a bouncy, elastic feel.
- **Cyberpunk Aesthetics**: Features glowing neon text shadows, borders, and a subtle scanline background.
- **Responsive**: Adapts perfectly to desktop, tablet, and mobile screens.
- **Accessible**: Supports `prefers-reduced-motion` for users who prefer simpler transitions without the elastic bounce, and includes `aria-label` attributes for accessibility.

## 🚀 Usage

Include the HTML structure in your project and link the `style.css` stylesheet. The carousel requires the radio buttons (`input[type="radio"]`) to be placed as siblings before the `.carousel` and `.navigation` containers to work correctly.

## 🎨 CSS Custom Properties (Variables)

The component uses CSS variables for easy theming and color adjustment:
- `--neon-pink`: Pink neon glow color (`#ff2a85`)
- `--neon-blue`: Blue neon glow color (`#00f0ff`)
- `--neon-purple`: Purple neon glow color (`#b026ff`)
- `--bg-color`: Main background color (`#0b0b13`)
- `--panel-bg`: Carousel background color (`rgba(20, 20, 35, 0.8)`)
