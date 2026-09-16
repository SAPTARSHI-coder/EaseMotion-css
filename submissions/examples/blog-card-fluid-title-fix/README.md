# Blog Card — Fluid Title Overflow Fix

Fixes #57061: blog card titles overflowing outside the card, overlapping adjacent content, or causing horizontal scroll on narrow screens.

## How this differs from a typical fix

A common fix applies overflow-wrap: break-word plus a single font-size reduction at one max-width breakpoint. That works for the viewport width the developer tested, but:

- font size still jumps abruptly at the breakpoint instead of scaling smoothly
- it only reacts to the browser viewport, not the actual width of the card's container, so the same card looks wrong in a narrow sidebar on a wide screen
- very long titles that wrap correctly can still stretch a card several lines taller than its neighbors in a grid, with no option to keep cards visually uniform

This submission addresses all three:

- Fluid typography via clamp(1.05rem, 1rem + 1vw, 1.5rem), the title scales continuously with viewport width, no breakpoint jump.
- Container Queries (container-type: inline-size), the title also resizes based on the width of its own container, so it renders correctly in a narrow sidebar even on a wide screen, which a viewport-only media query cannot do.
- hyphens: auto alongside overflow-wrap/word-break, so very long unbroken words hyphenate instead of just breaking mid-word.
- Optional 2-line clamp (.blog-card__title--clamped) using -webkit-line-clamp for card grids that need uniform card heights, titles beyond 2 lines truncate with an ellipsis instead of stretching the card.

## Usage

1. Copy `style.css` into your project.
2. Wrap your card grid in an element with class="blog-container" (this sets up the container query context) and structure each card per demo.html: .blog-card containing .blog-card__title, .blog-card__excerpt, and .blog-card__btn.
3. Add .blog-card__title--clamped to any title you want limited to 2 lines with an ellipsis, instead of wrapping fully.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--bc-title-min` | `1.05rem` | Minimum title font size (smallest containers/viewports) |
| `--bc-title-max` | `1.5rem` | Maximum title font size (largest containers/viewports) |
| `--bc-text-color` | `#222` | Title text color |
| `--bc-muted` | `#555` | Excerpt/secondary text color |
| `--bc-accent` | `#2563eb` | Button background color |
| `--bc-radius` | `10px` | Card corner radius |
| `--bc-shadow` | `0 4px 10px rgba(0,0,0,0.1)` | Card drop shadow |

## Browser Support

- clamp() and overflow-wrap/hyphens: supported in all modern browsers.
- Container Queries (container-type, @container): supported in all current evergreen browsers (Chrome/Edge 105+, Firefox 110+, Safari 16+). Without support, the title still scales via clamp() and the viewport-based @media (max-width: 600px) fallback.
- -webkit-line-clamp: widely supported across modern browsers for the optional truncated variant.

## Accessibility

- Text remains selectable and readable at all sizes; hyphens: auto only affects visual line breaks.
- Truncated (--clamped) titles should be paired with a full title in the link's accessible name or a title attribute if truncation could hide important context.
