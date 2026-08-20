# Sidebar Nav

1. What does this do? A vertical sidebar with a brand header, sectioned links, and a sliding active indicator (an accent bar that grows in next to the active link).
2. How is it used? Build a `.sidebar-nav` aside with a `.sidebar-nav__brand` and a `.sidebar-nav__list` of `.sidebar-nav__heading` labels and `.sidebar-nav__link` anchors (each with an icon and label). Mark the current page with `.is-active` (and `aria-current="page"`). The active link tints its background and grows an accent bar; links lift their icon on hover. Adjust the accent color and speed via `--sn-accent` and `--sn-speed`.
3. Why is it useful? It gives an app-style navigation shell using only CSS (no JavaScript), with an animated active indicator and `prefers-reduced-motion` support.
