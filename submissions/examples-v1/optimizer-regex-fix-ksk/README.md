# Optimizer Regex Spacing Fix (`optimizer-regex-fix-ksk`)

> Bug fix demonstration for issue #40061

## Problem

`extractEaseClasses()` and `extractEmAttributes()` in `easemotion/engine/optimizer.js` miss valid HTML attributes when spaces surround `=`:

```html
<!-- Detected ✅ -->
<div class="ease-fade-in"></div>

<!-- Missed ❌ — valid HTML, silently ignored by the optimizer -->
<div class = "ease-fade-in"></div>
<div em = "fade-in"></div>
```

## Fix (2 lines in optimizer.js)

```diff
// Line 24 — extractEmAttributes()
- const re = /\bem=(['"])([^"']+)\1/g;
+ const re = /\bem\s*=\s*(['"])([^"']+)\1/g;

// Line 40 — extractEaseClasses()
- const classRe = /class=(['"])([^"']+)\1/g;
+ const classRe = /class\s*=\s*(['"])([^"']+)\1/g;
```

`\s*` = zero or more whitespace — matches both `class="..."` and `class = "..."` with no regression risk.

## Demo

Open `demo.html` to interactively test any HTML snippet against both the buggy and fixed regex — side-by-side comparison with preset test cases.

---
*Created for GSSoC-26 — Resolves #40061.*
