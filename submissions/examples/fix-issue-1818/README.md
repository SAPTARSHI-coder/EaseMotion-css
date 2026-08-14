# Fix for Issue #1818

This submission provides the fix for the race condition bug in the core CSS bundler (`scripts/build-minified-css.mjs`) as described in [Issue #1818](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/1818).

## What does this do?
It includes a fixed version of `build-minified-css.mjs` directly in this submission folder. Since contributors cannot modify the `scripts/` directory without the PR being automatically closed by the repository bot, the fixed script is provided here for the maintainer to review and manually merge into the core `scripts/` directory.

## How is it used?
The maintainer can copy `submissions/examples/fix-issue-1818/build-minified-css.mjs` to `scripts/build-minified-css.mjs` to resolve the circular dependency bug. The fix passes a cloned `stack` and `pathStack` to recursive `bundleCss` calls, ensuring that concurrent branches spawned by `Promise.all` do not mutate a shared stack and falsely trigger circular dependency warnings.

## Why is it useful?
It prevents the build script from crashing when compiling CSS that has "diamond dependencies" (multiple files importing the same shared dependency), which is essential for the stability of the EaseMotion CSS build pipeline.
