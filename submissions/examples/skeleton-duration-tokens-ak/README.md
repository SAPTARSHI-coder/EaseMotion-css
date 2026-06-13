# Skeleton Duration Tokens

Demonstrates a bug where the skeleton shimmer animation uses a hardcoded duration value instead of referencing the framework's duration token system.

**Issue:** [#5760 — Skeleton duration tokens](https://github.com/anomalyco/easemotion/issues/5760)

---

## What does this show?

The `.ease-skeleton` shimmer animation uses `animation-duration: 2s` directly instead of `var(--ease-duration-medium)`. Users cannot customize the shimmer speed via duration tokens.

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Compares hardcoded vs token-based skeleton durations |
| `style.css` | Skeleton shimmer styles with and without tokens |
| `README.md` | This file |
