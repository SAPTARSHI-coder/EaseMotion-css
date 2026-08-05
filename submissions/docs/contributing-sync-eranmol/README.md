# CONTRIBUTING.md Sync Fix — Issue #47443

## What does this do?

Documents and resolves two discrepancies between `CONTRIBUTING.md` and the live docs site that mislead new contributors.

## Discrepancies

| Rule | CONTRIBUTING.md (old) | Docs site (correct) |
|---|---|---|
| Inactivity unassign period | 5 days | **24 hours (1 day)** |
| Suffix naming convention | Not mentioned | **Required** (e.g. `ease-hover-sap`) |

## How is it used?

Apply the two diffs documented in `demo.html` to `CONTRIBUTING.md`:

1. **Line ~233** — change "5 days" to "24 hours (1 day)"
2. **After line ~126** — add the suffix naming examples and rationale

No new files are needed; this is a text-only fix to an existing markdown file.

## Why is it useful?

Contributors read `CONTRIBUTING.md` first as instructed. Outdated rules cause confusion, wasted assignments, and folder naming conflicts that the bot then rejects. Syncing the two sources eliminates this friction.
