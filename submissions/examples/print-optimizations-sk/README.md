# Global Print Optimizations

This submission provides a comprehensive set of `@media print` rules for **EaseMotion CSS** components. It ensures that pages built with the framework are "ink-friendly" and maintain a professional appearance when printed.

## Improvements

- **Interactive Elements**: Hides navbars, sidebars, tooltips, loaders, and scroll progress bars.
- **Modals & Overlays**: Forces hidden modal content to be visible in the normal document flow and removes the dimmed background.
- **Tabs**: Expands all tab panels so that the full content of the page is printed, rather than just the active tab.
- **Ink Savings**: Converts solid-filled chips and badges into outlined versions with black text.
- **Accessibility**: Includes a reset that removes all animations and transitions during the print process to prevent layout shifts.
- **Link Visibility**: Automatically appends the URL next to anchor tags (`a[href]`) for physical reference.

## How to Use
1. Copy the CSS rules into your `core/base.css` or include `style.css` in your project.
2. To test, open your browser's print dialog (`Ctrl + P`) on any page using EaseMotion components.

## Directory Structure
- `demo.html`: A test page with various components to verify print behavior.
- `style.css`: The consolidated print optimization rules.
