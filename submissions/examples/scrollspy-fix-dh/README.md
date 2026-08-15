# Documentation Scrollspy Active State Fix

## What does this do?

Fixes the left sidebar navigation active state (scrollspy) on the documentation website, ensuring it updates continuously and accurately all the way to the bottom of the page.

## How is it used?

The improved scrollspy dynamically tracks the viewport's scroll position against targets derived directly from sidebar and header links. It caches target offsets to be layout-safe and responsive, retains the active parent header link, and applies a fallback threshold when the user scrolls near the bottom of the page.

## Why is it useful?

It improves usability by preventing the sidebar navigation highlights from getting stuck after the "Animations" section, and ensures that sub-items (Buttons, Cards, Scroll Progress) and final footer guides (How to Contribute, Naming Rules) track properly as they scroll into view.
