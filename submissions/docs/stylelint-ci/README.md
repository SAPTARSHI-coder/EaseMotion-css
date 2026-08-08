# Stylelint CI — Submission

What this submission does
- Proposes a GitHub Actions workflow to run Stylelint on CSS files in CI.
- Provides a `.stylelintignore` and a ready-to-copy workflow YAML (`stylelint-workflow.yml`) that maintainers can place in `.github/workflows/`.

Why this is in `submissions/`
- EaseMotion CSS enforces a submission-first model: contributors add proposals under `submissions/` and the maintainer reviews and integrates accepted items into the repository root. This submission follows that model and avoids editing root config files directly.

How to adopt (maintainer instructions)
1. If accepted, copy `stylelint-workflow.yml` to `.github/workflows/stylelint.yml`.
2. Merge `.stylelintignore` content into the repo root if desired.
3. CI will run `npx stylelint "**/*.css" --max-warnings=0` (fail on warnings).

Local testing
1. From repo root:
   - npm ci
   - npm run lint:css
   (The repo already has stylelint in devDependencies and a `lint:css` script.)

Notes
- This submission intentionally re-uses the existing top-level `.stylelintrc.json` and does not add another `.stylelintrc.json`.
