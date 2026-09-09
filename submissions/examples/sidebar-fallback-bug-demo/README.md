# Sidebar Fallback Bug Demo

## What does this do?

Demonstrates that the sidebar component in `components/sidebar.css` has wrong fallback values. The neutral-900 fallback is `#111` (should be `#0f172a`) and neutral-200 is `#e5e7eb` (should be `#e2e8f0`).

## How is it used?

Open `demo.html` in a browser. The sidebar renders a dark background and light border. If CSS variables fail to resolve (older browser, CSP issues), the sidebar renders completely wrong colors.

## Why is it useful?

If CSS variables fail to resolve, the sidebar renders with completely different colors than the design system intends. The same wrong `#e5e7eb` fallback for neutral-200 also appears in `footer.css`.

The fix should be applied to `components/sidebar.css`:
```css
background: var(--ease-color-neutral-900, #0f172a);
border-right: 1px solid var(--ease-color-neutral-200, #e2e8f0);
```
