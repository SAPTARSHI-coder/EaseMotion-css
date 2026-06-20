# Gzip Compression for easemotion.min.css — Issue #14167

## What does this do?
Adds gzip compression to the build pipeline so `easemotion.min.css.gz` is generated alongside the minified CSS and included in the npm package. The minified file (173KB) compresses to ~24KB, saving ~86% for direct `fs.readFileSync` consumers.

## Changes

### `scripts/build-minified-css.mjs`
- Import `gzipSync` from `node:zlib` and `writeFileSync` from `node:fs`
- After writing `easemotion.min.css`, call `gzipSync()` on the output and write `easemotion.min.css.gz`
- Build summary now includes `bytesGzip`

### `package.json`
- Added `"easemotion.min.css.gz"` to the `files` array
- Added `"prepack": "node scripts/build-minified-css.mjs"` to ensure `.gz` is up to date before publishing

## Usage
```js
// Direct consumers
const css = readFileSync('easemotion.min.css.gz');
const decompressed = gunzipSync(css);

// Bundler consumers — the .gz is automatically served if placed in dist/
```

## Why is this useful for EaseMotion CSS?
For projects that read the CSS file directly from `node_modules` at runtime (server-rendered apps, API-based CSS delivery), the pre-gzipped file saves bandwidth and removes the need for runtime compression.
