# Skew-Active Navbar — Minimalist Tech Layouts

A sticky navigation bar with a skew transform reveal on hover. Each link has a background shape that slides in from the left with a skew angle, while the text itself skews slightly in the opposite direction.

## How It Works

The `::before` pseudo-element on each link is a rounded rectangle that sits off-screen with `translateX(-110%)` and `skewX(-12deg)`. On hover it transitions to `translateX(0)`, sliding in behind the text. The text `<span>` inside the link skews to `6deg` for a counter-angle effect. Both use a spring-eased cubic-bezier for a snappy, bouncy feel.

The CTA button skews `-4deg` on hover with a violet box-shadow for emphasis. The brand glyph also skews and scales on hover.

## Customization

Override `--san-violet` to change the accent color. Adjust the skew angles in the hover rules for more or less dramatic tilts. The background inset padding controls how much the skew shape extends beyond the text.

## Accessibility

- Focus-visible outlines on all interactive elements
- `prefers-reduced-motion` disables all skew and translate transitions
- Semantic `<nav>` with `aria-label`
