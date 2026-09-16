# Glitch Text
A dependency-free retro glitch headline for the EaseMotion CSS gallery.

## Features
* Pure HTML and CSS
* RGB-split cyan and pink layers
* Jittering headline animation on hover
* Animated horizontal glitch slices
* Keyboard focus support
* Responsive typography
* `prefers-reduced-motion` support
* No JavaScript or external dependencies

## Usage
Open `demo.html` in a browser and hover over the headline to activate the glitch effect.
The effect is created with CSS pseudo-elements containing duplicate copies of the headline. Different colors, clipping regions, and transforms are animated independently to produce the RGB-split distortion.

## Customization
To change the headline, update the visible text in `.glitch__text` and its `--glitch-content` custom property:
```css
.glitch__text {
  --glitch-content: "GLITCH";
}
```
The cyan and pink channel colors, animation timing, typography, and surrounding design tokens can be customized from `style.css`.

## Accessibility
The headline has an accessible link label, while the duplicated visual layers are decorative.
A visible `:focus-visible` state allows keyboard users to trigger the effect.
The component respects `prefers-reduced-motion` to minimize animation for users who request reduced motion.

