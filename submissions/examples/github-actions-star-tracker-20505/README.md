# Tooling: GitHub Actions Star Tracker (#20505)

This directory contains the required DevOps documentation and a stylized UI visualization for the GitHub Actions Star/Fork tracking workflow.

As GitHub Actions workflows must be committed to the `.github/workflows/` directory which is restricted by the contribution guidelines, this folder contains the required code as a copy-paste template, accompanied by an EaseMotion-styled dashboard mock.

---

## 🛠 Maintainer Setup Guide

To implement the scheduled tracker on the main branch, copy the following YAML file into `.github/workflows/star-tracker.yml`:

```yaml
name: Weekly Star Tracker

on:
  schedule:
    # Runs at 00:00 every Monday
    - cron: '0 0 * * 1'
  workflow_dispatch: # Allows manual trigger

jobs:
  track-stats:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Fetch Repo Stats
        id: fetch_stats
        run: |
          REPO="${{ github.repository }}"
          RESPONSE=$(curl -s "https://api.github.com/repos/$REPO")
          STARS=$(echo $RESPONSE | jq -r '.stargazers_count')
          FORKS=$(echo $RESPONSE | jq -r '.forks_count')
          DATE=$(date -I)
          
          echo "STARS=$STARS" >> $GITHUB_ENV
          echo "FORKS=$FORKS" >> $GITHUB_ENV
          echo "DATE=$DATE" >> $GITHUB_ENV

      - name: Update history.json
        run: |
          mkdir -p stats
          FILE="stats/history.json"
          
          # Initialize if it doesn't exist
          if [ ! -f "$FILE" ]; then
            echo '{"last_updated": "", "history": []}' > "$FILE"
          fi
          
          # Append new data using jq
          jq --arg date "$DATE" --argjson stars "$STARS" --argjson forks "$FORKS" \
             '.last_updated = $date | .history += [{"date": $date, "stars": $stars, "forks": $forks}]' \
             "$FILE" > tmp.json && mv tmp.json "$FILE"

      - name: Commit and Push
        run: |
          git config --global user.name "github-actions[bot]"
          git config --global user.email "github-actions[bot]@users.noreply.github.com"
          git add stats/history.json
          git commit -m "chore: update weekly repo stats [skip ci]" || echo "No changes to commit"
          git push
```

### How it works:
1. It triggers every Monday at Midnight (`cron: '0 0 * * 1'`).
2. It hits the public GitHub API to get the current stars and forks.
3. It uses `jq` to append the entry into `stats/history.json`.
4. It commits the file back to the repository using the default GitHub Actions bot token (no extra secrets needed).

---

## 🎨 About the Demo HTML

To fulfill the `submissions/examples` template requirement, `demo.html` and `style.css` visualize a "Growth Dashboard" utilizing EaseMotion classes to present the generated JSON data:
* `.ease-grow-up` (Custom keyframe utilizing `transform-origin: bottom`) for the bar chart animation.
* `.ease-slide-up-stagger` for the stat cards.
* `.ease-pulse` for the live indicator.

## 🔗 Related Issue
Closes Issue #20505
