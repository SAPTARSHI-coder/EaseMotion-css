# Dependabot Configuration for Weekly Dependency Updates

A pre‑configured Dependabot setup that automatically creates pull requests for outdated npm dependencies on a weekly basis.

## Files
- `dependabot.yml` – the Dependabot configuration file
- `demo.html` – explains how the tool works
- `style.css` – demo page styling
- `README.md` – this file

## How to Set Up
1. Copy `dependabot.yml` into your repository's `.github/` folder.
2. Ensure Dependabot is enabled in your repository settings.
3. Dependabot will automatically run on the schedule defined in the config.

## Configuration Details
| Setting | Value |
|---------|-------|
| Ecosystem | npm |
| Schedule | Weekly (Monday 9:00 AM) |
| Open PR Limit | 5 |
| Target Branch | main |
| Auto‑label | `dependencies` |

## EaseMotion classes used in demo
- **Layout:** `ease-container`, `ease-flex`, `ease-items-center`, `ease-justify-center`, `ease-min-h-screen`, `ease-py-16`
- **Background:** `ease-bg-gray-50`, `ease-bg-white`
- **Typography:** `ease-text-4xl`, `ease-font-bold`, `ease-text-gray-500`, `ease-text-sm`, `ease-text-gray-400`, `ease-text-lg`, `ease-font-semibold`, `ease-text-gray-600`
- **Spacing:** `ease-mb-2`, `ease-mb-4`, `ease-mb-8`, `ease-mt-4`, `ease-mt-6`, `ease-mt-8`, `ease-p-6`, `ease-pl-5`
- **Components:** `ease-card`
- **Animation:** `ease-fade-in`, `ease-delay-200`, `ease-delay-500`
- **Utilities:** `ease-list-disc`, `ease-space-y-2`