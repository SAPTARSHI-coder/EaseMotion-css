# Print-Friendly Utility Classes

## What does this do?
Adds .ease-print-hide (hidden only when printing) and .ease-print-only
(visible only when printing) utility classes, plus a global rule that
strips animations/transitions/shadows from the print output.

## How is it used?
Add .ease-print-hide to navs, buttons, or decorative animated elements
you don't want on paper. Add .ease-print-only to elements meant only for
the printed version (e.g. a footer citation line).

## Why is it useful?
- Any real page eventually gets printed (invoices, articles, receipts)
- Animated/interactive elements look broken or wasteful on paper
- Currently zero print-related utilities exist in the framework
- Tiny, self-contained, single-file addition