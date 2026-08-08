# Stylelint CI - Submission

## Summary

This submission proposes a candidate GitHub Actions workflow to run Stylelint across the repository's CSS files. It includes:

* `stylelint-workflow.yml` (candidate workflow)
* `.stylelintignore` (ignore list)
* `demo.html` + `style.css` (demo)
* this `README.md`

Fixes: #63629

## Why this is needed

* Ensures consistent CSS quality across the project by catching errors and style issues in CI before merging.
* Keeps contributions under `submissions/` for maintainer review and controlled adoption.

## Adoption (for maintainers)

To enable the workflow, copy/merge the files into the repo root:

1. Copy the workflow:

```bash
cp submissions/docs/stylelint-ci/stylelint-workflow.yml .github/workflows/stylelint.yml
```

2. Copy the ignore file to the repo root (optional if maintainer already has an ignore):

```bash
cp submissions/docs/stylelint-ci/.stylelintignore .stylelintignore
```

3. Commit and push; the workflow triggers on pushes and PRs to `main`.

## How a developer uses it

* Contributors: ensure CSS passes stylelint locally before opening PRs:

```bash
npm ci
npm run lint:css
# or:
npx stylelint "**/*.css" --ignore-path .stylelintignore --allow-empty-input --max-warnings=0
```

* Maintainers: copy the two files above to enable CI (or merge rules into existing root files).

## How I tested this submission

* Ran:

```bash
npx stylelint "submissions/docs/stylelint-ci/*.css" --ignore-path submissions/docs/stylelint-ci/.stylelintignore
```

* The demo styles pass linting for the provided rules.

## Notes for reviewers

* This submission re-uses the existing top-level `.stylelintrc.json` (no changes included).
* If maintainers want inline PR annotations, I can submit a follow-up to add reviewdog.
