# Automated Release Workflow for npm Package Publishing

**What does this do?**
This submission provides a GitHub Actions workflow (`release.yml`) to automate the release and publishing process for the EaseMotion CSS npm package whenever a new version tag (e.g., `v*.*.*`) is created.

**How is it used?**
Because of the current core file freeze, this workflow is submitted here for the maintainer to manually integrate into `.github/workflows/` once core contributions are accepted.

To use it, save the following code as `.github/workflows/release.yml` in the root of the repository:

```yaml
# ==============================================================================
# Workflow: Release Package
# Trigger:  Creates a new release and publishes to npm when a version tag (v*.*.*) is pushed.
# 
# Required Secrets:
#   NODE_AUTH_TOKEN: An npm access token with publish permissions for the package.
# ==============================================================================
name: Release Package

on:
  push:
    tags:
      - 'v*.*.*'

permissions:
  contents: write

jobs:
  publish:
    name: Publish and Release
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'

      - name: Install dependencies
        run: npm ci

      - name: Run validation checks
        run: npm run validate:release

      - name: Publish to npm
        run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NODE_AUTH_TOKEN }}

      - name: Upload Build Artifacts
        uses: actions/upload-artifact@v4
        with:
          name: css-artifacts
          path: |
            easemotion.css
            easemotion.min.css

      - name: Create GitHub Release
        uses: softprops/action-gh-release@v2
        with:
          generate_release_notes: true
          files: |
            easemotion.css
            easemotion.min.css
```

**Why is it useful?**
Publishing releases manually is repetitive and prone to human error. Automating the release process ensures that every tagged version is built, validated, and published consistently while reducing maintenance effort.
