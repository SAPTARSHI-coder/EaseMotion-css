# Circular Profile Progress Ring Avatar (`profile-progress-avatar-hr18`)

A circular user avatar encircled by an SVG progress ring, an online/away/
offline status dot, and a hover/focus profile-breakdown tooltip, built for
issue
[#55700](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55700).

## A note on this being a second submission

This issue already shows an open PR (#55738) at the time of writing,
likely from one of the other two assignees. I wasn't able to review its
contents before building this, so there may be some overlap — flagging
that directly in case the maintainer only needs one of the two merged.

## A note on naming

The issue's own filenames (`index.html`, `styles.css`) and its suggested
folder (`profile-progress-avatar-em`, no per-contributor suffix) don't
match this repo's actual enforced submission convention —
`demo.html` + `style.css` + `README.md`, in a uniquely-suffixed folder.
This submission uses that convention instead.

## What it does

Three example avatars, each combining:

- A **circular SVG progress ring** showing profile-completion percentage
- A **colored, initials-based avatar** in the center (no external image
  assets required)
- A **status dot** (online / away / offline)
- A **hover/focus tooltip** breaking down exactly what is and isn't
  complete on that profile

## Ring stroke math

The ring is two overlapping `<circle>` elements sharing the same center
and radius: a static gray track, and a colored progress circle drawn on
top of it.

An SVG circle's `stroke-dasharray` and `stroke-dashoffset` let you control
how much of its outline is drawn as a solid line versus a gap, by working
in units of the circle's own circumference:

```
circumference = 2 × π × r
```

With `r = 40` (this component's radius):

```
circumference = 2 × π × 40 ≈ 251.33
```

Setting `stroke-dasharray: 251.33` makes the circle draw one full solid
dash exactly as long as its own circumference — i.e. the whole ring.
`stroke-dashoffset` then shifts where that dash *starts* along the path;
offsetting it by some amount effectively hides that much of the dash from
view, revealing a gap instead. To show `percent`% of the ring, the
remaining `(100 - percent)`% needs to be hidden as gap, so:

```
stroke-dashoffset = circumference × (1 − percent / 100)
```

At `percent = 0`, `dashoffset = circumference` (fully hidden — no ring
visible). At `percent = 100`, `dashoffset = 0` (nothing hidden — full
ring visible). This component expresses that directly in CSS with one
`calc()`:

```css
.epa-ring-progress-hr18 {
  stroke-dasharray: 251.33;
  stroke-dashoffset: calc(251.33 - (251.33 * var(--epa-percent-hr18, 0) / 100));
}
```

The whole SVG is also rotated `-90deg`, since an SVG circle's path starts
at the 3 o'clock position by default — rotating the container makes the
ring fill starting from 12 o'clock instead, which is how progress rings
are conventionally read.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

```html
<button
  type="button"
  class="ease-avatar-ring-hr18"
  aria-label="Priya Nair — profile 72% complete, online"
  style="--epa-percent-hr18: 72; --epa-ring-color-hr18: #22c55e;"
>
  <span class="epa-ring-frame-hr18">
    <svg class="epa-ring-svg-hr18" viewBox="0 0 96 96" aria-hidden="true">
      <circle class="epa-ring-track-hr18" cx="48" cy="48" r="40"></circle>
      <circle class="epa-ring-progress-hr18" cx="48" cy="48" r="40"></circle>
    </svg>
    <span class="epa-avatar-hr18 c1">PN</span>
    <span class="epa-status-dot-hr18 online" aria-hidden="true"></span>
  </span>
  <span class="epa-name-hr18">Priya Nair</span>
  <span class="epa-percent-label-hr18">72% complete</span>
  <span class="epa-tooltip-hr18" role="tooltip">
    <!-- breakdown content -->
  </span>
</button>
```

`--epa-percent-hr18` is set inline per instance deliberately — unlike this
component's other, decorative custom properties, the percentage is real,
per-profile data, so it belongs directly on the element it describes
(the same reasoning a native `<progress value="72">` sets its value as an
attribute rather than in a stylesheet).

## Accessibility notes

- Each avatar is a real `<button>`, so it's reachable and its tooltip
  revealable by keyboard, with a descriptive `aria-label` summarizing the
  name, percentage, and status in one string — useful even for someone who
  never opens the tooltip.
- The tooltip appears on `:hover`, `:focus-visible`, and `:focus-within`,
  so keyboard users get identical access to mouse users.
- The status dot and the SVG ring are marked `aria-hidden="true"`, since
  their information (status, percentage) is already conveyed through the
  button's `aria-label` and the visible percent-complete text label.
- The tooltip's checklist uses `✓`/`✗` characters alongside color, not
  color alone, so complete-vs-missing items are distinguishable without
  relying on the green checkmark color being perceivable.
- The ring's fill transition and tooltip fade both shorten to effectively
  instant under `@media (prefers-reduced-motion: reduce)`.

## Responsiveness

The row of avatars wraps onto additional lines on narrow viewports via
`flex-wrap`, and each avatar's fixed 96px size stays comfortable down to
mobile widths without needing a dedicated breakpoint.

## Why this fits EaseMotion CSS

A self-contained, reusable component combining SVG and CSS with no
JavaScript and no external image assets, with its one genuinely dynamic
value (`--epa-percent-hr18`) exposed as a real per-instance CSS custom
property rather than baked into a fixed class — consistent with the
framework's readable, class-driven approach.

All classes, custom properties, and the folder itself use a `-hr18` suffix
to avoid colliding with any other contributor's submission under
`submissions/examples/`.
