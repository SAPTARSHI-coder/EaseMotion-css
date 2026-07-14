# Unused CSS Custom Properties Detector (`find-unused-css-vars-ksk`)

A zero-dependency Node.js CLI that scans EaseMotion CSS source files and reports CSS custom properties that are declared but never referenced via `var(--...)`.

## Requirements

- Node.js ≥ 14 (uses `fs`, `path` — no external packages needed)

## Usage

```bash
# From this directory, scan the repo root (default):
node find-unused-css-vars.js

# Specify a custom root path:
node find-unused-css-vars.js --root ../../

# Scan CSS + HTML files:
node find-unused-css-vars.js --ext css,html

# JSON output (for CI / tooling):
node find-unused-css-vars.js --json

# Allow-list variables to suppress false positives:
node find-unused-css-vars.js --allow --ease-debug-bg,--ease-reserved-var
```

## Example Output

```
🔍 EaseMotion CSS — Unused Variable Detector
   Root   : /path/to/EaseMotion-css
   Types  : .css
   Scanned: 42 file(s)

📊 Summary
   Declared  : 87 variable(s)
   Referenced: 84 variable(s)
   Unused    : 3 variable(s)

⚠️  Unused CSS Custom Properties:

  --ease-border-heavy
    ↳ core/tokens.css
  --ease-primary-light
    ↳ core/colors.css
  --ease-shadow-xl
    ↳ core/tokens.css

💡 Tip: Add variables to --allow to suppress false positives.
```

## CLI Flags

| Flag | Default | Description |
|------|---------|-------------|
| `--root <path>` | `../../..` (repo root) | Directory to scan recursively |
| `--ext <ext,...>` | `css` | Comma-separated file extensions to scan |
| `--json` | off | Output machine-readable JSON report |
| `--allow <var,...>` | none | Comma-separated variables to skip (allow-list) |

## Exit Codes

| Code | Meaning |
|------|---------|
| `0` | No unused variables found |
| `1` | Unused variables detected (or error) |

## How It Works

1. Recursively walks the project directory (skipping `node_modules`, `.git`, `dist`)
2. Strips CSS comments to avoid false positives
3. Extracts all `--variable-name:` declarations with a regex
4. Extracts all `var(--variable-name)` references with a regex
5. Reports variables in the declared set but not in the referenced set

## CI Integration

```yaml
# .github/workflows/css-vars-check.yml
- name: Check unused CSS variables
  run: node submissions/scripts/find-unused-css-vars-ksk/find-unused-css-vars.js --json
```

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #45115.*
