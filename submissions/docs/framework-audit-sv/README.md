# EaseMotion CSS — Framework Audit

A comprehensive code review identifying opportunities for framework quality improvement.

## What was audited

- All 7 core CSS files (variables, base, animations, utilities)
- All 34 component CSS files
- All 9 build/validation scripts
- All 10 modular easemotion/ files
- SCSS integration layer
- GitHub Actions CI/CD (19 workflow files)
- Package configuration, lint rules, test suite
- 2,139+ submission directories in submissions/examples/

## Key Findings

### 1. Duplicate Selectors (Lint Violation)
**File:** `components/tooltips.css`  
**Issue:** Two selectors defined twice — `.ease-tooltip[data-animation="3d-flip"]` and `.ease-tooltip[data-animation="3d-flip-scale"]` — appearing at lines 237/340 and 257/346 respectively. The duplicate blocks set the same CSS custom properties.

**Fix:** Merge the custom property declarations into the first occurrence and remove the trailing duplicates (safe — values are identical).

### 2. Misplaced JavaScript Files in `core/`
**Files:** `core/modal.js`, `core/reveal.js`, `core/tabs.js`  
**Issue:** Three JavaScript files live in `core/` alongside CSS framework files. These are userland scripts (modal keyboard trapping, scroll-reveal observer, dynamic tab CSS generation) that are not framework CSS. They're not listed in `package.json` files array and are embedded with legacy patterns (`var` declarations, IIFEs).

**Recommendation:** Move to `examples/` or `scripts/` directory, update to modern JS. The tabs.js dynamic CSS generator (handling >20 tabs) is the most architecturally significant.

### 3. Component Import Sync Gap
**File:** `easemotion/all.css`  
**Issue:** Missing imports for 20 components that exist in `easemotion.css` (the primary entry point). Components like `command-palette.css`, `announce-bar.css`, `avatar.css`, `forms.css`, `toast.css`, etc. are absent from the modular `all.css` bundle.

**Fix:** Add the 20 missing `@import` statements.

### 4. Inconsistent `easemotion.css` Import Order
**Issue:** `@import "./components/ease-marquee.css"` appears between core utilities and components section rather than with other components. Purely cosmetic since `@layer` handles cascade ordering.

### 5. npm Install Failure on Windows + OneDrive
**Issue:** `npm install` (v11.18.0) reports "up to date, audited 1 package" without creating `node_modules`. This affects any contributor on Windows with OneDrive sync. npm's virtual store path resolution appears to conflict with OneDrive's files-on-demand.

**Workaround:** Use `pnpm` (confirmed working: `pnpm install` succeeds and places packages correctly).

### 6. Unlinked CSS Fonts
**Issue:** `core/base.css` references Inter and JetBrains Mono fonts via `--ease-font-sans` and `--ease-font-mono` CSS variables, but the framework CSS has no `@import` for Google Fonts. Users must add font links manually in HTML.

### 7. Missing `easemotion.min.css` in `.gitignore`
**Issue:** `easemotion.min.css` and `docs/easemotion.min.css` are build artifacts committed to git. The build script regenerates them but they appear as modified files after any CSS change.

## Test Results

```
✓ 13 tests passed (smoke.test.js)
✓ Build succeeds (37 imports inlined, 178KB minified)
✓ Zero duplicate class/keyframe violations (after fix)
```

## Environment

- Node v24.11.1, npm v11.18.0, pnpm v11.0.8
- Windows 11 (x64), OneDrive-synced workspace
- EaseMotion CSS v1.1.0
