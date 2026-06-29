# Automated PR Size Labeling Workflow

Welcome to the **Automated PR Size Labeling Workflow** guide! This document details how to configure a DevOps workflow that automatically measures and labels Pull Requests based on size, helping maintainers prioritize reviews.

---

## 📋 Table of Contents
1. [Sizing Criteria Metrics](#1-sizing-criteria-metrics)
2. [Action Workflow Blueprint](#2-action-workflow-blueprint)
3. [Review Queue Optimization](#3-review-queue-optimization)
4. [Interactive Simulator Dashboard](#4-interactive-simulator-dashboard)

---

## 1. Sizing Criteria Metrics

Pull Requests are classified based on the number of changed files:

* **size/XS** (`1-2 files`): Small adjustments (e.g. typos, single variable updates). Est. review time: `< 5 minutes`.
* **size/S** (`3-5 files`): Minor additions (e.g. single component updates). Est. review time: `10-15 minutes`.
* **size/M** (`6-10 files`): Standard contributions (e.g. new layouts, multiple files). Est. review time: `20-30 minutes`.
* **size/L** (`11-20 files`): Substantial features (e.g. complete pages, multiple components). Est. review time: `40-60 minutes`.
* **size/XL** (`20+ files`): Heavy modifications (e.g. structural refactoring, break changes). Est. review time: `> 2 hours`.

---

## 2. Action Workflow Blueprint (`pr-size-labeler.yml`)

Save this file under `.github/workflows/pr-size-labeler.yml`:

```yaml
name: Auto PR Size Labeler

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  label-size:
    runs-on: ubuntu-latest
    steps:
      - name: Calculate changes size
        uses: actions/github-script@v6
        with:
          script: |
            const { data: files } = await github.rest.pulls.listFiles({
              owner: context.repo.owner,
              repo: context.repo.repo,
              pull_number: context.payload.pull_request.number
            });

            const count = files.length;
            let size = 'XS';

            if (count >= 3 && count <= 5) size = 'S';
            else if (count >= 6 && count <= 10) size = 'M';
            else if (count >= 11 && count <= 20) size = 'L';
            else if (count > 20) size = 'XL';

            const labelName = `size/${size}`;

            // Assign size label to PR
            await github.rest.issues.addLabels({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.payload.pull_request.number,
              labels: [labelName]
            });
```

---

## 3. Review Queue Optimization

* **Fast Merges**: Labeling PRs as `size/XS` or `size/S` helps maintainers merge small fixes quickly.
* **Complex Reviews**: Labeling PRs as `size/L` or `size/XL` warns reviewers that a deeper look is required, preventing quick approvals on large, complex code changes.

---

## 4. Interactive Simulator Dashboard

The companion page (`demo.html`) simulates this setup:
* **Slider Controls**: Change the files count dynamically from 1 to 50.
* **Logs CLI**: Shows the step-by-step GitHub Action runner steps.
* **Label Tagging Visual**: Displays the assigned badge on the simulated PR header in real-time.
