# Announcement Bar Component (CSS-Only)

A responsive, high-performance endless-scrolling site announcement banner built entirely with pure CSS transforms and zero JavaScript footprint dependencies.

## Features
* **Seamless Marquee Synchronization:** Links twin duplicated layout spans tracking at matching inline coordinates (`-100%`) to implement a seamless text loop pattern.
* **WCAG Compliance Protection:** Pauses animation tracks (`animation-play-state: paused`) when a user triggers focus locks or pointers anywhere inside the grid boundary.
* **Reflow-Safe Top Dismissal:** Employs adjacent sibling sibling rules (`+`) via a hidden input to translate the element cleanly out of view without causing site layout stutters.

## Customizable Variable Definitions

| Variable Key Element | Default Asset Token | Implementation Target |
| :--- | :--- | :--- |
| `--ease-bar-speed` | `25s` | Complete time metric taken to pass one text loop. |
| `--ease-bar-bg` | `linear-gradient(...)` | Surface color gradient applied across background space. |
| `--ease-bar-accent` | `#38bdf8` | Highlight theme color applied to core alert links. |