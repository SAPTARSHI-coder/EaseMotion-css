# EaseMotion Engine Proposal: Blur, Shimmer, & Glitch

This proposal specifies the integration of advanced animations into the EaseMotion Motion Engine compiler and parser.

## Specs

### 1. Easing and Animation Token Specs
- `blur-in`: Triggers `@keyframes ease-kf-blur-in` with starting Gaussian blur.
- `blur-out`: Triggers `@keyframes ease-kf-blur-out` transitioning blur outwards.
- `shimmer`: A repeating placeholder utility (`repeat-infinite linear`).
- `glitch`: Cyberpunk clip-path offsets.

### 2. Proposed Changes

#### `easemotion/engine/parser.js`
```javascript
const ANIMATION_NAMES = new Set([
  // Existing animations
  'blur-in',
  'blur-out',
  'shimmer',
  'glitch'
]);
```

#### `easemotion/engine/compiler.js`
```javascript
const KEYFRAME_MAP = {
  // Existing mappings
  'blur-in':  'ease-kf-blur-in',
  'blur-out': 'ease-kf-blur-out',
  'shimmer':  'ease-kf-shimmer',
  'glitch':   'ease-kf-glitch'
};
```
