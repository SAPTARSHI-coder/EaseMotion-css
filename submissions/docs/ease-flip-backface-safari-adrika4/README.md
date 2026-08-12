# Flip / 3D Backface-Visibility Safari Glitch Fix

An interactive documentation showcase that reproduces flicker and glitches with EaseMotion's flip animations (`ease-flip`, `flip-x`, `flip-y`) in Safari, and documents the correct Safari-safe CSS stack to prevent them.

> Submission track: `submissions/docs/ease-flip-backface-safari-adrika4/`
> Contributor suffix: `adrika4`
> Resolves: Issue [#47560](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/47560)

---

## What does this do?

3D flip animations can flicker, flash the reverse face, or briefly show both sides at once in Safari when `backface-visibility`, `transform-style: preserve-3d`, and `perspective` are not stacked in the correct order. This is a Safari-specific rendering quirk, not a bug in EaseMotion CSS itself — but it's a very easy trap to fall into when adding flip utilities to a project.

This showcase:

- Reproduces the flicker/glitch condition using a broken CSS stack
- Shows the fixed, Safari-safe CSS stack side by side
- Documents the exact property order required to avoid the glitch
- Explains why Safari renders backfaces differently from Chrome/Firefox
- Provides copy-ready, production-safe flip CSS

---

## How is it used?

1. Open `demo.html` in a browser (best tested in Safari, but the comparison is visible in any browser).
2. Toggle between the **Broken Stack** and **Safari-Safe Stack** flip cards.
3. Trigger the flip animation on each and observe the difference — the broken stack may flicker or briefly reveal both faces in Safari; the safe stack should not.
4. Read the property checklist and copy the safe CSS snippet for your own project.

---

## The bug, in short

```css
/* BROKEN — missing/misordered properties cause Safari flicker */
.flip-inner {
  transition: transform 0.6s;
}
.flip-face {
  position: absolute;
  inset: 0;
}
.flip-back {
  transform: rotateY(180deg);
}
```

Missing here: `perspective` on the parent, `transform-style: preserve-3d` on the flipping element, and `backface-visibility: hidden` (with the `-webkit-` prefix) on each face. Without all three stacked correctly, Safari can paint the back face during the transition, causing a visible flash or flicker.

## The fix

```css
/* SAFE — correct stacking order for Safari */
.flip-container {
  perspective: 1000px;
}
.flip-inner {
  transform-style: preserve-3d;
  transition: transform 0.6s;
}
.flip-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden; /* Safari still requires this prefix */
}
.flip-back {
  transform: rotateY(180deg);
}
```

### Why Safari needs the `-webkit-` prefix

Safari's WebKit engine has historically required the `-webkit-backface-visibility` prefix even after `backface-visibility` became a standard, unprefixed CSS property in other browsers. Omitting the prefixed version is one of the most common causes of this glitch — the unprefixed property alone is not always enough in Safari.

### Why `perspective` must be on the parent

`perspective` establishes the 3D viewing context for its children. If it's missing, or applied to the wrong element, the browser can't correctly determine which face should be visible at a given rotation, which is part of what causes the flicker in Safari specifically.

---

## Features

- Side-by-side broken vs. Safari-safe flip comparison
- Interactive flip trigger buttons for both cards
- Property checklist highlighting the 3 required properties
- Copy-to-clipboard safe CSS snippet
- Responsive layout, accessible controls
- Does not modify any core EaseMotion framework files

---

## Policy notes

- Does **not** modify `core/`, `components/`, workflows, or existing files
- Compatible with the freeze notice — new submission folder only
- Educational showcase — this documents a known Safari rendering quirk and a safe workaround; it does not change how `ease-flip` itself is implemented in the framework

---

## Folder structure

```text
submissions/docs/ease-flip-backface-safari-adrika4/
├── demo.html
├── style.css
└── README.md
```

---

## License

Same as EaseMotion CSS (MIT).