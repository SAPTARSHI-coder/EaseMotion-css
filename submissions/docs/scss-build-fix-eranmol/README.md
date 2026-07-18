# SCSS Build Fix — Issue #40201

## What does it do?

Documents the root cause of the `npm run build:scss` bug and provides two fix approaches for the maintainer to apply.

## Problem

`scss/_index.scss` only contains `@forward` statements for variables and mixins. Compiling it produces an empty CSS file (50 bytes) with just a source map comment — no usable CSS output.

## Fix Options

### Option A: Full CSS build (recommended)

1. Create `scss/easemotion.scss` that `@use`s the index and all core/component CSS files
2. Update `package.json` line 34:
   ```json
   "build:scss": "sass scss/easemotion.scss dist/easemotion.scss.css"
   ```

### Option B: SCSS-only export

If the intent is to export SCSS variables/mixins for library consumers only:
1. Keep the current entry file
2. Remove `--source-map` or rename output to `.scss` extension
3. Document that the output is for SCSS import, not CSS use

## Why is it useful?

The current build script gives contributors a broken artifact. Fixing it ensures the SCSS build produces either usable CSS or a clearly documented SCSS utility file.
