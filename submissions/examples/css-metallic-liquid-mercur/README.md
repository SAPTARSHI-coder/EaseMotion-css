Metallic Liquid Mercury

A puddle of fluid mercury: a harsh monochrome metallic gradient, two independently-drifting specular highlights for a wet, reflective glint, and an organic border-radius morph simulating shifting surface tension. Pure CSS — no SVG filters, no images, no JavaScript.

Files
File	Purpose
demo.html	One large puddle + three smaller droplet variants
style.css	The layered gradient, morph, and shimmer mechanics
README.md	This file
How the metal look works

The blob's background is a single conic-gradient alternating between near-black and near-white stops — no color anywhere, which is what gives it the "harsh monochrome" chrome read rather than a soft, colorful blob:

css
background: conic-gradient(
  from 200deg at 50% 45%,
  var(--hg-metal-1) 0deg,
  var(--hg-metal-2) 55deg,
  var(--hg-metal-3) 95deg,
  var(--hg-metal-4) 150deg,
  var(--hg-metal-1) 200deg,
  var(--hg-metal-2) 260deg,
  var(--hg-metal-5) 310deg,
  var(--hg-metal-1) 360deg
);

On top of that, three stacked inset shadows do the volumetric work: a large dark one for the shaded underside, a smaller light one for the lit edge, and a soft dark one pulled all the way in for core depth — plus one regular (non-inset) shadow so the whole puddle casts a shadow onto the page beneath it.

How the shimmer works

Two absolutely-positioned ::-style children (.mercury-blob__highlight-1 and -2, real <span>s rather than pseudo-elements so they're easy to retarget from the demo markup) each carry their own radial-gradient glint and their own @keyframes drifting the gradient's background-position back and forth on independent durations:

css
.mercury-blob__highlight-1 {
  background: radial-gradient(circle at 30% 25%, ...);
  animation: hg-drift-1 var(--hg-shimmer-duration) ease-in-out infinite;
}

.mercury-blob__highlight-2 {
  background: radial-gradient(circle at 68% 70%, ...);
  animation: hg-drift-2 calc(var(--hg-shimmer-duration) * 1.4) ease-in-out infinite;
}

Because the two highlights move at different speeds and from different starting positions, they never stay in sync — that's what keeps the surface reading as liquid rather than a fixed metal texture with a static glare baked in.

How the surface-tension morph works

border-radius accepts up to eight independent values (four corners, each with a horizontal and vertical radius), which is enough to describe a properly irregular blob rather than a uniform oval. A single @keyframes animates between four such shapes:

css
@keyframes hg-morph {
  0%, 100% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
  25%      { border-radius: 62% 38% 30% 70% / 50% 62% 38% 50%; }
  50%      { border-radius: 50% 50% 62% 38% / 38% 55% 45% 62%; }
  75%      { border-radius: 35% 65% 46% 54% / 60% 38% 62% 40%; }
}
Hover interaction

Hovering the large puddle tightens it toward a rounder shape (as if disturbed and settling), deepens the inset shadows slightly, and doubles the shimmer speed — a small piece of feedback that the surface is reactive, not just decorative.

CSS custom properties
Property	Default	Controls
--hg-size	320px	Blob width (height is derived at a fixed aspect ratio)
--hg-morph-duration	11s	One full surface-tension cycle
--hg-shimmer-duration	7s	Base duration for highlight drift (highlight 2 runs at 1.4× this)
--hg-metal-1 … --hg-metal-5	near-black/near-white pairs	The conic-gradient's monochrome stops

The three droplet variants in the demo are each just 1–2 token overrides (--hg-size, plus --hg-morph-duration/--hg-shimmer-duration for the fast/slow pair) on top of the same markup and mechanism.

Accessibility
The blobs are marked aria-hidden="true" — they're decorative art with no informational content, so they're removed from the accessibility tree entirely rather than announced as empty elements.
Respects prefers-reduced-motion: reduce: both the morph and the shimmer animations are removed, and the blob holds at a single mid-morph shape (not its literal 0%/100% resting frame) so it still reads as a deliberately-shaped puddle rather than an animation that simply got interrupted.
Responsive behavior

--hg-size steps down at 560px for the hero puddle, and the droplet row's individual size token drops to match, so the three droplets stay proportionate to the (now smaller) hero piece rather than looking oversized next to it on a phone screen.

Browser support

Uses conic-gradient, multi-value border-radius, and standard background-position animation — all supported in current evergreen browsers. No fallback needed; in the rare case conic-gradient isn't supported, the element still renders as a shaped, shadowed shape using whatever the browser's default background handling produces.