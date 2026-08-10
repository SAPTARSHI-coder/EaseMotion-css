# Rotate-Click Popover — Accessible Web (`rotate-click-popover-a11y-hr18`)

A pure-CSS animated popover with a "Rotate-Click" entrance, styled for
accessible web interfaces, built for issue
[#46433](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46433).

## A note on this being the second Rotate-Click popover

Issue [#46434](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46434)
asked for the same interaction — a Rotate-Click popover — styled for
"Creative Portfolio" layouts, submitted separately as `rotate-click-popover-hr18`.
This submission reuses the same core animation *idea* (a tilted, shrunk
entrance that springs flat) since that's what both issues literally
specify, but is otherwise a distinct, self-contained implementation: its
own class prefix (`rca-` instead of `rcp-`), its own animation name
(`ease-rotate-click-a11y-hr18`), and a genuinely different context — an
accessibility settings panel rather than a portfolio grid — built to
actually demonstrate the "Accessible Web" aesthetic rather than reusing
the portfolio one with new colors.

## What it does

A small accessibility-settings panel (High contrast mode, Keyboard
navigation, Screen reader labels), each row with an info trigger that
opens a rotate-click popover explaining that setting in plain language.
Two of the toolbar toggles at the top are **genuinely functional**, not
just decorative:

- **Large text** scales the whole page's base font size up, so you can see
  the layout actually hold up at a larger size rather than just claiming
  to support it.
- **Reduce motion** forces every popover on the page to appear instantly,
  with no rotation or scale — independent of your OS-level
  `prefers-reduced-motion` setting, so a reviewer can see the behavior
  without changing system preferences.

The **popover animation itself is 100% CSS**
(`@keyframes ease-rotate-click-a11y-hr18`, driven entirely by custom
properties); a small amount of vanilla JavaScript only handles the
toggles, click-to-open, `Escape`-to-close, click-outside-to-close, and
`aria-expanded` sync.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

Wrap an info trigger and a popover panel in the component markup:

```html
<div class="rca-popover-wrap-hr18" data-open="false">
  <button type="button" class="rca-info-trigger-hr18" aria-haspopup="dialog" aria-expanded="false" aria-label="What does High contrast mode do?">i</button>
  <div class="ease-popover-rotate-a11y-hr18" role="dialog" aria-label="High contrast mode explanation">
    <button type="button" class="rca-popover-close-hr18" aria-label="Close">&times;</button>
    <p class="rca-popover-title-hr18">High contrast mode</p>
    <p class="rca-popover-body-hr18">Explanation text here.</p>
  </div>
</div>
```

The included script finds every `.rca-popover-wrap-hr18` on the page
automatically and wires it up. Opening one popover closes any other
that's currently open.

### Tuning the animation

| Property | Default | Controls |
|---|---|---|
| `--ease-rotate-duration-hr18` | `400ms` | How long the pop-in + settle takes |
| `--ease-rotate-easing-hr18` | `cubic-bezier(0.22, 1, 0.36, 1)` | The easing curve for the entrance |
| `--ease-rotate-angle-hr18` | `-10deg` | Starting tilt angle before it settles flat |
| `--ease-rotate-delay-hr18` | `0ms` | Delay before the animation starts |

## Accessibility notes

This one is worth being thorough about, given the theme:

- **Real contrast**: the accent blue (`#1a4fd6`) against white passes WCAG
  AA for normal text and AAA for large text; body text uses a near-black
  (`#0d0f14`) rather than a light gray.
- **44px minimum touch targets** on both toggle switches, matching common
  mobile accessibility guidance, even though the visual track is smaller.
- Every icon-only button (`i` triggers, the close button, both toggles)
  carries a real `aria-label` or associated `<label>` — nothing relies on
  an icon alone.
- `:focus-visible` outlines are 3px and use the same high-contrast accent
  color as everything else, so keyboard focus is never subtle.
- The popover has `role="dialog"` with a descriptive `aria-label`, a
  visible close button, and is fully operable by keyboard: `Tab` to the
  trigger, `Enter`/`Space` to open, `Tab` through its contents,
  `Escape` to dismiss with focus returned to the trigger.
- Both the OS-level `@media (prefers-reduced-motion: reduce)` query *and*
  the in-page "Reduce motion" toggle disable the popover's animation —
  belt and suspenders, so the behavior is verifiable without touching
  system settings.

## Responsiveness

The popover panel's width adapts to stay within the viewport on narrow
screens (`max-width: 420px`), and the "Large text" toggle demonstrates
that the layout doesn't break at a meaningfully larger base font size.

## Why this fits EaseMotion CSS

It's a self-contained, reusable interaction pattern with a distinct named
animation exposed entirely through custom properties, matching the
issue's ask for zero JavaScript animation overhead and tunable
timing/easing/angle — while treating "Accessible Web" as something to
actually demonstrate working, not just a color palette to apply.

All classes, custom properties, and the folder itself use a `-hr18` suffix
to avoid colliding with any other contributor's submission under
`submissions/examples/`.
