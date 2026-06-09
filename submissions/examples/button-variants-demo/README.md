# Button Variants Demo

Purpose

- A concise, production-ready demo showcasing button variants, sizes, pill and outline styles, and hover interactions.

Files

- `demo.html` — single-page demo (open directly in browser)
- `style.css` — styles for the demo

Showcased variants

- Color: Primary, Secondary, Accent, Ghost
- Outline: Outline modifier for each color
- Sizes: `small`, default, `large`
- Pill buttons: rounded / tag-like
- Hover interactions: lift, glow, scale, ripple

How to open

1. From the repository root (Windows PowerShell):

```powershell
Invoke-Item .\submissions\examples\button-variants-demo\demo.html
```

2. Or serve locally:

```powershell
python -m http.server 8000 --bind 127.0.0.1
# then open http://127.0.0.1:8000/submissions/examples/button-variants-demo/demo.html
```

Why this fits EaseMotion CSS

- Motion-first: hover interactions are subtle, performant, and respect `prefers-reduced-motion`.
- Human-readable: semantic markup and clear utility-like class names make it easy to adopt.
- Self-contained: all demo files live under `submissions/examples/button-variants-demo/` and require no build step.

Accessibility notes

- Buttons include focus styles and meet contrast goals for primary/ accent variants. Motion respects `prefers-reduced-motion`.

Maintainer notes

- No changes made to `core/` or `components/`.
- If you'd like these variants converted to follow a specific project naming convention or use `core/variables.css` tokens directly, I can update the classes accordingly.
