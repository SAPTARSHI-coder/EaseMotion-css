## Isometric 3D Stacking Cards with Interactive Hover Elevation 93
A minimalist, responsive isometric card stack built with semantic HTML, modern CSS transforms, and EaseMotion utility classes.

---

## Installation
Place the component inside:
`submissions/examples/ease-ui-isometric-3d-stacking-cards-with-interactive-hover-elevation-93/`

Load the repository-local EaseMotion stylesheet before the component stylesheet:
```
<link rel="stylesheet" href="../../../easemotion.min.css">
<link rel="stylesheet" href="style.css">
```

---

## Usage
```
<div class="scene-isc93">
  <div class="stack-isc93">
    <article class="stack-card-isc93 card-one-isc93" tabindex="0">
      <h3>Product Direction</h3>
      <p>Align goals, scope, milestones, and success criteria.</p>
    </article>

    <article class="stack-card-isc93 card-two-isc93" tabindex="0">
      <h3>Interface System</h3>
      <p>Keep patterns and interaction states consistent.</p>
    </article>

    <article class="stack-card-isc93 card-three-isc93" tabindex="0">
      <h3>Release Plan</h3>
      <p>Track readiness, dependencies, and launch signals.</p>
    </article>
  </div>
</div>
```
---

## Features

- Pure HTML and CSS
- No JavaScript dependency
- Isometric 3D card stacking
- Hover and keyboard-focus elevation
- Responsive geometry
- Glass-like surfaces and gradients
- Scoped -isc93 selectors
- EaseMotion utility integration
- prefers-reduced-motion support

---

## Accessibility
- Cards are keyboard focusable with tabindex="0".
- :focus-visible mirrors hover feedback.
- A skip link is included.
- Text remains readable without motion.
- Reduced-motion preferences are respected.
