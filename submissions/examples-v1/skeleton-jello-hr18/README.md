# Jello Skeleton Loader (`skeleton-jello-hr18`)

A reusable `ease-jello` animation applied to a Skeleton loading component, built
for issue [#48385](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/48385).

## Feature overview

A profile-card skeleton (avatar, title, subtitle, three paragraph lines, and a
button placeholder) where each bone gently wobbles using the `ease-jello`
animation. Bones are given small, staggered `animation-delay` values so the
wobble ripples down the card from the avatar to the button, rather than every
placeholder moving in lockstep. The wobble amplitude is scaled down
(`--jello-amp-hr18`) from a classic full-strength jello so it reads as "still
loading" rather than as a distraction.

A **Simulate load** button swaps the skeleton out for real profile content, to
show the animation in the context it's actually meant for.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file, or drag it into a browser window). It links a
single local `style.css`; no build step, package manager, or external CDN.

## Usage

Add the `ease-jello` class to any skeleton placeholder element:

```html
<div class="jsk-bone-hr18 jsk-avatar-hr18 ease-jello-hr18" aria-hidden="true"></div>
```

Two things are configurable per-element via CSS custom properties:

```css
.my-placeholder {
  /* Wobble strength, relative to a classic full jello (1 = full strength). */
  --jello-amp-hr18: 0.45;
}
```

```css
.my-placeholder {
  /* Stagger multiple bones so the motion ripples instead of syncing. */
  animation-delay: 0.24s;
}
```

The animation itself (`ease-jello-hr18`) is a skew-based wobble — it settles
back to `translate3d(0, 0, 0)` at the loop boundary, so it composes cleanly
with layout and doesn't require `overflow: hidden` on the parent.

## Accessibility notes

- Every skeleton element is marked `aria-hidden="true"`, with a visually
  hidden "Loading profile…" status text and `aria-busy="true"` on the card so
  screen reader users get a clear loading announcement instead of a wall of
  empty `<div>`s.
- A `@media (prefers-reduced-motion: reduce)` rule disables the animation
  entirely for users who've asked their OS not to show motion.
- Since flipping an OS-level setting is awkward when reviewing a PR, the demo
  also includes a **"Simulate `prefers-reduced-motion`"** checkbox that applies
  the same reduced-motion styling manually, so the behavior can be checked
  without changing system settings.
- Focus states use a visible `outline` via `:focus-visible` on interactive
  elements.

## Responsiveness

The card layout is fluid (`max-width: 640px`, no fixed widths outside that),
and the avatar/padding shrink slightly under `480px` so the card stays
comfortable on phones. It was checked at mobile, tablet, and desktop widths in
the browser's responsive-design mode.

## Why this fits EaseMotion CSS

It's a single, reusable, named animation (`ease-jello`) — not a one-off
effect baked into a specific component — driven entirely by plain CSS custom
properties, with no framework or build tooling required to see it work. It
also treats accessibility as part of the animation's definition rather than
an afterthought, which matches the project's existing `prefers-reduced-motion`
expectations.

All classes, custom properties, and the folder itself use a `-hr18` suffix to
avoid colliding with any other contributor's submission.
