# Animation Durations Reference

## What does this do?
Adds a quick-reference table and interactive demo documenting EaseMotion CSS's built-in animation duration tokens, so developers can pick a timing without digging through source files.

## How is it used?
Override the duration on any element via the existing custom properties:

```css
.my-button {
  transition: transform var(--ease-speed-fast) ease;
}

.my-modal {
  animation-duration: var(--ease-speed-medium);
}

.my-hero {
  animation-duration: var(--ease-speed-slow);
}
```

Or reference them directly for a one-off value:

```css
.custom-element {
  transition-duration: 300ms; /* same as --ease-speed-medium */
}
```

## Reference table

| Token | Value | Recommended use case |
|---|---|---|
| `--ease-speed-fast` | 150ms | Micro-interactions: hover states, button presses, small icon transitions |
| `--ease-speed-medium` | 300ms | Default duration: most entrance/exit effects, modals, dropdowns |
| `--ease-speed-slow` | 600ms | Larger or more deliberate motion: page transitions, hero reveals, emphasis animations |

## Why is it useful?
EaseMotion CSS already ships these three duration tokens, but the documentation doesn't currently surface them in one place. New contributors and users have to inspect the source to find the right timing value. This addition:

- Gives a single, scannable reference instead of requiring source inspection
- Explains *when* to use each speed, not just the numeric value
- Includes a live interactive demo (`demo.html`) so the difference is felt, not just read
- Matches the project's existing philosophy of human-readable, self-explanatory documentation

This fits the **Core & Docs Showcase** track (`submissions/docs/`) since it documents existing core tokens rather than introducing a new component.
