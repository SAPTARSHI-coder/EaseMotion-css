# Float Duration Tokens

Demonstrates a bug where hardcoded animation duration values in the float animation utility ignore the framework's duration token system.

**Issue:** [#5757 — Float duration tokens](https://github.com/anomalyco/easemotion/issues/5757)

---

## What does this show?

The `.ease-float` animation uses a hardcoded `3s` duration instead of referencing `--ease-duration-slow` or another duration token. This makes it inconsistent with other animations that respect the token system.

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Compares hardcoded vs token-based durations |
| `style.css` | Float animation with hardcoded and token values |
| `README.md` | This file |
