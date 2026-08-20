# Print Utility Classes Example (`print-utility-classes`)

This submission resolves issue #38718 by providing a comprehensive demonstration of CSS print utility classes using the `@media print` query.

## Overview
Web pages often look terrible when printed out of the box (e.g., via `Ctrl+P`). Navigation bars, footers, interactive buttons, and dark mode backgrounds waste printer ink and clutter the printed page. By leveraging `@media print`, we can transform a web document into a clean, print-friendly format.

## Features
- **Ink Saving:** Automatically strips dark backgrounds and colored text, forcing the layout to a high-contrast black-on-white theme to save printer ink.
- **Element Hiding:** Uses a `.d-print-none` utility class to hide non-essential print items like navigation bars, sidebars, and interactive buttons.
- **Link Expansion:** Uses the `::after` pseudo-element and the `attr(href)` CSS function to automatically append the actual URL next to hyperlinks on the printed page, since users cannot click links on paper.
- **Page Breaks:** Demonstrates the use of `break-inside: avoid` and `page-break-before: always` to prevent awkward page splits (e.g., cutting a chart or a paragraph in half).

## Files
- `demo.html`: A mock article layout with a navigation bar and interactive elements that look great on screen.
- `style.css`: Contains standard screen styles alongside a robust `@media print` block implementing the print utilities.
