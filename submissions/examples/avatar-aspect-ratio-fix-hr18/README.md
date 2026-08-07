# Avatar Aspect Ratio Fix (`avatar-aspect-ratio-fix-hr18`)

A reference fix for a reported bug in EaseMotion's shipped `.avatar`
class, built for issue
[#56065](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/56065).

## A note on scope

The reported bug is in the framework's real, shipped CSS (the issue's own
repro links the actual CDN stylesheet), which lives in `core/`. This
repo's README currently states that core-file PRs are temporarily
restricted while the framework stabilizes, so this submission doesn't
edit `core/` directly. Instead, it provides a corrected, working
`.ease-avatar-fixed-hr18` class the maintainer (or a future core
contributor) can lift directly into the real `.avatar` rule, plus a
side-by-side demo reproducing the original bug so the fix can be verified
visually rather than just described.

## What it does

- **Reproduces the bug exactly**: a `.aaf-avatar-broken-hr18` class with
  fixed `width`/`height` and no `object-fit` — a non-square image gets
  stretched to fill both dimensions, matching the reported behavior.
- **Demonstrates the fix**: `.ease-avatar-fixed-hr18` wraps an `<img>` in
  a fixed-size, `overflow: hidden` container, with the image itself set
  to `width: 100%; height: 100%; object-fit: cover;` — cropping cleanly
  to fill the circle instead of distorting.
- **Confirms it generalizes**: the fixed class applied to a wide (16:9), a
  tall (3:4), and a square (1:1) source image, all rendering as clean,
  undistorted circles.

All three source "photos" in this demo are self-contained inline SVG data
URIs (simple abstract scenes), so nothing here depends on external image
files or a CDN.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

```html
<span class="ease-avatar-fixed-hr18">
  <img src="your-photo.jpg" alt="A person's name" />
</span>
```

```css
.ease-avatar-fixed-hr18 {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0; /* keeps it from being squeezed inside a flex row */
}

.ease-avatar-fixed-hr18 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
```

**Why the container needs its own fixed size and `overflow: hidden`, in
addition to `object-fit: cover` on the image:** `object-fit` only
controls how the image fills *its own* box — it does nothing on its own
if the box itself is sized by the image's natural (and possibly
non-square) dimensions. The `overflow: hidden` on the container is what
actually clips the parts of the cropped image that fall outside the
circular frame once `border-radius: 50%` is applied.

## Accessibility notes

- Every avatar image keeps a real, descriptive `alt` attribute — cropping
  the image doesn't change what needs to be conveyed to someone who can't
  see it.
- `object-position: center` is used rather than a corner, so the crop
  favors the middle of the source image by default, which is the safest
  general-purpose choice for a face photo without per-image tuning.

## Why this fits EaseMotion CSS

A minimal, correct fix for a real visual bug, expressed the same way the
framework's own components are — a couple of small CSS rules, no
JavaScript, no dependencies — while respecting the current restriction on
`core/` edits by staying entirely in `submissions/`.

All classes and the folder itself use a `-hr18` suffix to avoid colliding
with any other contributor's submission under `submissions/examples/`.
