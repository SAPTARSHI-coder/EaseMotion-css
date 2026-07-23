# CSS Animation Performance Guide

This directory houses a comprehensive architectural analysis and side-by-side execution comparison documenting rendering engine behaviors.

## Best Practice Rules Architecture
1. **Stick to Compositor Properties:** Only animate `transform` (scale, rotate, translate) and `opacity`.
2. **Avoid Geometric Triggers:** Do not animate properties that alter bounding layouts (`width`, `height`, `top`, `left`, `margin`).
3. **Isolate Layers:** Utilize the `will-change` keyword judiciously to promote heavy interactive nodes into dedicated GPU layers.