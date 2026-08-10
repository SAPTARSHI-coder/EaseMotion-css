# Animated Text Highlight Marker Effect

## Description
This submission resolves Issue #68961 by introducing a CSS utility class that mimics a highlighter pen drawing over text.

## Features
- Pure CSS implementation, no extra HTML wrappers required.
- Uses `background-image: linear-gradient` mapped to `background-size`.
- Expands the highlighter mark horizontally via a smooth transition on `:hover`.
- Gracefully handles multi-line wrapped text.
- Easily customizable color via the `--highlight-color` CSS variable.
- Easily customizable marker height via the `--highlight-height` CSS variable.

## Usage
Add the `.ease-highlight-marker` class to any inline element like a `<span>` containing the text you want to highlight. By default, the highlight expands on hover. You can also append the `.is-visible` class via JavaScript if you want to trigger the animation based on scroll position instead of hover.

```html
<span class="ease-highlight-marker">This text will be highlighted on hover</span>
```
