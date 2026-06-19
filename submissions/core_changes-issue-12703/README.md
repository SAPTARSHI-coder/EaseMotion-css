# Comprehensive Spacing Scale Utilities

Adds a full set of margin and padding utility classes with a consistent spacing scale using CSS custom properties.

## Scale

| Token | Value | Token | Value |
|-------|-------|-------|-------|
| `--ease-space-0` | 0px | `--ease-space-6` | 1.5rem |
| `--ease-space-0.5` | 0.125rem | `--ease-space-8` | 2rem |
| `--ease-space-1` | 0.25rem | `--ease-space-10` | 2.5rem |
| `--ease-space-2` | 0.5rem | `--ease-space-12` | 3rem |
| `--ease-space-3` | 0.75rem | `--ease-space-16` | 4rem |
| `--ease-space-4` | 1rem | `--ease-space-20` | 5rem |
| `--ease-space-5` | 1.25rem | `--ease-space-24` | 6rem |

## Classes

| Prefix | Property |
|--------|----------|
| `ease-m-{s}` | margin |
| `ease-mt-{s}` | margin-top |
| `ease-mr-{s}` | margin-right |
| `ease-mb-{s}` | margin-bottom |
| `ease-ml-{s}` | margin-left |
| `ease-mx-{s}` | margin-inline |
| `ease-my-{s}` | margin-block |
| `ease-p-{s}` | padding |
| `ease-pt-{s}` | padding-top |
| `ease-pr-{s}` | padding-right |
| `ease-pb-{s}` | padding-bottom |
| `ease-pl-{s}` | padding-left |
| `ease-px-{s}` | padding-inline |
| `ease-py-{s}` | padding-block |

Where `{s}` is any size from the scale above: 0, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24.

**Total: 14 sizes × 13 directions = 182 utility classes + 14 CSS custom properties.**

## Usage

```html
<div class="ease-p-4">Uniform padding (1rem)</div>
<div class="ease-px-6 ease-py-4">Horizontal 1.5rem + vertical 1rem</div>
<div class="ease-mt-8">Margin top 2rem</div>
<div class="ease-mx-auto">Auto horizontal margins</div>
<div class="ease-pt-2 ease-pr-4 ease-pb-6 ease-pl-8">Individual sides</div>
```

## Generation

Run the bash script to regenerate the CSS:

```bash
bash submissions/core_changes-issue-12703/generate.sh > submissions/core_changes-issue-12703/style.css
```

Fixes #12703
