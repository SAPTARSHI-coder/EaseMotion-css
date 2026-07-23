# Bug Showcase: Case-Sensitivity Validation Mismatch (reez)

## What does this do?
Documents and proposes a fix for a case-sensitive repository URL matching bug in the `validate-package.mjs` script.

## How is it used?
By changing the validation script to convert the repository URL to lowercase before comparing, build tools can handle both uppercase and lowercase repository references seamlessly.

```javascript
// Target fix inside scripts/validate-package.mjs:
if (!manifest.repository?.url?.toLowerCase().includes("saptarshi-coder/easemotion-css")) {
  fail("repository.url must point to SAPTARSHI-coder/EaseMotion-css");
}
```

## Why is it useful?
Normalizing to lowercase prevents repository validation tasks from failing in local build scripts or CI/CD pipelines when developers clone the repository using mixed-case or lowercase remote names.
