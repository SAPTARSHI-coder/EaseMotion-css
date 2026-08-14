# Floating Music Notes

Notes rise from the bottom of their container, drift gently side to side,
and fade out before reaching the top — each note on its own independent
timing, so the stream reads as organic rather than a repeating mechanical
loop. Pure CSS.

## Files

| File | Purpose |
|---|---|
| `demo.html` | A music player card + a standalone wide stage |
| `style.css` | The rise/drift/fade mechanic and demo styling |
| `README.md` | This file |

## Markup

```html
<div class="note-field" aria-hidden="true">
  <span class="note note-1">&#9834;</span>
  <span class="note note-2">&#9835;</span>
  <span class="note note-3">&#9834;</span>
</div>
```

## How one note's path works

Every note shares a single `@keyframes` — `translate()` handles both the
rise (Y) and the sideways drift (X) together, so the two motions are
locked to the same timeline rather than fighting as separate animations:

```css
@keyframes mn-rise {
  0%   { transform: translate(-50%, 0) rotate(0deg);   opacity: 0; }
  15%  { opacity: 0.9; }
  50%  { transform: translate(calc(-50% + var(--mn-drift, 12px)), -55%) rotate(6deg); }
  85%  { opacity: 0.5; }
  100% { transform: translate(-50%, -100%) rotate(-4deg); opacity: 0; }
}
```

The `-50%` term keeps the note horizontally centered on its own `left`
position throughout (so `left` sets *where* it rises from, not just its
starting edge), and `--mn-drift` is a per-note custom property — some
notes drift left, some right, by different amounts — added on top of
that centering rather than replacing it.

## Why every note has its own duration, delay, and drift

```css
.note-1 { left: 8%;  animation-duration: 5.2s; animation-delay: 0s;    --mn-drift: 14px; }
.note-2 { left: 24%; animation-duration: 6.4s; animation-delay: -1.4s; --mn-drift: -18px; }
.note-3 { left: 42%; animation-duration: 4.6s; animation-delay: -2.6s; --mn-drift: 10px; }
```

If every note used the same timing, they'd all rise in a single
synchronized column — visually more like a ticking metronome than
floating notes. Different durations mean notes drift out of sync with
each other permanently (not just at the start), different negative
delays stagger when each one begins its cycle, and alternating
`--mn-drift` signs mean neighboring notes visibly diverge instead of
drifting the same direction in lockstep.

## CSS custom properties

| Property | Set on | Controls |
|---|---|---|
| `--mn-drift` | each `.note-N` | Horizontal drift distance/direction at the midpoint of the rise |
| `--mn-accent` | `:root` | Note color |

Duration and delay are set directly via `animation-duration` /
`animation-delay` per note rather than custom properties, since they
also need to vary the note's `font-size` and `left` position together —
keeping all four per-note values in one selector block is easier to scan
and retune than splitting them across property declarations and
`calc()`.

## Player card context

The demo's first example anchors a `.note-field` to a spinning-record
style player card, with notes rising from behind the disc — the more
common real-world placement for this kind of decoration (a "currently
playing" indicator) rather than notes floating in an empty box.

## Accessibility

- The entire `.note-field` is `aria-hidden="true"` in both examples —
  it's decorative motion with no informational content of its own (the
  actual track/artist info is separate, real text).
- Respects `prefers-reduced-motion: reduce`: notes stop rising entirely
  and instead sit at a fixed, partially-visible resting position, so the
  decoration is still present without any motion; the equalizer bars in
  the player card similarly stop bouncing.

## Responsive behavior

Below `480px` the player card wraps, moving the equalizer bars to their
own row so they don't compress the track/artist text; the standalone
stage's height reduces slightly to match.

## Browser support

Uses only `transform`, `opacity`, CSS custom properties, and standard
keyframe animations — supported everywhere current, no fallback needed.# Floating Music Notes

Notes rise from the bottom of their container, drift gently side to side,
and fade out before reaching the top — each note on its own independent
timing, so the stream reads as organic rather than a repeating mechanical
loop. Pure CSS.

## Files

| File | Purpose |
|---|---|
| `demo.html` | A music player card + a standalone wide stage |
| `style.css` | The rise/drift/fade mechanic and demo styling |
| `README.md` | This file |

## Markup

```html
<div class="note-field" aria-hidden="true">
  <span class="note note-1">&#9834;</span>
  <span class="note note-2">&#9835;</span>
  <span class="note note-3">&#9834;</span>
</div>
```

## How one note's path works

Every note shares a single `@keyframes` — `translate()` handles both the
rise (Y) and the sideways drift (X) together, so the two motions are
locked to the same timeline rather than fighting as separate animations:

```css
@keyframes mn-rise {
  0%   { transform: translate(-50%, 0) rotate(0deg);   opacity: 0; }
  15%  { opacity: 0.9; }
  50%  { transform: translate(calc(-50% + var(--mn-drift, 12px)), -55%) rotate(6deg); }
  85%  { opacity: 0.5; }
  100% { transform: translate(-50%, -100%) rotate(-4deg); opacity: 0; }
}
```

The `-50%` term keeps the note horizontally centered on its own `left`
position throughout (so `left` sets *where* it rises from, not just its
starting edge), and `--mn-drift` is a per-note custom property — some
notes drift left, some right, by different amounts — added on top of
that centering rather than replacing it.

## Why every note has its own duration, delay, and drift

```css
.note-1 { left: 8%;  animation-duration: 5.2s; animation-delay: 0s;    --mn-drift: 14px; }
.note-2 { left: 24%; animation-duration: 6.4s; animation-delay: -1.4s; --mn-drift: -18px; }
.note-3 { left: 42%; animation-duration: 4.6s; animation-delay: -2.6s; --mn-drift: 10px; }
```

If every note used the same timing, they'd all rise in a single
synchronized column — visually more like a ticking metronome than
floating notes. Different durations mean notes drift out of sync with
each other permanently (not just at the start), different negative
delays stagger when each one begins its cycle, and alternating
`--mn-drift` signs mean neighboring notes visibly diverge instead of
drifting the same direction in lockstep.

## CSS custom properties

| Property | Set on | Controls |
|---|---|---|
| `--mn-drift` | each `.note-N` | Horizontal drift distance/direction at the midpoint of the rise |
| `--mn-accent` | `:root` | Note color |

Duration and delay are set directly via `animation-duration` /
`animation-delay` per note rather than custom properties, since they
also need to vary the note's `font-size` and `left` position together —
keeping all four per-note values in one selector block is easier to scan
and retune than splitting them across property declarations and
`calc()`.

## Player card context

The demo's first example anchors a `.note-field` to a spinning-record
style player card, with notes rising from behind the disc — the more
common real-world placement for this kind of decoration (a "currently
playing" indicator) rather than notes floating in an empty box.

## Accessibility

- The entire `.note-field` is `aria-hidden="true"` in both examples —
  it's decorative motion with no informational content of its own (the
  actual track/artist info is separate, real text).
- Respects `prefers-reduced-motion: reduce`: notes stop rising entirely
  and instead sit at a fixed, partially-visible resting position, so the
  decoration is still present without any motion; the equalizer bars in
  the player card similarly stop bouncing.

## Responsive behavior

Below `480px` the player card wraps, moving the equalizer bars to their
own row so they don't compress the track/artist text; the standalone
stage's height reduces slightly to match.

## Browser support

Uses only `transform`, `opacity`, CSS custom properties, and standard
keyframe animations — supported everywhere current, no fallback needed.