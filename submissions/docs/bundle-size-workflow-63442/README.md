# Bundle Size Badge + size-limit CI Check (#63442)

**What does this do?**
This submission proposes an infrastructure update: adding an automated CI workflow using the `size-limit` tool to measure the gzipped size of the published CSS bundle on every PR, failing the check if it exceeds a 40KB budget, and adding a size badge to the root `README.md`.

**How is it used?**
Since contributors cannot modify root files directly, the maintainer can integrate this proposal by applying the following changes to the core repository:

1. **Add Badge to `README.md`:**
```html
<img src="https://img.shields.io/badge/bundle%20size-18.4kb%20gzip-brightgreen" alt="Bundle Size">
```

2. **Add to `package.json`:**
```json
"devDependencies": {
  "size-limit": "^13.0.3",
  "@size-limit/file": "^13.0.3"
},
"size-limit": [
  {
    "path": "easemotion.min.css",
    "limit": "40 KB"
  }
]
```

3. **Create `.github/workflows/size-limit.yml`:**
```yaml
name: size-limit

on: [pull_request]

jobs:
  size-limit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - uses: andresz1/size-limit-action@v1.9.0
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          skip_step: install
```

**Why is it useful?**
One of the project's core promises is being lightweight. As more components are merged, there's currently no automated guardrail stopping the bundle from silently bloating. This proposal makes "stay lightweight" an enforced CI rule instead of just a stated philosophy.
