# CSS Masked Image Text

A pure CSS technique using `background-clip: text` to fill typography with a photographic image, commonly used for striking hero sections and large display headings.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **Typography Constraints**: For an image mask to be visible and effective, the typography must be substantial. This component utilizes the `Montserrat` font at a weight of `900` (Black) with tight letter-spacing and line-height to maximize the surface area available for the image to show through.
  - **The Masking Technique**: We apply the `background-image` directly to the `<h2>` element. We then use `-webkit-background-clip: text` (and standard `background-clip: text`) to instruct the browser to hide the background everywhere *except* where the actual font characters are drawn. 
  - **Transparency**: Finally, we must set `color: transparent;` on the text itself, otherwise the solid text color would render on top of the clipped background, hiding the effect.
  - **Edge Definition**: A subtle `filter: drop-shadow()` is applied to help define the edges of the text against the container background, as standard `text-shadow` can sometimes behave unpredictably when combined with background clipping depending on the browser.
- **Theming**: Fully responsive container that respects system dark/light modes.
- Accessible semantic structure. The visual effect does not interfere with screen readers, as the text content remains standard HTML. An explicit `aria-label` is provided as a best practice to ensure the exact text content is always conveyed clearly, even if the transparent color causes issues in older assistive technologies.

## Usage
Open `demo.html` in your browser to view the heavy typography masking the underlying nature photograph. 

## Files
- `demo.html`: The HTML structure containing the display heading.
- `style.css`: The styling, responsive typography sizing, and the `background-clip` masking logic.
