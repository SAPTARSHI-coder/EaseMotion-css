# Badge Colors Token Migration Design

## Purpose
Fix hardcoded hex color values in `.ease-badge-info` and `.ease-badge-warning` utility classes (Issue #46213). They should use the CSS custom properties from the design token system so that they respond to theme overrides and dark mode.

## Architecture & Data Flow
1. **Theme Tokens (`core/variables.css`)**: 
   - Introduce new CSS variables for badge backgrounds in the `:root` scope.
   - Introduce dark mode overrides for these backgrounds and ensure text contrast.
2. **Component CSS (`core/utilities.css`)**:
   - Swap the hardcoded hex codes for `var(--ease-color-info-bg)` and `var(--ease-color-info-dark)`, as well as their `warning` equivalents.

## Components & Changes

### 1. Variables Updates
In `core/variables.css`, add the following to the `:root` block:
- `--ease-color-info-bg: #dbeafe;`
- `--ease-color-warning-bg: #fef3c7;`

In the `[data-theme="dark"]` and `@media (prefers-color-scheme: dark)` blocks:
- Overwrite `--ease-color-info-bg` to an appropriate dark-mode background (e.g., `rgba(59, 130, 246, 0.2)`).
- Ensure `--ease-color-info-dark` is legible (e.g., use `--ease-color-info-light` or `#93c5fd`).
- Overwrite `--ease-color-warning-bg` to an appropriate dark-mode background (e.g., `rgba(245, 158, 11, 0.2)`).
- Ensure `--ease-color-warning-dark` is legible (e.g., use `--ease-color-warning-light` or `#fcd34d`).

### 2. Utilities Updates
In `core/utilities.css`, update lines 717-719:
```css
.ease-badge-info { 
    background: var(--ease-color-info-bg); 
    color: var(--ease-color-info-dark); 
}

.ease-badge-warning { 
    background: var(--ease-color-warning-bg); 
    color: var(--ease-color-warning-dark); 
}
```

## Error Handling & Testing
- **Theme Overrides**: Verify that overriding `--ease-color-info-bg` on the `:root` correctly changes the badge color.
- **Dark Mode**: Verify that switching to dark mode alters the badge background and text colors to maintain contrast and visual hierarchy.
- **Backwards Compatibility**: The default values will match the currently hardcoded hex values, ensuring no visual regressions on standard light mode.
