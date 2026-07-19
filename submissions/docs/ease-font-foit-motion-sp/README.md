# Inter Font FOIT + Entrance Animation Flash

An interactive documentation showcase that reproduces text jumping when **Inter** loads mid-`ease-fade-in` / `ease-slide-up`, then documents practical fixes: `font-display`, correct `preconnect` order, and fallback font metrics.

> Submission track: `submissions/docs/ease-font-foit-motion-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue [#46176](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46176)

---

## What does this do?

The README pushes Inter for typography, but font loading × EaseMotion entrance motion is easy to miss. When Inter finishes loading while entrance animations run, text can reflow or flash — looking like a framework bug even though motion and fonts both work.

This lab shows the broken late-swap case next to a mitigated setup and gives copy-paste snippets.

---

## How is it used?

1. Open `demo.html` in a browser (internet needed for Google Fonts in the panels).
2. Compare **FOIT / late Inter swap** vs **Mitigated loading**.
3. Click **Replay flash** to force Inter to arrive mid-entrance animation.
4. Copy the recommended preconnect + `display=swap` + fallback metrics snippet.

Example of the mitigated pattern this demo teaches:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
  rel="stylesheet"
/>
```

---

## Why is it useful?

- Documents a real README-adjacent footgun (Inter × entrance motion)
- Reduces false “animation flash” bug reports
- Freeze-safe: only new files under `submissions/docs/`
- Fits EaseMotion’s readable, education-first contribution model

---

## Folder structure

```text
submissions/docs/ease-font-foit-motion-sp/
├── demo.html           ← main lab + snippets + checklist
├── style.css           ← page layout (ff-* classes)
├── panel-problem.html  ← late Inter swap mid-motion
├── panel-fixed.html    ← preconnect + swap + size-adjust
└── README.md
```

---

## Policy notes

- Does **not** modify `core/`, `components/`, workflows, or the README
- Compatible with the contribution freeze (new submission folder only)
- Demo panels use existing framework utilities (`ease-fade-in`, `ease-slide-up`) for illustration; local chrome uses `ff-*` prefixes only

---

## License

Same as EaseMotion CSS (MIT).
