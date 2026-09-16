# Pure CSS 3D Coverflow Carousel

## Abstract

This module implements a zero-JavaScript, pure CSS 3D Coverflow Carousel component designed for fluid, high-performance media showcasing. By utilizing CSS 3D transforms, perspective projection, general sibling combinators, and hardware-accelerated element reflection, the carousel achieves smooth perspective shifts and dynamic focus states strictly through declarative style rules.

## 3D Perspective & Spatial Rotation Geometry

The 3D environment is initialized on `.ease-coverflow-scene` using `perspective: 1200px`, establishing a fixed vanishing point and camera distance for the viewport. Within this scene, `.ease-coverflow` acts as a common 3D object space via `transform-style: preserve-3d`, allowing child card elements to share the same perspective plane.

Each card (`.ease-coverflow-card`) occupies a specific position along the X and Z axes. Negative horizontal margins (`margin: 0 -35px`) create overlap, while `transform-style: preserve-3d` ensures depth rendering remains coherent as cards scale and rotate in three-dimensional space.

## CSS Sibling Selector State Engine

The interaction model is powered entirely by pseudo-classes and CSS combinator logic:

1. **Default State**: All cards inherit `transform: rotateY(40deg) scale(0.85)` and `filter: brightness(0.55)`, creating an angled array facing inward toward the left perspective depth.
2. **Focused/Hovered State**: Applying `:hover` to a card overrides its transform to `rotateY(0deg) scale(1.15) translateZ(80px)`, bringing it forward to face the user directly with enhanced brightness (`brightness(1.1)`) and high `z-index: 20`.
3. **Trailing Siblings State**: The general sibling combinator (`.ease-coverflow-card:hover ~ .ease-coverflow-card`) targets all elements occurring after the hovered card in DOM order, inverting their Y-axis rotation to `rotateY(-40deg) scale(0.85)`.

This combination produces an authentic Coverflow effect where cards to the left of the active target angle rightward (`rotateY(40deg)`), the active target faces forward (`rotateY(0deg)`), and cards to the right angle leftward (`rotateY(-40deg)`).

## Hardware-Accelerated Floor Reflections

Floor reflections are implemented using `-webkit-box-reflect: below 8px linear-gradient(transparent 65%, rgba(0,0,0,0.45));`. This CSS primitive generates real-time specular reflections handled directly by the GPU compositor. Because reflection rendering is handled at the compositor layer without duplicating DOM elements or requiring extra layout/paint recalculations, visual fidelity is maximized while maintainability and frame rate remain optimal.
