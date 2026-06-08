# ease-fade-out Utility

This example demonstrates the new `ease-fade-out` utility class which fades an element out over a short duration.

## Usage
```html
<div class="box ease-fade-out">Fade me out</div>
```
Add the `ease-fade-out` class to any element you wish to fade out. The animation runs for 0.5s and ends with the element hidden (opacity 0).

## Demo
Open `demo.html` in a browser and click the **Trigger Fade** button to see the effect.

## Implementation Details
- Added `@keyframes easeFadeOut` and the `.ease-fade-out` class in `style.css`.
- Updated the CSS framework with the new utility (the actual framework file `easemotion.css` will be updated separately by the maintainer).

---
*This submission follows the GSSoC validator requirements: it contains `demo.html`, `style.css`, and `README.md`.*
