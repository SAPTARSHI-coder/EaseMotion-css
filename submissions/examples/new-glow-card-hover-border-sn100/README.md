# Glow Card Border

1. What does this do? Adds a glowing animated border that trails around the card edge on hover using a pure CSS `conic-gradient` with a registered `@property --glow-angle` for smooth rotation.

2. How is it used? Add class `.glow-card` to any container element. The `::before` pseudo-element renders the gradient border, and `::after` masks the inner area to create the card face.

3. Why is it useful? It provides a modern, interactive card highlight with zero JavaScript, fully customisable colours and speed, and respects `prefers-reduced-motion`.
