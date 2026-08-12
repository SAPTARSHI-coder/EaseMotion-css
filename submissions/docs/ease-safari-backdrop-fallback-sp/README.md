# Safari `-webkit-backdrop-filter` Glass Fallback Showcase

An interactive documentation lab that compares glass cards **with / without** `-webkit-backdrop-filter`, lets users mimic unsupported engines (solid fallback), and aligns guidance with the README browser compatibility table for Safari.

> Submission track: `submissions/docs/ease-safari-backdrop-fallback-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue [#46191](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46191)

---

## What does this do?

The README notes that Safari needs `-webkit-backdrop-filter` for glass effects. Static tables are easy to miss. This showcase makes the requirement visible:

| Variant | CSS | Risk |
|---------|-----|------|
| Without prefix | `backdrop-filter` only | Fragile on Safari / older WebKit |
| With prefix | `backdrop-filter` + `-webkit-backdrop-filter` | Safari-safe (EaseMotion glass pattern) |
| Unsupported mimic | Filters forced off → opaque background | Documents solid `@supports` fallback |

---

## How is it used?

1. Open `demo.html` in a browser.
2. Compare the two glass cards / nav strips on the busy background.
3. Click **Mimic unsupported engine** to force the solid fallback.
4. Copy the Safari-safe snippet (with `@supports` fallback).

Example:

```css
.glass {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
```

---

## Why is it useful?

- Turns a README compatibility row into a hands-on lab
- Prevents “glass broken on Safari” reports from missing `-webkit-`
- Freeze-safe: only new files under `submissions/docs/`
- Matches EaseMotion’s own navbar glass dual-declaration pattern

---

## Folder structure

```text
submissions/docs/ease-safari-backdrop-fallback-sp/
├── demo.html
├── style.css
└── README.md
```

---

## Policy notes

- Does **not** modify `core/`, `components/`, workflows, or the README
- Compatible with the contribution freeze (new submission folder only)
- Local chrome uses `sf-*` prefixes only

---

## License

Same as EaseMotion CSS (MIT).
