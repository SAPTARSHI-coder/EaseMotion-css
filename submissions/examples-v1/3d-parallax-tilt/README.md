# Interactive 3D Parallax Tilt

### 1. What does this do?
This component provides a 3D perspective tilt effect on hover, creating depth by calculating mouse coordinates and mapping them to CSS rotations (`rotateX` and `rotateY`). A dynamic glow effect follows the cursor.

### 2. How is it used?
Include the HTML structure. Load `style.css` in your head block and `script.js` before your closing `body` tag. The script automatically attaches to elements with the `tiltCard` ID.

### 3. Why is it useful?
It provides a premium, modern feel for showcase cards or pricing tables, enhancing user engagement and interactivity without heavy dependencies.

*Accessibility note: Respects `prefers-reduced-motion` media queries.*
