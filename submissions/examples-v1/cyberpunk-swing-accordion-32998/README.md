# Cyberpunk Terminal Swing-Hover Accordion

This submission resolves issue #32998.

## Features
- **Cyberpunk Terminal Theme**: A retro-hacker terminal interface layout. It uses stark `#00ff00` pure green text on a pure `#000000` background with a monospace font, distinct from the previous neon-glow cyberpunk implementations. 
- **Component Structure**: A pseudo-command-line interface acting as an accordion. The headers look like bash prompts (`> execute query`), and the bodies appear as standard out logs when expanded.
- **Animation**: Implements the `ease-hover-swing` animation. When hovering over a collapsed command prompt, the cursor `_` swings back and forth, simulating a glitchy terminal interaction typical of the cyberpunk genre.

## File Structure
- `demo.html`: The terminal-based accordion layout.
- `style.css`: Terminal styling and the custom Swing keyframes tailored for text characters.
