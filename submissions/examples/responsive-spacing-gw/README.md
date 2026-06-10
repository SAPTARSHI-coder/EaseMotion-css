# Responsive Spacing Utilities (Padding & Margin)

## What does this do?

Adds responsive padding and margin utility classes — `ease-sm-p-4`, `ease-md-px-6`, `ease-lg-mx-auto`, etc. — that activate at specific breakpoints (sm/md/lg/xl), matching EaseMotion CSS's existing responsive utility pattern.

---

## How is it used?

```html
<!-- Padding grows with viewport -->
<div class="ease-p-2 ease-sm-p-4 ease-md-p-6 ease-lg-p-8 ease-xl-p-10">
  Content
</div>

<!-- Horizontal padding only -->
<div class="ease-px-2 ease-md-px-6 ease-lg-px-10">
  Content
</div>

<!-- Margin responsive -->
<div class="ease-m-2 ease-sm-m-4 ease-md-m-6 ease-lg-m-8">
  Content
</div>

<!-- Centre block at sm and above -->
<div class="ease-sm-mx-auto" style="max-width:400px">
  Centred
</div>
```

### Space scale (mirrors `variables.css`)

| Step | Value     | px  |
|------|-----------|-----|
| 1    | 0.25 rem  | 4   |
| 2    | 0.5 rem   | 8   |
| 3    | 0.75 rem  | 12  |
| 4    | 1 rem     | 16  |
| 6    | 1.5 rem   | 24  |
| 8    | 2 rem     | 32  |
| 10   | 2.5 rem   | 40  |
| 12   | 3 rem     | 48  |
| 16   | 4 rem     | 64  |

### Breakpoints (mirrors `variables.css` `--ease-bp-*`)

| Prefix    | Min-width |
|-----------|-----------|
| (none)    | all       |
| `ease-sm-` | 640 px   |
| `ease-md-` | 768 px   |
| `ease-lg-` | 1024 px  |
| `ease-xl-` | 1280 px  |

### Supported class patterns

```
ease-{bp}-p-{step}    → padding
ease-{bp}-px-{step}   → padding-left + padding-right
ease-{bp}-py-{step}   → padding-top + padding-bottom
ease-{bp}-pt-{step}   → padding-top
ease-{bp}-pb-{step}   → padding-bottom
ease-{bp}-pl-{step}   → padding-left
ease-{bp}-pr-{step}   → padding-right

ease-{bp}-m-{step}    → margin
ease-{bp}-mx-{step}   → margin-left + margin-right
ease-{bp}-my-{step}   → margin-top + margin-bottom
ease-{bp}-mt-{step}   → margin-top
ease-{bp}-mb-{step}   → margin-bottom
ease-{bp}-mx-auto     → margin-left: auto; margin-right: auto
```

---

## Why is it useful?

EaseMotion CSS already ships responsive variants for **display, flex, grid, and width** utilities. Spacing is the most-used CSS property in layout work — yet it has no responsive variants. Developers currently must write custom `@media` queries for padding/margin changes across breakpoints.

- **Consistency** — extends the existing `ease-{bp}-*` naming pattern developers already know
- **Zero custom media queries** — common responsive spacing is handled in markup
- **DX** — aligns with EaseMotion's human-readable, utility-first philosophy
- **No new tokens** — reuses the existing `--ease-space-*` scale from `variables.css`

---

*Submitted by: gw*
