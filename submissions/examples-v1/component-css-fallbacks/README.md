# 🎨 Component-Level CSS Variable Fallbacks in Command Palette

A showcase detailing the best practice of component-level CSS Custom Property fallbacks. Defining local fallback values ensures that UI components remain visually complete and functional even if global theme parameters are missing or undefined.

## 📋 Features

- 🛡️ **Resilient Design** - Utilizes `var(--variable-name, fallback-value)` structures to maintain standard styling if parent variables are missing.
- 🧪 **Interactive Testing** - Integrates a global theme controller to dynamically define or undefine root-level variables.
- 🔍 **Side-by-Side Comparison** - Directly contrasts a resilient command palette (with fallbacks) against a fragile command palette (without fallbacks).

## 🚀 Why Use Fallbacks?

In modular framework design, components are often imported, copy-pasted, or isolated without their parent stylesheets or global theme files (e.g. `:root` variables).

- **Prevents Broken UIs**: Standard variables fall back to browser defaults (often transparent, black, or white text) which destroys readability.
- **Isolates Dependencies**: Components contain their own visual backups and function independently.
- **Improves Developer Experience**: Developers can drop components into projects and customize them _optionally_, without visual degradation on day one.

## ⚙️ Best Practice CSS Syntax

### Fragile Implementation (Bad ❌)

If `--palette-bg-color` is not defined on `:root`, this element inherits no color (becoming transparent):

```css
.ease-command-palette {
  background-color: var(--palette-bg-color);
  color: var(--palette-text-color);
}
```

### Resilient Implementation (Good ✅)

If variables are undefined, the elements fallback gracefully to default values (`#1f2937` and `#f9fafb`):

```css
.ease-command-palette {
  background-color: var(--palette-bg-color, #1f2937);
  color: var(--palette-text-color, #f9fafb);
}
```
