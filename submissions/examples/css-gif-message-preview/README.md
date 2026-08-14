# CSS GIF Message Preview

An animated GIF-style preview card designed to sit inside a chat message
thread, built with pure CSS/HTML — no JavaScript, no actual GIF file
required. The looping motion is simulated with CSS `@keyframes`
(a shifting gradient plus two drifting blurred orbs), giving the
impression of a playing GIF.

## Files

- `demo.html` — a sample chat thread with GIF preview cards mixed in with
  regular text bubbles
- `style.css` — all styles and animations
- `README.md` — this file

## How it works

`.gif-preview-card` is a fixed-size card with an animated gradient
background (`gif-loop-shift`) and two pseudo-elements (`::before`,
`::after`) that drift around using their own `@keyframes` animations,
simulating the look of a small looping video/GIF. A `.gif-badge` label
sits in the top-left corner, matching how GIFs are commonly marked in
chat UIs.

## Usage

```html
<div
  class="gif-preview-card"
  role="button"
  tabindex="0"
  aria-label="Animated GIF preview, press Enter to play"
>
  <span class="gif-badge">GIF</span>
</div>
```

### Accessibility

- `role="button"` and `tabindex="0"` make the card focusable and
  keyboard-navigable.
- `aria-label` describes the card's purpose for screen readers.
- A visible `:focus-visible` outline is included for keyboard users.
- `prefers-reduced-motion: reduce` disables all looping animations.

### Responsive behavior

On narrow viewports (≤420px), the chat thread and GIF card scale down to
fit the available width.

## Why it fits EaseMotion CSS

Pure CSS/HTML, no JavaScript or external GIF assets, simple readable
`@keyframes` for the looping motion, and follows accessible, responsive
patterns consistent with the rest of the library.

## Notes

- No existing files were modified — this is a strictly additive
  contribution living entirely in
  `submissions/examples/css-gif-message-preview/`.
- The "GIF" itself is a CSS-only illusion (animated gradient + drifting
  orbs) rather than an actual image file, keeping the demo fully
  self-contained.
