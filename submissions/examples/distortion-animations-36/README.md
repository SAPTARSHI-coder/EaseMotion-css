# Glitch Text Reveal Effect

A modern **neumorphic glitch text reveal component** featuring CSS keyframe distortion animations and interactive hover/focus states.

## Features

* Neumorphic card design
* Glitch text distortion
* Dual-layer RGB-style glitch effect
* CSS keyframe animations
* Hover interaction
* Keyboard focus interaction
* Responsive mobile layout
* CSS custom properties
* Reduced-motion accessibility support
* No external dependencies

## Files

```text
ease-advanced-glitch-text-reveal-effect-with-keyframe-distortion-animations-36/
├── demo.html
├── style.css
└── README.md
```

## Installation

No npm packages or external libraries are required.

Place the files inside:

```text
submissions/examples/ease-advanced-glitch-text-reveal-effect-with-keyframe-distortion-animations-36/
```

Open `demo.html` in a modern browser to view the component.

## How It Works

The glitch effect uses pseudo-elements containing the same text as the main element.

Different portions of the duplicated text are displayed using `clip-path`, while CSS keyframes continuously change their position.

This creates the distorted glitch appearance.

## Customization

The primary design values are defined using CSS variables:

```css
:root {
    --background: #e8edf3;
    --text: #252d39;
    --accent: #5b68ff;
    --accent-light: #7c87ff;
    --shadow-dark: #c4cad2;
    --shadow-light: #ffffff;
}
```

You can change these values to match your project's design system.

## Changing the Text

Update the text and its `data-text` attribute together:

```html
<div class="glitch-text" data-text="CREATE">
    CREATE
</div>
```

For example:

```html
<div class="glitch-text" data-text="INNOVATE">
    INNOVATE
</div>
```

## Accessibility

The component supports:

* Semantic HTML
* Keyboard focus
* Visible focus indicators
* Responsive layouts
* `prefers-reduced-motion`

Users who prefer reduced motion will have the animation minimized automatically.

## Technologies

* HTML5
* CSS3
* CSS Animations
* CSS `clip-path`
* CSS Custom Properties

No JavaScript or external dependencies are required.

## License

This component is contributed to the EaseMotion-css project under its repository license.
