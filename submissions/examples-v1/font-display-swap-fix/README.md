# font-display: swap — FOIT Fix

**Fixes:** Issue #4255

## Summary

The README Quick Start instructed users to load Inter from Google Fonts
without `&display=swap`. Without this parameter, browsers apply
`font-display: block` — hiding all text for up to 3 seconds while the
font downloads. This is known as **FOIT (Flash of Invisible Text)** and
severely impacts perceived performance on slow or mobile connections.

## What Changed

### README.md & README.bn.md — Font Link

```html
<!-- ❌ Before — causes FOIT on slow connections -->
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700"
  rel="stylesheet"
/>

<!-- ✅ After — FOIT-safe, with preconnect hints for faster loading -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

## Why `display=swap` Matters

When Google Fonts receives `&display=swap` in the URL, it injects
`font-display: swap` into the generated `@font-face` rule. This changes
browser font-loading behaviour:

| `font-display` value | Browser behaviour |
|---|---|
| `block` (default, no param) | Hides text for up to 3s waiting for font — **FOIT** |
| `swap` (with param) | Shows system fallback immediately, swaps Inter in once ready — **no FOIT** |
| `fallback` | 100ms block, then swap — good middle ground alternative |
| `optional` | Uses font only if cached — best for Core Web Vitals |

`swap` is the recommended default for body text like Inter.

## Why `rel="preconnect"` Was Also Added

The two `preconnect` hints tell the browser to open the TCP + TLS
connection to Google's font servers as early as possible — before the
`<link>` tag is even parsed. On first load, this can save 100–300ms
on slow connections.

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

`crossorigin` is required on the second hint because font files are
fetched with CORS.

## Files Changed

| File | Change |
|---|---|
| `README.md` | Added `&display=swap` + `preconnect` hints + inline comment |
| `README.bn.md` | Same fix in Bengali readme |
| `submissions/examples/font-display-swap-fix/style.css` | Demo styles |
| `submissions/examples/font-display-swap-fix/demo.html` | Live demo |
| `submissions/examples/font-display-swap-fix/README.md` | This file |

## Performance Impact

| Scenario | Without `display=swap` | With `display=swap` |
|---|---|---|
| Fast connection | No visible difference | No visible difference |
| Slow / mobile (3G) | Text invisible up to 3s | Fallback font shown instantly |
| Font fails to load | Text stays invisible forever | System font used permanently |
| Core Web Vitals (CLS) | May cause layout shift on swap | Minimal — fallback font similar metric |

## Acceptance Criteria

- [x] `&display=swap` present in all font link examples in README files
- [x] `rel="preconnect"` hints added for Google Fonts domains
- [x] Inline comment explains what `display=swap` does
- [x] `README.bn.md` (Bengali readme) also updated
- [x] Demo page and styles provided in submission folder

## Quick Reference — Correct Snippet to Copy

```html
<!-- Paste this in your <head> before easemotion.css -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```