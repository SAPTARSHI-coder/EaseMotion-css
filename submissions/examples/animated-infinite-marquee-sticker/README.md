# Infinite Marquee / Ticker Scroll

## What does this do?
Scrolls a row of content (logos, tags, announcements) horizontally in a
seamless infinite loop, pausing smoothly when hovered.

## How is it used?
Duplicate the inner content once inside .marquee-track (so the loop point
is invisible), wrap it in .marquee for overflow clipping, and the
@keyframes handles the rest — zero JS required.

## Why is it useful?
- Extremely common landing-page pattern (logo walls, tag clouds, banners)
- Pure CSS, GPU-accelerated via transform, no jank
- Hover-to-pause is a nice UX touch with a single extra rule
- Fits EaseMotion's zero-dependency, drop-in philosophy