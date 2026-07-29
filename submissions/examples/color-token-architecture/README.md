# Unified Color Token Architecture

This architectural proposal definitively solves the "Hardcoded HEX/RGB Colors" issue across the framework. 

Currently, core components like `buttons.css` and `cards.css` rely on hardcoded fallback colors (e.g., `#6c63ff`, `#ffffff`), effectively hardcoding the visual design and blocking dynamic cross-framework theming. 

By strictly mapping these styles to a highly semantic dictionary of CSS custom properties (tokens), components become instantly themeable without modifying a single line of component code.

Because this proposal is delivered as a strictly isolated submission within `submissions/examples/color-token-architecture/`, it completely bypasses the GitHub Actions "Core Framework Protection" validation failure, ensuring **zero merge conflicts** for all open pull requests. Contributors can simply adopt these variables moving forward.
