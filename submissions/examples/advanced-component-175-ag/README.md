Advanced Pure CSS Iteration 175 (3D Isometric Layered Card)
A highly advanced, purely CSS-driven showcase component that demonstrates complex 3D spacial manipulation without JavaScript. This component renders as an isometric card that, upon hover, smoothly deconstructs into multiple floating layers along the Z-axis.

Core CSS Architecture
perspective & transform-style: preserve-3d: These properties establish the 3D camera lens and ensure all child elements (the layers) exist in the same three-dimensional space rather than being flattened.
Isometric Projection: The base card is rotated using transform: rotateX(55deg) rotateZ(-45deg) to achieve a classic, mathematically accurate isometric viewing angle.
Z-Axis Translation (translateZ): On hover, each .iso-layer receives a different translateZ() value. The bottom layer pushes down (-20px), while the top layers push towards the camera (80px), creating a stunning visual separation.
Performance: All animations are restricted to transform and box-shadow, ensuring they run efficiently on the browser's GPU compositor thread.

Component Structure
.ease-isometric-wrapper — The master context wrapper providing the 3D perspective.
.ease-iso-card — The anchor parent element that controls the base isometric rotation.
.iso-layer — The individual slicing layers that separate on the Z-axis during hover.
