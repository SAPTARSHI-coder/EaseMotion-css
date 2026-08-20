# CSS Scale-Hover Hero Section (Minimalist Tech)

A pure CSS interactive hero section component designed for Minimalist Tech Layouts. It features a tactile, responsive "Scale-Hover" interaction designed to encourage user engagement across both typographic and visual elements.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Tech Aesthetic**: Clean layout, massive sharp `Inter` typography for headers, and a stark, highly-technical Node Cluster visualization using SVG structural elements.
- **The Scale-Hover Effect**: 
- A dedicated utility class `.scale-hover-item` handles the interaction styling on the targeted elements.
- Uses `transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)` to smoothly manage scale changes with a slight bouncy physical spring.
- On `:hover`, the targeted element physically expands (`transform: scale(...)`). We customize the specific scale factor and accompanying styles (like box-shadows or color shifts) based on the element type (e.g., text, buttons, central node, satellite nodes) for tailored context.
- On `:active` (when the mouse is clicked down), the element slightly depresses (`transform: scale(0.95) !important`) to provide universal tactile, button-like feedback.
- **Inline Block Typography**: To allow individual words within the main `<h1>` title to scale independently on hover, we wrap them in `<span>` tags with `display: inline-block`, ensuring `transform` scales them from their individual centers rather than the whole line block.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the hover/active scaling transitions are completely disabled to prevent sudden screen movement.

## Usage
Open `demo.html` in your browser. You will see a mock Infrastructure as Data hero section. Move your mouse across the various elements—the badge, individual words in the title, the subtitle, the buttons, and the nodes in the cluster graphic. Observe how they smoothly scale up to meet the cursor, and try clicking them to feel the tactile depression feedback.

## Files
- `demo.html`: The HTML structure for the layout, detailing the application of the `.scale-hover-item` utility class across varying element types.
- `style.css`: The styling, minimalist tech design tokens, the Node Cluster absolute positioning structure, and the specific CSS transition logic driving the smooth scale interactions.
