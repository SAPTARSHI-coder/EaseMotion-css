# CSS Language RTL Toggle Component

An animated Left-To-Right (LTR) to Right-To-Left (RTL) layout switcher powered purely by CSS 3D counter-rotations.

## 1. What does this do?
This component provides a smooth, animated layout flip mimicking a Left-To-Right (LTR) to Right-To-Left (RTL) language directional switch, without requiring any JavaScript.

## 2. How is it used?
The component utilizes the **CSS Checkbox Hack** alongside nested 3D counter-rotations:
- When the hidden checkbox `#rtl-toggle` is checked, the parent element `.ease-rtl-card` rotates +180 degrees along the Y-axis (`rotateY(180deg)`), which geometrically swaps the physical positions of its children inside the flex layout.
- Simultaneously, each direct child wrapper (`.ease-layout-item`) rotates -180 degrees along the Y-axis (`rotateY(-180deg)`). This counter-rotation ensures that while the elements orbit into their new reversed positions, their front faces continuously orient towards the user without appearing mirrored or upside down.
- Text alignment within `.ease-text-group` transitions smoothly to `right`.

## 3. Why is it useful?
Native CSS layout directional properties such as `flex-direction: row-reverse` or `direction: rtl` snap instantly between states because they are non-interpolatable in CSS transitions. By transforming the layout through 3D rotations, the transition work is offloaded directly to the GPU compositor, achieving fluid, 60fps layout directional swap animations.
