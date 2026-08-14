# Core Web Vitals Impact Guide

Resolves #43652.

### What does this do?
Provides a side-by-side interactive demonstration explaining why EaseMotion uses hardware-accelerated CSS properties (`transform` and `opacity`) rather than `margin`, `top`, or `left`.

### How is it used?
It renders two animated boxes. The left box animates `margin-top`, which causes the elements below it to shift during the layout recalculation phase (triggering high Cumulative Layout Shift scores). The right box animates `transform: translateY()`, meaning the browser paints it on a separate compositor layer without shifting the surrounding DOM.

### Why is it useful?
Education is a key part of the EaseMotion library. By showing users the direct impact of animation choices on Core Web Vitals, it helps developers justify adopting EaseMotion over writing arbitrary CSS animations themselves.
