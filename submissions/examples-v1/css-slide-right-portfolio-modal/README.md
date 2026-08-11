# Creative Portfolio Slide-Right Showcase Panel

A modern, high-contrast, zero-JavaScript slide-right drawer component optimized for photography showcases, spatial architectural listings, and artistic design case studies.

## 🎨 Creative Motion Physics
- **Elegant Kinetic Profile:** Uses custom asymmetrical easing parameters (`easeOutQuart`) to present a balanced entry transition.
- **Hardware Layer Isolation:** Constrains layout operations strictly to browser compositing chains via hardware-accelerated translation variables.

## 🎛️ Exposed Project Variables

The layout behavior can be configured globally by adapting these specific properties inside the `:root` pseudo-class template selector:

| Variable Identifier | Default Setting | Operational Context |
| :--- | :--- | :--- |
| `--portfolio-duration` | `0.5s` | Entrance/exit translation duration window. |
| `--portfolio-easing` | `cubic-bezier(0.25, 1, 0.5, 1)` | Deceleration curve profiles for sleek cinematic look. |
| `--portfolio-slide-start` | `-100%` | Horizontal sliding boundary baseline alignment. |
| `--text-accent` | `#ff4a22` | High-vibrancy creative brand focus identifier. |