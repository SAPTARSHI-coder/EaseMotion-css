# Rotate Perspective Spin Wheel

1. What does this do? Provides a core SCSS animation mixin pattern for EaseMotion. It animates an element by tilting it backwards using `rotateX` and then continuously spinning it using `rotateZ`.
2. How is it used? Apply the `.ease-anim-rotate-perspective-spin-wheel` class to any element. Note: The parent container must have a `perspective` value applied for the 3D effect to render correctly. The maintainer will integrate this code directly into `core/animations.css`.
3. Why is it useful? 3D spinning elements (like wheels, coins, or loading indicators) add depth to flat interfaces. This provides a highly performant, hardware-accelerated 3D spin loop to the core animation engine with full accessibility support.
