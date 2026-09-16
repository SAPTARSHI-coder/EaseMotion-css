# Package Exports Map Fix

1. What does this do? Proposes expanding the `exports` map in `package.json` with wildcards (`./components/*`, `./core/*`, `./easemotion/*`) to allow sub-path CSS imports.
2. How is it used? Developers can import individual stylesheets directly (e.g. `import 'easemotion-css/components/buttons.css'`).
3. Why is it useful? It unblocks modular tree-shaking and allows users to import targeted CSS components instead of the full bundle.
