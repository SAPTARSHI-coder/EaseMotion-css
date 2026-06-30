# Changelog & Release Notes Automation

## 1. What does this do?

This submission adds a GitHub Actions workflow (`release-notes.yml`) to automatically generate structured release notes from merged Pull Request titles grouped by labels (`component`, `bug`, `docs`) and append them to `CHANGELOG.md` whenever a new release is published. It also proposes a `[Changelog]` badge to be placed on the project README.

## 2. How is it used?

The workflow runs automatically in GitHub Actions on the `release: published` trigger. For manual review, the workflow configuration file is provided in this submission folder:

- Proposed Workflow Path: `submissions/examples/changelog-automation-naresh/release-notes.yml` (to be placed at `.github/workflows/release-notes.yml`)
- Proposed README Badge Syntax:
  ```markdown
  [![Changelog](https://img.shields.io/badge/Changelog-Keep%20a%20Changelog-6c63ff?style=flat-square)](./CHANGELOG.md)
  ```

## 3. Why is it useful?

As the framework grows with hundreds of community contributions, users and maintainers need an automated, conflict-free way to track what changed between versions without manually keeping files up-to-date or losing track of bug fixes and enhancements.

---

## 🛠️ Integration Instructions for Maintainers

Since contributors cannot modify files outside the `submissions/` folder directly due to strict repository protection rules, please integrate this feature by:

1. Moving `release-notes.yml` to `.github/workflows/release-notes.yml`.
2. Adding the `[Changelog]` badge to `README.md` and `README.bn.md` under the title:
   ```markdown
   [![Changelog](https://img.shields.io/badge/Changelog-Keep%20a%20Changelog-6c63ff?style=flat-square)](./CHANGELOG.md)
   ```
