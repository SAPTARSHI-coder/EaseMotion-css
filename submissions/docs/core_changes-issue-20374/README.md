# Core Changes Proposal: Issue #20374

## Problem Description

Issue [#20374](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/20374) reports that `scripts/validate-bundle.mjs` only validates `easemotion.min.css` but ignores `docs/easemotion.min.css`.

**The bug:** `scripts/build-minified-css.mjs` writes the minified bundle to **two** locations:
- `easemotion.min.css` (root)
- `docs/easemotion.min.css` (line 163–164)

But `scripts/validate-bundle.mjs` only captures, compares, and restores the root bundle:

```js
const bundlePath = path.join(rootDir, "easemotion.min.css");
const originalBundle = await readFile(bundlePath, "utf8");
// ... run build ...
const rebuiltBundle = await readFile(bundlePath, "utf8");
if (originalBundle !== rebuiltBundle) {
  await writeFile(bundlePath, originalBundle, "utf8");
  throw new Error(`${path.relative(rootDir, bundlePath)} is stale. ...`);
}
```

This means if `docs/easemotion.min.css` goes stale, validation passes silently and then the build overwrites it, leaving an unreported working-tree change.

## Proposed Fix

Update `scripts/validate-bundle.mjs` to capture, compare, and restore both bundle files:

```js
const bundlePaths = [
  path.join(rootDir, "easemotion.min.css"),
  path.join(rootDir, "docs", "easemotion.min.css"),
];

const originals = await Promise.all(
  bundlePaths.map(p => readFile(p, "utf8").catch(() => ""))
);

// ... run build ...

const stales = [];
for (let i = 0; i < bundlePaths.length; i++) {
  const rebuilt = await readFile(bundlePaths[i], "utf8");
  if (originals[i] !== rebuilt) {
    stales.push(bundlePaths[i]);
    await writeFile(bundlePaths[i], originals[i], "utf8");
  }
}

if (stales.length > 0) {
  throw new Error(
    stales.map(p => `${path.relative(rootDir, p)} is stale.`).join("\n") +
    `\nRun \`npm run build\` and commit the regenerated bundles.`,
  );
}

const names = bundlePaths.map(p => path.relative(rootDir, p)).join(", ");
console.log(`${names} are up to date.`);
```

This ensures both bundles are checked, both are restored on failure, and every stale path is listed in the error message.

## Why this is submitted here

Per the `CONTRIBUTING.md` policy and Core Framework Protection, this fix is proposed as a formal submission in the `submissions/` directory rather than modifying `scripts/validate-bundle.mjs` directly.

## Files changed

| File | Change |
|------|--------|
| `scripts/validate-bundle.mjs` | Validate both `easemotion.min.css` and `docs/easemotion.min.css` |

Fixes #20374
