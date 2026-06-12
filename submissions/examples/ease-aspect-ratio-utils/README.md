# ease-aspect-ratio utilities

Composable utility classes that lock common width-to-height proportions for images, cards, and embedded media.

## Class reference

| Class                   | Aspect Ratio | Common Use Case                                            |
| ----------------------- | ------------ | ---------------------------------------------------------- |
| `.ease-aspect-square`   | `1 / 1`      | Profile avatars, album art, square thumbnails              |
| `.ease-aspect-video`    | `16 / 9`     | YouTube-style embeds, hero videos, widescreen media        |
| `.ease-aspect-portrait` | `3 / 4`      | Mobile screenshots, portrait photography, story cards      |
| `.ease-aspect-4-3`      | `4 / 3`      | Classic photo frames, presentation slides, legacy displays |

## Usage

```html
<img class="ease-aspect-video" src="poster.svg" alt="Video poster" />

<div class="ease-aspect-square">
  <img src="avatar.svg" alt="User avatar" />
</div>

<div class="ease-aspect-video video-embed" aria-label="Embedded video">
  <!-- iframe or player chrome -->
</div>
```

## Browser compatibility

The `aspect-ratio` CSS property requires **Safari 15+**, **Chrome 88+**, and **Firefox 89+**. Older browsers ignore the property and fall back to intrinsic image dimensions or explicit height rules.

> **Note:** The main project README browser compatibility table currently lists Safari 9.1+ as supporting `aspect-ratio`. That entry is incorrect — `aspect-ratio` was not supported in Safari until version 15 (September 2021). Provide a height fallback or padding-based ratio box when supporting legacy Safari.
