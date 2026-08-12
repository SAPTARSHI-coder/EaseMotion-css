# CSS Media Visualizer: Foucault Pendulum Swing

A hardware-accelerated, JavaScript-free audio and media UI element. Features physics-based swinging animations driven by `transform-origin` anchoring and `ease-in-out` timing functions.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, physics engines, or JavaScript required for the swinging geometry or the play/pause state logic.
- **Component Architecture**: 
  - **The Physics Engine**: True pendulum physics dictate that a swing is fastest at the bottom and slows down to a stop at the peaks before reversing. We simulate this perfectly in pure CSS by using `ease-in-out` timing functions on our animations.
  - **The Swinging Art**: The `.pendulum-art` container is anchored to a pivot point at the top using `transform-origin: top center;`. An `@keyframes swing-art` animation applies a slow, gentle `rotate()` back and forth. A pseudo-element line draws the connecting rod.
  - **The Pendulum Array Visualizer**: The audio visualizer eschews traditional vertical scaling. Instead, it uses 8 `.pendulum-line` elements of varying heights, hanging from a top rod. Each line has a `.pendulum-bob` weight at the bottom. They use a much faster `@keyframes swing-viz` animation.
  - **The Chaos**: By aggressively staggering the `animation-delay` values of the visualizer pendulums, we simulate chaotic, overlapping waves of movement that perfectly represent active audio frequencies.
  - **The `:has()` Selector Gravity Settle**: The play/pause button is a hidden `<input type="checkbox">` styled using the CSS checkbox hack. When the user "pauses" the music, we use the modern CSS `:has()` selector on the parent card (`.pendulum-media-card:has(.play-toggle:not(:checked))`) to instantly apply `animation-play-state: paused` to all swinging elements. Crucially, we apply `transform: rotate(0deg) !important` to force everything to hang straight down. We pair this with a long CSS `transition` (1.5s), allowing "gravity" to slowly and realistically settle the pendulums to a complete stop when the music pauses.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`), featuring a sophisticated brass/gold and dark wood color palette.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, all swinging animations are disabled, and the pendulums hang straight down in a static, accessible player UI.

## Usage
Open `demo.html` in your browser. Watch the slow, rhythmic swing of the album art and the chaotic wave of the pendulum visualizer array. Click the Play/Pause button to see the magic: the entire UI will slowly settle down to a straight, hanging stop when "paused", driven entirely by CSS state transitions acting as gravity.

## Files
- `demo.html`: The HTML structure defining the pivot points, the swinging art container, the 8 visualizer pendulums, and the hidden checkbox play/pause toggle logic.
- `style.css`: The styling, the `transform-origin: top center` anchoring, the `rotate()` keyframes, and the `:has()` selector state interactions for the gravity settle effect.
