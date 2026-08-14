# color-scheme: light dark Auto Token Behavior Demo

An interactive documentation showcase that toggles / simulates light and dark `color-scheme` conditions and shows how they interact with EaseMotion surfaces — **without** treating `color-scheme` as a full dark-token theme remap.

> Submission track: `submissions/docs/ease-color-scheme-auto-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue [#46189](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46189)

---

## What does this do?

EaseMotion sets `color-scheme: light dark` on `:root` and has limited `prefers-color-scheme` / `[data-theme]` awareness. Beginners often assume that means a complete dark theme.

This lab compares:

| Lab | Meaning |
|-----|---------|
| **Scheme-only** | Change `color-scheme` while keeping light tokens locked — see UA chrome (inputs, scrollbars) vs unchanged surfaces |
| **Full remap** | Rewrite surface tokens + `color-scheme` — closer to a real dark theme expectation |

---

## How is it used?

1. Open `demo.html` in a browser.
2. Switch **Auto / Scheme light / Scheme dark / Full dark remap**.
3. Compare the left (scheme-only) and right (token remap) sandboxes.
4. Read the checklist and copy the guidance snippet.

Example baseline:

```css
:root {
  color-scheme: light dark;
}
```

---

## Why is it useful?

- Separates browser auto `color-scheme` behavior from a dark-mode token switcher
- Reduces false “dark mode is broken” reports
- Freeze-safe: only new files under `submissions/docs/`
- Fits EaseMotion’s education-first contribution model

---

## Folder structure

```text
submissions/docs/ease-color-scheme-auto-sp/
├── demo.html
├── style.css
└── README.md
```

---

## Policy notes

- Does **not** modify `core/`, `components/`, workflows, or the README
- Compatible with the contribution freeze (new submission folder only)
- Demo uses existing EaseMotion classes for illustration; local chrome uses `cs-*` prefixes only

---

## License

Same as EaseMotion CSS (MIT).
