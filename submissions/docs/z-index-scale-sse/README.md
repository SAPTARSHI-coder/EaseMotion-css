# Standardized z-index Scale

> Issue: [#16995](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/16995)

## 1. What does this do?

Proposes a complete, predictable **`--em-z-*` z-index scale** (e.g., `--em-z-modal: 1000`, `--em-z-tooltip: 1050`) that components across EaseMotion CSS can use instead of arbitrary z-index values — eliminating stacking context bugs when users mix modals, tooltips, dropdowns, and toasts.

## 2. How is it used?

Drop the `:root` block from `style.css` into the framework's variables file, then use the tokens by name in any component:

```css
.em-modal {
  position: fixed;
  z-index: var(--em-z-modal);   /* 1000 */
}

.em-tooltip::after {
  position: absolute;
  z-index: var(--em-z-tooltip); /* 1050 — always above modals */
}

.em-toast {
  position: fixed;
  z-index: var(--em-z-toast);   /* 1100 — always on top */
}
```

### The Proposed Scale

| Token                | Value | Intended Use                          |
| -------------------- | ----- | ------------------------------------- |
| `--em-z-hide`        | -1    | Visually hidden, behind everything    |
| `--em-z-base`        | 0     | Default flow layer                    |
| `--em-z-raised`      | 10    | Cards, raised surfaces                |
| `--em-z-dropdown`    | 100   | Select menus, dropdowns               |
| `--em-z-sticky`      | 200   | Sticky headers, sticky nav            |
| `--em-z-fixed`       | 300   | Fixed navbars, side rails             |
| `--em-z-overlay`     | 400   | Backdrops / scrims                    |
| `--em-z-drawer`      | 500   | Side drawers, off-canvas panels       |
| `--em-z-modal`       | 1000  | Modal dialogs                         |
| `--em-z-popover`     | 1025  | Popovers anchored to a trigger        |
| `--em-z-tooltip`     | 1050  | Tooltips                              |
| `--em-z-toast`       | 1100  | Toasts / snackbars                    |
| `--em-z-top`         | 9999  | Absolute top — debug overlays         |

> The exact values for `--em-z-modal` and `--em-z-tooltip` match the examples given in issue #16995. Layers are spaced by ~100 so future intermediate layers can be added without breaking the established order.

## 3. Why is it useful?

This proposal fits EaseMotion CSS's **composable, predictable, contributor-friendly** design philosophy:

- **Prevents stacking-context bugs** — no more arbitrary `z-index: 9999` hacks bleeding through dropdowns, modals, or tooltips.
- **Pure CSS** — uses standard CSS custom properties; zero JavaScript and zero build-step required.
- **Semantic naming** — contributors pick the right layer by intent (`tooltip`, `modal`, `toast`) rather than guessing numbers.
- **Spaced for growth** — gaps of ~100 leave room for future layers (e.g., a `command-palette` between `modal` and `popover`) without renumbering existing components.
- **Backward-compatible** — existing components can migrate to the new tokens one at a time; old hardcoded values still work during transition.
- **Tooling-friendly** — the scale is visible in DevTools (Inspect → Computed → CSS Variables) for easy debugging.

By centralizing the scale into named tokens, every new component contributed to the framework will automatically stack correctly relative to every existing component.

## Demo

Open `demo.html` directly in any modern browser. The demo includes:

- A reference table of the full scale
- A **fixed navbar** at z=300
- A **sticky section header** at z=200
- An interactive **dropdown** (z=100), **modal + overlay** (z=400/1000), **tooltip** (z=1050), and **toast** (z=1100)
- Visual proof that tooltips appear above modals, and toasts above tooltips — exactly the bug the issue describes preventing

## Suggested Adoption Path

1. **Maintainer** copies the `:root` block from `style.css` into `core/variables.css`.
2. **Existing components** in `components/` progressively migrate from raw numbers to `var(--em-z-*)` tokens (one PR per component, or one sweeping PR — maintainer's choice).
3. **New contributions** must use the tokens going forward.

---

**Author:** [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux)