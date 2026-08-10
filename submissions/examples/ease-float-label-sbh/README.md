# ease-float-label

A Material Design–style floating label input, fully CSS — the label sits inside the field as a placeholder until the input is focused or filled, then smoothly animates up and shrinks above the border.

## What does this do?

- The label rests **inside** the field (vertically centered) when the field is empty and unfocused — it *is* the placeholder.
- When the field is **focused** or **has a value**, the label animates up to sit on the top border and shrinks, recoloring to the accent. When the user empties the field and blurs, it floats back down.
- "Has a value" detection uses the **`:placeholder-shown` trick**: the input carries a single-space `placeholder=" "`. The browser shows that placeholder only while the input is empty, so `:not(:placeholder-shown)` means "has content" — **no JavaScript** to track value state.
- Works on `<input>`, `<textarea>`, and `<select>` (the select uses a disabled hidden empty option + `:valid` to drive the float).

## How is it used?

1. Link the stylesheet.
2. Wrap the input + label in `.float-label`. **The `placeholder=" "` (a single space) is required** on inputs/textareas — it's the signal the CSS relies on. The label must come *after* the input (sibling combinator).

```html
<link rel="stylesheet" href="style.css" />

<div class="float-label">
  <input type="text" id="email" placeholder=" " autocomplete="off">
  <label for="email">Email address</label>
</div>

<!-- outline variant -->
<div class="float-label float-label--outline">
  <input type="url" id="site" placeholder=" ">
  <label for="site">Website</label>
</div>

<!-- textarea -->
<div class="float-label">
  <textarea id="bio" placeholder=" " rows="3"></textarea>
  <label for="bio">Short bio</label>
</div>

<!-- select (needs an empty disabled option to stay "invalid" until chosen) -->
<div class="float-label float-label--select">
  <select id="role" required>
    <option value="" disabled selected hidden></option>
    <option>Engineer</option>
    <option>Designer</option>
  </select>
  <label for="role">Role</label>
</div>
```

## Why is this useful?

- **No JS state tracking** — the `:placeholder-shown` trick is the canonical CSS-only way to detect "has value"; it fits EaseMotion's minimal-JS philosophy perfectly.
- **Smooth animation** — the label transitions `transform`, `font-size`, and `color` together for a polished float; the floated label gets a small background notch so it cleanly overlaps the border.
- **Accessible** — the real `<input>`/`<label>` pair is used (proper `for`/`id` association), focus is driven by the native control, visible focus ring; full `prefers-reduced-motion` support disables the float transition.
- **Reusable** — configurable via CSS custom properties (`--fl-h`, `--fl-radius`, `--fl-border-focus`, `--fl-label-up`, `--fl-dur`, etc.); `float-label--outline` variant for transparent fields.

## Files

- `demo.html` — self-contained showcase (open directly in a browser; no server, CDNs, or frameworks). Text inputs (incl. a prefilled one), textarea, select, and an outline variant.
- `style.css` — `:placeholder-shown` + `:focus` float logic, label transform/scale animation, border-notch background, outline variant, select chevron, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
