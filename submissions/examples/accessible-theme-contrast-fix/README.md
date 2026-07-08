# Accessible Theme Contrast Refactor (Hero & Outline Buttons)

A production-ready fix addressing accessibility and contrast degradation issues inside light-theme viewports. This module replaces static color values with structural CSS custom properties to ensure text, gradient headings, and border outlines remain fully legible, compliant with WCAG 2.1 AA text visibility standards, and highly visible across all background shifts.

## Enhancements Implemented
1. **Contrast-Compliant Hero Heading:** Implements an adaptive gradient framework that transitions to deeper, contrast-locked color nodes when light mode is initialized.
2. **Dynamic GitHub Outline Button:** Refactors border mapping using `currentColor` and custom theme parameters, preventing the outline from rendering invisible or faint on white fields.
3. **Semantic CSS Variable Architecture:** Swaps hardcoded styles for state variables mapped cleanly inside a root dataset context layer.

## Accessible Variables System
- `--hero-gradient`: Adaptive multi-stop color gradient bound to theme contrast targets.
- `--btn-outline-color`: Border and typography hex map syncing line contrast safely.
- `--surface-bg`: Clean canvas background node adapting to chosen layout modes.