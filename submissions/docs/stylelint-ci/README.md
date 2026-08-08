# Stylelint CI - Submission

## Summary
This submission proposes a candidate GitHub Actions workflow to run Stylelint across the repository's CSS files. It includes:
- `stylelint-workflow.yml` (candidate workflow)
- `.stylelintignore` (ignore list)
- `demo.html` + `style.css` (demo)
- this `README.md`

Fixes: #63629

## Why this is needed
- Ensures consistent CSS quality across the project by catching errors and style issues in CI before merging.
- Keeps contributions under `submissions/` for maintainer review and controlled adoption.

## Adoption (for maintainers)
To enable the workflow, copy/merge the files into the repo root:

1. Copy the workflow:
```bash
cp submissions/docs/stylelint-ci/stylelint-workflow.yml .github/workflows/stylelint.yml
