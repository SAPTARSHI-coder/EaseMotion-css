#!/usr/bin/env bash
# ============================================================
# Changelog Generator
# Generates changelog entries from merged PR data
# ============================================================

set -e

if [ -z "$1" ]; then
  echo "Usage: $0 <from-ref> [to-ref]"
  echo "  Generates changelog entries from merged PRs between two git refs"
  exit 1
fi

FROM="$1"
TO="${2:-HEAD}"

echo "# Changelog"
echo
echo "## [Unreleased]"
echo

# Group by conventional commit type
echo "### ✨ Features"
echo
git log "$FROM..$TO" --oneline --grep="^feat" --pretty=format:"- %s" | sed 's/^feat(\([^)]*\)): //' | sort || true
echo

echo "### 🐛 Bug Fixes"
echo
git log "$FROM..$TO" --oneline --grep="^fix" --pretty=format:"- %s" | sed 's/^fix(\([^)]*\)): //' | sort || true
echo

echo "### 📚 Documentation"
echo
git log "$FROM..$TO" --oneline --grep="^docs" --pretty=format:"- %s" | sed 's/^docs(\([^)]*\)): //' | sort || true
echo

echo "### 🛠 Maintenance"
echo
git log "$FROM..$TO" --oneline --grep="^chore\|^refactor\|^test" --pretty=format:"- %s" | sed 's/^chore(\([^)]*\)): //; s/^refactor(\([^)]*\)): //; s/^test(\([^)]*\)): //' | sort || true
echo
