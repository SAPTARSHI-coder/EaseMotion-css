# Modular Import Order Violation Demo

An interactive documentation lab that shows what happens when `fade.css` is loaded before / without `easemotion/variables.css` versus the correct README Option 4 order — with a side-by-side broken vs working comparison and copy-paste snippets.

> Submission track: `submissions/docs/ease-modular-import-order-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue [#46175](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46175)

---

## What does this do?

README Option 4 warns that `easemotion/variables.css` must load before modular animation files, but a one-line warning is easy to miss. This showcase makes the failure visible: missing tokens (`--ease-speed-medium`, `--ease-ease`) invalidate the `ease-fade-in` animation shorthand, so speeds/easings look broken next to a correct import.

---

## How is it used?

1. Open `demo.html` in a browser (no build step).
2. Compare the **Wrong order** and **Correct order** iframe panels.
3. Click **Replay animation** on each side and read the computed duration/easing readout.
4. Copy the green Option 4 snippet for real projects.

Example of the correct HTML pattern this demo teaches:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion/variables.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion/fade.css"
/>
```

---

## Why is it useful?

- Turns a static README warning into a hands-on “wrong order” lab
- Prevents false “fade animation is broken” bug reports caused by import order
- Freeze-safe: only new files under `submissions/docs/`
- Matches EaseMotion’s readable, education-first philosophy

---

## Folder structure

```text
submissions/docs/ease-modular-import-order-sp/
├── demo.html           ← main lab + snippets
├── style.css           ← page layout (mio-* classes)
├── panel-wrong.html    ← fade.css without variables first
├── panel-correct.html  ← variables.css then fade.css
└── README.md
```

`panel-*.html` files isolate each cascade so the correct panel cannot “fix” the wrong one.

---

## Policy notes

- Does **not** modify `core/`, `components/`, workflows, or the README
- Compatible with the contribution freeze (new submission folder only)
- Demo classes in panels use existing framework utilities (`ease-fade-in`) for illustration; local chrome uses `mio-*` prefixes only

---

## License

Same as EaseMotion CSS (MIT).
