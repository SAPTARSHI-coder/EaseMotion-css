# Dewdrop Slide

A glossy dew drop gathers at the tip of a leaf, slides along its curve, and falls away.

## How is it used?

The drop accelerates along the leaf with an ease-in, dips, then plunges off the edge while shrinking and fading:

```css
@keyframes drop-slide {
  0% {
    transform: translateX(0) translateY(0) scale(1);
    opacity: 0.9;
  }
  35% {
    transform: translateX(60px) translateY(8px) scale(1.06);
  }
  100% {
    transform: translateX(108px) translateY(70px) scale(0.7);
    opacity: 0;
  }
}
```

## Why is it useful?

A single asymmetric keyframe narrates "gather → roll → release" with no physics library. The radial highlight and `border-radius` asymmetry make the blob read as a wet drop — handy for droplet, teardrop, and liquid-gesture micro-interactions.
