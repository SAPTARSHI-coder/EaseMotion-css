# Glowing Material Toggle

A Material Design 3–styled switch: an outlined track with a small thumb
when off, a filled track with a larger elevated thumb when on, motion
timed with MD3's own easing curve, and a soft glow halo around the thumb
while on — plus a one-shot pulse ring that fires exactly once on every
state change, not a continuous animation. Pure CSS, driven by the
checkbox hack.

## Files

| File | Purpose |
|---|---|
| `demo.html` | A settings panel + a size/accent variant grid |
| `style.css` | Every mechanic below, plus all styling |
| `README.md` | This file |

## Markup

```html
<label class="md-toggle">
  <input type="checkbox" class="md-toggle__input">
  <span class="md-toggle__track">
    <span class="md-toggle__thumb"></span>
  </span>
</label>
```

## MD3 shape language: off vs on aren't just a color swap

Material Design 3 switches change *shape*, not just color, between
states — the thumb genuinely grows, and the track goes from outlined to
filled:

```css
.md-toggle__track {
  background: transparent;
  border: 2px solid var(--md-text-faint);
}

.md-toggle__thumb {
  width: var(--md-thumb-off);  /* 16px */
  height: var(--md-thumb-off);
}

.md-toggle__input:checked ~ .md-toggle__track {
  background: var(--md-primary);
  border-color: var(--md-primary);
}

.md-toggle__input:checked ~ .md-toggle__track .md-toggle__thumb {
  width: var(--md-thumb-on);   /* 24px */
  height: var(--md-thumb-on);
}
```

Both the size change and the position change (`transform: translateX()`)
run on the same `--md-motion-duration` / `--md-motion-ease` — MD3's
standard "emphasized" curve, `cubic-bezier(0.2, 0, 0, 1)` — so the thumb
grows and slides in one coherent motion rather than two competing ones.

## The glow — ambient plus a one-shot pulse

Two separate things are happening, and they're easy to conflate:

1. **Ambient glow** — while checked, the thumb carries a permanent soft
   `box-shadow` ring (`0 0 0 6px rgba(124, 158, 255, 0.22)`). This stays
   as long as the toggle is on; it's not an animation.
2. **The pulse** — a `::after` ring that animates from a small, bright
   circle to a larger, fully-transparent one, **once**, the instant the
   checkbox's `:checked` (or `:not(:checked)`) selector starts matching:

```css
.md-toggle__input:checked ~ .md-toggle__track .md-toggle__thumb::after {
  animation: md-pulse-on 480ms var(--md-motion-ease);
}

@keyframes md-pulse-on {
  0%   { opacity: 0.9; transform: scale(0.6); }
  100% { opacity: 0;   transform: scale(1.7); }
}
```

Because a plain (non-`infinite`) CSS animation runs exactly once when the
rule that triggers it starts applying, toggling the checkbox re-triggers
this every single time — there's no JavaScript timer resetting anything.
A second, dimmer `md-pulse-off` keyframe covers the reverse direction.

**One honest caveat:** CSS can't distinguish "this is the default state on
page load" from "the user just switched to this state" — both look
identical to a selector. So the pulse for whichever state a toggle starts
in *will* also play once on page load. In practice this reads as a nice
little "ready" flourish rather than a bug, but it's worth knowing if a
project wants to suppress it specifically on load (that would need a
small script adding a "loaded" class after first paint).

## CSS custom properties

| Property | Default | Controls |
|---|---|---|
| `--md-track-w` / `--md-track-h` | `52px` / `32px` | Track dimensions |
| `--md-thumb-off` / `--md-thumb-on` | `16px` / `24px` | Thumb size, off and on |
| `--md-motion-duration` | `220ms` | Shared duration for size, position, and color transitions |
| `--md-motion-ease` | `cubic-bezier(0.2, 0, 0, 1)` | MD3's standard easing curve |
| `--md-primary` | `#7c9eff` | On-state track/glow color |

## Variants

- `.md-toggle-sm` — smaller MD3-proportioned geometry (all four size
  tokens scaled down together).
- `.md-toggle-accent` — swaps the on-state track, glow, and pulse ring to
  a warm accent color instead of the default primary.
- `disabled` — add the attribute to the `<input>`; the track dims to 45%
  opacity and the cursor switches to `not-allowed` on both the track and
  (via `:has()`, purely cosmetic if unsupported) the label itself.

## Accessibility

- The checkbox is real and stays in the tab order (hidden with a
  clip-based technique, not `display: none`) — reachable with
  <kbd>Tab</kbd>, toggled with <kbd>Space</kbd>.
- `:focus-visible` draws a clear outline on the track when the hidden
  input has keyboard focus.
- The on/off state is signaled by position, track fill, thumb size, *and*
  glow together — never color alone — so it still reads for
  color-vision-deficient users.
- Every toggle in the settings panel is paired with a real `<label
  for="...">` carrying its name and a `<p>` description.
- Respects `prefers-reduced-motion: reduce`: all transitions collapse to
  `1ms` and the pulse ring animation is removed entirely (it's a flourish,
  not a state indicator — the ambient glow and thumb position alone
  already communicate on/off).

## Responsive behavior

The variant grid drops from four columns to two at `480px`; the settings
panel's padding tightens slightly so labels don't crowd the toggle.

## Browser support

Uses CSS custom properties, `box-shadow`, and standard
transitions/animations — supported everywhere current. The one
modern-only touch is `:has()` on the disabled-cursor rule for the label,
which is purely cosmetic and has no effect on function if unsupported.