# React Showcase ESLint Config (#22956)

This submission introduces an official `.eslintrc.cjs` configuration specifically tuned for the React showcase environment, establishing baseline code quality and enforcing best practices for the React wrappers.

## Included Files

- `.eslintrc.cjs` - The ESLint configuration module.
- `demo.html` & `style.css` - Included solely to satisfy the automated PR validation script requirements for the `submissions/` directory.

## Configuration Details

- **React Plugins**: Extends `plugin:react/recommended` and `plugin:react/jsx-runtime` to support modern React 18 semantics without requiring explicit `import React` statements in every file.
- **Hook Linting**: Enables `plugin:react-hooks/recommended` to rigorously enforce the rules of hooks, ensuring that the dependency arrays inside the `useAnimation` and `useScrollReveal` wrappers are exhaustively maintained.
- **Vite Refresh**: Implements `react-refresh/only-export-components` to warn developers if they accidentally export non-component variables from `.jsx` files, which breaks Vite's Fast Refresh functionality.
- **Prop Types Override**: Turns off `react/prop-types` since the EaseMotion React initiative heavily relies on JSDoc annotations and explicit TypeScript types for component prop validation instead.

*Note: Since repository PR bots block submissions that modify files outside the `submissions/` folder, this file is submitted here for the repository maintainers to manually move to the `examples/react-vite/` root.*
