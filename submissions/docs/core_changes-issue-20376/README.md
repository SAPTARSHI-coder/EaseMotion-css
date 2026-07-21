# Core Changes Proposal: Issue #20376

## Problem Description

Issue [#20376](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/20376) reports that a clean install includes high-severity `undici` vulnerabilities in the development dependency tree.

**The vulnerability chain:**
- `jsdom` (devDependency `^29.1.1`) depends on `undici: ^7.25.0`
- The lock file pins `undici@7.27.0`, which falls in the affected range (`7.0.0` – `7.27.2`)
- `npm audit` reports high-severity advisories including TLS certificate validation bypass and WebSocket denial-of-service

**Affected versions:** `undici` versions `7.0.0` – `7.27.2`

**Patched versions:** `undici@7.28.0` or later

## Proposed Fix

1. **Update `jsdom`** in `package.json` from `^29.1.1` to a version that resolves `undici >= 7.28.0`. Based on npm historical data, `jsdom@29.2.0` or later should pull in a non-vulnerable `undici`.

2. **Regenerate `package-lock.json`** by running `npm install --package-lock-only` to update the lockfile with the patched `undici` version.

3. **Verify** with `npm ci`, `npm audit`, `npm test`, and `npm run lint`.

### package.json change

```diff
   "devDependencies": {
-    "jsdom": "^29.1.1",
+    "jsdom": "^29.2.0",
     "prettier": "^3.8.3",
```

### Additional recommendation

Add a Dependabot config (`.github/dependabot.yml`) to automatically surface npm dependency advisories in future:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 5
```

## Why this is submitted here

Per the `CONTRIBUTING.md` policy and Core Framework Protection, this fix is proposed as a formal submission in the `submissions/` directory rather than modifying `package.json` or `package-lock.json` directly.

## Files changed

| File | Change |
|------|--------|
| `package.json` | Bump `jsdom` from `^29.1.1` to `^29.2.0` |
| `package-lock.json` | Regenerated with patched `undici@7.28.0+` |
| `.github/dependabot.yml` | New file for automated dependency updates |

Fixes #20376
