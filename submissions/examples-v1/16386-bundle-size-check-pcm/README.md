# Bundle Size CI Check and Size Reporting

1. **What does this do?** Adds a Node.js script (`scripts/check-bundle-size.mjs`) and GitHub Actions workflow (`.github/workflows/bundle-size.yml`) that automatically measures raw and gzipped bundle sizes on every PR, compares against configurable thresholds (200 KB raw / 35 KB gzipped for `easemotion.css`), and stores baseline sizes in `baseline-sizes.json` for change tracking.

2. **How is it used?** Place `scripts/check-bundle-size.mjs` in the repo and add `"check-size": "node scripts/check-bundle-size.mjs"` to `package.json`. The workflow runs on every PR — if any bundle exceeds its threshold, the check fails and the PR is blocked.

```bash
node scripts/check-bundle-size.mjs
# ✅ easemotion.css
#   Raw:     168.2 KB / 200 KB ✓
#   Gzipped: 28.4 KB / 35 KB ✓
```

```yaml
# .github/workflows/bundle-size.yml
name: Bundle Size
on:
  pull_request:
    branches: [main]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
      - run: node scripts/check-bundle-size.mjs
```

3. **Why is it useful?** The EaseMotion CSS bundle is ~168 KB raw / ~28 KB gzipped but there is **no automated monitoring** for bundle size changes. New components or CSS rules could bloat the bundle without warning. This CI check prevents accidental bloat by failing PRs that exceed configurable thresholds, and the baseline JSON enables tracking size changes over time.

### Files

| File                                | Purpose                                          |
| ----------------------------------- | ------------------------------------------------ |
| `scripts/check-bundle-size.mjs`     | Node.js script that measures raw + gzipped sizes |
| `.github/workflows/bundle-size.yml` | CI workflow running on PR                        |
| `baseline-sizes.json`               | Stores current sizes for change tracking         |

### Thresholds

| File                 | Raw Limit | Gzip Limit |
| -------------------- | --------- | ---------- |
| `easemotion.css`     | 200 KB    | 35 KB      |
| `easemotion.min.css` | 100 KB    | 20 KB      |

Fixes #16386
