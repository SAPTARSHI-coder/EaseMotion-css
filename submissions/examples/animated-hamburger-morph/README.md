# ease-hamburger-morph

A hamburger icon that morphs smoothly into an X on toggle — three bars, pure CSS transitions.

## Usage
1. Include `style.css`.
2. Add markup:
   \`\`\`html
   <button class="hamburger" aria-label="Toggle menu" aria-expanded="false">
     <span></span><span></span><span></span>
   </button>
   \`\`\`
3. Toggle the `.active` class on click (see `demo.html`) and keep `aria-expanded` in sync for accessibility.

## Customization
- `--size`: icon dimensions.
- `--bar-color`: bar color.
- Transition timing/easing on `span` for a snappier or slower morph.

## Notes
- The middle bar fades out and slides slightly rather than just disappearing, avoiding an abrupt pop.
- Top and bottom bars both animate `top` (to converge on center) and `transform: rotate()` simultaneously, which is what makes the X read as one continuous morph instead of two separate steps.
- `aria-expanded` toggling is included since this is a real interactive control, not just a visual — screen readers need the state.