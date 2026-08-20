# SCSS Aspect Ratio Utility Mixins

A collection of responsive SCSS helper mixins for maintaining consistent aspect ratios across images, media containers, videos, and embedded content.

## Features

- Custom aspect ratios such as `16/9`, `4/3`, and `1/1`
- Responsive width-based layouts
- Native CSS `aspect-ratio` support
- Fallback support for browsers without `aspect-ratio`
- CSS custom property integration
- Video and iframe embed support
- Supports `video`, `iframe`, `embed`, and `object`
- No JavaScript required

## Mixins

### `ease-aspect-ratio`

Applies a responsive aspect ratio to an element.

```scss
@use "mixins";

.video {
  @include mixins.ease-aspect-ratio(16/9);
}
```

### `ease-aspect-ratio-variable`

Uses a CSS custom property to define the aspect ratio.

```scss
@use "mixins";

.media {
  @include mixins.ease-aspect-ratio-variable(4/3);
}
```

### `ease-aspect-ratio-embed`

Designed for responsive video and embedded content.

```scss
@use "mixins";

.video-frame {
  @include mixins.ease-aspect-ratio-embed(16/9);
}
```

## Usage

The mixins can be included in any SCSS component that needs a predictable responsive ratio.

```scss
@use "mixins";

.video {
  @include mixins.ease-aspect-ratio(16/9);
}

.card-image {
  @include mixins.ease-aspect-ratio(4/3);
}

.square-media {
  @include mixins.ease-aspect-ratio-variable(1/1);
}

.embed {
  @include mixins.ease-aspect-ratio-embed(16/9);
}
```

## Browser Fallback

The mixins use the native CSS `aspect-ratio` property where supported and provide a fallback using traditional sizing techniques when it is unavailable.

This allows the same SCSS utilities to remain usable across different browser capabilities without requiring JavaScript.

## Responsive Design

The mixins use responsive sizing and native aspect-ratio behavior, allowing media containers to resize naturally with their parent element.

They can be used inside responsive grids, cards, content sections, and media layouts.

## Video and Embedded Content

The embed mixin is intended for responsive media such as videos and iframes.

```html
<div class="video">
  <iframe
    src="https://example.com"
    title="Embedded content">
  </iframe>
</div>
```

```scss
.video {
  @include ease-aspect-ratio-embed(16/9);
}
```

## Example Ratios

Common ratios can be used directly with the mixins:

```scss
.landscape {
  @include ease-aspect-ratio(16/9);
}

.standard {
  @include ease-aspect-ratio(4/3);
}

.square {
  @include ease-aspect-ratio(1/1);
}

.portrait {
  @include ease-aspect-ratio(3/4);
}
```

## Demo

Open `demo.html` directly in a browser to see examples of:

- 16:9 media
- 4:3 media
- 1:1 square media
- Responsive video/embed containers

## Why It Fits EaseMotion CSS

These mixins provide reusable, human-readable SCSS utilities for a common responsive layout problem.

They keep aspect-ratio behavior lightweight, composable, and independent of JavaScript while providing sensible browser fallbacks.

## Accessibility

The mixins do not introduce interactive elements or JavaScript behavior.

Embedded content should still provide appropriate accessible attributes such as meaningful `title` values for iframes.

## Files

```text
_mixins.scss   SCSS utility mixins
demo.html      Standalone usage examples
style.css      Styling for the demo page
README.md      Documentation and usage examples
```

## License

This contribution follows the licensing terms of the EaseMotion CSS repository.