#!/usr/bin/env bash
# ============================================================
# EaseMotion CSS — CHANGELOG.md Generator
# Groups merged PRs by label and formats in Keep a Changelog style.
# Usage: bash scripts/generate-changelog.sh
# Requires: gh (GitHub CLI) authenticated
# ============================================================

set -euo pipefail

REPO="SAPTARSHI-coder/EaseMotion-css"
OUTPUT="CHANGELOG.md"
SINCE="${1:-$(date -d '30 days ago' +%Y-%m-%d)}"
UNTIL="${2:-$(date +%Y-%m-%d)}"

cat > "$OUTPUT" <<- HEADER
# Changelog

All notable changes to EaseMotion CSS are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

HEADER

mkdir -p /tmp/easemotion-changelog
rm -f /tmp/easemotion-changelog/*

gh search prs \
  --repo "$REPO" \
  --merged \
  --merged-at ">$SINCE" \
  --limit 500 \
  --json number,title,labels \
  --jq '.[] | {num: .number, title: .title, labels: [.labels[].name]}' \
| while read -r line; do
  num=$(echo "$line" | jq -r '.num')
  title=$(echo "$line" | jq -r '.title')
  labels=$(echo "$line" | jq -r '.labels | join(",")')

  if echo "$labels" | grep -qi "animation"; then
    echo "- $title ([#$num](https://github.com/$REPO/pull/$num))" >> /tmp/easemotion-changelog/animation
  elif echo "$labels" | grep -qi "bug"; then
    echo "- $title ([#$num](https://github.com/$REPO/pull/$num))" >> /tmp/easemotion-changelog/bug
  elif echo "$labels" | grep -qi "docs"; then
    echo "- $title ([#$num](https://github.com/$REPO/pull/$num))" >> /tmp/easemotion-changelog/docs
  elif echo "$labels" | grep -qi "component"; then
    echo "- $title ([#$num](https://github.com/$REPO/pull/$num))" >> /tmp/easemotion-changelog/component
  else
    echo "- $title ([#$num](https://github.com/$REPO/pull/$num))" >> /tmp/easemotion-changelog/other
  fi
done

append_section() {
  local file="/tmp/easemotion-changelog/$1" heading="$2"
  if [[ -s "$file" ]]; then
    {
      echo "### $heading"
      echo ""
      sort -u "$file"
      echo ""
    } >> "$OUTPUT"
  fi
}

append_section "animation" "✨ New Animations"
append_section "component" "🧩 Components"
append_section "docs"      "📖 Documentation"
append_section "bug"       "🐛 Bug Fixes"
append_section "other"     "🔧 Other Changes"

rm -rf /tmp/easemotion-changelog
echo "✓ Generated $OUTPUT for period $SINCE → $UNTIL"
