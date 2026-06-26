# Expose SCSS Tokens as Exportable design system API

A demonstration showing how EaseMotion CSS animation and speed tokens are compiled and exposed to JavaScript environments via standard CSS Modules `:export` blocks.

## What does this do?

This feature introduces `scss/_exports.scss` containing a `:export` block, mapping core duration and transition variables to JS-friendly CamelCase names. This allows React, Framer Motion, and vanilla JS animation engines to load framework values dynamically, maintaining consistent timings across CSS and JS.

## How is it used?

### Exposing Tokens in SCSS

The variables are loaded inside `scss/_exports.scss` and mapped inside the `:export` statement:

```scss
// _exports.scss
@use 'variables';

:export {
  speedFast:        variables.$speed-fast;
  speedMedium:      variables.$speed-medium;
  easeBounce:       variables.$ease-bounce;
}
```

This is forwarded by the core module entrypoint (`scss/_index.scss`):

```scss
// _index.scss
@forward 'variables';
@forward 'mixins';
@forward 'exports';
```

### Loading in React / JavaScript (Vite, Webpack, etc.)

With a CSS Module-compatible bundler, import the stylesheet directly as an object to consume variables in JS:

```javascript
// App.jsx
import React from 'react';
import tokens from 'easemotion-css/scss/_index.scss';

console.log(tokens.speedMedium);  // "var(--ease-speed-medium)"
console.log(tokens.easeBounce);   // "cubic-bezier(0.34, 1.56, 0.64, 1)"
```

## Why is it useful?

1. **Synchronized Timings**: Eliminates hardcoded speed values (e.g. `duration: 0.35`) inside JavaScript canvas or React animations, tying them directly to CSS properties.
2. **Unified Easing Curves**: Exposes precise easing cubic-bezier tokens so GSAP, Framer Motion, or custom animators trigger matching physics.
3. **Robust Design API**: Conforms to standard CSS Modules guidelines widely adopted by Vite, Webpack, and Next.js platforms.
