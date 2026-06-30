# Comprehensive Spacing Scale Utility Classes

Adds margin and padding utility classes mapped to the `--ease-space-*` design tokens.

## Classes

| Pattern          | Example     | Description                  |
| ---------------- | ----------- | ---------------------------- |
| `ease-m-{size}`  | `ease-m-4`  | Margin all sides             |
| `ease-mt-{size}` | `ease-mt-2` | Margin-top                   |
| `ease-mr-{size}` | `ease-mr-3` | Margin-right                 |
| `ease-mb-{size}` | `ease-mb-6` | Margin-bottom                |
| `ease-ml-{size}` | `ease-ml-4` | Margin-left                  |
| `ease-mx-{size}` | `ease-mx-4` | Margin-left + margin-right   |
| `ease-my-{size}` | `ease-my-4` | Margin-top + margin-bottom   |
| `ease-p-{size}`  | `ease-p-4`  | Padding all sides            |
| `ease-pt-{size}` | `ease-pt-2` | Padding-top                  |
| `ease-pr-{size}` | `ease-pr-3` | Padding-right                |
| `ease-pb-{size}` | `ease-pb-6` | Padding-bottom               |
| `ease-pl-{size}` | `ease-pl-4` | Padding-left                 |
| `ease-px-{size}` | `ease-px-4` | Padding-left + padding-right |
| `ease-py-{size}` | `ease-py-4` | Padding-top + padding-bottom |

## Scale

| Size | Value          |
| ---- | -------------- |
| 0    | 0px            |
| 0.5  | 0.125rem (2px) |
| 1    | 0.25rem (4px)  |
| 2    | 0.5rem (8px)   |
| 3    | 0.75rem (12px) |
| 4    | 1rem (16px)    |
| 5    | 1.25rem (20px) |
| 6    | 1.5rem (24px)  |
| 8    | 2rem (32px)    |
| 10   | 2.5rem (40px)  |
| 12   | 3rem (48px)    |
| 16   | 4rem (64px)    |
| 20   | 5rem (80px)    |
| 24   | 6rem (96px)    |

## Usage

```html
<div class="ease-p-4">Uniform padding</div>
<div class="ease-pt-4 ease-pb-2">Top and bottom padding</div>
<div class="ease-px-6">Horizontal padding only</div>
<div class="ease-mb-4">Bottom margin</div>
```

## Affected Files

| File                 | Change                                                                                |
| -------------------- | ------------------------------------------------------------------------------------- |
| `core/variables.css` | Add `--ease-space-0`, `--ease-space-0.5`, `--ease-space-20`, `--ease-space-24` tokens |
| `core/utilities.css` | Add spacing utility classes                                                           |

Fixes #12703
