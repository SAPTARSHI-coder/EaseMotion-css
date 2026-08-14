# Image Blur Load Transition

Image loads with a blur-to-clear transition effect. Starts blurred and scales in as the image finishes loading.

## Features

- Blur-up loading effect similar to Medium/LQIP
- CSS `transition` on `filter` and `transform`
- JS sets `--ibl-loaded` custom property on load event
- Customizable duration and easing via `:root` variables

## Usage

Wrap an `<img>` inside `.ibl-container`. The image starts with `blur(20px)` and `scale(1.1)`. Once JavaScript detects the `load` event, it sets `--ibl-loaded` on the container, triggering the transition to `blur(0)` and `scale(1)`.

```css
.ibl-image {
  filter: blur(20px);
  transform: scale(1.1);
  transition: filter 1.2s ease-out, transform 1.2s ease-out;
}
.ibl-container[style*="--ibl-loaded"] .ibl-image {
  filter: blur(0);
  transform: scale(1);
}
```
