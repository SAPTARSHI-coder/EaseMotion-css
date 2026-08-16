# Context Menu

1. What does this do? A right-click-style menu with icons, separators, keyboard shortcuts, and a hover highlight bar that slides smoothly between rows (turning red over the Delete action).
2. How is it used? Build a `.context-menu` nav with a `.context-menu__list` of `.context-menu__item` rows (each a `.context-menu__action` button with icon, label, and `kbd` shortcut), separated by `.context-menu__separator` dividers. The sliding highlight is a `::before` bar on the list that moves to each row on hover via `:has()`. Use `.context-menu__action--danger` for destructive actions.
3. Why is it useful? It renders an authentic desktop-style context menu with a sliding highlight using only CSS `:has()` (no JavaScript), and respects `prefers-reduced-motion`.
