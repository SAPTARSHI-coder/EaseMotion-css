# CHANGELOG & Release Notes

## What does it do?
A bash script that generates changelog entries from git commit history grouped by type (features, fixes, docs, maintenance) — no dependencies required.

## Features
- Parses conventional commit messages from `git log`
- Groups entries by type (feat, fix, docs, chore)
- Supports any git ref range
- Ready for GitHub Actions automation

## Usage
```bash
# Between two tags
bash changelog-gen.sh v1.0.0 v1.1.0

# From a past tag to HEAD
bash changelog-gen.sh v1.0.0
```

## Files
| File | Description |
|------|-------------|
| `changelog-gen.sh` | Bash changelog generator script |
| `demo.html` | Demo page explaining the tooling |
| `style.css` | Styling for the demo page |
| `README.md` | Documentation and usage |

## Tech Stack
- Bash script, no dependencies
- Parses conventional commit format
