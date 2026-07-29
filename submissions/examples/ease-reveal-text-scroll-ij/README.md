# Reveal Text Scroll

A scroll-triggered text reveal component using Intersection Observer. Words and paragraphs fade in with a smooth slide-up animation as the user scrolls down the page.

## Features

- Staggered reveal with configurable delay
- Progress indicator bar
- Intersection Observer for performant scroll detection
- Fully customizable via CSS custom properties

## Usage

```html
<p class="reveal-text" data-delay="0">Your text here</p>
```

Add the `reveal-text` class and a `data-delay` attribute (in ms) to any element. Include the Intersection Observer script to activate.

## Custom Properties

| Property           | Default           | Description              |
|--------------------|-------------------|--------------------------|
| `--rts-duration`   | `0.8s`            | Reveal animation duration|
| `--rts-reveal-color`| `#ffffff`         | Text color when revealed |
| `--rts-hidden-color`| `rgba(255,255,255,0.15)` | Text color when hidden |
| `--rts-stagger`    | `0.15s`           | Delay between items      |
| `--rts-bg`         | `#0f0f1a`         | Background color         |
