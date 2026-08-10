# Bypass CI Bug

This folder was created because `.github/workflows/react-scss-validator.yml` has a bug on line 78:
`git checkout pr-branch -- submissions/react submissions/scss 2>/dev/null || true`

If a PR only contains an `scss` folder, `git checkout` fails entirely because `submissions/react` does not exist on the branch. This causes the action to fall back to the API file list, which later crashes `fs.readFileSync` (ENOENT) since the files weren't checked out to disk.

By including this valid React component structure, the `git checkout` succeeds, allowing the SCSS validation to pass.
