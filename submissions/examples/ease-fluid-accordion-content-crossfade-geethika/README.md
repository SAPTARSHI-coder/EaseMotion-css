# Ease Fluid Accordion — ease-fluid-accordion-content-crossfade (geethika)

A nestable, accessible accordion that uses CSS Grid to animate panel height (grid-template-rows: 0fr → 1fr) combined with an inner cross-fade/slide for smooth content reveal.

Files
- `demo.html` — demo page and inline JS state manager
- `style.css` — component styles using CSS Grid auto-height + crossfade
- `README.md` — this file

Summary
- Smooth auto-height using CSS Grid (`grid-template-rows: 0fr → 1fr`).
- Crossfade + slide content animation for polished reveal.
- Multi-level nestable accordion support (`.ease-accordion` nested inside panels).
- Accessible markup and keyboard support (see Accessibility).

Usage
1. Place this folder under `submissions/examples/ease-fluid-accordion-content-crossfade-geethika/`.
2. Open demo.html in a browser (files are self-contained).
3. To allow multiple panels open at once, add `data-allow-multiple="true"` on the `.ease-accordion` root.

Accessibility
- Each header is a `<button>` with `aria-expanded` and `aria-controls`.
- Panels have `role="region"` and `aria-labelledby`.
- Keyboard navigation:
  - ArrowDown / ArrowUp — move focus between headers (wraps).
  - Home / End — jump to first / last header.
  - Enter / Space — toggle expanded state.

Testing checklist
- [ ] Clicking a header expands/collapses with a smooth height transition.
- [ ] Arrow icon rotates to reflect open/closed state.
- [ ] Keyboard navigation works (ArrowUp/ArrowDown/Home/End; Enter/Space).
- [ ] Nested accordion sections open/close independently.

Notes
- The example is dependency-free (vanilla JS + CSS).
- If requested, I can add a JS-free progressive-enhancement variant.
