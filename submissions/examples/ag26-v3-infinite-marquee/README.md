Infinite Scrolling Marquee

A seamless, edge-faded ticker for announcements or logo strips, built entirely from a single CSS @keyframes loop — no JavaScript. Pauses on hover, on keyboard focus, and via a real pause control.

demo.html shows two variants: an announcement ticker with status badges, and a reversed, slower logo strip.

Files
File	Purpose
demo.html	Standalone showcase: announcement ticker + logo strip
style.css	All styling, tokens, and the marquee animation
README.md	This file
How the loop works

The track's content is duplicated exactly once:

html
<div class="marquee-track">
  <ul class="marquee-group">…real items…</ul>
  <ul class="marquee-group" aria-hidden="true">…exact duplicate…</ul>
</div>

The track is width: max-content (so it's as wide as both copies laid out side by side), and the animation moves it by exactly -50% of its own width — i.e. exactly one copy's worth of distance:

css
@keyframes em-marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

Because the second copy is identical to the first, the moment it finishes sliding into the first copy's old position is invisible — the loop has no seam, regardless of how much content is inside.

The duplicate list has aria-hidden="true" so screen readers only announce the content once.

Direction & speed

The logo strip reuses the exact same track/keyframes but adds animation-direction: reverse and a shorter --marquee-duration, so one mechanism drives both directions and both speeds:

css
.marquee-track-logos {
  animation-direction: reverse;
}
Pausing — three ways

Auto-scrolling content that runs longer than five seconds needs to be pausable to meet WCAG 2.2.2, so this isn't just a nicety:

Hover — .marquee-frame:hover .marquee-track { animation-play-state: paused; }
Keyboard focus — :focus-within on the frame does the same, for anyone tabbing through the page rather than using a mouse.
An explicit, persistent pause button — the ticker includes a checkbox-hack toggle (hidden <input type="checkbox"> + <label for="...">) so a visitor can turn the motion off entirely, not just while their cursor happens to be over it. The label's icon swaps between a pause glyph and a play triangle purely via :checked — no image assets, no JS.

The logo strip intentionally ships only hover/focus pausing, to show the lighter-weight version of the pattern for content that isn't the primary carrier of information on the page.

CSS custom properties
Property	Default	Controls
--marquee-duration	26s	One full loop's duration — override per .marquee-track instance
--marquee-gap	40px	Space between items within a copy, and between the two copies
--marquee-fade	64px	Width of the fade-to-transparent zone at each edge

Example — a faster, tighter variant:

css
.marquee-track-logos {
  --marquee-duration: 18s;
  --marquee-gap: 56px;
}
Edge fade

The frame masks its own content with a linear gradient (mask-image/-webkit-mask-image) that's transparent at both ends and opaque in the middle, so items fade smoothly in and out instead of being clipped by a hard edge:

css
mask-image: linear-gradient(
  to right,
  transparent 0,
  black var(--marquee-fade),
  black calc(100% - var(--marquee-fade)),
  transparent 100%
);
Accessibility
Meets WCAG 2.2.2 (pause/stop/hide) via the three pausing methods above.
prefers-reduced-motion: reduce sets animation-play-state: paused immediately — the ticker renders as a static list rather than launching into motion and then stopping.
Duplicate content is aria-hidden="true" so assistive tech reads each message once, not on a loop.
The pause toggle is a real, focusable form control with a visible :focus-visible ring, not a <div> with a click handler.
Responsive behavior

Gap and edge-fade width shrink at 640px so the fade zone doesn't eat a disproportionate amount of a narrow viewport, and type sizes step down slightly to match.

Browser support

Uses CSS custom properties, mask-image (with a -webkit- prefix for Safari), and standard keyframe animations — supported in all current evergreen browsers. Without mask-image support the frame simply loses the edge fade and clips cleanly instead; the scrolling itself is unaffected.