# Fix #57712: Float Animation - Keyframe Naming Consistency

## What does this do?

Renames `@keyframes ease-float` to `@keyframes ease-kf-float` to follow the established naming convention used by all other keyframe definitions in the framework.

## How is it used?

```html
<div class="ease-float">Floating Element</div>
```

No change in usage - only internal naming is consistent.

## Why is it useful?

**The Problem:**
- `@keyframes ease-float` uses bare name without prefix
- All other keyframes use `ease-kf-` prefix (e.g., `ease-kf-fade-in`, `ease-kf-shimmer`)
- Inconsistency in naming convention

**The Solution:**
- Rename to `@keyframes ease-kf-float`
- Update animation reference in `.ease-float` class
- Consistent naming across framework

**Impact:**
- Reduces collision risk in bundled CSS projects
- Improves code predictability and maintainability
- Follows established naming convention

## Changes Required

In `core/animations.css`:

```css
/* Before */
@keyframes ease-float { }
.ease-float { animation: ease-float 3s ease-in-out infinite; }

/* After */
@keyframes ease-kf-float { }
.ease-float { animation: ease-kf-float 3s ease-in-out infinite; }
```

Closes #57712
