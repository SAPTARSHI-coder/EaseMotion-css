# Remove Phantom Runtime Dependency — Fix Reference

Documents the accidental `"dependencies"` block in `package.json` and provides
the corrected JSON for the maintainer to review and apply.

## What does this do?

`package.json` currently contains:

```json
"dependencies": {
  "dependencies": "^0.0.1"
}
```

This installs an npm package literally named `dependencies` as a **runtime
dependency**, which directly contradicts the project's own zero-dependency
promise stated in the package description:

> *"Human-readable, animation-first CSS framework. Zero dependencies."*

This submission documents the bug and provides the corrected `package.json`
structure (see `style.css` for the annotated diff reference) so the maintainer
can apply the fix to the core file.

## How is it used?

After the maintainer removes the phantom dependency block, `package.json` should
contain **no `"dependencies"` key at all** (only `"devDependencies"`):

```json
{
  "name": "easemotion-css",
  "devDependencies": {
    "jsdom": "^29.1.1",
    "prettier": "^3.8.3",
    "sass": "^1.77.0",
    "stylelint": "^17.12.0",
    "stylelint-config-standard": "^40.0.0",
    "vitest": "^4.1.8"
  }
}
```

The `demo.html` page in this submission visually demonstrates what the correct
vs. buggy `package.json` structure looks like, so the maintainer can verify the
diff at a glance before applying it.

## Why is it useful?

EaseMotion CSS is a pure-CSS framework. It has **no JavaScript runtime**, and
therefore must have **zero runtime dependencies**. The phantom `"dependencies"`
block:

- **Breaks the zero-dependency promise** advertised in the package description
  and marketing.
- **Installs a junk npm package** (`dependencies@^0.0.1`) into every user's
  `node_modules` when they run `npm install`.
- **Triggers `npm audit` warnings**, which can block CI pipelines and erode
  trust in the package.
- **Inflates the published npm bundle** unnecessarily.

Removing it requires editing only `package.json`, which is a root-level config
file. This submission does not touch `package.json` directly in compliance with
the current core-freeze policy. The corrected structure is provided here for the
maintainer to apply.
