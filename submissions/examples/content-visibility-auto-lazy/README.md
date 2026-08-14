# content-visibility: auto — Lazy Rendering

Illustrates `content-visibility: auto` for lazy rendering of long page sections. The first section renders immediately; all subsequent sections are skipped during initial paint and rendered lazily as the user scrolls near them.

## Usage

Open `demo.html` and observe the initial render. The first section has a highlighted left border (always rendered). Scroll down — each lazy section is painted only when it approaches the viewport, reducing initial paint time.

## Notes

- `content-visibility: auto` skips rendering of off-screen elements, improving initial load performance.
- Each lazy section uses `contain-intrinsic-size` to reserve layout space and prevent scrollbar thrashing.
- `contain: layout style paint` is applied for additional rendering isolation.
- Best suited for long articles, product catalogs, and infinite-scroll interfaces.
