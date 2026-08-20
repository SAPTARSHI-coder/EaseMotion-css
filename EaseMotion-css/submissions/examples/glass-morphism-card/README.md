# Glassmorphism Card

1. What does this do? Renders a frosted-glass card floating over a vivid, slowly shifting gradient backdrop, with a soft backdrop blur, translucent surface, and luminous edge highlight.
2. How is it used? Wrap your card content in a `.glass-card` element placed inside a `.demo-stage` backdrop (or any vivid gradient surface). Use `.glass-card__avatar`, `.glass-card__role`, `.glass-card__bio`, `.glass-card__stats`/`.glass-card__stat`, and `.glass-card__cta` for the inner pieces. Customize the glass tint, edge highlight, ink color, and blur amount via `--gc-glass`, `--gc-edge`, `--gc-ink`, and `--gc-blur`.
3. Why is it useful? It produces a modern glassmorphism look with pure CSS (no images), a graceful fallback where `backdrop-filter` is unsupported, and `prefers-reduced-motion` support for the shifting backdrop.
