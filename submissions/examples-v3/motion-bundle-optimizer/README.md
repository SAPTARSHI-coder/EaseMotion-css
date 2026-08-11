# Motion Bundle Optimizer (Simulator)

Relates to feature request **#41374**.

## 1. What does this do?

Simulates a build-time utility (like a PostCSS plugin or PurgeCSS wrapper) that analyzes the HTML files in a project, detects which EaseMotion classes are actually being used, and generates a minimized CSS stylesheet containing *only* those specific utilities and their required `@keyframes`.

## 2. Why is this useful for EaseMotion CSS?

As the EaseMotion library grows, the total size of the CSS file increases. Most projects only use a fraction of the available animations. A Motion Bundle Optimizer ensures that production builds remain extremely lightweight by "tree-shaking" unused motion utilities, improving page load speeds without sacrificing the utility-first developer experience.

## 3. How the Simulation Works

The included `demo.html` acts as an interactive dashboard for the concept:
1. **Input**: The user pastes their HTML markup into the editor.
2. **Analysis**: The JavaScript engine parses the `class="..."` attributes to find any string starting with `ease-`.
3. **Dependency Resolution**: It checks those classes against a mock EaseMotion dictionary. Crucially, it resolves dependencies (e.g., if `.ease-fade-up` is used, it knows to also include `@keyframes ease-fade-up-keyframes`).
4. **Output Generation**: It reconstructs a clean, formatted CSS string containing only the required code.
5. **Stats Calculation**: It calculates the theoretical bundle size reduction based on unused classes.

## 4. Features Included

- **Interactive Editor**: Real-time parsing of HTML input.
- **Dependency Graph**: Accurately includes required `@keyframes` without duplicating them if multiple classes share the same keyframe.
- **Savings Calculator**: Displays a badge showing the percentage of CSS saved by optimizing the bundle.
- **Complex Sample Loader**: A "Load Complex Example" button to quickly demonstrate how it handles multiple classes and nested elements.
