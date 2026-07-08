# Animated Tabs with Sliding Underline

1. What does this do? Provides a pure-CSS animated tab component with a sliding underline indicator and fade-in content panels, using hidden radio buttons for state management.
2. How is it used? Place hidden `.tab-radio` inputs followed by `.tab-label` elements inside a `.tabs-bar`, a `.tab-underline` div, and `.tab-panel` containers. Each radio targets a panel via the `~` sibling combinator.
3. Why is it useful? Tabbed navigation is essential for organizing content in dashboards, settings pages, and profiles. This component follows EaseMotion CSS's zero-JavaScript philosophy with smooth cubic-bezier transitions, reduced-motion support, and dark mode compatibility.
