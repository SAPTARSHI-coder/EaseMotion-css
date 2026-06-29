# Reveal Layer Convention

Demonstrates a bug where the `@layer` declaration for reveal-related animations conflicts with the framework layer ordering, causing unwanted style overrides.

**Issue:** [#5755 — Reveal layer convention](https://github.com/anomalyco/easemotion/issues/5755)

---

## What does this show?

The reveal animation classes (`.ease-reveal`, `.ease-reveal-up`, `.ease-reveal-left`, `.ease-reveal-right`, `.ease-reveal-scale`) are placed inside the `easemotion.animations` layer but some reveal-related styles exist in `easemotion.utilities`, causing a cascade order conflict.

### The Problem

When both layers define conflicting transition/animation properties for the same element, the last declared layer wins — which may not be the intended behavior.

### The Fix

Consolidate all reveal-related styles into a single layer (`easemotion.components`) with proper layer ordering via `@import`.

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Shows the broken vs fixed layer ordering for reveal elements |
| `style.css` | Reveal styles with incorrect and corrected layer ordering |
| `README.md` | This file |
