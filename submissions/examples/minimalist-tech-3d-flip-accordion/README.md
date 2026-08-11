# CSS 3D-Flip Accordion (Minimalist Tech)

A pure CSS accordion component designed for Minimalist Tech Layouts. It features entirely JavaScript-free state management and a highly physical "3D-Flip" entrance animation, where the interior content swings down like a hinge connected to the header.

## Features
- Pure CSS and HTML (Zero JavaScript required for state or animations).
- **Minimalist Tech Aesthetic**: Clean panel layout, distinct API method badges, dark-themed code blocks, and the use of `JetBrains Mono` for a technical, developer-centric feel.
- **Pure CSS State Management**: 
- Utilizes the "Checkbox Hack". Each accordion item contains a hidden `<input type="checkbox">` (`.accordion-toggle`) and a `<label>` (`.accordion-header`) that toggles it.
- Because we use checkboxes (rather than radio buttons), users can open multiple accordion panels simultaneously, which is often preferred in technical documentation interfaces.
- **The 3D-Flip Animation System**: 
- **The Vertical Space Engine**: Animating `height: auto` is accomplished using a modern CSS Grid trick. The `.accordion-content` wrapper transitions from `grid-template-rows: 0fr` to `1fr`. This securely manages the vertical space required without clipping 3D transforms.
- **The 3D Hinge (Content)**: The inner content (`.content-inner`) acts as the flipping panel. We establish a 3D context by applying `perspective: 1200px` to the parent containers. We set `transform-origin: top center` so the panel hinges directly beneath the header. Initially, it is swung `90deg` backwards into the screen (`transform: rotateX(-90deg)`). When opened, it smoothly transitions to `0deg` (flat) using a bouncy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function, giving it physical weight as it snaps into place.
- **The 3D Hinge (Chevron)**: To match the spatial aesthetic, the chevron icon rotates into the screen on the X-axis (`transform: rotateX(180deg)`) rather than a flat 2D spin.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the grid height transition and all 3D rotations are completely disabled. The accordion safely falls back to an instant layout toggle utilizing `display: block` / `display: none`.

## Usage
Open `demo.html` in your browser. You will see a mock "API Documentation" accordion interface. Click on any header to expand the panel. Notice how the container smoothly expands its vertical space while the inner content physically swings down from the header hinge, snapping into place with realistic momentum.

## Files
- `demo.html`: The HTML structure for the accordion, detailing the crucial checkbox/label relationship for CSS state management, and the DOM structure required to separate the 3D hinge from the vertical height wrapper.
- `style.css`: The styling, minimalist tech design tokens, the CSS Grid height transition trick, and the precise `transform: rotateX` logic driving the 3D hinge animation.
