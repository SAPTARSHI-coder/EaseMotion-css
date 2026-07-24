# Interactive Holographic Data Visualizer

## What does this do?
This adds a CSS-only 3D data visualization component. Using `transform: rotateX(60deg) rotateZ(45deg)` it creates an isometric projection. The individual data bars are constructed using pseudo-elements (`::before` for front face, `::after` for side face) folded at 90 degrees. 

## How is it used?
Copy the `hologram-stage` wrapper. You can adjust the height of each bar simply by modifying the `--height` CSS custom property directly inline in the HTML (e.g., `style="--height: 150px;"`). 

## Why is it useful?
It provides a stunning, interactive sci-fi / cyberpunk data representation entirely without WebGL or JavaScript canvas libraries. The entire component rotates continuously while allowing individual bars to highlight upon hover.
