# Live Badge

A pulsing "LIVE" status badge, the common streaming-platform UI pattern (Twitch, YouTube Live, Instagram, etc.) — a red dot with an expanding, fading glow ring next to bold "LIVE" text.

## How it works

1. **The dot**: a small solid red circle (`.live-dot`) sits inline with the "LIVE" text.
2. **The ping**: a `::before` pseudo-element on the dot is the same size and color, positioned exactly on top of it via `inset: 0`. It animates from `scale(1)` / `opacity: 0.75` up to `scale(2.5)` / `opacity: 0`, repeating forever — this mimics Tailwind's `animate-ping` utility, giving the glow/ripple effect without any extra markup.
3. **The easing**: `cubic-bezier(0, 0, 0.2, 1)` is the same "ease-out" curve Tailwind's ping animation uses, so the ring starts fast and decelerates as it fades, feeling like a radar ping rather than a linear blink.
4. **The badge**: a pill-shaped container with a red border/tint and bold, letter-spaced "LIVE" text completes the look.

## Files

- `index.html` — markup with three badge style variants
- `style.css` — dot, ping animation, and badge styles

## Variants included

- `.live-badge` — default: red border with a soft red tint background
- `.live-badge--outline` — outline only, transparent background
- `.live-badge--solid` — solid red fill background

All three share the same pulsing dot.

## Customization

- **Color**: change `--live-red` in `:root` to re-theme the whole badge and dot.
- **Pulse speed**: change `--live-ping-speed` (default `1.5s`).
- **Pulse size**: adjust the `scale(2.5)` value in `@keyframes live-ping` for a bigger or smaller glow.
- **Dot size**: adjust `width`/`height` on `.live-dot`.

## Browser support

Works in all modern browsers — uses standard CSS animations and pseudo-elements only, no vendor prefixes required.
