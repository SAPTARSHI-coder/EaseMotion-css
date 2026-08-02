# CSS Float-Drift Carousel for SaaS Showcase Layouts

A modern, pure CSS carousel component designed for showcasing SaaS features. It features an infinite horizontal drift animation combined with a smooth vertical floating effect for individual cards, providing a dynamic and engaging user experience.

## Features
- **Pure CSS/HTML:** No JavaScript required for the carousel logic or animations.
- **Infinite Drift:** Seamless horizontal scrolling loop.
- **Float Effect:** Alternating vertical floating animations for individual cards to create a wave-like appearance.
- **Glassmorphism:** Modern design aesthetic with backdrop filters and subtle borders.
- **Interactive:** Hover states pause the drift animation and provide satisfying card lift and glow effects.
- **Responsive:** Adjusts to smaller viewports seamlessly.
- **Accessible:** Respects `prefers-reduced-motion` by disabling infinite drift and bobbing, switching to a scroll-snap layout.

## Usage
1. Include the `style.css` in your project.
2. Copy the HTML structure from `demo.html` into your layout.
3. Modify the content inside `.ease-carousel-card` to fit your needs. Remember to duplicate the initial set of cards to maintain the seamless infinite loop.

## Structure
- `.ease-carousel-container`: The main wrapper that applies edge masking.
- `.ease-carousel-track`: The track that handles the horizontal translation.
- `.ease-carousel-card`: The individual feature card.
