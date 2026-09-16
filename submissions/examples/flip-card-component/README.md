# ease-flip-card

A 3D flip card that rotates on the Y-axis to reveal back-side content, triggered by hover or keyboard focus/click — pure CSS, no JavaScript.

## What
Adds `.ease-flip-card` (hover-triggered by default) and `.ease-flip-card-click` modifier (focus/click-triggered, for touch/keyboard accessibility), with `.ease-flip-card-front` / `.ease-flip-card-back` faces inside `.ease-flip-card-inner`.

## How
- Uses `perspective` on the outer container and `transform-style: preserve-3d` + `backface-visibility: hidden` on the inner faces to create a true 3D flip illusion.
- The inner wrapper rotates `rotateY(180deg)` on `:hover` (default) or `:focus-within` (click/keyboard variant using `tabindex="0"`), so both mouse and keyboard users can trigger it without JS.
- Respects `prefers-reduced-motion` by removing the transition (flip becomes instant).

## Why
Flip cards are a widely used pattern for pricing tables, team/profile cards, and flashcard-style content. EaseMotion CSS has hover-based cards already but no 3D-perspective flip interaction — this adds a genuinely different animation technique (3D transforms) to the library.

## Files
- `demo.html` — hover-triggered and click/focus-triggered examples
- `style.css` — the `ease-flip-card` classes
- `README.md` — this file

## Usage
\```html
<div class="ease-flip-card" tabindex="0">
  <div class="ease-flip-card-inner">
    <div class="ease-flip-card-front"><h3>Front</h3></div>
    <div class="ease-flip-card-back"><p>Back content</p></div>
  </div>
</div>
\```