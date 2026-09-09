# Chip Hardcoded Colors Fix

## What does this do?

Replaces the hardcoded `#ffffff` text color and the static `rgba()` shadow color in the selected state of the `.ease-chip` component with proper design tokens (`--ease-selection-color` and `--ease-color-primary-alpha`).

## How is it used?

No new classes. This is a **bug fix** — the following rules should be updated in `components/chip.css`:

```css
.ease-chip-group input[type="checkbox"]:checked + .ease-chip {
  background: var(--ease-color-primary, #6366f1);
  border-color: var(--ease-color-primary, #6366f1);

  /* BEFORE: color: #ffffff; */
  color: var(--ease-selection-color, #ffffff);

  /* BEFORE: box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3); */
  box-shadow: 0 2px 8px var(--ease-color-primary-alpha, rgba(99, 102, 241, 0.3));
}

.ease-chip-group input[type="checkbox"]:checked + .ease-chip::before {
  /* BEFORE: color: #ffffff; */
  color: var(--ease-selection-color, #ffffff);
}
```

*(The same changes apply to the dark mode block in `chip.css`)*

## Why is it useful?

Hardcoding colors inside components completely breaks the CSS variable theming system.

If a developer decides their application's primary brand color is a bright yellow (`--ease-color-primary: #facc15`), they need the text inside primary-colored elements to be dark for contrast. They would configure `--ease-selection-color: #1e293b`.

Because `chip.css` hardcoded `color: #ffffff;`, the text in selected chips became invisible (white text on a yellow background). Furthermore, the hardcoded shadow `rgba(99, 102, 241, 0.3)` meant the yellow chip had a strange indigo glow underneath it.

By switching to tokens, the chip component is now 100% themeable and responsive to overrides.
