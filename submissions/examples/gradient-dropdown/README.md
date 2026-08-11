# Gradient Dropdown (`ease-dropdown--gradient`)

An animated gradient-bordered dropdown, built with **pure CSS** — no JavaScript required.

## Files

- `demo.html` — standalone live demo
- `style.css` — the component

## How it works

- **No JS**: uses the native `<details>` / `<summary>` elements for open/close state, focus handling, and keyboard support (`Enter` / `Space` toggles, `Tab` moves through items) — all built into the browser for free.
- **Animated gradient border**: `summary` has a shifting gradient background (`background-size: 300% 300%` + `ease-gradient-shift` keyframes moving `background-position`). An inset pseudo-element (`::before`) sits on top with a solid fill, leaving only a thin gradient "ring" visible.
- **Looping animation control**: the gradient shimmer duration/looping follows `--ease-animation-duration` and `--ease-animation-iterations`, consistent with how EaseMotion's other looping utilities (`ease-bounce`, `ease-pulse`, etc.) expose iteration count.
- **Menu entrance**: `.ease-dropdown__menu` fades and slides in via `ease-dropdown-open` when `[open]` is applied by the browser to `<details>`.
- **Accessibility**:
  - Fully keyboard operable natively (no `tabindex` hacks needed on the trigger).
  - `role="menu"` / `role="menuitem"` on the panel and items for screen readers.
  - Respects `prefers-reduced-motion`: disables the gradient shimmer and open transition.
  - Focus states styled via `:focus-visible` on items.

## Customization

\`\`\`css
.ease-dropdown--gradient {
  --ease-dropdown-gradient: linear-gradient(115deg, #7f5af0, #2cb1bc, #ff6ac1, #7f5af0);
  --ease-dropdown-bg: #14151c;
  --ease-animation-duration: 6s;
  --ease-animation-iterations: infinite;
}
\`\`\`

Swap `--ease-dropdown-gradient` for any gradient to retheme instantly.

## Naming

Uses the `ease-` prefix (`ease-dropdown--gradient`, `ease-dropdown__menu`, `ease-dropdown__item`, `ease-gradient-shift` keyframe) to match EaseMotion CSS conventions per the issue requirements.