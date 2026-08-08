# Stylelint CI — Submission

## Summary
This submission proposes a ready-to-use GitHub Actions workflow to run Stylelint on the repository's CSS files in CI. It includes:
- a candidate workflow YAML (`stylelint-workflow.yml`),
- a `.stylelintignore` to exclude build artifacts,
- a small demo page, and
- this README with adoption instructions.

Issue: Fixes / relates to #63629

---

## Files included
- `stylelint-workflow.yml` — Candidate GitHub Actions workflow (copy to `.github/workflows/stylelint.yml` to enable).
- `.stylelintignore` — Files & directories to exclude from linting (copy to repo root or merge into existing ignore).
- `demo.html` + `style.css` — Minimal demo files required by the `submissions/docs/` track.
- `README.md` — This file (instructions and rationale).

All files live under `submissions/docs/stylelint-ci/` per the project’s submission model.

---

## Adoption — step-by-step (for maintainers)
If you accept this proposal, perform the following to enable the workflow:

1. Copy the workflow YAML into the workflows folder:
```bash
cp submissions/docs/stylelint-ci/stylelint-workflow.yml .github/workflows/stylelint.yml
