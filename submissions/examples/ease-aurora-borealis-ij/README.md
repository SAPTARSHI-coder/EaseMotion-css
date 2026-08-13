# Aurora Borealis

Layered translucent curtains drift and shimmer across a starry night sky, using `mix-blend-mode: screen` to glow like real aurora light.

## How is it used?

Each curtain is a wide gradient bar skewed and blurred, slowly translating sideways on its own duration:

```html
<div class="curtain curtain-one"></div>
```

```css
.curtain-one {
  background: linear-gradient(100deg, transparent, rgba(0, 255, 170, 0.35), transparent);
  animation: aurora-drift 9s ease-in-out infinite alternate;
}

@keyframes aurora-drift {
  0% {
    transform: translateX(0) skewX(-8deg);
  }
  100% {
    transform: translateX(9%) skewX(8deg);
  }
}
```

## Why is it useful?

Three overlapping curtains with mismatched durations and a `screen` blend read as volumetric light with no image assets — a reusable recipe for ambient night-sky or cinematic background motion.
