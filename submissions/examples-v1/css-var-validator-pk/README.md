# EaseMotion — CSS Custom Property Fallback Validation

Scans the codebase for `var()` usages missing fallbacks, undefined variable references, and orphaned variables.

## The Problem

Without fallbacks, a missing `var(--ease-color-primary)` silently resolves to `initial` (often transparent or invisible). This breaks animations and layouts.

## The Solution

A Node.js script (`scripts/validate-css-vars.js`) that:

1. Scans all `.css` files for `var(--name)` usages
2. Checks each usage has a fallback: `var(--name, FALLBACK)`
3. Detects variables defined in `:root` but never used (orphaned)
4. Exits with non-zero code on failures (CI-friendly)

## Files

| File        | Purpose                                                                                  |
| ----------- | ---------------------------------------------------------------------------------------- |
| `demo.html` | Side-by-side without/with fallback, simulate missing var, report example, validator code |
| `style.css` | Demo layout, report table, warning/error colors                                          |

## Validator Output Example

```
❌ components/modals.css:42 — var(--ease-anim-speed) has no fallback
❌ components/toast.css:18 — var(--ease-shadow) has no fallback
⚠️  core/variables.css — --ease-legacy-color defined but never used
✅ components/buttons.css — var(--ease-btn-radius, 8px) OK

📊 312 var(), 8 missing fallbacks, 3 orphaned variables
```

## CI Integration

Save as `.github/workflows/css-vars-validation.yml`:

```yaml
name: CSS Variables Validation
on: [pull_request, push]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: node scripts/validate-css-vars.js
```

## Style Guide Rule

> **Every `var()` must include a fallback.**
>
> ```css
> /* Good */
> color: var(--ease-color-primary, #6366f1);
> /* Bad */
> color: var(--ease-color-primary);
> ```
