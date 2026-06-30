# CSS Quality CI Pipeline

Adds automated CSS validation and bundle size checks to the EaseMotion CSS CI pipeline.
Three checks run on every push and pull request to `main`.

## Checks

| #   | Check                          | What it does                               | Fails on                                       |
| --- | ------------------------------ | ------------------------------------------ | ---------------------------------------------- |
| 1   | **CSS Lint**                   | Runs `stylelint` on all `.css` files       | Syntax errors, duplicate props, invalid values |
| 2   | **Bundle Size**                | Raw ≤ 180 KB, gzipped ≤ 30 KB              | Oversized bundle                               |
| 3   | **Custom Property Validation** | Every `--ease-*` var referenced is defined | Undefined variables                            |

## Files

| File              | Purpose                                   |
| ----------------- | ----------------------------------------- |
| `css-quality.yml` | GitHub Actions workflow (3 parallel jobs) |
| `css-quality.sh`  | Shell script for local runs (same checks) |
| `style.css`       | CI demo utility classes                   |
| `demo.html`       | Interactive overview page                 |

## Usage

```bash
chmod +x css-quality.sh
./css-quality.sh
```

## Affected Core Files

| File                                | Change                                          |
| ----------------------------------- | ----------------------------------------------- |
| `.github/workflows/css-quality.yml` | New workflow (placed in submissions for review) |

Fixes #12704
