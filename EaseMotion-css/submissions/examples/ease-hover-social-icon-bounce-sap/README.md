# ease-hover-social-icon-bounce-sap

Social icon buttons that play a springy, decaying bounce (like a dropped ball settling) each time they're hovered.

## Usage
1. Include `style.css`.
2. Add markup: `.bounce-icon` buttons with inline SVGs.

## Notes
- The keyframe uses progressively smaller peaks (14px → 6px → 2px) to mimic a decaying physical bounce rather than a single uniform up-down motion.
- Animation replays fully on every fresh hover since it's not `infinite` and CSS naturally restarts `:hover`-triggered animations on re-entry.
- Respects `prefers-reduced-motion`: the bounce animation is disabled entirely on hover.