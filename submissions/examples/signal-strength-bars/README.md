# Signal Strength Bars Animation Effect

Animated signal strength bars that fill sequentially to indicate varying levels of signal reception, pulsing when actively scanning, under issue #14743.

## Design Concept

- **Interactive Telemetry:** A simulated network status terminal displaying real-time scanning states.
- **Sequential Loading:** The signal bars animate sequentially from lowest to highest, indicating connection growth.
- **Pulsing Scan:** Once fully loaded, the bars pulse with a glowing neon accent representing active search/broadcasting.
- **Pure CSS Layout:** Designed using flexbox columns, sequential `animation-delay` offsets, and clean custom keyframes for opacity and scale pulsing.

## Showcase Link

Open `demo.html` in your browser to view the component.

Closes #14743
