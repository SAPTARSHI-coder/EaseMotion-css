# Animated Audio Player Widget — Neumorphism

Pure CSS component for **EaseMotion-css** — closes issue
[#85712](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/85712)
("feat: create Animated Audio Player Widget with Neumorphism styling").

## What it is

A soft-UI ("neumorphic") audio player card: a spinning vinyl-style disc,
a 12-bar equalizer, a progress bar, transport controls, a like button, and
a volume slider — all styled with carved/embossed shadows instead of flat
color blocks.

Every stateful interaction (play/pause, like/unlike, motion running or
paused) is driven by the **checkbox hack** — two hidden `<input
type="checkbox">` elements toggled by `<label>`s — so there is **zero
JavaScript**. Toggling play:

- spins the disc (`animation-play-state`)
- runs the waveform bars, each with its own negative `animation-delay` so
  they look reactive rather than mechanically synced
- runs the progress-bar fill animation
- swaps the play icon for a pause icon

## Files

| File | Purpose |
|---|---|
| `index.html` | Component markup |
| `style.css` | All styling, tokens, and motion, no JS |

## Design tokens

Defined as CSS custom properties in `:root` so the palette and shadow
system are reusable across other EaseMotion components:

- `--em-base` / `--em-shadow-light` / `--em-shadow-dark` — the neumorphic
  surface and its two-tone soft shadows (`--em-raised`, `--em-inset`,
  and small variants for compact controls)
- `--em-accent` (teal) / `--em-highlight` (amber) — used together as a
  gradient across the equalizer bars and progress fill
- `--em-like` — heart fill color on the like toggle
- `--em-ease-out`, `--em-ease-in-out`, `--em-ease-spring` — shared easing
  curves used for hover lift, icon swaps, and the like-button pop

## Accessibility

- `prefers-reduced-motion: reduce` disables the disc spin, waveform
  bounce, and progress animation, and snaps the progress bar to a fixed
  position instead of leaving it at 0%.
- All interactive controls (`play/pause`, `like`, `prev/next`, `volume`)
  are real focusable elements with visible `:focus-visible` outlines and
  `aria-label`s.
- Play/pause and like state are exposed as checkboxes rather than
  `div`s with click handlers, so they're operable and readable by
  assistive tech without any JS.

## Responsive behavior

Card width and disc size scale down under 400px, and the surrounding
page padding increases on wider viewports (≥700px) so the card doesn't
feel lost on desktop.

## Usage

Open `index.html` directly in a browser. To drop this into an existing
EaseMotion page, copy the `.em-player` markup block and `style.css`, then
remap the `--em-*` custom properties to your existing theme tokens if you
already have a palette defined elsewhere.

## Suggested branch name

```
feat/neumorphic-audio-player-85712
```