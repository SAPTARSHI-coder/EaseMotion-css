# Complex 3D Paper Unfold / Origami Reveal

## What does this do?

This submission creates a CSS-only paper unfolding interaction where a compact square expands into a wider accordion-style information surface through sequenced 3D rotations.

## How is it used?

Use a perspective wrapper with multiple paper panels and decorative flaps:

```html
<article class="paper-fold-jp" tabindex="0">
  <div class="paper-scene-jp">
    <div class="paper-panel-jp paper-panel-left-jp"></div>
    <div class="paper-panel-jp paper-panel-center-jp"></div>
    <div class="paper-panel-jp paper-panel-right-jp"></div>

    <div class="paper-flap-jp paper-flap-top-jp"></div>
    <div class="paper-flap-jp paper-flap-bottom-jp"></div>
  </div>
</article>
```

The 3D effect depends on perspective, preserved 3D context, individual transform origins, and delayed transitions:

```css
.paper-fold-jp {
  perspective: 1400px;
}

.paper-scene-jp {
  transform-style: preserve-3d;
}

.paper-panel-center-jp {
  transform-origin: left center;
  transform: rotateY(90deg);
}

.paper-flap-top-jp {
  transform-origin: bottom center;
}

.paper-fold-jp:hover .paper-panel-center-jp,
.paper-fold-jp:focus-visible .paper-panel-center-jp {
  transform: rotateY(0deg);
  transition-delay: 140ms;
}
```

Open `demo.html` directly in a browser. No server, JavaScript, CDN, or external framework is required.

## Why is it useful?

Paper-folding transitions are useful for maps, step-by-step flows, editorial cards, onboarding sequences, menus, and progressive-disclosure interfaces.

This example fits EaseMotion CSS because it:

- uses expressive motion to reveal interface structure;
- demonstrates multiple `transform-origin` hinge points;
- sequences independent panel transforms with transition delays;
- uses `rotateX()` and `rotateY()` for a layered origami feel;
- works on hover and keyboard focus;
- includes a reduced-motion fallback;
- requires zero JavaScript and zero external dependencies.
