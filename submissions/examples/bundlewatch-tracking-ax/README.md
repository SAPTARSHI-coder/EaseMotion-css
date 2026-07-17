# Bundle Size Tracking with Bundlewatch

A complete setup guide for tracking CSS bundle sizes on every pull request using Bundlewatch. Prevents accidental bundle bloat by failing CI if the size exceeds defined limits.

## Files
- `bundlewatch.config.json` – configuration file with file paths and max sizes
- `demo.html` – explains how the tool works
- `style.css` – demo page styling
- `README.md` – this file

## How to Set Up

1. **Install Bundlewatch** as a dev dependency:
   ```bash
   npm install --save-dev bundlewatch
Add the configuration file bundlewatch.config.json to your repository root with the contents provided.

Add a GitHub Actions workflow (example below) to run Bundlewatch on every PR:

yaml
name: Bundle Size Check
on: [pull_request]
jobs:
  bundlewatch:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Bundlewatch
        run: npx bundlewatch
        env:
          BUNDLEWATCH_GITHUB_TOKEN: ${{ secrets.BUNDLEWATCH_GITHUB_TOKEN }}
Create a GitHub Personal Access Token with repo scope and add it as a secret named BUNDLEWATCH_GITHUB_TOKEN in your repository settings.

How It Works
Bundlewatch compares the sizes of easemotion.css and easemotion.min.css against the main branch.

If any file exceeds its max size by more than 5KB, the PR check fails and the PR is blocked.

A comment is posted on the PR with the exact size delta for each file.

EaseMotion classes used in demo
Layout: ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-py-16

Background: ease-bg-gray-50, ease-bg-white

Typography: ease-text-4xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-text-lg, ease-font-semibold, ease-text-gray-600

Spacing: ease-mb-2, ease-mb-4, ease-mb-8, ease-mt-4, ease-mt-6, ease-mt-8, ease-p-6, ease-pl-5

Components: ease-card

Animation: ease-fade-in, ease-delay-200, ease-delay-500

Utilities: ease-list-disc, ease-space-y-2