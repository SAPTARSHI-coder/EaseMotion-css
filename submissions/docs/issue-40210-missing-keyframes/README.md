# Issue #40210 — Motion Engine Missing Keyframes Fix

## What does this do?

This submission documents and demonstrates the fix for issue #40210, where the motion engine compiler 
mapped animation names to keyframes that were not defined in the shipped CSS, causing silent animation failures.

## The Problem

| Animation | Status | Issue |
|-----------|--------|-------|
| `heartbeat` | ❌ Missing | Parser accepts it but no @keyframes defined |
| `rubber-band` | ❌ Missing | Parser accepts it but no @keyframes defined |
| `spin` | ❌ Missing | Parser accepts it but no @keyframes defined |
| `wobble` | ❌ Missing | Parser accepts it but no @keyframes defined |
| `flip-x` | ❌ Missing | 3D effect, niche use case |
| `flip-y` | ❌ Missing | 3D effect, niche use case |

## The Solution

### Added (4 keyframes)
1. **heartbeat** — Double-pulse effect (notification/attention-grab)
2. **rubber-band** — Squash & stretch animation (user feedback)
3. **spin** — 360° rotation loop (loaders, spinners)
4. **wobble** — Side-to-side shake (emphasis/error states)

### Removed (2 from KEYFRAME_MAP)
- `flip-x` — Niche 3D flip (use existing `ease-kf-flip` instead)
- `flip-y` — Niche 3D flip (use existing `ease-kf-flip` instead)

## How it's used

Include the CSS definitions in your `core/animations.css`:

```css
@keyframes ease-kf-heartbeat { /* ... */ }
@keyframes ease-kf-rubber-band { /* ... */ }
@keyframes ease-kf-spin { /* ... */ }
@keyframes ease-kf-wobble { /* ... */ }