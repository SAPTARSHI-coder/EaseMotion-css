# Footer Focus-Visible Fix

## What does this do?

Adds missing `:focus-visible` outlines to the footer component (`components/footer.css`), specifically targeting the text links (`.ease-footer-links a`) and the circular social icons (`.ease-footer-social a`).

## How is it used?

No new classes. This is a **bug fix** — the following rules should be added inside the `@layer easemotion-components` in `components/footer.css`:

```css
.ease-footer-links a:focus-visible {
  outline: 2px solid var(--ease-color-primary, #6c63ff);
  outline-offset: 3px;
  border-radius: var(--ease-radius-sm, 0.25rem);
}

.ease-footer-social a:focus-visible {
  outline: 2px solid var(--ease-color-primary, #6c63ff);
  outline-offset: 3px;
}
```

## Why is it useful?

Before this fix, keyboard users pressing `Tab` to navigate through the footer would receive **no visual feedback** indicating which link was currently focused. 

This violates **WCAG 2.1 SC 2.4.7 (Focus Visible)**, which requires that any keyboard-operable user interface has a mode of operation where the keyboard focus indicator is visible.

Every other interactive component in the framework (buttons, navbar items, chips, tabs) already has a `:focus-visible` rule using this exact same `outline` pattern. This patch brings the footer up to the framework's standard accessibility baseline.
