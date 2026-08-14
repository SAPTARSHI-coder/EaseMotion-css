# Trailing-edge fade (truncate-shadow) Sass mixin

A Sass mixin that fades a scrollable container's trailing edge toward its background colour, signalling more content without a hard cut, and fades out once scroll position reaches the end.

## What it does
- Applies a CSS `mask-image` gradient so the trailing edge of a scrollable region fades into the background.
- Provides an overlay pseudo-element whose opacity drops to 0 when the container reaches the scroll end (toggle via `data-scroll-end="true"`).
- Works for vertical or horizontal scroll.

## Files
- `_truncate-shadow.scss` — the mixin partial

## Usage
```scss
@use "./truncate-shadow" as *;

.scroll-y {
  @include truncate-shadow(var(--ease-bg, #1e293b), 2rem, vertical);
}
```

### Reaching the end
Set `data-scroll-end="true"` on the container when `scrollTop + clientHeight >= scrollHeight` (or the horizontal equivalent) to fade out the indicator.

## Accessibility
- The fade is decorative; it does not hide content from assistive tech (mask affects painting only).

Closes #75555
