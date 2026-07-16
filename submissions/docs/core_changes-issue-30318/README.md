# RTL (Right-to-Left) Language Support — EaseMotion CSS

**Issue:** [#30318 — Add RTL language support](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30318)

Adds RTL (Right-to-Left) language support across the framework using CSS logical properties and utility classes.

## Structure

```
submissions/docs/core_changes-issue-30318/
├── demo.html       # Demo with Arabic text, icon mirroring, and alignment
├── style.css       # RTL utility classes
└── README.md       # This file
```

## Class Reference

| Class | Purpose |
|-------|---------|
| `.ease-rtl` | RTL container (`direction: rtl; unicode-bidi: embed`) |
| `.ease-rtl-flip` | Horizontal mirror (`transform: scaleX(-1)`) for icons |
| `.ease-rtl\:ease-text-right` | Right alignment in RTL context |
| `.ease-rtl\:ease-text-left` | Left alignment in RTL context |
| `.ease-rtl\:ease-mirror` | Mirror element when inside `.ease-rtl` |
| `.ease-text-start` | Logical `text-align: start` |
| `.ease-text-end` | Logical `text-align: end` |
| `.ease-ms-{size}` | Margin-inline-start (logical property) |
| `.ease-me-{size}` | Margin-inline-end (logical property) |
| `.ease-ps-{size}` | Padding-inline-start (logical property) |
| `.ease-pe-{size}` | Padding-inline-end (logical property) |

Sizes: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `8`, `10`, `12`. For `ps`/`pe`: `0`–`8`.

## RTL-Aware Overrides

Inside `.ease-rtl`, the following utilities use logical properties automatically:

- `.ease-ml-*` → `margin-inline-start`
- `.ease-mr-*` → `margin-inline-end`
- `.ease-pl-*` → `padding-inline-start`
- `.ease-pr-*` → `padding-inline-end`
- `.ease-border-l` / `.ease-border-r`
- `.ease-left-0` / `.ease-right-0`
- `.ease-float-left` / `.ease-float-right`

## Usage

```html
<!-- RTL container -->
<div class="ease-rtl">
  <p>النص العربي من اليمين إلى اليسار</p>
</div>

<!-- Mirror an icon -->
<span class="ease-rtl-flip">➡️</span>

<!-- RTL-aware text alignment -->
<div class="ease-rtl">
  <p class="ease-rtl\:ease-text-right">Right-aligned in RTL</p>
</div>

<!-- Logical property classes (works everywhere) -->
<div class="ease-ms-4 ease-pe-2">Logical spacing</div>
```
