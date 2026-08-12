# CSS Widget: Foucault Pendulum Swing Variation

A polished, reusable dashboard widget featuring a distinctive "Foucault Pendulum" visual treatment. This component realistically models a simple harmonic oscillator mapping a slow precession rotation entirely using HTML and Vanilla CSS. No JavaScript, physics engines, or canvas elements are utilized.

## Features

- **Physically Modeled Swing**: The primary swing animation utilizes a specific `cubic-bezier(0.45, 0, 0.55, 1)` easing function which mathematically approximates a sine wave—creating a highly realistic simple harmonic motion characteristic of an actual pendulum.
- **Foucault Precession Simulation**: A Foucault pendulum famously proves Earth's rotation via a slow rotation of its swing plane. This widget simulates this effect by wrapping the swinging pendulum in an assembly that slowly rotates (`animation: precession 20s linear infinite alternate`) above a 3D floor plane.
- **Pure CSS Construction**: 100% Vanilla CSS implementation. Uses native `transform-origin` pinning to mathematically rotate the cable and bob without calculating trigonometric coordinates manually.
- **Hardware-Accelerated Animation**: The heavy lifting of the swing and the precession rotation are securely off the main thread. We animate strictly `transform: rotate()`, avoiding expensive layout thrashing.
- **Responsive Architecture**: Built elegantly on CSS Grid constraints (`minmax(320px, 1fr)`). The visual pendulum stage sits in a `position: absolute` wrapper restricted to the right 50% of the card, preventing overlap with textual telemetry metrics on tight mobile viewports.
- **Dark Mode Support**: Seamlessly transitions via `@media (prefers-color-scheme: dark)`. The widget surface falls to deep slate while the metallic gradients of the pendulum bob invert to catch the subtle dark-mode highlights.
- **Reduced Motion Protocols**: Implements `@media (prefers-reduced-motion: reduce)`. This dynamically strips the infinite oscillation loops and precession rotations, freezing the pendulum gracefully at a static `8deg` angle for users with vestibular sensitivities.
- **Semantic HTML & Accessibility**: The structural data leverages an `<article>` tag. Decorative elements like the cable, bob, and 3D floor plane are aggressively encapsulated inside an `aria-hidden="true"` wrapper, completely hiding the complex visual geometry from screen readers.

## Implementation Details

### The Swing Mechanic
Instead of animating the `left` or `translateX` properties (which looks robotic), the entire `.pendulum-arm` is pinned via:
```css
transform-origin: top center;
```
This means a simple `rotate(15deg)` keyframe swings the rigid cable and bob together from the top suspension pivot flawlessly. 

### The Reference Plane (3D Floor)
To provide visual context to the precession, a decorative floor sits beneath the bob:
```css
transform: translateX(-50%) rotateX(75deg);
```
This flattens an otherwise circular div into an ellipse lying flat on the floor, projecting a sophisticated compass/trajectory ring beneath the swinging mass.

## Usage

1. Open `demo.html` in your browser.
2. Observe the primary widget demonstrating a fast swing with a slow precession rotation over the floor rings.
3. Observe the secondary widget demonstrating a purely harmonic swing without precession drift.
4. Interact with the widgets to view the clean Y-axis hover elevations and native focus-visible rings.
