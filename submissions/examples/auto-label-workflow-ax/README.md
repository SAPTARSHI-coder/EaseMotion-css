# Auto-Label Issues Workflow

A GitHub Actions workflow that automatically adds labels to newly opened issues based on keywords found in the title.

## Keyword Mapping
| Keyword in title | Label added |
|------------------|-------------|
| `animation`      | `animation` |
| `component`      | `component` |
| `bug` or `fix`   | `bug`       |
| `docs`           | `documentation` |

## Files
- `auto-label.yml` – the GitHub Actions workflow file
- `demo.html` – explains how to use the tool
- `style.css` – demo page styling
- `README.md` – this file

## How to Use
1. Copy `auto-label.yml` into your repository's `.github/workflows/` directory.
2. Ensure the repository has the labels `animation`, `component`, `bug`, and `documentation` (create them if needed).
3. The workflow will run automatically whenever a new issue is opened.

## EaseMotion classes used in demo
- **Layout:** `ease-container`, `ease-flex`, `ease-items-center`, `ease-justify-center`, `ease-min-h-screen`, `ease-py-16`
- **Background:** `ease-bg-gray-50`, `ease-bg-white`
- **Typography:** `ease-text-4xl`, `ease-font-bold`, `ease-text-gray-500`, `ease-text-sm`, `ease-text-gray-400`, `ease-text-lg`, `ease-font-semibold`, `ease-text-gray-600`
- **Spacing:** `ease-mb-2`, `ease-mb-4`, `ease-mb-8`, `ease-mt-4`, `ease-mt-6`, `ease-mt-8`, `ease-p-6`, `ease-pl-5`
- **Components:** `ease-card`
- **Animation:** `ease-fade-in`, `ease-delay-200`, `ease-delay-500`