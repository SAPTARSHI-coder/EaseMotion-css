# Dual Stylesheet Cascade Surprise

An interactive documentation lab that intentionally loads both **`easemotion.css`** and **`easemotion.min.css`**, shows doubled rules / unexpected cascade wins, and teaches the **debug vs prod** rule: never ship both at once.

> Submission track: `submissions/docs/ease-dual-css-load-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue [#46185](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46185)

---

## What does this do?

Beginners often link the readable source and the minified bundle “just to be safe.” That duplicates the framework in the cascade, doubles download cost, and can make custom overrides vanish when the later sheet wins.

This showcase toggles **source only**, **min only**, and **both**, with live weight/risk stats and copy-paste correct snippets.

---

## How is it used?

1. Open `demo.html` in a browser (network required for CDN stylesheets).
2. Switch load modes and watch the verdict + stats update.
3. In **Both** mode, note the mid-cascade override tip and doubled weight.
4. Copy the recommended single-file production snippet.

Example of the correct rule:

```html
<!-- ✅ One sheet only -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css"
/>
```

---

## Why is it useful?

- Documents a common newbie footgun not covered clearly in existing lists
- Prevents false “EaseMotion CSS is buggy” reports caused by dual loading
- Freeze-safe: only new files under `submissions/docs/`
- Fits EaseMotion’s education-first contribution model

---

## Folder structure

```text
submissions/docs/ease-dual-css-load-sp/
├── demo.html
├── style.css
└── README.md
```

---

## Policy notes

- Does **not** modify `core/`, `components/`, workflows, or the README
- Compatible with the contribution freeze (new submission folder only)
- Demo injects existing CDN assets for illustration; local chrome uses `dc-*` prefixes only

---

## License

Same as EaseMotion CSS (MIT).
