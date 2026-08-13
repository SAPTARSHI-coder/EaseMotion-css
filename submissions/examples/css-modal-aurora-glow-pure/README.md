# CSS Modal: Aurora Glow

A premium, JavaScript-free modal utilizing the CSS checkbox hack, featuring an animated, heavily blurred background glow simulating the aurora borealis.

## Features
- Pure CSS and HTML implementation. No JavaScript required to open or close the modal.
- **Component Architecture**: 
  - **The Checkbox Hack**: The core functional logic relies on a hidden `<input type="checkbox">` and the general sibling combinator (`~`). When the user clicks the `<label>` button to open the modal, or clicks the backdrop/dismiss buttons to close it, they are actually toggling this hidden checkbox.
  - **The Aurora Effect**: The modal card features a `.aurora-glow` container positioned absolutely behind the content layer. Inside, three colored `.glow-orb` divs (teal, purple, blue) are subjected to an extreme `filter: blur(60px)`.
  - **The Drift Animation**: The `@keyframes aurora-drift` animation translates and scales these blurred orbs slowly over 15-20 seconds. Because they are heavily blurred and use `mix-blend-mode: screen`, their colors bleed together seamlessly, simulating the shifting, organic light of the northern lights.
  - **Glassmorphism**: The modal card itself applies a `backdrop-filter: blur(20px)` and a slightly transparent background color. This ensures the aurora glow remains trapped beautifully inside the card boundaries without washing out the text.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The modal is inherently designed for a dark/glass aesthetic, as the aurora effect relies on bright colors against dark backgrounds to render properly. It supports system-level dark mode by darkening the modal background further to increase text legibility.
- Fully accessible semantic structure. The modal is designated with `role="dialog"` and `aria-modal="true"`. The decorative aurora elements are hidden from screen readers using `aria-hidden="true"`. Honors the `prefers-reduced-motion` accessibility standard by freezing the drifting aurora animations and removing the modal pop-in transition for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the "Open Aurora Modal" button to trigger the checkbox hack and reveal the modal.

## Files
- `demo.html`: The HTML structure defining the checkbox logic, the modal overlay, and the inner aurora glow orbs.
- `style.css`: The styling, the `:checked` sibling selector logic, the extreme `filter: blur()` aurora setup, and the slow drifting keyframes.
