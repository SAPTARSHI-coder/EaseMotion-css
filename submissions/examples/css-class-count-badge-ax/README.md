# CSS Class Count Badge Generator

A Node.js script that parses the core EaseMotion CSS files, counts classes by category (animation, utility, component), and generates shields.io badge URLs for the README.

## Files
- `count-classes.js` – the actual script
- `demo.html` – explains how the tool works
- `style.css` – demo page styling
- `README.md` – this file

## Categories
| Category   | Detection Pattern |
|------------|-------------------|
| Animation  | Classes like `ease-fade-in`, `ease-slide-up`, `ease-bounce` |
| Utility    | Layout, spacing, typography helpers (`ease-container`, `ease-flex`, `ease-text-*`, `ease-p-*`) |
| Component  | UI components (`ease-btn`, `ease-card`, `ease-input`, `ease-badge`) |

## How to Run
```bash
node count-classes.js
The script reads the CSS files in the core/ directory and prints three shields.io badge URLs in Markdown format.

Example Output
markdown
![Animation Classes](https://img.shields.io/badge/animations-25+-blue)
![Utility Classes](https://img.shields.io/badge/utilities-80+-green)
![Component Classes](https://img.shields.io/badge/components-15+-orange)
EaseMotion classes used in demo
Layout: ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-py-16

Background: ease-bg-gray-50, ease-bg-white

Typography: ease-text-4xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-text-lg, ease-font-semibold, ease-text-gray-600

Spacing: ease-mb-2, ease-mb-4, ease-mb-8, ease-mt-4, ease-mt-6, ease-mt-8, ease-p-6, ease-pl-5

Components: ease-card

Animation: ease-fade-in, ease-delay-200, ease-delay-500

Utilities: ease-list-disc, ease-space-y-2