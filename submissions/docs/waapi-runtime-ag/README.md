# WAAPI Runtime Fallback Engine

This is an experimental proof-of-concept demonstrating how EaseMotion can bypass its traditional CSS generation pipeline and drive animations imperatively via the Web Animations API (WAAPI).

## Overview

EaseMotion's default behavior involves compiling an AST into CSS `@keyframes` and utility classes. While highly performant for static sites, it lacks granular programmatic control. This prototype intercepts the mock EaseMotion AST and translates it directly into WAAPI `KeyframeEffect` and `Animation` objects.

By utilizing `Element.animate()`, developers gain precise control over the animation lifecycle (play, pause, reverse, seek, adjust speed) without sacrificing the declarative authoring model of EaseMotion.

## Architecture

* `astMapper.js`: Translates the EaseMotion AST object into a WAAPI-compatible keyframe array and timing configuration object.
* `runtime.js`: The core engine wrapper. Manages the lifecycle of the `Animation` object and exposes programmatic controls. Also handles `prefers-reduced-motion`.
* `animations.js`: Scaffolds the runtime against specific DOM elements.
* `controls.js`: Wires UI buttons and sliders to the exposed runtime methods for demonstration purposes.

## AST Translation Process

The EaseMotion AST contains an array of `keyframes` (with `offset`, `opacity`, `transform`) and top-level timing metadata (`duration`, `delay`, `easing`, `fill`, etc.). 

The `astMapper.js` function intercepts this:
1. It maps the keyframes exactly as they are defined, as WAAPI consumes identical property shapes to CSS.
2. It constructs a timing configuration object matching the WAAPI spec (e.g., mapping `iterations: Infinity` to `iterations: Infinity`, or converting easing strings).

## Browser Compatibility

* **Supported**: Chromium, Firefox, Safari (modern versions), Edge.
* **Partial Support**: Older versions of Safari may lack advanced properties like `playbackRate` or `seek`. 
* **Fallback Strategy**: In a production environment, if `Element.prototype.animate` is `undefined`, the framework could automatically fall back to the existing CSS class injection engine.

## Performance Considerations

* **JavaScript Overhead**: Unlike pure CSS animations, WAAPI maintains an explicit `Animation` object in memory. While minimal, animating 10,000 nodes simultaneously via WAAPI will consume more memory than a single shared CSS class.
* **Compositor Thread**: Like CSS animations, WAAPI offloads transform and opacity changes to the GPU compositor thread. Performance during active playback is identical to CSS.
* **Reflows**: Controlling animation state via JS methods (`.pause()`, `.reverse()`) avoids the expensive DOM reflows associated with adding/removing CSS classes.

## Accessibility

The runtime actively checks for `@media (prefers-reduced-motion: reduce)` via `window.matchMedia`. If detected, the runtime refuses to create a WAAPI animation. Instead, it immediately extracts the final state from the AST's last keyframe and applies those styles inline. This guarantees functional consistency (the UI arrives at the correct state) without inducing motion sickness.
