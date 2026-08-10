# Multi-layer 3D Parallax Depth Cards

## What does this do?

This submission demonstrates cards with multiple visual depth planes. On hover or keyboard focus, the background, decorative glow, foreground subject, and typography shift at different speeds and Z-depths to create a layered 3D parallax illusion.

## How is it used?

Use a perspective wrapper and a child scene with `transform-style: preserve-3d`.

```html
<article class="parallax-card-jp" tabindex="0">
  <div class="card-scene-jp">
    <div class="bg-layer-jp" aria-hidden="true"></div>
    <div class="subject-layer-jp" aria-hidden="true"></div>

    <div class="content-layer-jp">
      <h2>Orbit</h2>
      <p>Layered depth card content.</p>
    </div>
  </div>
</article>
```

The depth illusion comes from assigning different Z positions to each layer:

```css
.parallax-card-jp {
  perspective: 1200px;
}

.card-scene-jp {
  transform-style: preserve-3d;
}

.bg-layer-jp {
  transform: translateZ(-70px) scale(1.12);
}

.subject-layer-jp {
  transform: translateZ(35px);
}

.content-layer-jp {
  transform: translateZ(70px);
}
```

On hover or focus, each layer moves independently:

```css
.parallax-card-jp:hover .subject-layer-jp,
.parallax-card-jp:focus-visible .subject-layer-jp {
  transform: translate3d(1rem, -1rem, 55px) scale(1.04);
}

.parallax-card-jp:hover .content-layer-jp,
.parallax-card-jp:focus-visible .content-layer-jp {
  transform: translate3d(0.4rem, -0.35rem, 90px);
}
```

Open `demo.html` directly in a browser. No JavaScript, server, CDN, or external framework is required.

## Why is it useful?

Depth cards are useful in hero sections, portfolio showcases, feature grids, product presentations, and editorial layouts. They create strong visual hierarchy while keeping the interaction understandable and entirely CSS-driven.

This example fits EaseMotion CSS because it:

- treats motion as part of the visual hierarchy;
- uses readable, reusable classes;
- demonstrates `perspective`, `transform-style: preserve-3d`, and `translateZ()`;
- gives each layer an independent motion speed and depth;
- supports hover and keyboard focus;
- includes a reduced-motion fallback;
- requires zero JavaScript and zero external dependencies.
