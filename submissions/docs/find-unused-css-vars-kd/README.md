# Unused CSS Variables CLI Scanner (kd)

A lightweight CLI tool to scan the project's CSS files and report custom properties that are declared but never referenced, helping keep design tokens lean and maintainable.

## Questions

1. **What does this do?**  
   It recursively scans the framework's CSS source files, extracts declared CSS custom properties and `var()` references, and reports variables that are declared but never used.

2. **How is it used?**  
   Run it using npm:

   ```bash
   npm run lint:unused
   ```

   Or run the CLI directly with Node:

   ```bash
   node scripts/find-unused-css-vars.mjs [options] [files/directories...]
   ```

3. **Why is it useful?**  
   As EaseMotion CSS scales and undergoes refactoring, obsolete tokens accumulate. This zero-dependency linting tool ensures the design token registry stays clean, readable, and highly maintainable for contributors and maintainers alike without impacting runtime performance.
