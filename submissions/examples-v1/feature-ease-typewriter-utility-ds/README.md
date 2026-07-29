# Ease Typewriter Utility

A lightweight CSS-only utility that creates a typewriter text reveal animation with an optional blinking cursor and looping effect.

## Features

- CSS-only implementation
- Typewriter text reveal
- Blinking cursor
- Optional cursor removal
- Looping animation
- Customizable using CSS variables
- Respects reduced-motion preferences

## Folder Structure

```text
submissions/examples/feature-ease-typewriter-utility-ds/
├── demo.html
├── style.css
└── README.md
```

## Usage

```html
<h1
  class="ease-typewriter-ds"
  style="--ease-type-chars:25;"
>
  Welcome to EaseMotion CSS
</h1>
```

### Available Utility Classes

- `.ease-typewriter-ds`
- `.ease-typewriter--no-cursor-ds`
- `.ease-typewriter--loop-ds`

### CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-type-chars` | Required | Number of characters for the typing animation |
| `--ease-type-duration` | `2s` | Typing duration |
| `--ease-type-delay` | `0s` | Animation delay |
| `--ease-cursor-color` | `currentColor` | Cursor color |

## Accessibility

The utility respects:

```css
@media (prefers-reduced-motion: reduce)
```

to instantly reveal text and remove cursor animations.

## Use Cases

- Hero sections
- Landing pages
- Portfolio websites
- Terminal UI
- Marketing banners
- Developer portfolios
