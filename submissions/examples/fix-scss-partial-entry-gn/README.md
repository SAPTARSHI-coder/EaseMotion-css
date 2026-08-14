# Fix: build:scss Compiles a Sass Partial (#2775)

> ⚠️ **For Maintainer:** This issue requires renaming `scss/_index.scss` and updating the `"build:scss"` script in `package.json` — both files are part of the project's build configuration, which contributors cannot modify directly. This submission documents the proposed patch for review.

1. **What's the bug?** The `"build:scss"` script compiles `scss/_index.scss` directly. In Sass conventions, files prefixed with `_` are "partials" — modular snippets meant only to be `@use`d/`@import`ed by other stylesheets, never compiled standalone.
2. **Proposed fix:**
   - Rename `scss/_index.scss` → `scss/index.scss`
   - Update `package.json` line 22:
```diff
     - "build:scss": "sass scss/_index.scss dist/easemotion.scss.css",
     + "build:scss": "sass scss/index.scss dist/easemotion.scss.css",
```
3. **Why is this correct?** Sass's partial convention exists so build tools and other Sass files know which files are meant to be entry points vs. reusable fragments. Removing the underscore prefix signals `scss/index.scss` is the canonical entry point, aligning the script with standard Sass architecture.
4. **Any other references to check?** If other scripts or files `@use`/`@import` `scss/_index.scss` by name, the maintainer should update those references too (e.g. `@use "index"` instead of `@use "_index"` — though Sass's `@use`/`@import` already omit the leading underscore by convention, so most references may be unaffected).