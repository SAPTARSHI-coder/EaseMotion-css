# Core Changes — Issue #9882: Enable Source Map Generation in Production Minified CSS Build

## Overview

The current build pipeline produces `easemotion.min.css` without a corresponding source map file, making production CSS debugging difficult.

## Problem

- No `easemotion.min.css.map` is generated during the build
- Browser DevTools show minified CSS with no source traceability
- Error stack traces point to line 1 of the minified file
- Framework contributors cannot identify which source file (`core/animations.css` vs `components/buttons.css`) contains a given rule

## Proposed Changes

### `scripts/build-minified-css.mjs`

- Use `csso` minifier with `sourceMap: true` option
- Generate `easemotion.min.css.map` alongside the minified CSS
- Append `/*# sourceMappingURL=easemotion.min.css.map */` comment to the output

**Current behavior:**
```js
await writeFile(outputFile, `${minifiedCss}\n`, "utf8");
```

**Proposed:**
```js
import { minify } from "csso";

const result = minify(minifiedCss, {
  filename: "easemotion.min.css",
  sourceMap: true,
});

await writeFile(outputFile, result.css + `\n/*# sourceMappingURL=easemotion.min.css.map */`, "utf8");
await writeFile(outputFile.replace(".css", ".css.map"), JSON.stringify(result.map), "utf8");
```

### `scripts/validate-bundle.mjs`

- Verify that the `.map` file exists
- Validate the source map has `version: 3`
- Check that `sources` array contains expected paths
- Ensure `mappings` string is non-empty

### `scripts/validate-pack.mjs`

- Add `easemotion.min.css.map` to the `required` array
- Ensure it's included in the npm package

## Affected Files

- `scripts/build-minified-css.mjs`
- `scripts/validate-bundle.mjs`
- `scripts/validate-pack.mjs`
- `package.json` (add `csso` dependency)

## Dependencies

Add `csso` to `devDependencies`:
```json
"csso": "^5.4.0"
```

## Labels

- type:feature
- type:devops
- level:intermediate
- GSSoC-26
