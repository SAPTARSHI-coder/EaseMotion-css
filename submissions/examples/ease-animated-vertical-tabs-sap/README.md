# Animated Vertical Tabs

Vertical tabs with a sliding highlight pill that glides to the active tab's
position, plus a subtle fade-in on the panel content.

**Level:** Intermediate

## Usage

Standard WAI-ARIA tabs pattern (`role="tablist"`/`role="tab"`/
`role="tabpanel"`). Clicking or arrowing between tabs calls `activate()`,
which updates ARIA state, panel visibility, and repositions
`.tab-indicator` using each tab's `offsetTop`/`offsetHeight`.

## Accessibility

- Full ARIA tabs pattern: `role="tablist"`, `aria-orientation="vertical"`,
  `role="tab"` with `aria-selected`, `role="tabpanel"` with
  `aria-labelledby`, and inactive panels marked `hidden`.
- ArrowUp/ArrowDown move focus between tabs per the vertical tabs pattern.
- `prefers-reduced-motion` removes the indicator's slide transition and the
  panel fade-in; the indicator still repositions, just instantly.

## Notes

- Indicator position/size is computed from the active tab's own
  `offsetTop`/`offsetHeight` on activation and on load, so it stays correct
  even if tab label lengths differ.
- Panels are toggled with the `hidden` attribute (not just CSS) so inactive
  panel content is fully removed from the accessibility tree and tab order.