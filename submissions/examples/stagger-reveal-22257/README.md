# Stagger Reveal Animation
This system creates a sequential reveal effect for lists or grid elements.

- Uses `:nth-child` to increment `animation-delay` for each item.
- Employs `transform` and `opacity` for performance-friendly animations.
- The `animation-fill-mode: forwards` ensures elements remain visible after the sequence completes.