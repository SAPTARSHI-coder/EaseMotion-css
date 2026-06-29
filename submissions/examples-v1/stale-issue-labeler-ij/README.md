# Component: Stale Issue/PR Labeler

This submission implements a GitHub Actions stale issue/PR automation for issue **#13654**.

## Description

A GitHub Actions workflow that runs daily to label inactive issues and pull requests as "stale" after 60 days of inactivity, and closes them after 14 additional days unless activity resumes. Exempts "pinned" and "security" labeled items.

## Acceptance Criteria

- YAML workflow with cron schedule
- Stale labeling after 60 days inactivity
- Auto-close after 14 more days
- Exempt labels configurable
- Works for both issues and PRs

## Files

- `submissions/examples/stale-issue-labeler-ij/demo.html`
- `submissions/examples/stale-issue-labeler-ij/style.css`
- `submissions/examples/stale-issue-labeler-ij/README.md`
