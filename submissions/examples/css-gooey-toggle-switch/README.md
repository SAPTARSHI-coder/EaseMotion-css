# CSS Gooey Toggle Switch

A UI toggle switch featuring a playful, liquid "gooey" merging animation effect, achieved utilizing SVG color matrices and pure CSS physics.

## Features
- Pure CSS and HTML (Zero JavaScript required for the switch state or the physics animation).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`) with built-in dark and light mode definitions.
- **The Gooey Filter (Documented in Code)**: 
- True liquid merging effects in CSS require mathematical alpha channel manipulation.
- This component embeds a tiny, invisible SVG `<filter>` block directly in the HTML.
- The filter first applies a severe `feGaussianBlur` to the elements inside the switch.
- Crucially, it then passes the blurred output through an `feColorMatrix` that drastically increases the alpha contrast. This forces the fuzzy overlapping edges to render as sharp, solid "bridges", creating the illusion of liquid surface tension as shapes pull apart.
- This filter is applied to the `.switch-track` using `filter: url('#gooey');`.
- **Staggered Liquid Physics**: 
- Inside the switch track, there are three identical white circles (`.blob`). One is the main thumb, and two are "helpers".
- When toggled, the main thumb moves quickly to the other side.
- The two helper blobs have slightly longer `transition-duration` values (`0.5s` and `0.6s`).
- As the helpers lag behind the fast main thumb, the gooey filter pulls them all together into a stretched, liquid droplet tail before they snap back into a perfect circle at the destination.
- Fully accessible with `prefers-reduced-motion` support. The gooey filter is removed and the staggered helpers are hidden, falling back to a standard, quick toggle animation for motion-sensitive users.

## Usage
Open `demo.html` in your browser. You will see a toggle switch. Click it to turn it on, and watch how the white thumb stretches into a tear-drop liquid shape as it travels across the track, snapping cleanly into a circle on the right side. 

## Files
- `demo.html`: The HTML structure for the switch, including the embedded inline SVG `<filter>` definition required for the math.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the staggered transition physics that power the liquid tail.
