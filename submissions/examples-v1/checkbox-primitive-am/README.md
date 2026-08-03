# Checkbox Primitive

**1. What does this do?**
A custom checkbox component with checked, indeterminate, disabled, two sizes
(sm/lg), and three color variants (success/danger/warning) — the one core
form primitive currently missing next to the existing radio and toggle
components.

**2. How is it used?**

​```html
<label class="checkbox-item">
  <input type="checkbox" class="checkbox-input" checked />
  <span class="checkbox-box"></span>
  <span class="checkbox-text">Label</span>
</label>
​```

Add `checkbox-sm` / `checkbox-lg` for size, or `checkbox-success` /
`checkbox-danger` / `checkbox-warning` for color, on the `.checkbox-item`
label. Wrap multiple items in `.checkbox-group` (vertical) or
`.checkbox-group-horizontal`.

**3. Why is this useful?**
Every other form input — radio, toggle, select, textarea, file — already
has a component in `forms.css` with a consistent size/color-variant API.
Checkbox is the one missing primitive, and this mirrors that same API shape
(`-sm`/`-lg`, `-success`/`-danger`/`-warning`, plus a warning variant not
yet present on the sibling components) so it drops in next to the existing
components with no naming inconsistency. It also covers the indeterminate
("mixed") state, which none of the existing checkbox-themed submissions in
this repo implement, and is fully keyboard/focus-visible and
`prefers-reduced-motion` aware.

## Notes for the maintainer

- Native `<input type="checkbox">` has no HTML attribute for indeterminate —
  `demo.html` sets it via `el.indeterminate = true` in a small inline script,
  for the demo only. The CSS itself only relies on the `:indeterminate`
  pseudo-class.
- Checkmark and dash are drawn with plain CSS (`border` + `transform`), no
  SVG or icon font.
- Colors are local hard-coded values in this demo per the raw-CSS
  submission rule; they match the existing `--ease-color-*` primary/success/
  danger/warning values used by `.ease-radio` and `.ease-toggle` in
  `components/forms.css`, so token-swapping on integration is a 1:1 mapping.

Closes #<43759>