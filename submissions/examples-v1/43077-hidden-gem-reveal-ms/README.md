# Hidden Gem Reveal

A mysterious CSS component that obscures content behind a textured, textured cover layer that cleanly slides away on hover to reveal a glowing, animated "gem" inside.

## Features
- **Theatrical Reveal**: The cover slides up and fades out smoothly to reveal the content.
- **Staggered Animations**: The inner content elements (glow, gem icon, title, description) fade and slide into place sequentially with specific transition delays.
- **Continuous Float**: Once revealed, the gem icon softly floats up and down using a CSS keyframe animation.
- **No JS Required**: Fully functional using CSS pseudo-classes (`:hover`), transforms, and transitions.

## Files
- `demo.html`: The HTML structure for the cover and revealed layers.
- `style.css`: The styling for the layered masks and animation choreography.

## Usage
Add `.ease-gem-container` to your project and include the provided styles. Feel free to replace the SVG icon and text in the `ease-gem-revealed` div with your own hidden content (e.g., a special discount code, a premium feature sneak peek).
