# validate-bundle.mjs — CRLF Line Ending Fix

**Fixes:** Issue #6694

## Problem

`scripts/validate-bundle.mjs` compared the committed bundle with a
freshly-rebuilt version using a direct string equality check:

```js
if (originalBundle !== rebuiltBundle) { ... }
```

On Windows, Git's default `core.autocrlf = true` setting converts
all `\n` (LF) line endings to `\r\n` (CRLF) on checkout. The minifier
always outputs `\n`. So even when the bundle is perfectly up to date,
the raw strings differ by invisible `\r` characters and the script
always exits with a false stale-bundle error.

## Fix — Two Parts

### 1. Normalize line endings before comparing (`validate-bundle.mjs`)

```js
// Add this helper
const normalize = (str) => str.replace(/\r\n/g, '\n');

// Use it in the comparison
if (normalize(originalBundle) !== normalize(rebuiltBundle)) {
  console.error('❌ Bundle is stale. Run npm run build first.');
  process.exit(1);
}
```

This is the minimal one-line fix. It strips all `\r` from both strings
before comparing, making the check OS-agnostic.

### 2. Add `.gitattributes` to enforce LF repo-wide

```gitattributes
* text=auto eol=lf
*.css  text eol=lf
*.mjs  text eol=lf
*.js   text eol=lf
*.html text eol=lf
*.md   text eol=lf
*.json text eol=lf
```

This is the root-cause fix. It tells Git to always store and check out
these files with LF regardless of the OS, so the mismatch never occurs
in the first place. The `normalize()` fix is a belt-and-suspenders
safety net on top.

## Why Both Are Needed

| Fix | What it solves |
|---|---|
| `normalize()` in script | Immediate: stops false failures right now |
| `.gitattributes eol=lf` | Root cause: prevents CRLF from ever entering the repo |

Without `.gitattributes`, any developer who hasn't set
`git config core.autocrlf false` globally will continue to have their
editor save CRLF files, which could end up committed.

## Windows Developer Setup Note

After this fix, existing clones on Windows may still have CRLF files
on disk. Developers should run:

```bash
git rm --cached -r .
git reset --hard
```

This re-checks out all files with the new `.gitattributes` LF setting.

## Acceptance Criteria

- [x] `normalize()` helper added to `validate-bundle.mjs`
- [x] Both `originalBundle` and `rebuiltBundle` normalized before compare
- [x] `.gitattributes` updated to enforce `eol=lf` for all text files
- [x] Tested on Windows — `npm run validate:bundle` passes without error