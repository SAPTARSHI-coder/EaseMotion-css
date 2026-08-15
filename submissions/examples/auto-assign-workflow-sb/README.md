# Tooling: Create automated issue assignment via GitHub Actions (#2574)

### 1. What does this do?
Provides a complete, serverless `.github/workflows/auto-assign.yml` script that listens for user comment streams and auto-assigns issues securely using native GitHub infrastructure.

### 2. How is it used?
Following the repository freeze protocols, this submission maps out the fully optimized native Actions script:

```yaml
name: Automated Issue Assignment

on:
  issue_comment:
    types: [created]

jobs:
  auto-assign:
    name: Assign Contributor
    # Run only if a comment contains the explicit assignment request string
    if: contains(github.event.comment.body, '/claim') || contains(github.event.comment.body, '/assign')
    runs-on: ubuntu-latest
    permissions:
      issues: write

    steps:
      - name: Assign Commenter to Issue
        uses: actions/github-script@v7
        with:
          script: |
            const commenter = context.payload.comment.user.login;
            const issueNumber = context.issue.number;
            
            // Invoke the native GitHub REST API client to assign the user
            await github.rest.issues.addAssignees({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: issueNumber,
              assignees: [commenter]
            });
            
            // Post a structured validation message tagging the assignee
            await github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: issueNumber,
              body: `🎉 Assigned! Welcome aboard, @${commenter}! 🌟\n\n⏳ Timeframe: You have 5 days to submit a Pull Request before it becomes open for others to claim.`
            });