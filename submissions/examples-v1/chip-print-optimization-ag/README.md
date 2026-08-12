Print Optimized Chip Component
An intermediate-level CSS utility demonstrating how to optimize UI elements for physical printing.
Modern web interfaces often use vibrant background colors and light text for tags and chips. However, when a user prints the page, browsers typically strip background colors to save ink, causing light text to disappear against the white paper.
This component solves that by utilizing the @media print CSS query.

Core CSS Features Used
@media print Block: A dedicated media query that automatically activates when the print dialog is opened.
Ink-Saving Outline Conversion: Automatically strips solid background colors from the .ease-chip-ag elements and replaces them with a crisp, 1px solid black border and black text.
.no-print-ag Utility: A helper class to instantly hide interactive elements (like buttons or navbars) that have no relevance on a printed piece of paper.
print-color-adjust: Ensures the browser respects the exact print styles defined in the CSS rather than applying its own overrides.

How to Test

Simply open the demo.html file in a browser and click the "Open Print Preview" button. You will instantly see the colorful dark-mode UI transform into a clean, printer-friendly monochrome document.
