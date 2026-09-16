# ease-hover-icon-shake-notify-sap

A notification bell that shakes side-to-side on hover, drawing attention to unread items.

## Usage
Include `style.css`, add the bell button with a `.notify-dot` badge.

## Notes
- Rotation values decrease in magnitude across the keyframe steps, mimicking a settling shake rather than uniform back-and-forth.
- Respects `prefers-reduced-motion`: hover shake is disabled entirely.