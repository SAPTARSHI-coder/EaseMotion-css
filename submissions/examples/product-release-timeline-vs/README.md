# Product Release Timeline

## What does this do?
A modern product/version release timeline with animated milestone cards.
Each milestone displays a version number, release stage badge (Stable,
Beta, Alpha, Planned), and a short description. Milestones fade in with
a staggered entrance animation, and hovering a milestone marker scales it
with a soft glow.

## How is it used?

```html
<div class="ease-release-timeline">
  <div class="ease-release-milestone">
    <span class="ease-release-stage stable">Stable</span>
    <h3 class="ease-release-version">v1.0</h3>
    <p class="ease-release-desc">Initial public release.</p>
  </div>

  <div class="ease-release-milestone is-latest">
    <span class="ease-release-stage beta">Beta</span>
    <h3 class="ease-release-version">v2.0</h3>
    <p class="ease-release-desc">New animation components.</p>
  </div>
</div>
```

Stage badge classes: `stable`, `beta`, `alpha`, `planned`.
Add `is-latest` to highlight the current milestone marker.

## Why is it useful?
Release timelines are common in documentation, changelogs, and roadmap
pages. This component provides a reusable, animation-first pattern for
showcasing a project's version history. Pure CSS staggered entrance
animations, no JS required, with prefers-reduced-motion support.