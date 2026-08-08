# Transform Animation vs Sticky / Fixed Stacking Bug

A documentation showcase that reproduces how a parent with **`ease-fade-in`** (transform-based entrance) breaks a **`position: sticky`** child, explains the containing-block gotcha, and provides safe markup patterns.

> Submission track: `submissions/docs/ease-transform-sticky-stack-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue [#46194](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46194)

---

## What does this do?

Many EaseMotion entrance utilities animate with `transform`. A transformed ancestor creates a new containing block, so sticky/fixed descendants no longer stick to the viewport as beginners expect.

This lab shows:

| Panel | Parent | Sticky result |
|-------|--------|---------------|
| Broken | `ease-fade-in` + transform ancestor | Fails to pin |
| Safe | Entrance on content child only | Sticky works |

---

## How is it used?

1. Open `demo.html` in a browser.
2. Scroll the left and right panels.
3. Click **Replay entrance** to re-run `ease-fade-in`.
4. Copy the safe HTML structure snippet.

Example safe pattern:

```html
<section>
  <aside class="sticky-sidebar">…</aside>
  <div class="content ease-fade-in">…</div>
</section>
```

---

## Why is it useful?

- Documents a classic CSS gotcha in an EaseMotion context
- Prevents false “sticky broken” bug reports
- Freeze-safe: only new files under `submissions/docs/`
- Teaches structure, not a new motion class

---

## Folder structure

```text
submissions/docs/ease-transform-sticky-stack-sp/
├── demo.html
├── style.css
└── README.md
```

---

## Policy notes

- Does **not** modify `core/`, `components/`, workflows, or the README
- Compatible with the contribution freeze (new submission folder only)
- Local chrome uses `ts-*` prefixes only

---

## License

Same as EaseMotion CSS (MIT).
