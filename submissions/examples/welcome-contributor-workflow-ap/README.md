# First-Time Contributor Welcome Workflow

Welcome to the **First-Time Contributor Welcome Workflow** guide! This document details how to configure a DevOps workflow that welcomes new contributors, tags their PRs, and links them to onboarding guides.

---

## 📋 Table of Contents
1. [Workflow Mechanics](#1-workflow-mechanics)
2. [Action Script Blueprint](#2-action-script-blueprint)
3. [Personalized Welcome Comment Template](#3-personalized-welcome-comment-template)
4. [Interactive Simulator Dashboard](#4-interactive-simulator-dashboard)

---

## 1. Workflow Mechanics

To keep repository interactions welcoming, the action executes the following routines:
* **Trigger**: Fires when a `pull_request` or `pull_request_target` event is opened.
* **History Lookup**: Uses Octokit APIs to list the PR author's past contributions.
* **Conditional Actions**:
  * If merged PR count equals zero:
    * Injects a `first-time-contributor` label tag.
    * Appends a friendly welcoming comment onto the thread.
  * If merged PR count is greater than zero:
    * Skips welcoming routines to avoid spamming regular contributors.

---

## 2. Action Script Blueprint (`welcome-comment.yml`)

Save this file under `.github/workflows/welcome-comment.yml`:

```yaml
name: Welcome First-Time Contributors

on:
  pull_request_target:
    types: [opened]

jobs:
  welcome:
    runs-on: ubuntu-latest
    steps:
      - name: Check PR contributor history
        uses: actions/github-script@v6
        with:
          script: |
            const creator = context.payload.pull_request.user.login;
            const { data: pullRequests } = await github.rest.pulls.list({
              owner: context.repo.owner,
              repo: context.repo.repo,
              state: 'all',
              creator: creator
            });

            // Filter out unmerged PRs
            const mergedPrs = pullRequests.filter(pr => pr.merged_at !== null);

            if (mergedPrs.length === 0) {
              // Post welcoming message comment
              const welcomeBody = `### Welcome to EaseMotion CSS! 🎉\n\nHi @${creator}! Thank you for opening your first pull request. We appreciate your support!\n\nBefore our maintainers review, please check:\n- [Contribution Guide](https://github.com/SAPTARSHI-coder/EaseMotion-css/blob/main/submissions/README.md)\n- [Code of Conduct](https://github.com/SAPTARSHI-coder/EaseMotion-css/blob/main/CODE_OF_CONDUCT.md)\n- [Vision Roadmap](https://github.com/SAPTARSHI-coder/EaseMotion-css/blob/main/VISION.md)`;
              
              await github.rest.issues.createComment({
                owner: context.repo.owner,
                repo: context.repo.repo,
                issue_number: context.payload.pull_request.number,
                body: welcomeBody
              });

              // Add first-time-contributor label
              await github.rest.issues.addLabels({
                owner: context.repo.owner,
                repo: context.repo.repo,
                issue_number: context.payload.pull_request.number,
                labels: ['first-time-contributor']
              });
            }
```

---

## 3. Personalized Welcome Comment Template

The welcome message is structured in Markdown:
1. **Greeting**: Injects the contributor's GitHub handle (`@username`).
2. **Onboarding Links**: Injects links to the project's onboarding files, ensuring new contributors can easily find rules and guides.
3. **Appreciation Tag**: Thanks the contributor for their support to help improve retention.

---

## 4. Interactive Simulator Dashboard

The companion page (`demo.html`) simulates this setup:
* **Option Toggle**: Switch between first-time and returning authors.
* **CLI Log Screen**: Displays the step-by-step GitHub Action runner logs.
