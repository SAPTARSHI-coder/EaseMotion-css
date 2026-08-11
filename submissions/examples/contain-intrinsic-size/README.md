# contain-intrinsic-size

Demonstrates `contain-intrinsic-size` combined with `content-visibility: auto` to reserve layout space for off-screen elements. This technique prevents scrollbar jank and layout shifts when lazy-rendering sections of a long page.

## Usage

Open `demo.html` and scroll down. The first section is always rendered. Subsequent sections use `content-visibility: auto` with `contain-intrinsic-size: 320px`, reserving vertical space before they enter the viewport.

## Notes

- `contain-intrinsic-size` acts as a placeholder size for elements with `content-visibility: auto`.
- Without it, the browser cannot allocate layout height for off-screen content, causing scrollbar length changes.
- Combine with `contain: layout style paint` for full rendering isolation.
- Ideal for long-scrolling pages, feeds, and virtualized lists.
