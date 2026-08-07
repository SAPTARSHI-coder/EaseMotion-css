# Fix: CSS Bundler Watcher Linux Portability

Resolves a watcher bug in `build-minified-css.mjs` where subfolders inside core/ and components/ are ignored on Linux due to non-recursive watch fallback structures.

## What does this do?
- **Manual Subdirectory Mapping:** Corrects watch definitions to map and track all child directories explicitly on platforms where recursive hooks are unsupported.