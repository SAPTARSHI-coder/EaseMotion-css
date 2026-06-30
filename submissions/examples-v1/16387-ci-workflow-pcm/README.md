# GitHub Actions CI Workflow for Pull Request Validation

1. **What does this do?** Adds a GitHub Actions CI workflow (`.github/workflows/ci.yml`) that runs on every `push` and `pull_request` to `main`. Validates all PRs with lint, test, build, and bundle validation across a Node.js version matrix (18.x, 20.x, 22.x).

2. **How is it used?** Place `.github/workflows/ci.yml` in the repository root. On every push/PR to main, GitHub Actions automatically checks out the code, installs dependencies with caching, runs the full validation pipeline, and reports results as commit status checks.

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  validate:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x, 20.x, 22.x]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: "npm"
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build
      - run: npm run validate:bundle
```

3. **Why is it useful?** The `.github/workflows/` directory exists but is empty — there is no automated PR validation. Every PR must be manually reviewed and tested by maintainers. This CI workflow provides automated checks for CSS lint errors, test failures, build breaks, and bundle integrity, preventing invalid code from being merged and reducing maintainer review burden.

### Pipeline Steps

| Step       | Action                    | Purpose                                      |
| ---------- | ------------------------- | -------------------------------------------- |
| Checkout   | `actions/checkout@v4`     | Clone PR branch                              |
| Setup Node | `actions/setup-node@v4`   | Install Node 18/20/22 with npm cache         |
| Install    | `npm ci`                  | Clean install from lockfile                  |
| Lint       | `npm run lint`            | CSS + JS linting                             |
| Test       | `npm test`                | Specificity, RTL, bundle integrity tests     |
| Build      | `npm run build`           | Generate dist bundle                         |
| Validate   | `npm run validate:bundle` | Size check, duplicate selectors, layer order |

### Features

- Matrix across Node 18.x, 20.x, 22.x for compatibility
- `actions/setup-node@v4` with `cache: 'npm'` for faster installs
- Runs on both push and pull_request to main
- Each matrix entry reports its own commit status check
- All 7 pipeline stages must pass before merge
- Uses `npm ci` for reproducible, deterministic installs

Fixes #16387
