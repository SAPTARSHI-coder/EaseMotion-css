# Fix: `exports` map blocks individual component CSS imports (Issue #53768)

## What does this do?

Documents and demonstrates the missing `exports` map entries in `package.json` that prevent users from importing individual component stylesheets from `easemotion-css`. Any subpath not declared in the `exports` field causes `ERR_PACKAGE_PATH_NOT_EXPORTED` in Node.js, Vite, webpack, Rollup, esbuild, and TypeScript — regardless of whether the file physically exists on disk.

## How is it used?

Open `demo.html` directly in a browser to see:

1. Which imports currently throw resolution errors
2. The exact two-line diff needed in `package.json` to fix the issue
3. A full table of all 33 component CSS files that become importable after the fix
4. Usage examples for Vite/Rollup, CSS `@import`, and React

The `style.css` contains the demo layout and the full proposed `exports` diff as a comment at the top.

## Why is it useful?

EaseMotion CSS is described as a modular, tree-shakable CSS framework. The `exports` map omission directly contradicts that goal — users are forced to import the entire bundle (`easemotion.min.css`) even when they only need one or two components.

The fix is a two-line addition to `package.json` using the Node.js wildcard subpath pattern, which the project can safely use because it already requires Node ≥ 18:

```json
"./components/*.css": "./components/*.css",
"./core/*.css":       "./core/*.css"
```

This unblocks all 33 component stylesheets and any future `core/` partials for per-file import in every modern bundler and runtime.

## Files changed (for maintainer reference)

- **`package.json`** — add two wildcard entries to the `"exports"` field:

```json
{
  "exports": {
    ".":                    "./easemotion.css",
    "./min":                "./easemotion.min.css",
    "./engine":             "./easemotion/index.js",
    "./engine/parser":      "./easemotion/engine/parser.js",
    "./engine/compiler":    "./easemotion/engine/compiler.js",
    "./engine/optimizer":   "./easemotion/engine/optimizer.js",
    "./engine/runtime":     "./easemotion/engine/runtime.js",
    "./core":               "./core/animations.css",
    "./components/*.css":   "./components/*.css",
    "./core/*.css":         "./core/*.css"
  }
}
```

## Compatibility note

Wildcard subpath patterns in `exports` require Node.js ≥ 12.20 / 14.13. The project's `engines` field already mandates `"node": ">=18"`, so no compatibility concern.
