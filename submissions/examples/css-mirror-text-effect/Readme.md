# CSS Mirror Text Effect

A simple and responsive CSS-only text effect that displays a faded mirror reflection below the original text.

## Features

- Pure CSS implementation
- No JavaScript required
- Responsive on different screen sizes
- Faded mirror reflection effect
- Accessible decorative reflection using `aria-hidden`
- Lightweight and easy to customize

## How It Works

The mirror effect is created by duplicating the text and applying CSS transformations to the duplicate.

The reflection uses:

- `transform: scaleY(-1)` to flip the text vertically
- `opacity` to reduce the visibility of the reflection
- `mask-image` with a linear gradient to create the fading effect

## Files

```text
css-mirror-text-effect/
├── demo.html
├── style.css
└── README.md