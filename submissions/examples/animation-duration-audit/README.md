# Animation Duration Audit

Scans framework CSS files for `animation-duration` and `transition-duration` values to identify inconsistencies and recommend migration to design tokens.

## Usage

```bash
bash submissions/examples/animation-duration-audit/audit.sh
```

Run from the repository root.

## What It Checks

| Check | Description |
|-------|-------------|
| Source files | Scans `css/` and `src/` directories for duration declarations |
| Values | Extracts every distinct duration value (e.g. `0.3s`, `1s`) |
| Frequency | Reports how often each value is used |

## Standardization Recommendation

| Raw Value | Token | Notes |
|-----------|-------|-------|
| `0.2s` | `--ease-duration-fast` | Quick micro-interactions |
| `0.3s` | `--ease-duration-normal` | Default UI transitions |
| `0.5s` | `--ease-duration-slow` | Notable state changes |
| `1s` | `--ease-duration-slower` | Substantial animations |
| `≥2s` | Exception | Intentional for background/ambient effects |

## Documented Exceptions

- **Background/ambient animations** (e.g. gradient shifts, aurora effects) — these intentionally use longer durations for a calm, subtle feel.
- **Loader spinners** — some designs use multi-second cycles for visual appeal.
