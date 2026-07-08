# Modals Shadow Token Bug Demo

## What does this do?

Demonstrates that the modal component in `components/modals.css` references the undefined CSS variable `--ease-shadow-2xl`. The value exists at `--ease-shadow-xl` but not `-2xl`.

## How is it used?

Open `demo.html` in a browser. Click the override buttons to change `--ease-shadow-xl` — the modal shadow won't respond because it references the non-existent `-2xl` token. The demo's `style.css` includes the fix.

## Why is it useful?

If a user overrides `--ease-shadow-xl` (the largest defined token), the modal shadow won't track because it references a different (non-existent) token. This defeats the purpose of the design token system.

The fix should be applied to `components/modals.css` line 45:
```css
box-shadow: var(--ease-shadow-xl, 0 25px 50px -12px rgba(0, 0, 0, 0.25));
```
