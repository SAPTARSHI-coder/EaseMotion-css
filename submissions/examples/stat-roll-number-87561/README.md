# Stat Roll Number (#87561)

An animated vertical odometer-style numeric ticker reel that rolls columns of digits into their target positions using CSS transforms with easing curves.

## Features
- **Vertical Ticker Reel:** Columns contain digit ribbons stacked 0–9 translating via CSS `translateY` values.
- **Dynamic CSS Variable Binding:** Positions are computed dynamically via `--digit-val` tokens.
- **Staggered Spin Delays:** Columns spin with cascading delays for realistic mechanical odometer physics.
- **Accessibility:** Supports `@media (prefers-reduced-motion: reduce)` by disabling reel transitions.

## Usage
Include `style.css` in your project and render ticker columns wrapping numbers in `.ticker-column`.