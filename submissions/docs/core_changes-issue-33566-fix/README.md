# Case-Insensitive Repository URL Validation Fix

## Issue #33566

This submission fixes the case-sensitive repository URL validation check in `scripts/validate-package.mjs` which fails during `npm run release:check` / `npm run validate:release` on fresh clones.

---

## 1. What does this do?

It makes the repository URL ownership check case-insensitive, preventing false-positive validation failures when the repository URL casing in `package.json` doesn't exactly match the expected `"SAPTARSHI-coder/EaseMotion-css"` string.

---

## 2. Proposed Code Change

In [scripts/validate-package.mjs](file:///c:/Users/Harsh/EaseMotion-css/scripts/validate-package.mjs#L41-L43), replace the check:

```javascript
if (!manifest.repository?.url?.includes("SAPTARSHI-coder/EaseMotion-css")) {
  fail("repository.url must point to SAPTARSHI-coder/EaseMotion-css");
}
```

with the case-insensitive comparison:

```javascript
if (!manifest.repository?.url?.toLowerCase().includes("SAPTARSHI-coder/EaseMotion-css".toLowerCase())) {
  fail("repository.url must point to SAPTARSHI-coder/EaseMotion-css");
}
```

---

## 3. Verification Logs

Running `npm run validate:manifest` with the proposed changes applied:

```bash
> easemotion-css@1.1.0 validate:manifest
> node scripts/validate-package.mjs

package.json is valid and release scripts are configured.
```
