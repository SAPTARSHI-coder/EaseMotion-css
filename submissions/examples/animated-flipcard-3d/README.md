# ease-3d-flip-card

A card that flips 180° on the Y-axis on hover (or tap), revealing a back face — pure CSS 3D transforms.

## Usage
1. Include `style.css`.
2. Add markup:
   \`\`\`html
   <div class="flip-card">
     <div class="flip-card-inner">
       <div class="flip-card-face flip-card-front">Front</div>
       <div class="flip-card-face flip-card-back">Back</div>
     </div>
   </div>
   \`\`\`
3. (Optional) Include the click-toggle script from `demo.html` for touch devices where `:hover` isn't reliable.

## Customization
- `perspective` on `.flip-card`: controls how pronounced the 3D depth looks — lower values = more dramatic flip.
- Transition duration/easing on `.flip-card-inner`.
- Swap `.flip-card.flipped` class toggle (JS) as an alternative trigger to hover.

## Notes
- `backface-visibility: hidden` is what prevents the back face from showing through mirrored during the first half of the flip.
- `.flip-card-back` is pre-rotated 180° so it lands right-side-up once the parent flips.
- Fully CSS-driven for hover; the small JS snippet is only needed if you want click/tap-triggered flipping instead of/in addition to hover.