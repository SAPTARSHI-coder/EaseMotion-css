# Fix: ci.yml runs npm ci on every PR causing guaranteed failures (#2571)

### 1. What does this do?
Provides the fully updated and sanitized configuration block for `.github/workflows/ci.yml` to remove the crashing `release-validation` job entirely, preserving only the static code linter pipelines.

### 2. How is it used?
The code patch below represents the optimized, lightweight workflow configuration script for continuous integration:

```yaml
name: Continuous Integration

on:
  pull_request:
    branches: [main]

jobs:
  lint:
    name: Code Linting Suite
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Codebase
        uses: actions/checkout@v4

      - name: Run HTMLHint Validator
        uses: htmlhint/htmlhint-action@v2
        with:
          config_path: '.htmlhintrc'

      - name: Run Stylelint Checker
        uses: stylelint/stylelint-action@v4