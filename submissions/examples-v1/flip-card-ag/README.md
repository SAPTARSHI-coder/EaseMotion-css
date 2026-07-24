# EaseMotion 3D Flip Card Architecture

This directory provides a production-ready, highly accessible, and cross-browser compatible 3D Flip Card implementation leveraging the concepts introduced by EaseMotion.

## Architecture & Rendering Strategy

Implementing a robust flip card requires mitigating several browser quirks, particularly regarding WebKit (Safari) 3D transforms. This example utilizes the following structural setup:

### 1. The Perspective Container (`.flip-card-container`)
Perspective defines the 3D depth of the camera looking at the card. It **must** sit on the outermost parent container to avoid bizarre rendering distortions during rotation.

### 2. The Inner Card Wrapper (`.flip-card`)
This is the element that actually rotates 180 degrees.
- We use a `<button>` semantically so it is fully keyboard-accessible via `Tab` and `Enter/Space`.
- We apply `transform-style: preserve-3d;` (and the `-webkit-` prefix for Safari). This tells the browser that children of this element (the card faces) should exist within a 3D space, rather than being flattened onto the parent's plane.

### 3. The Front & Back Faces (`.flip-card__face`)
Both faces occupy exactly the same area.
- The back face starts with a `transform: rotateY(180deg);` applied so it is mirrored initially.
- Both use `backface-visibility: hidden;` (and `-webkit-backface-visibility: hidden;`) to ensure the browser does not paint the backside of the DOM node when it flips away from the camera.
- `transform: translateZ(0);` is applied to force hardware GPU acceleration on each face independently. This drastically reduces flickering and bleeding layer boundaries (a very common Safari bug).

## Interaction & Accessibility

### Hover vs. Click
- **Hover:** Handled via CSS (`.flip-card-container:hover .flip-card`). This works instantly on desktop devices.
- **Click/Tap:** Handled via a small `script.js` that toggles a `.flipped` class. This provides support for mobile touch screens and keyboard users.
- **ARIA:** When flipped via the button interaction, `aria-expanded` is toggled between `true` and `false` to notify screen readers of the state change.

### Prefers-Reduced-Motion
A critical accessibility requirement is respecting `prefers-reduced-motion: reduce`. 
If detected:
1. The 3D rotation (`transform`) is completely disabled.
2. The back face's inherent `180deg` rotation is flattened to `0deg`.
3. The CSS falls back to a smooth `opacity` crossfade transition instead. This completely preserves the interaction UI (Hover/Click) without triggering motion sickness.
