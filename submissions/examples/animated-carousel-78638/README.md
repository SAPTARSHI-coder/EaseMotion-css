# Animated Carousel

Documentation showcase for EaseMotion CSS issue #78638. This example demonstrates a responsive neon carousel using native horizontal scrolling, scroll snapping, and lightweight CSS animation.

## Files

- `demo.html` — semantic slide content and carousel region.
- `style.css` — neon surfaces, spacing, animation, responsive scrolling, focus states, and reduced-motion behavior.

## Interaction Model

The carousel uses native horizontal overflow so users can scroll with a mouse, trackpad, touch gesture, or keyboard when focusable content is present. Scroll snapping helps each slide settle into a readable position.

The animation is decorative and does not control access to the content. This keeps the component usable if animation is disabled or unsupported.

## Usage

Replace the sample projects with products, testimonials, articles, or portfolio items. Additional slides can be added as sibling article elements while retaining the same class structure.

## Accessibility

- Slides use semantic article elements.
- The carousel region has an accessible label.
- Content remains available without animation.
- Interactive descendants can receive keyboard focus.
- Reduced-motion preferences disable non-essential movement.

## Responsive Behavior

Slides use fluid dimensions and a responsive gap. On narrow screens the carousel exposes one primary card at a time, while wider screens can reveal more surrounding content.

## Customization

Adjust animation duration, slide width, gap, glow, border, surface, and snap settings in `style.css`. The visual theme can be changed independently from the content markup.

## Preview

Open `demo.html`, scroll through the Featured projects section, and resize the viewport. Test the component with reduced motion enabled to verify that the content remains fully usable.
