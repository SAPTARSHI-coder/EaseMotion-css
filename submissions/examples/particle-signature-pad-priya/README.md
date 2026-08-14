# Particle Signature Pad — Music Player Design (CSS-Only)

A "sign to unlock" backstage-pass signature pad styled for a music streaming / concert-ticket experience. Signing draws a cursive signature stroke-by-stroke while musical note particles (♪ ♫) burst outward and fade — all with pure CSS, no JavaScript.

## What does this do?
The pad presents a mock music player card (spinning vinyl, mini equalizer, track info). Clicking **"Sign & Unlock Track"** triggers a sequenced animation: the signature line draws itself via an animated SVG stroke, glowing musical-note particles scatter outward along the path, and the button morphs into an "unlocked" confirmation state.

## How is it used?
The interaction is driven entirely by a hidden radio input toggled via a `<label>`, using the general sibling combinator (`~`) to cascade state changes — the same pure-CSS state-machine pattern used elsewhere in EaseMotion CSS's signature-pad variants.

```html
<input type="radio" id="state-idle" name="pad-state" checked class="state-control" />
<input type="radio" id="state-signing" name="pad-state" class="state-control" />

<div class="player-container">
  <div class="player-card">
    <!-- header, signature pad, particle emitters... -->
    <label for="state-signing" class="action-btn">Sign & Unlock Track</label>
    <label for="state-idle" class="reset-link">Clear & Reset Pad</label>
  </div>
</div>
```

Each particle emitter is a small wrapper positioned along the signature path; each `.particle` span carries a musical note glyph (♪/♫) plus `--dx`, `--dy`, and `--rot` custom properties that control its scatter direction, distance, and rotation:

```html
<div class="particle-emitter" style="left: 20%; top: 60%; --delay: 0.2s">
  <span class="particle" style="--dx: -14px; --dy: -10px; --rot: -20deg">♪</span>
</div>
```

## Features
* **Sequenced Animation:** SVG signature stroke draws over ~2.4s, followed by a flourish swoop, timed particle bursts, and a final "unlocked" state — all choreographed purely with `animation-delay`.
* **Musical Note Particles:** Unlike a generic dot/spark particle, each particle is an actual ♪ or ♫ glyph that scatters and rotates outward, tying the effect directly to the music-player theme.
* **Ambient Motion:** A spinning vinyl icon and a gently bouncing mini equalizer animate continuously in the header, independent of the signing interaction.
* **Zero JavaScript:** State is fully managed via a hidden `radio` input + CSS sibling selectors.
* **Accessible:** Reduced-motion users get all animations disabled via `prefers-reduced-motion`; decorative elements are marked `aria-hidden`.
* **Responsive:** Card padding and pad height scale down for small screens.

## Variable Reference Map

| CSS Parameter | Default Value | Purpose |
| :--- | :--- | :--- |
| `--mp-accent-pink` | `#ff4fd8` | Primary signature stroke / accent color. |
| `--mp-accent-purple` | `#a855f7` | Card glow and button gradient start. |
| `--mp-accent-cyan` | `#22d3ee` | Secondary stroke color / "unlocked" state color. |
| `--mp-surface` | `#1c1030` | Card background surface. |

## Accessibility Notes
* Decorative elements (`eq-bars`, `pad-wave-bg`) are marked `aria-hidden="true"`.
* All animation (vinyl spin, equalizer bounce, signature draw, particle scatter) is disabled under `prefers-reduced-motion: reduce`, with the signature shown instantly drawn instead.
* Interactive elements are real `<label for="...">` controls tied to a hidden radio input, so they remain keyboard and screen-reader operable without any JavaScript.