Float-Drift Carousel

A checkout upsell carousel: idle product cards drift gently in place (subtle vertical bob + tilt, staggered per card) until a shopper touches one, then that card holds still. Navigation is a real horizontal scroll-snap track with genuine per-slide prev/next arrows and dot indicators. Pure CSS/HTML — no JavaScript.

demo.html shows it in context: a mock checkout order summary above, then a "you might also like" carousel of five add-on products below.

Files
File	Purpose
demo.html	Order summary mock + 5-slide float-drift carousel
style.css	Drift animation, scroll-snap track, arrows, dots
README.md	This file
The drift animation

Each .product-card runs a continuous @keyframes loop combining a small vertical bob with a slight rotation:

css
.product-card {
  animation: fd-drift var(--fd-drift-duration) ease-in-out infinite;
}

@keyframes fd-drift {
  0%   { transform: translateY(0) rotate(0deg); }
  25%  { transform: translateY(calc(var(--fd-drift-y) * -1)) rotate(calc(var(--fd-drift-rotate) * -1)); }
  50%  { transform: translateY(calc(var(--fd-drift-y) * 0.4)) rotate(0deg); }
  75%  { transform: translateY(calc(var(--fd-drift-y) * -0.6)) rotate(var(--fd-drift-rotate)); }
  100% { transform: translateY(0) rotate(0deg); }
}

Each card gets a different negative animation-delay (0ms, -900ms, -1800ms...), which starts every card partway through the same cycle instead of all five bobbing in perfect unison — the drift reads as organic rather than mechanical.

Touching a card — :hover or :focus-within — pauses its own animation via animation-play-state: paused, so the product a shopper is actually looking at holds still while its neighbors keep drifting.

Navigation — genuinely relative prev/next, no JS

This is the part that usually needs JavaScript in a carousel: a "next" arrow that knows what "next" means relative to whichever slide is currently in view. Here it's solved with position: sticky inside each slide, not on a single fixed control:

html
<li class="carousel-slide" id="slide-2">
  <article class="product-card">…</article>
  <a href="#slide-1" class="carousel-arrow carousel-arrow-prev">&larr;</a>
  <a href="#slide-3" class="carousel-arrow carousel-arrow-next">&rarr;</a>
</li>

Because each <li> is exactly one viewport wide (flex: 0 0 100%) inside a horizontally scrolling track, only one slide's arrows are ever visible at a time — and position: sticky keeps them pinned to the left/right edge of that slide while it's in view. Since every slide's arrows point to its own actual neighbors, the arrows are correctly relative without a single line of script. First and last slides simply omit the arrow that would go out of bounds (rendered as a disabled <span> instead of an <a>).

Dots + :target highlight

Dots are plain anchor links to each slide's id:

html
<a href="#slide-3" class="carousel-dot" aria-label="Go to product 3"></a>

Clicking one lets the browser's native :target + scroll-snap-align combination scroll the track to that slide. As a progressive enhancement, :has() lights up the matching dot:

css
.carousel-section:has(#slide-3:target) .carousel-dot:nth-child(3) {
  background: var(--fd-accent);
  transform: scale(1.25);
}

Browsers without :has() support simply show plain, unhighlighted dots — navigation itself doesn't depend on it at all.

CSS custom properties
Property	Default	Controls
--fd-drift-duration	5200ms	Length of one full drift cycle
--fd-drift-y	8px	How far a card bobs vertically
--fd-drift-rotate	1.4deg	How far a card tilts during the cycle
Accessibility
Respects prefers-reduced-motion: reduce — the drift animation is removed entirely; cards sit still from the start.
Drifting also pauses on :hover and :focus-within, so a keyboard user tabbing into a card's "Add" button gets a stable target, not a moving one.
Arrows and dots are real <a> elements with descriptive aria-labels, not <div>s with click handlers — fully keyboard reachable, with a visible :focus-visible ring.
Disabled edge arrows (before the first slide, after the last) are rendered as inert <span aria-hidden="true"> rather than a disabled link with an href pointing nowhere useful.
Responsive behavior

Card width is fluid (min(240px, 72vw)), so a single card never overflows a narrow phone screen. Slide padding and arrow size tighten slightly below 560px.