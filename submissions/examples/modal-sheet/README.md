# Modal Sheet

1. What does this do? A bottom sheet modal that slides up over a dimmed, blurred backdrop, with a grab handle, heading, copy, and two action buttons.
2. How is it used? Build a `.modal-sheet` container with a `.modal-sheet__backdrop` and a `.modal-sheet__sheet`. The backdrop fades in (opacity) and the sheet slides up (translateY 100% to 0) on load. Use `.modal-sheet__btn--ghost` and `.modal-sheet__btn--primary` for actions. Adjust the accent color and slide speed via `--ms-accent` and `--ms-speed`.
3. Why is it useful? It provides a mobile-style sheet dialog using only CSS (no JavaScript for the entrance animation), and renders statically under `prefers-reduced-motion`.
