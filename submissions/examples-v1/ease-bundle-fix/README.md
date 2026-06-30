# Bundle Sync Fix

**Fixes:** Issue #6937  
**Type:** Bug Fix

## What was broken

`easemotion.min.css` was out of sync with source CSS files,
causing `npm run validate:bundle` and `npm run release:check`
to fail with exit code 1 on a clean clone.

## The Fix

Regenerate the minified bundle and commit it:

```bash
npm install
npm run build
npm run validate:bundle   # should pass
npm run release:check     # should pass
git add easemotion.min.css
git commit -m "chore: regenerate minified CSS bundle"
```

## Prevention

Always run `npm run build` after editing any source CSS file
before committing. Never manually edit `easemotion.min.css`.

## Files

| File        | Purpose                                    |
| ----------- | ------------------------------------------ |
| `style.css` | Demo UI styles                             |
| `demo.html` | Visual guide showing the bug and fix steps |
| `README.md` | This file                                  |
