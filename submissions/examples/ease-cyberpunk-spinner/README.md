# Parallax Cyberpunk Spinner (Ultra)

## Abstract

The **Parallax Cyberpunk Spinner (Ultra)** is a pure CSS 3D loading component engineered for high-performance futuristic and sci-fi user interfaces. It delivers a multi-layered, hardware-accelerated orbital visualization with realistic parallax depth, continuous spatial tilting, dynamic neon backlighting, and a chromatic glitch text core (`SYSTEM_BOOT`). By leveraging modern CSS 3D transforms, pseudo-element layering, and keyframe-driven axis rotations, this component achieves complex volumetric motion strictly within the browser rendering pipeline without relying on WebGL or external JavaScript physics libraries.

## Hardware Accelerated 3D Engine

The depth perception and spatial positioning of the spinner are driven by CSS 3D perspective and transformation hierarchy:

1. **Perspective Anchor (`.ease-cyber-wrapper`)**:
   - Applying `perspective: 1200px` establishes the virtual camera distance relative to the viewport. This defines the vanish point and creates a focal depth where elements positioned along the Z-axis exhibit true parallax scaling.

2. **3D Scene Graph (`.ease-cyber-core`)**:
   - Setting `transform-style: preserve-3d` on the central core container propagates the 3D rendering context to child elements instead of flattening them into a 2D plane.
   - The core executes a continuous sinusoidal tilt animation (`ease-core-tilt`), smoothly interpolating between `rotateX(-15deg) rotateY(-15deg)` and `rotateX(15deg) rotateY(15deg)`. This dynamic camera tilt constantly alters the perspective angle for the observer.

3. **Volumetric Z-Layering (`.ease-ring-1`, `.ease-ring-2`, `.ease-ring-3`)**:
   - **Ring 1 (Cyan)**: Positioned at `translateZ(30px)` (closest to the camera), giving it maximum visual dominance and dramatic parallax shift during core tilting.
   - **Ring 2 (Magenta Dashed)**: Positioned at `translateZ(-20px)` behind the origin, creating a distinct visual background plane with reduced opacity (0.8).
   - **Ring 3 (Neon Red / Yellow)**: Positioned at `translateZ(10px)` with a baseline static `rotateX(75deg)` tilt, intersecting the orbital system at a steep oblique angle.
   - **Central Text**: Offset to `translateZ(50px)`, ensuring the telemetry text floats clear of all revolving ring boundaries.

## Neon Compositing & Glitch Mechanics

The high-tech visual identity is produced through multi-channel color compositing and rapid keyframe micro-translations:

### 1. Counter-Rotating Axis Mathematics
Rather than using a uniform rotational engine, each ring rotates on an independent principal axis with alternating directions and prime-numbered duration cycles to prevent predictable repetition:
- **X-Axis Orbital (`ease-spin-x`)**: Rotates `rotateX(0deg)` to `rotateX(360deg)` over a 3s linear cycle.
- **Y-Axis Reversed (`ease-spin-y`)**: Rotates `rotateY(0deg)` to `rotateY(360deg)` in `reverse` mode over a 4s cycle.
- **Z-Axis Gyroscopic (`ease-spin-z`)**: Rotates `rotateZ(0deg)` to `rotateZ(360deg)` across an 8s cycle while locked at a 75-degree X-incline (`rotateX(75deg)`).

Simultaneous counter-rotation across X, Y, and Z coordinate spaces creates the visual illusion of a complex gyroscopic containment field without real-time physics calculations.

### 2. Chromatic Glitch Mechanics
The telemetry text glitch effect is constructed using stacked pseudo-element channels:
- **Base Layer (`.ease-cyber-text`)**: Renders the crisp white text string with dual chromatic drop-shadows (`text-shadow: 2px 0 #0ff, -2px 0 #f0f`).
- **Cyan & Magenta Channels (`::before` & `::after`)**: Both pseudo-elements inherit `content: 'SYSTEM_BOOT'` and overlay the base text absolutely.
  - `::before` is tinted cyan (`#0ff`) at `z-index: -1`.
  - `::after` is tinted magenta (`#f0f`) at `z-index: -2`.
- **Micro-Translation Animation (`ease-glitch-anim`)**: High-speed keyframe cycles (`0.3s cubic-bezier(...)`) execute horizontal and vertical pixel shifts (`translate(-2px, 2px)`, `translate(2px, -2px)`). Reversing the cycle direction for `::after` forces constant chromatic separation, mimicking high-frequency signal interference and buffer corruption.
