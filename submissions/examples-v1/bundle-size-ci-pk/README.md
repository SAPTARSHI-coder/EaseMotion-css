# EaseMotion — CSS Bundle Size CI

Automated CSS bundle size tracking using [`size-limit`](https://github.com/ai/size-limit).
Every pull request gets an automated comment showing the size impact of the changes.

## Files

| File        | Purpose                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------- |
| `demo.html` | Visual dashboard showing current size, limit, headroom, breakdown, config, and PR comment example |
| `style.css` | Dashboard and layout styles                                                                       |

## How `size-limit` Works

1. **Run locally** — `npx size-limit` compares the file size against configured limits
2. **CI check** — `npx size-limit --ci` runs on every PR and exits with non-zero if the limit is exceeded
3. **PR comment** — The GitHub Action posts a comment with the delta (requires `size-limit` GitHub reporter)

## Setup Instructions

### 1. Install

```bash
npm install --save-dev size-limit @size-limit/file
```

### 2. Configure `package.json`

```json
{
  "scripts": {
    "size": "size-limit",
    "size:ci": "size-limit --ci"
  },
  "size-limit": [
    {
      "path": "easemotion.min.css",
      "limit": "80 KB"
    }
  ]
}
```

### 3. Add CI Workflow

Save as `.github/workflows/size-limit.yml`:

```yaml
name: Size Limit
on: [pull_request]

jobs:
  size:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npx size-limit --ci
```

### 4. Run

```bash
npm run size          # local check
npm run size:ci       # CI mode (exits with error if limit exceeded)
```

## Tracking

After setup, every PR will show:

```
🤖 Size Limit Report

easemotion.min.css    74.2 KB    +0.5 KB ▲    ✓ < 80 KB
```

If a PR exceeds the limit, the workflow fails and blocks merging.

## Threshold

| File                 | Limit | Current  | Headroom |
| -------------------- | ----- | -------- | -------- |
| `easemotion.min.css` | 80 KB | ~74.2 KB | ~5.8 KB  |

Adjust the `80 KB` value in `package.json` as the framework grows.
