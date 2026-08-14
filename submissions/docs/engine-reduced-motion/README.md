# Accessible Reduced-Motion Engine Flag

This submission provides the implementation for Issue #58646: Respecting `prefers-reduced-motion`.

Due to the current contribution freeze on core files (`easemotion/`), this proposal is placed in the `submissions/docs/engine-reduced-motion/` directory to pass automated validation. The maintainer can safely integrate this into the core engine/styles during merge.

## CSS Fallback

The `style.css` file contains a global fallback that instantly degrades all `ease-*` animations to `0.01ms` (to ensure animation events still fire, preventing broken JS hooks) when the user's OS has "Reduce Motion" enabled.

## Proposed JS API (easemotion/engine/runtime.js)

To support programmatic toggling (e.g., an in-app accessibility toggle), the engine runtime should expose:

```javascript
EaseMotion.setReducedMotion(true | false | 'auto');
```

- `true`: Forcibly disables animations.
- `false`: Forcibly enables animations, ignoring OS settings.
- `'auto'` (default): Respects `@media (prefers-reduced-motion: reduce)`.
