# Orbit Diff Viewer

## What does this do?

This submission creates a responsive, accessible code diff viewer with orbiting change markers and clearly labeled added and removed lines using only HTML and CSS.

## How is it used?

```html
<section class="code-panel-jp old-panel-jp">
  <ol class="code-list-jp">
    <li class="code-line-jp removed-line-jp">
      <span class="line-number-jp">2</span>
      <code>background: #111827;</code>
      <span class="change-label-jp">Removed</span>
    </li>
  </ol>
</section>

<div class="orbit-bridge-jp" aria-hidden="true">
  <span class="bridge-line-jp"></span>
  <span class="orbit-marker-jp">
    <span class="orbit-ring-jp"></span>
    <span class="orbit-core-jp">↔</span>
  </span>
</div>

<section class="code-panel-jp new-panel-jp">
  <ol class="code-list-jp">
    <li class="code-line-jp added-line-jp">
      <span class="line-number-jp">2</span>
      <code>background: linear-gradient(...);</code>
      <span class="change-label-jp">Added</span>
    </li>
  </ol>
</section>
```

Customize the component through CSS variables:

```css
:root {
  --ease-orbit-duration-jp: 5s;
  --ease-diff-duration-jp: 620ms;
  --ease-diff-curve-jp: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-added-jp: #35d6a6;
  --ease-removed-jp: #ff7185;
  --ease-orbit-accent-jp: #7c6cff;
  --ease-panel-radius-jp: 1.25rem;
}
```

The desktop layout displays the old and new versions side by side. On smaller screens, the panels stack vertically and the animated bridge changes orientation.

Open `demo.html` directly in a browser. No server, JavaScript, CDN, or external framework is required.

## Why is it useful?

Diff viewers are useful in developer portfolios, code-review interfaces, documentation, changelogs, release notes, and educational tools.

This example fits EaseMotion CSS because it:

- uses orbit motion to visually connect old and new states;
- clearly labels added and removed lines;
- avoids communicating changes through color alone;
- exposes reusable timing and color variables;
- adapts from side-by-side to stacked layouts;
- respects `prefers-reduced-motion`;
- requires zero JavaScript and zero external dependencies.
