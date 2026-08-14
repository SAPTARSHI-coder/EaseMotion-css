# Mobile Segment Control

1. What does this do? An iOS-style segmented control where the active segment's background slides smoothly between options using a spring-like cubic-bezier transition. Includes a phone frame preview and a compact size variant.

2. How is it used? Add a `.segment-group` container with `.segment` buttons. The `.active` class on a segment triggers the background slide transition. The transition on all properties with `cubic-bezier(0.34, 1.56, 0.64, 1)` provides the smooth sliding feel.

3. Why is it useful? It's a common mobile settings UI pattern — provides clear visual feedback of the selected option with a polished sliding indicator animation, making it ideal for tab-like filters and view toggles.
