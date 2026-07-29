# Sin/Cos Orbit

## What

A CSS-only planetary orbit simulation using `sin()` and `cos()` trigonometric functions inside keyframe `translate()` values. Three planets orbit a central sun at different radii and speeds, with a glowing sun animation and a dark space theme.

## How

Each planet's keyframe uses `calc(R * cos(angle))` and `calc(R * sin(angle))` to compute circular orbit positions. Different radii (80px, 130px, 180px) and durations (4s, 7s, 11s) create realistic-looking orbits. The sun glows via a `box-shadow` pulse animation. A `@supports (top: sin(0))` guard provides a square-orbit fallback for browsers without trig support.

## Why

CSS trigonometric functions (`sin()`, `cos()`) enable complex geometric animations without JavaScript. This approach keeps orbit calculations declarative and performant, running entirely on the compositor thread. The `prefers-reduced-motion` fallback positions planets statically to prevent motion-related discomfort.
