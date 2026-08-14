# Audit: demo.html Validator

Scans all submission folders in `submissions/examples/` and reports any that are missing or have an empty `demo.html`.

## Usage

```bash
bash submissions/examples/audit-demo-html/audit.sh
```

Run from the repository root.

## What It Checks

| Check | Description |
|-------|-------------|
| Exists | `demo.html` file is present in the folder |
| Non-empty | `demo.html` has content (file size > 0) |

## Output

```
MISSING: folder-name — no demo.html
EMPTY:  folder-name — demo.html is empty
---
Audited: 42 submissions
Issues:  2
```

## Why This Matters

Broken or placeholder submissions clutter the repository and make it harder for users to find working examples. This audit helps maintainers quickly identify and clean up problematic folders.
