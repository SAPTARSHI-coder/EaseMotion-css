# Gzip Compression for easemotion.min.css — Issue #14167

## What does this do?

Adds gzip compression to the CSS build pipeline so `easemotion.min.css.gz` is generated alongside the minified file and included in the npm package. The minified CSS drops from 173 KB to ~24 KB (86% reduction).

## Changes

### `scripts/build-minified-css.mjs`

- Import `gzipSync` from `node:zlib` and `writeFileSync` from `node:fs`
- After writing `easemotion.min.css`, gzip the output and write `easemotion.min.css.gz`
- Build summary includes `gzip` path and `bytesGzip`

### `package.json`

- Add `"easemotion.min.css.gz"` to the `files` array
- Add `"prepack": "node scripts/build-minified-css.mjs"` to regenerate before publish

### `easemotion.min.css.gz` (new, generated)

- Pre-compressed binary, served automatically by CDNs when `Accept-Encoding: gzip` is sent

## Why is this useful?

- **Direct consumers:** Node.js apps reading CSS from `node_modules` at runtime can `gunzipSync()` instead of using runtime compression middleware
- **CDN delivery:** unpkg, jsdelivr, and similar CDNs will serve the pre-gzipped version automatically
- **Package size:** Smaller tarball for `npm install`
