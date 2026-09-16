# Cookie Banner

1. What does this do? A consent banner that slides up from the bottom of the viewport with a smooth settle, with an icon, message, and Decline/Accept actions.
2. How is it used? Place a `.cookie-banner` element (with `.cookie-banner__body` containing an `.cookie-banner__icon` and `.cookie-banner__text`, plus `.cookie-banner__actions` with `.cookie-banner__btn` buttons) at the end of your page. Customize the accent color and settle speed via `--cb-accent` and `--cb-speed`.
3. Why is it useful? It provides an accessible consent UX with a polished slide-up animation using only CSS (no JavaScript), and respects `prefers-reduced-motion`.
