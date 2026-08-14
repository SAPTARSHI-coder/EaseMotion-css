# Animated Split Content View (`ease-split-view`)

This submission resolves issue #19906 by providing a highly interactive, pure CSS split-view component.

## Overview
A split view is a common UI pattern used to present two opposing or complementary choices/features (e.g., "For Developers" vs "For Designers"). This component enhances the standard split layout with fluid, pure CSS hover interactions that intelligently expand the focused pane while compressing the unfocused one.

## Features
- **Pure CSS Flexbox Interactions:** Uses the `flex-grow` (`flex`) property coupled with smooth CSS `transition`s to expand/collapse panels seamlessly.
- **Content Scaling:** As a panel expands, its internal content can scale or fade in, leveraging contextual CSS sibling and descendant selectors.
- **Responsive by Default:** Automatically stacks into a vertical layout on smaller viewports, replacing the horizontal expansion with a vertical expansion.
- **No JavaScript:** The entire interaction is handled natively by the browser's layout engine.

## Files
- `demo.html`: Contains a practical dual-persona landing page section demonstrating the split view.
- `style.css`: Contains the core flex-based transition logic and presentation styles.
