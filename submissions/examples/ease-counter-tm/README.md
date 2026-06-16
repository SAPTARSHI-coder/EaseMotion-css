# Scroll-Triggered Counter Animation

## What does this do?
A scroll-triggered animated number counter component that counts up from zero when scrolled into view. Supports custom prefixes, suffixes (K, M, %), easing curves, and responsive sizing. Uses a minimal JavaScript snippet to trigger the CSS animation via Intersection Observer.

## How is it used?
Place the counter with data attributes for the target value:

    <div class="ease-counter-wrapper">
      <div class="ease-counter-number" data-target="1000" data-suffix="+">
        <span class="ease-counter-prefix"></span>
        <span class="ease-counter-value">0</span>
        <span class="ease-counter-suffix">+</span>
      </div>
      <div class="ease-counter-label">Active Users</div>
    </div>

Include the small JS snippet from demo.html for Intersection Observer activation. Use `.ease-counter-fast` or `.ease-counter-slow` on the wrapper for timing variants.

## Why is it useful?
Animated counters are a staple of landing pages, dashboards, and statistics sections. They draw attention to key metrics and create a sense of achievement as numbers "roll up." The scroll-triggered activation ensures the animation plays at the right moment for maximum impact.

## Tech Stack
- HTML
- CSS (no frameworks)
- Minimal vanilla JavaScript (Intersection Observer only)

## Preview
Open demo.html directly in your browser. Scroll down to see the counters animate.

## Contribution Notes
- CSS `@keyframes ease-kf-counter-count` handles the number increment animation
- Intersection Observer in the JS snippet adds `.ease-counter-animate` class when in viewport
- Easing uses `steps()` function to create a count-up feel in pure CSS
- Fallback: when `prefers-reduced-motion: reduce`, counters display the final value immediately without animation
- All colors use EaseMotion CSS custom properties for theme compatibility
