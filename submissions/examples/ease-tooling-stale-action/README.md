# Automated Stale Issue/PR Action (`ease-tooling-stale-action`)

A GitHub Action configuration to automatically manage stale issues and pull requests, keeping the repository backlog healthy at scale.

## 🚀 Features

- **Automated Labeling**: Marks issues and PRs as `stale` after 30 days of inactivity.
- **Automated Closing**: Closes stale issues/PRs after an additional 14 days of inactivity.
- **Exemptions**: Safely ignores issues or PRs explicitly labeled with `pinned` or `help wanted`.

## 🛠️ Usage

To strictly adhere to this repository's automated PR checklist (which only allows `demo.html`, `style.css`, and `README.md` in a submission folder), the required workflow configuration is provided here.

**Maintainer Instructions:**  
Create a new file at `.github/workflows/stale.yml` in the root of the repository and paste the following code:

```yaml
name: 'Close stale issues and PRs'

on:
  schedule:
    - cron: '0 0 * * *'

jobs:
  stale:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/stale@v9
        with:
          stale-issue-message: 'This issue has been automatically marked as stale because it has not had recent activity. It will be closed in 14 days if no further activity occurs. Thank you for your contributions.'
          stale-pr-message: 'This pull request has been automatically marked as stale because it has not had recent activity. It will be closed in 14 days if no further activity occurs. Thank you for your contributions.'
          close-issue-message: 'This issue was closed because it has been stalled for 14 days with no activity.'
          close-pr-message: 'This pull request was closed because it has been stalled for 14 days with no activity.'
          days-before-stale: 30
          days-before-close: 14
          exempt-issue-labels: 'pinned,help wanted'
          exempt-pr-labels: 'pinned,help wanted'
          stale-issue-label: 'stale'
          stale-pr-label: 'stale'
