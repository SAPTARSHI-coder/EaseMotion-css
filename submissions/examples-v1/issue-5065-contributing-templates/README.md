# Docs: Improve CONTRIBUTING.md with Issue Templates and PR Guidelines

**Fixes issue:** #5065

## Problem
The existing CONTRIBUTING.md was minimal and did not guide new
contributors on how to create proper issues or pull requests. For a
GSSoC project with many contributors, clear templates and guidelines
are essential to maintain issue/PR quality and consistency.

## What Was Added

### 1. Bug Report Template
`.github/ISSUE_TEMPLATE/bug_report.md` - structured fields for:
- What is broken
- Steps to reproduce
- Expected vs actual behavior
- Browser/OS info
- Severity
- Files affected

### 2. Feature Request Template
`.github/ISSUE_TEMPLATE/feature_request.md` - structured fields for:
- Problem being solved
- Proposed solution
- Implementation idea
- Additional notes

### 3. PR Description Template
`.github/PULL_REQUEST_TEMPLATE.md` - structured fields for:
- Related issue link
- What was changed
- How to test
- Checklist (style guidelines, testing, demo/README, regressions,
  commit message format)

### 4. CONTRIBUTING.md Improvements
Added new sections:
- **Branch naming convention** - `fix/`, `feat/`, `docs/` prefixes
  with issue number
- **Commit message format** - `<type>: <description> (#issue-number)`
  with examples
- **Label guide** - table explaining all repo labels (bug, type:feature,
  documentation, good first issue, help wanted, level:intermediate,
  GSSoC-26, gssoc:approved, component, design-tokens,
  browser-compatibility, animation)
- **Issue/PR template usage guidance**

## Files Changed
- `.github/ISSUE_TEMPLATE/bug_report.md` (new)
- `.github/ISSUE_TEMPLATE/feature_request.md` (new)
- `.github/PULL_REQUEST_TEMPLATE.md` (new)
- `CONTRIBUTING.md` (updated)

## Testing
1. Open the repo's "New Issue" page on GitHub - confirm Bug Report
   and Feature Request templates appear as selectable options
2. Open a new PR - confirm the PR description template auto-populates
3. Review CONTRIBUTING.md - confirm new sections are clear, accurate,
   and consistent with existing content

## Acceptance Criteria Met
- [x] Bug Report template added with all required fields
- [x] Feature Request template added with all required fields
- [x] PR Description template added with all required fields
- [x] Branch naming convention documented
- [x] Commit message format documented with examples
- [x] Label guide added
