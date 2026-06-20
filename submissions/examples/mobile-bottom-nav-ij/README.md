# Mobile Bottom Nav

1. What does this do? A mobile-style bottom navigation bar with 4 tabs. The active tab's icon scales up (1.2x) and changes color (amber). A smooth spring-like cubic-bezier transition animates between tabs. The page content fades in with each tab change.

2. How is it used? Add a `.bottom-nav` container with `.nav-item` buttons. Apply `.active` to the selected item. The `.nav-icon` and `.nav-label` elements transition with `cubic-bezier(0.34, 1.56, 0.64, 1)` for a spring-like feel. The JS toggles the active class and updates page views.

3. Why is it useful? Bottom navigation is the standard mobile navigation pattern. The scale + color transition gives clear visual feedback about which tab is active, improving usability without taking up extra space.
