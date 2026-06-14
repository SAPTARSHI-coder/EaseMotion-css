# content-visibility-demo

## What

A long-form page with many sections that demonstrates `content-visibility: auto` for lazy rendering. Sections below the fold are not rendered until the user scrolls near them. The `contain-intrinsic-size` property reserves layout space so the scrollbar remains stable and the page does not jump during scrolling.

## How

Each `<section>` (and its `.card` children) is styled with `content-visibility: auto` and `contain-intrinsic-size: 300px`. The page is intentionally long (15+ sections with placeholder text and images) so the rendering deferral is measurable. A performance note at the top shows the page's total DOM size and a comparison of render time with and without the property (via `performance.now()` markers).

## Why

Pages with a large DOM or many off-screen components can cause slow initial paint and janky scrolling. `content-visibility: auto` tells the browser to skip rendering (layout, paint, and compositing) for elements outside the viewport, dramatically reducing load time on content-heavy pages. Combined with `contain-intrinsic-size` to prevent scrollbar width oscillation, this is one of the highest-impact CSS properties for performance.
