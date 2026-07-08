# Anchor Link Highlight Component (CSS-Only)

A lightweight inline link micro-interaction module that shifts smoothly from an underline vector to a solid contextual focus block using hardware-accelerated transforms.

## Features
* **Directional Origin Shifting:** Uses flipping `transform-origin` vectors to slide underlining layers inward from the right and exit cleanly to the left.
* **Compound Focus Transformations:** Morphs the underline height scale factor (`height: 100%`) dynamically during keyboard focus states (`:focus-visible`), wrapping the target phrase in a distinct accessibility mask.
* **Reflow-Isolated Compositing:** Minimizes screen painting cost by animating spatial parameters exclusively via the GPU layer processing track.

## Custom Parameter Map

| CSS custom Variable | Default Token Assignment | Target Scope |
| :--- | :--- | :--- |
| `--ease-link-accent` | `#38bdf8` | Color given to text and the underline stroke. |
| `--ease-link-highlight` | `rgba(56, 189, 248, 0.15)` | Background fill applied during focus-expanded events. |
| `--ease-link-duration` | `0.3s` | Total pacing matrix timing allocated to transition runs. |