Glitch Text Hover

A CSS-only "digital glitch" effect for cyberpunk / tech UI: two duplicate text layers, colored cyan and magenta, sliced with animated clip-path and offset with transform, flash on top of the real text on hover or keyboard focus. No JavaScript, no images, no extra markup beyond a data-text attribute.

demo.html shows a hero heading, a nav-style link list, a button label, and three intensity variants side by side.

Files
File	Purpose
demo.html	Hero + nav links + button + intensity variant showcase
style.css	The glitch mechanism, tokens, and cyberpunk backdrop
README.md	This file
Markup
html
<h1 class="glitch" data-text="SIGNAL LOST">SIGNAL LOST</h1>

data-text must match the element's visible text exactly — it's read by content: attr(data-text) on the two pseudo-elements that form the glitch layers, so there's a single source of truth for the copy instead of duplicating it in the markup.

How it works

Each .glitch element gets two pseudo-elements, each a full duplicate of the text, pre-clipped to invisible (clip-path: inset(0 0 100% 0) / inset(100% 0 0 0)) and transparent:

css
.glitch::before { color: var(--gx-cyan);    clip-path: inset(0 0 100% 0); }
.glitch::after  { color: var(--gx-magenta); clip-path: inset(100% 0 0 0); }

On :hover / :focus-visible, three animations run at once, all on a steps(2, end) timing function so the motion reads as sharp digital jumps rather than a smooth ease:

The real text (ag-glitch-jitter) nudges a few pixels on a transform, scaled by --gx-amp.
The cyan layer (ag-glitch-slice-cyan) reveals shifting horizontal bands via clip-path: inset(...) and shifts left.
The magenta layer (ag-glitch-slice-magenta) does the same with different band positions, offset timing, and shifts right.

The two layers never reveal the same band at the same time, so the result reads as the text tearing into color-fringed slices rather than just producing a blurry double image.

CSS custom properties
Property	Default	Controls
--gx-amp	4px	How far the jitter/slice layers travel — the "how broken does it look" dial
--gx-duration	420ms	Length of one full glitch cycle
--gx-cyan / --gx-magenta	neon cyan / magenta	The two split-channel colors

Both are set per-instance in the demo (.glitch-hero, .glitch-nav-link, .glitch-btn-label, and the three .glitch-subtle / .glitch-default / .glitch-heavy variants), so the same two keyframe sets produce a whole range of intensities without being rewritten.

css
.glitch-heavy {
  --gx-amp: 9px;
  --gx-duration: 260ms;
}
Preview toggle

Because the effect is hover/focus-only by default, the demo includes a "Preview without hovering" switch (checkbox hack, top of the page) that applies the same glitch state globally, so reviewers can see it without needing to move a cursor around. This is a demo convenience, not part of the shipped component's required markup.

Button variant

The button glitches its label rather than itself, keeping the button's shape and hit target stable while only the text tears. It repeats the same three animations directly on .cyber-btn:hover .glitch-btn-label rather than relying on .glitch:hover, since the trigger is the parent button, not the label itself.

Accessibility
The glitch is purely visual/decorative; the real, readable text is the element's own text content, not something only present in a pseudo-element.
Triggers on :focus-visible as well as :hover, so keyboard users see the same feedback mouse users do.
Respects prefers-reduced-motion: reduce — the jitter and slicing animations are removed entirely and replaced with a static two-pixel RGB-split offset, so the "glitched" identity survives without motion.
Known limitation: because the glitch layers duplicate the text via content: attr(data-text), some screen reader / browser combinations may announce that duplicated content in addition to the real text. This is a common trade-off for this specific effect industry-wide; if a project needs to rule it out entirely, wrapping the pseudo-generating container in aria-hidden="true" alongside a separate visually-hidden copy of the real text is the more bulletproof (if more verbose) alternative.
Responsive behavior

The intensity-variant grid drops from three columns to one at 640px; the hero heading's clamp() font size keeps it legible without overflowing on narrow viewports.

Browser support

Uses clip-path, CSS custom properties inside @keyframes (widely supported), and standard animations — works in all current evergreen browsers. Where clip-path is unsupported the pseudo-layers simply don't reveal, so hovering falls back to a plain (non-glitching) text color change with no layout break.