# Animated Gradient Border Card

**What does this do?**  
Creates cards with animated conic gradient borders that rotate continuously using CSS `@property` for hardware-accelerated animation.

**How is it used?**  
Wrap content in a `.gradient-border-card` container with `.card-content` inside. Each card gets a unique gradient via modifier classes (`.card-1`, `.card-2`, `.card-3`). The `@property --angle` custom property drives the rotation.

**Why is it useful?**  
Provides a zero-dependency, visually engaging way to highlight feature cards, pricing tiers, or content sections without bloated JavaScript. Respects `prefers-reduced-motion` automatically.
