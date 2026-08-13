# Animated Mic Wave Recording

A record button that, when active, shows a pulsing red glow plus a
five-bar audio waveform bouncing at staggered heights to suggest live audio input.

**Level:** Intermediate

## Usage

The button is `role="switch" aria-checked`. Clicking toggles recording
state, updates `aria-label` ("Start"/"Stop recording"), and toggles
`.is-active` on the wave bars alongside a text status update.

## Accessibility

- Button is `role="switch"` with `aria-checked` kept in sync and
  `aria-label` describing the next action.
- A separate `role="status" aria-live="polite"` text element ("Recording…"
  / "Not recording") announces the state change explicitly — the visual
  waveform and button color alone aren't accessible signals, so this text
  status is the actual source of truth for assistive tech.
- The waveform bars are `aria-hidden="true"` since they're purely
  decorative visual reinforcement of the state already announced via the
  status text.
- `prefers-reduced-motion` disables the bar-bounce animation, setting bars
  to a fixed mid-height instead, and removes the button's box-shadow pulse
  transition, so recording state is still clearly shown via color and
  static bar height without relying on motion.

## Notes

- Bar staggering uses fixed per-bar `animation-delay` (0.1s increments),
  the same pattern as other staggered-element components in this set.
- This is a UI-only demo; it doesn't wire up actual microphone access
  (`getUserMedia`) or real audio-level-driven bar heights — pair with the
  Web Audio API in production for bars that respond to actual input volume
  rather than a fixed animation loop.