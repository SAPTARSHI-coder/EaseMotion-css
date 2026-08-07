# color-scheme: light dark Auto Token Behavior Lab

An interactive theming diagnostic lab demonstrating how the root `color-scheme: light dark` automatically darkens browser native input controls and scrollbars, and why custom containers still require explicit color tokens.

---

## 1. What does this do?
This showcase presents a side-by-side theme sandbox comparing automatic user-agent dark styles with explicit design token remapping, together with an in-app selector and quiz.

---

## 2. How is it used?
Open `demo.html` in a web browser to test form controls and scrollareas under different scheme settings, and copy variables configurations:

```html
<!-- Native inputs and scrollbars darken automatically under this element context -->
<div style="color-scheme: dark;">
  <input type="text" value="Auto Dark Input" />
</div>
```

---

## 3. Why is it useful?
It prevents developers from assuming that setting a color-scheme auto-darkens all custom elements, details what changes automatically vs manually, and guides users in writing clean prefers-color-scheme overrides.

---

## Features & Implementation Suffix

- **Folder Path:** `submissions/examples/ease-color-scheme-auto-pp/`
- **Contributor Suffix:** `pp` (Pratyush Panda)
- **Resolved Ticket:** [Issue #46189](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46189)

### Included Theming Diagnostics:
1. **Side-by-Side Sandbox:** Compares browser-level auto dark (UA chrome only) with fully remapped design token sets.
2. **Diagnostic Toggles:** Lock light mode, toggle auto-dark color-scheme, or switch to explicit variables remapping.
3. **Theming Checklist:** Outlines what changes automatically (scrollbars, input borders, options dropdowns) vs manually (card surfaces, app divides, gradient typography).
4. **Theming Quiz:** In-app quiz focusing on user-agent style rules and color inheritance properties.
