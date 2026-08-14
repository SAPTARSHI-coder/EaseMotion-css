3D-Flip Dropdown

A dropdown panel for product catalog toolbars that opens by rotating down from its trigger on a 3D hinge — transform-origin at the top edge, rotateX() from a steep angle down to flat, under a perspective — rather than a plain fade or slide. Pure CSS, driven by the checkbox hack. No JavaScript.

demo.html shows it in a real catalog toolbar: a Category dropdown, a Sort dropdown, and a Filters dropdown with checkboxes inside, sitting above a small product grid for context.

Files
File	Purpose
demo.html	Catalog toolbar (3 dropdown variants) + product grid
style.css	The flip mechanism, tokens, and demo styling
README.md	This file
Markup
html
<div class="flip-dropdown">
  <input type="checkbox" id="dd-category" class="flip-dropdown__toggle">
  <label for="dd-category" class="flip-dropdown__close-overlay" aria-hidden="true"></label>
  <label for="dd-category" class="flip-dropdown__trigger">
    Category: <strong>All</strong>
    <span class="flip-dropdown__chevron" aria-hidden="true"></span>
  </label>
  <div class="flip-dropdown__panel" role="menu">
    <a href="#" class="flip-dropdown__item" role="menuitem">All categories</a>
    …
  </div>
</div>

Four pieces, in this order (order matters — the CSS relies on the general sibling combinator, which only looks forward):

The hidden checkbox — the actual state.
A full-viewport <label for="..."> overlay — invisible and inert while closed, becomes a click target the instant the dropdown opens, so clicking anywhere outside closes it.
The visible trigger <label for="...">.
The panel.
How the flip works
css
.flip-dropdown {
  perspective: var(--fd-perspective);
}

.flip-dropdown__panel {
  transform-origin: top center;
  transform: rotateX(var(--fd-flip-angle)); /* -100deg by default */
  opacity: 0;
}

.flip-dropdown__toggle:checked ~ .flip-dropdown__panel {
  transform: rotateX(0deg);
  opacity: 1;
}

The parent's perspective gives the rotation actual depth instead of looking like a squashed scale animation — without it, rotateX() still technically works but reads as flat and wrong. Starting the angle past -90deg (rather than exactly -90deg) means the panel is very slightly past "invisible edge-on" at rest, which avoids a one-frame flash of a perfectly knife-edge shape right as the transition begins.

visibility toggles alongside opacity — instant on the way in, delayed by the full transition duration on the way out — so the closed panel never intercepts clicks or keyboard focus while it's still animating out.

CSS custom properties
Property	Default	Controls
--fd-duration	420ms	Length of the flip transition
--fd-ease	cubic-bezier(0.2, 0.9, 0.25, 1)	Easing curve
--fd-perspective	1000px	3D depth — lower values exaggerate the flip, higher values flatten it
--fd-flip-angle	-100deg	Starting rotation before the panel opens
Anchor variant

.flip-dropdown-right (used on the Filters dropdown) right-aligns the panel instead of left-aligning it, so a trigger near the right edge of a toolbar doesn't force its panel off-screen. The flip mechanics are identical — only left/right on the panel changes.

Accessibility
The checkbox is real and stays in the tab order (hidden with a clip-based technique, not display: none), so <kbd>Tab</kbd> + <kbd>Space</kbd> opens/closes it exactly like a native checkbox.
.flip-dropdown__toggle:focus-visible ~ .flip-dropdown__trigger draws a visible ring on the trigger when the hidden checkbox has keyboard focus.
Closes on outside click via the overlay label, described above.
Panels carry role="menu" with role="menuitem" links, or plain checkboxes for the multi-select Filters panel.
Respects prefers-reduced-motion: reduce — the panel appears/disappears at its resting rotation immediately, with transitions collapsed to 1ms, so nothing spins for someone who's asked not to see it.