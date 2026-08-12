# README Table of Contents — Broken Link Fix

**Fixes:** Issue #38134

## Problem

The Table of Contents in `README.md` contained broken or incorrect
anchor links. GitHub auto-generates anchors from heading text by:

1. Converting all text to **lowercase**
2. Replacing **spaces** with hyphens (`-`)
3. **Removing** special characters (`.`, `!`, `?`, `:`, `&`, `'`)
4. **Removing** emojis
5. Collapsing multiple hyphens into one

TOC links that used PascalCase (`#Installation`) or mixed case
(`#Quick-Start`) silently failed — GitHub is case-sensitive for anchors.

## GitHub Anchor Generation Rules

| Heading | Correct anchor |
|---|---|
| `## Installation` | `#installation` |
| `## Quick Start` | `#quick-start` |
| `## 🚀 Quick Start` | `#quick-start` |
| `## FAQ & Help` | `#faq--help` |
| `## What's New` | `#whats-new` |
| `## v1.1.0 Release` | `#v110-release` |
| `## Browser Support` | `#browser-support` |
| `## Contributing Guidelines` | `#contributing-guidelines` |

## Links Fixed

| Before | After |
|---|---|
| `[Installation](#Installation)` | `[Installation](#installation)` |
| `[Quick Start](#Quick-Start)` | `[Quick Start](#quick-start)` |
| `[Usage](#Usage)` | `[Usage](#usage)` |
| `[Contributing](#Contributing-Guidelines)` | `[Contributing](#contributing-guidelines)` |
| `[Browser Support](#Browser-Support)` | `[Browser Support](#browser-support)` |
| `[FAQ](#FAQ)` | `[FAQ](#faq)` |
| `[License](#License)` | `[License](#license)` |
| `[Animation Classes](#Animation-Classes)` | `[Animation Classes](#animation-classes)` |

## Files Changed

- `README.md` — all TOC anchor links corrected to lowercase/hyphen format
- `submissions/examples/readme-toc-fix/` — supporting files per contribution policy

## Acceptance Criteria

- [x] Every TOC link verified against actual heading text
- [x] All anchors follow GitHub's lowercase-hyphen format
- [x] Emoji and special characters handled correctly
- [x] Tested by clicking each TOC link on GitHub
- [x] Zero changes to any CSS, JS, or component files