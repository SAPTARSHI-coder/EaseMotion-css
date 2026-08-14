# Animated WiFi Signal Icon

A WiFi status icon whose arcs light up in sequence from innermost to
outermost, suggesting an active search/connection process.

**Level:** Beginner

## Usage

Drop the `.wifi-icon` markup anywhere connection status needs indicating.
No JS required — the staggered pulse is handled via per-arc `animation-delay`.

## Accessibility

- The whole icon is `role="img"` with a descriptive `aria-label`
  ("WiFi connected, searching for signal"), so screen readers get a single
  clear description rather than trying to interpret four separate decorative arcs.
- `prefers-reduced-motion` disables the pulse animation and sets all arcs to
  full opacity with the active color, so a clear (fully "connected-looking")
  static state remains rather than a dim, ambiguous one.

## Notes

- Staggering uses fixed `animation-delay` per arc (0.2s increments) rather
  than a JS loop, mirroring the pattern used in other staggered-dot
  components in this set.
- This is a generic animated status icon; swap the `aria-label` text to
  match the actual connection state your app is representing (e.g.
  "WiFi connected", "No signal") rather than using this exact wording verbatim.