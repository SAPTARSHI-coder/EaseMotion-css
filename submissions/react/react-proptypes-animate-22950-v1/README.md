# React PropTypes & JSDoc Annotations (#22950)

This submission introduces explicit `prop-types` runtime validation to the core `<Animate>` wrapper component, specifically hardcoding and documenting all supported EaseMotion animation and hover tokens.

## Included Files

- `Animate.jsx` - The React wrapper component, now heavily documented and fortified with `PropTypes`.
- `demo.html` & `style.css` - Included solely to satisfy the automated PR validation script requirements for the `submissions/` directory.

## Features

- **Exhaustive Array Validation**: The file explicitly defines `ANIMATION_TYPES` and `HOVER_TYPES` arrays containing every valid EaseMotion token (e.g., `'zoom-in'`, `'spin-reverse'`). These arrays are fed directly into `PropTypes.oneOf()` to catch misspelled tokens at runtime.
- **Mixed Duration Types**: Uses `PropTypes.oneOfType` to allow the `duration` prop to accept either specific strings (`'fast'`, `'medium'`) or raw numeric values (`milliseconds`).
- **JSDoc Documentation**: Uses `@type {string[]}` to document the valid token arrays, providing intellisense without full TypeScript overhead.
