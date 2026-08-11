# Motion Engine Shipped Keyframes Fix

Resolves compilation runtime bug tracking ticket #40210. Provides the exact standalone CSS patch required to populate the compiler's `KEYFRAME_MAP` configuration.

## ⚙️ Shipped Animations Manifest
This reference provides target CSS keyframe specs matching the string keys emitted by `easemotion/engine/compiler.js`:

1. `ease-kf-flip-x`: Horizontal 3D perspective flip sequence.
2. `ease-kf-flip-y`: Vertical 3D perspective flip sequence.
3. `ease-kf-heartbeat`: Rhythmic scaling double-pulse curve.
4. `ease-kf-rubber-band`: Structural elastic stretching deformation matrix.
5. `ease-kf-spin`: Continuous flat linear 360° rotational track.
6. `ease-kf-wobble`: Asynchronous multi-axis translate offset with tilt rolls.

## 🚀 Integration Process
To integrate this fix, copy the clean `@keyframes` block declarations directly from `style.css` and append them to the main framework stylesheet distribution channels (`core/` or `components/`). All properties feature explicit `@media (prefers-reduced-motion)` safety guardrails.
