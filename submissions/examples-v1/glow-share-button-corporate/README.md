# Glow Share Button (`glow-share-button`)

An intermediate share-button component with an ambient breathing halo, a
one-shot burst on open, and five share actions that ignite outward from the
button in a fan formation. State is driven entirely by a hidden checkbox —
zero JavaScript.

## EaseMotion Keyframes

| Keyframe | Effect |
|---|---|
| `ease-fade-up` | Component entrance on page load |
| `ease-halo-breathe` | Three concentric rings pulse outward from the button, looping continuously |
| `ease-shimmer-sweep` | A soft light sheen sweeps across the button surface on a loop |
| `ease-halo-burst` | Two rings flash outward once, the instant the panel opens |
| `ease-btn-glow-pulse` | The button's own glow surges briefly when toggled open |
| `ease-icon-glow-hover` | Each share icon gets an expanding ring on hover/focus |
| `ease-label-fade` | The tooltip label under an icon fades up on hover/focus |
| `ease-copy-flash` | The "Copy link" icon flashes violet on `:active` as tactile click feedback |

## Animation Sequence

```
0.1s – 0.4s  — page-load fade-up (eyebrow, title, component)
  loop       — halo rings breathe outward, staggered ~1s apart, forever
  loop       — shimmer sheen sweeps the button surface every 5s
on toggle    — button border/glow intensifies (ease-btn-glow-pulse)
on toggle    — two burst rings flash outward once (ease-halo-burst)
on toggle    — 5 icons fan out with a 0.03s–0.23s stagger, spring easing
on icon hover — glow ring expands from the icon; label fades up beneath it
on copy click — copy icon flashes a violet pulse
```

## Checkbox-Driven State Technique

The whole component is powered by one visually-hidden (but still focusable
and tabbable) checkbox. Every open/closed state is expressed with sibling
combinators — no `.js-` hooks, no listeners:

```css
.glow-share-toggle:checked + .glow-share-btn { /* button's own "open" look */ }
.glow-share-toggle:checked ~ .glow-share-panel .glow-icon { /* icons fan out */ }
.glow-share-toggle:checked ~ .glow-burst .glow-burst-ring { /* one-shot burst */ }
```

Because the burst-ring animation is only ever attached while `:checked` is
true, it always plays start-to-finish from the moment the panel opens,
without needing JavaScript to restart a class.

## Fan-Out Positioning

Each icon carries its own `--tx` / `--ty` custom properties for its resting
spot on the arc, then transitions from the button's center out to that point
with a spring easing curve, staggered per child:

```css
.glow-icon:nth-child(3) { --tx: 0px; --ty: -150px; }

.glow-share-toggle:checked ~ .glow-share-panel .glow-icon {
  transform: translate(var(--tx), var(--ty)) scale(1);
}
```

## Accessibility

- The toggle is a real `<input type="checkbox">` — visually hidden with a
  clip technique (not `display: none`), so it stays in the tab order and
  keeps native checkbox semantics and keyboard support (`Space` to toggle).
- Focus is forwarded to the visible label via `:focus-visible + .glow-share-btn`,
  so keyboard users always see where they are.
- Every share action is a real `<a>` with a descriptive `aria-label`; the
  floating tooltip text is duplicated for sighted hover users only
  (`aria-hidden="true"` on the label span, since the link's own label already
  covers it for assistive tech).
- `prefers-reduced-motion` strips all animation and transition durations to
  near-zero and keeps the icons instantly available in their open state.
- Responsive: the fan collapses to a tighter radius with smaller touch
  targets under 480px, staying within comfortable thumb reach.

## Workspace Tree Map

```
submissions/examples/glow-share-button-claude/
├── demo.html
├── style.css
└── README.md
```
---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**