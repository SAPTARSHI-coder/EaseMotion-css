# Accordion Panels

1. What does this do? An accordion where each panel content slides open with a smooth grow (animated via CSS grid-rows 0fr to 1fr), and the "+" icon rotates into an "x" when open.
2. How is it used? Build a `.accordion-panels` container of `.accordion-panels__item` (`<details>`) blocks, each with a `.accordion-panels__summary` (`<summary>`) holding a `.accordion-panels__title` and `.accordion-panels__icon`, and a `.accordion-panels__panel` wrapping the content. The native `open` attribute drives open/close; the panel grows via grid-template-rows and the icon rotates. No JavaScript needed.
3. Why is it useful? It gives an accessible accordion with native semantics (keyboard and screen-reader friendly), a smooth height animation without JavaScript, and `prefers-reduced-motion` support.
