# Quote Slider

A rotating quote carousel that fades quotes in and out with smooth transitions and dot navigation.

## Features

- Smooth fade in/out transition between quotes
- Auto-rotation with dot navigation support
- Decorative curly quotes via CSS pseudo-elements
- Customizable quote color, author color, and fade duration

## Usage

Add `.quote-slide` elements inside `.quote-slider`. Toggle the `.active` class to show a quote. Link `.dot` buttons to control navigation.

```html
<div class="quote-slider">
  <div class="quote-slide active">
    <p class="quote-text">Your quote here.</p>
    <p class="quote-author">— Author</p>
  </div>
</div>
<div class="dots">
  <button class="dot active" data-index="0"></button>
</div>
```

## CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--quote-color` | `#eee` | Quote text color |
| `--author-color` | `#888` | Author text color |
| `--fade-duration` | `0.5s` | Fade transition duration |
