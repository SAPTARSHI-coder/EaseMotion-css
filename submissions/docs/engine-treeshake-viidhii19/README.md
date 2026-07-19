# Engine Showcase: AST Dependency Tree-Shaking (engine-treeshake-viidhii19)

### 1. What does this do?
This is an architectural proof-of-concept for `optimizer.js` that statically analyzes an HTML AST for used `ease-*` classes and shakes out unused `--ease-*` CSS custom properties from the `:root` pseudo-class.

### 2. How is it used?
The engine parses HTML class attributes like `class="ease-fade-in"` and maps them to their required dependencies in the CSS (e.g., `--ease-opacity-hidden`, `--ease-speed-medium`). It then reconstructs the `:root` block to only include the used variables and strips the rest. You can test this interactively by opening `demo.html` in a browser and clicking "Run Tree-Shaker" to process the raw inputs.

### 3. Why is it useful?
It reduces style recalculation overhead in the browser's rendering engine for enterprise deployments by ensuring only actively utilized CSS tokens are shipped in the final minified bundle, perfectly aligning with EaseMotion's zero-dependency, high-performance philosophy.
