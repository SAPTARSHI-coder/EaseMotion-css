# Optimizer Regex Spacing Fix (`optimizer-regex-fix-ksk`)

> Bug fix demonstration for issue #40061

## Problem

`extractEaseClasses()` and `extractEmAttributes()` in `easemotion/engine/optimizer.js` use regexes that require no whitespace around `=`. HTML allows spaces around `=`, so valid markup is silently skipped:

```html
<!-- Matched ✅ -->
<div class="ease-fade-in"></div>
<div em="fade-in"></div>

<!-- Missed ❌ — currently ignored by the optimizer -->
<div class = "ease-fade-in"></div>
<div em = "fade-in"></div>
```

## Root Cause

```js
// optimizer.js line 24 — extractEmAttributes()
const re = /\bem=(['"])([^"']+)\1/g;       // ← no \s* around =

// optimizer.js line 40 — extractEaseClasses()
const classRe = /class=(['"])([^"']+)\1/g; // ← no \s* around =
```

## Fix (2-line change)

```diff
// extractEmAttributes() — line 24
- const re = /\bem=(['"])([^"']+)\1/g;
+ const re = /\bem\s*=\s*(['"])([^"']+)\1/g;

// extractEaseClasses() — line 40
- const classRe = /class=(['"])([^"']+)\1/g;
+ const classRe = /class\s*=\s*(['"])([^"']+)\1/g;
```

`\s*` means "zero or more whitespace characters" — matching both `class="..."` and `class = "..."` without breaking existing behaviour.

## Demonstration

Run the included script to see the before/after test results:

```bash
node submissions/scripts/optimizer-regex-fix-ksk/optimizer-regex-fix.js
```

Expected output:

```
── BUGGY (current optimizer.js) ──────────────────
  [✅ PASS] class standard (no space)
  [❌ FAIL] class spaced   (space around =)
  [✅ PASS] em    standard (no space)
  [❌ FAIL] em    spaced   (space around =)

── FIXED (\s* added around =) ────────────────────
  [✅ PASS] class standard (no space)
  [✅ PASS] class spaced   (space around =)
  [✅ PASS] em    standard (no space)
  [✅ PASS] em    spaced   (space around =)
```

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #40061.*
