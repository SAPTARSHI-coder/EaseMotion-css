# Gradient Border Card

1. What does this do? A card with a flowing conic-gradient border that rotates continuously around it.
2. How is it used? Build a `.gradient-border-card` outer (holds the rotating conic gradient) wrapping a `.gradient-border-card__inner` (the dark surface). The outer `padding` controls border thickness. Adjust the rotation speed and border thickness via `--gbc-speed` and `--gbc-border`.
3. Why is it useful? It creates a continuously animated rainbow border with pure CSS (no images or JavaScript), and respects `prefers-reduced-motion` by freezing the rotation.
