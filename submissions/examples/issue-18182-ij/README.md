# ease-sweep-reveal

A pure-CSS text reveal effect where a sweeping gradient overlay moves across content, unveiling it as it passes.

## Usage

Open `demo.html` in any modern browser. The sweep runs continuously on the heading.

## Customisation

Override these CSS custom properties on `.sweep-reveal`:

| Property          | Default                                      | Description            |
|-------------------|----------------------------------------------|------------------------|
| `--sweep-color`   | `linear-gradient(90deg, transparent, #f7e05e, transparent)` | Sweep gradient         |
| `--sweep-speed`   | `3s`                                         | Animation duration     |
| `--sweep-direction` | `left`                                      | Sweep movement direction |

## Files

- `demo.html` — HTML page
- `style.css` — Styles and keyframes
- `README.md` — This file

## Accessibility

Respects `prefers-reduced-motion: reduce` — the sweep animation is disabled and text is fully revealed.
