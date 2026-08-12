# Sticky Glass Navbar Scroll Jank Lab

An interactive documentation showcase that pairs **`ease-navbar-glass-sticky`** with heavy **`backdrop-filter` blur** on a tall page full of looping animations, then explains scroll hitching and “safe sticky” tips — without changing core CSS.

> Submission track: `submissions/docs/ease-navbar-glass-jank-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue [#46183](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46183)

---

## What does this do?

The glass sticky navbar component already exists. What’s scarce is performance guidance for **sticky + blur + busy animated content**. Beginners paste `ease-navbar-glass-sticky` into content-heavy pages, then report mysterious scroll hitching.

This lab reproduces that setup, shows live scroll signals, and teaches safer patterns (reduce blur, pause loops under the bar, opaque sticky fallback).

---

## How is it used?

1. Open `demo.html` in a browser (network needed for EaseMotion CDN).
2. Scroll the colorful lab under the sticky glass navbar (Jank mode).
3. Toggle **Safe sticky** and scroll again — feel the difference.
4. Read the hitch panel + checklist, then copy safer snippets.

Example safer usage:

```html
<nav
  class="ease-navbar-glass ease-navbar-glass-sticky"
  style="--ease-navbar-glass-blur: 0px; background: rgba(255,255,255,0.94);"
>
  <a class="ease-navbar-brand" href="/">Brand</a>
</nav>
```

---

## Why is it useful?

- Documents a real component footgun without editing `components/navbar.css`
- Separates “broken class” reports from GPU blur + motion cost
- Freeze-safe: only new files under `submissions/docs/`
- Fits EaseMotion’s education-first contribution model

---

## Folder structure

```text
submissions/docs/ease-navbar-glass-jank-sp/
├── demo.html
├── style.css
└── README.md
```

---

## Policy notes

- Does **not** modify `core/`, `components/`, workflows, or the README
- Compatible with the contribution freeze (new submission folder only)
- Demo uses existing navbar utilities for illustration; local chrome uses `nj-*` prefixes only

---

## License

Same as EaseMotion CSS (MIT).
