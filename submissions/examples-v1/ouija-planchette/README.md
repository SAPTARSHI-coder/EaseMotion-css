# Ouija Planchette

A mystical Ouija planchette animation — a fully rendered spirit board with a heart-shaped, crystal-windowed planchette that glides across the letters to spell out messages. Pure CSS + vanilla JavaScript, zero dependencies.

## Preview

Open `demo.html` in a browser to see it in action.

## Features

- **Detailed Ouija board** — full A–Z alphabet arranged in a curved grid, numbers 0–9, YES/NO, GOODBYE, and the four corner symbols (sun, moon, star, diamond)
- **Moving planchette** — heart-shaped pointer with a crystal-clear window, gliding smoothly between letters using GPU-accelerated transforms
- **Letter-by-letter spelling** — messages appear one character at a time in the display panel as the planchette visits each letter
- **Highlight ring** — a pulsing ring appears around the currently selected letter
- **Glowing effects** — ambient board glow, planchette glow trail, and shimmering window, all tied to an adjustable intensity
- **Interactive controls**
  - **Ask the Spirits** — triggers a random message
  - **Reset** — returns the planchette to center
  - **Speed slider** — controls how quickly the planchette moves between letters
  - **Glow slider** — controls the intensity of all glow effects
  - **Click anywhere on the board** — also triggers a session
- **Responsive** — adapts to any container width via percentage-based layout and `aspect-ratio`
- **Accessible** — board is keyboard-operable (Enter/Space), message panel uses `aria-live`, and all motion respects `prefers-reduced-motion`
- **Zero dependencies** — pure CSS + vanilla JS, no libraries required

## Usage

Include the two files in your project:

```html
<link rel="stylesheet" href="style.css" />
<!-- board markup from demo.html -->
<script src="your-script.js"></script>
```

The component builds its letter/number grid dynamically in JavaScript, so no manual markup is required beyond the container structure shown in `demo.html`.

### Customization

All visual theming is controlled through CSS custom properties on `.ouija-board`:

| Variable | Description | Default |
|---|---|---|
| `--wood-dark`, `--wood-mid`, `--wood-light` | Board wood-grain gradient stops | `#2b1a12`, `#3d2517`, `#4a2f1d` |
| `--ink` | Letter/symbol color | `#e8dcc0` |
| `--accent` | Highlight/glow accent color | `#d9a441` |
| `--glow-color` | RGB triplet used for all glow effects | `255, 200, 120` |
| `--glow-intensity` | Overall glow strength (0–1), wired to the Glow slider | `0.6` |

### JavaScript API surface

The demo script exposes its behavior through simple DOM hooks rather than a formal API, so it's easy to adapt:

- `askSpirits()` — spells a random message from the built-in word list
- `resetPlanchette()` — returns the planchette to center and clears the message
- `spellMessage(word)` — spells any word made up of board characters (A–Z, 0–9, or the words YES / NO / GOODBYE)

## Technical Highlights

- GPU-accelerated `transform`/position transitions for smooth planchette movement
- CSS keyframe animations for the highlight ring, board glow pulse, and window shimmer
- CSS custom properties for easy re-theming
- Letters and numbers are positioned along a curved arc using trigonometric placement computed once in JavaScript, then read back via `getBoundingClientRect` for precise planchette targeting
- Fully responsive — all positioning is percentage- and `aspect-ratio`-based
- `prefers-reduced-motion` disables transitions and pulsing animations, snapping the planchette directly to each letter instead

## Use Cases

- Mystical and spiritual websites
- Halloween and supernatural-themed designs
- Interactive storytelling and narrative projects
- Gaming interfaces (loading screens, menu backgrounds)
- Branding for mystical and magical experiences
- Interactive art and installations
- Ambient and atmospheric designs
- Occult and esoteric content