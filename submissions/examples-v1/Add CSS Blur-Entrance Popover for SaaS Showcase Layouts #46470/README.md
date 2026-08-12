# CSS Blur-Entrance Popover (SaaS Showcase)

A pure CSS animated popover designed for modern SaaS interfaces. It features a smooth, visually appealing "blur-entrance" interaction using `EaseMotion` CSS custom properties for easy customization.

## Features
- **Pure CSS Toggle**: Uses the accessible checkbox-hack for a fully functional popover without JavaScript.
- **Blur-Entrance Transition**: Soft, aesthetic entrance combining `blur`, `scale`, and `opacity`.
- **Keyboard Accessible**: The trigger is fully focusable via standard `<input type="checkbox">` and works with Space/Enter, displaying visible focus states. 
- **SaaS Aesthetics**: Dark mode, glassmorphism (`backdrop-filter`), and sophisticated drop shadows perfectly aligned with premium SaaS UIs.
- **Customizable**: Powered by `--em-popover-*` custom properties to tweak timing, easing, and visual effects.

## EaseMotion Variables Used
You can customize the following variables in your `:root` or container scope:
- `--em-popover-timing`: Transition duration (default: `0.4s`)
- `--em-popover-easing`: Transition timing function (default: `cubic-bezier(0.16, 1, 0.3, 1)`)
- `--em-popover-blur-start`: Initial blur state (default: `blur(12px)`)
- `--em-popover-blur-end`: Final blur state (default: `blur(0px)`)
- `--em-popover-scale-start`: Initial scale (default: `0.95`)
- `--em-popover-scale-end`: Final scale (default: `1`)
- `--em-popover-offset-y`: Distance from trigger (default: `8px`)

## Usage
Simply drop the `.popover-wrapper` structure into your HTML and link the CSS.
