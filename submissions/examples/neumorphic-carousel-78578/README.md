# Neumorphic Carousel

Documentation showcase for EaseMotion CSS issue #78578. This example demonstrates a soft neumorphic carousel that uses native horizontal scrolling and scroll snapping instead of requiring JavaScript.

## Files

- `demo.html` — semantic slide content.
- `style.css` — soft surfaces, depth, spacing, responsive scrolling, and motion preferences.

## Interaction

The carousel is intentionally built around native scrolling. Each card is a normal article, so its content remains available even when enhanced visual effects are unsupported.

CSS scroll snapping helps the viewport settle on a complete slide after a swipe or trackpad scroll. This provides a carousel-like browsing experience while keeping the implementation lightweight.

## Usage

Replace the sample article content with product cards, projects, testimonials, or featured content. Add additional `<article>` elements when more slides are required.

## Accessibility

- Slides use semantic article elements.
- Content remains available without animation.
- Native scrolling works with mouse, touch, and trackpad input.
- Focusable content can be reached with the keyboard.
- Reduced-motion preferences can disable non-essential transitions.

## Responsive Behavior

The carousel uses fluid card widths and horizontal overflow. Smaller screens expose fewer cards at once while retaining comfortable internal padding and readable text.

## Customization

Adjust card width, gap, radius, shadows, background gradients, and snap behavior in `style.css`. The visual language can be changed independently from the slide markup.

## Preview

Open `demo.html` and scroll horizontally across the Featured cards section. Try a narrow viewport to see how the slide width adapts to available space.
