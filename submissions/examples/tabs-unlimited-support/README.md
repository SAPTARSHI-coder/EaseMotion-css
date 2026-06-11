## Tabs — Unlimited Support (Submission)

This submission demonstrates an enhancement to the Tabs component that removes the hardcoded CSS limit and enables support for any number of tabs using a small progressive enhancement script.

What this includes:
- `demo.html` — Interactive demo showing 6, 12 and 25 tabs examples.
- `style.css` — Demo specific styles and imports to run inside the sandbox.

How it works:
- The original library uses CSS `:nth-of-type()` selectors which are finite. The enhancement injects dynamic CSS rules for tab counts beyond the CSS-only range and computes the sliding underline width/position at runtime.

How to test locally:
1. Open `submissions/examples/tabs-unlimited-support/demo.html` in a browser (served from filesystem is fine).
2. The demo includes the enhancement script inlined — you can interact with 6, 12 and 25 tab examples.

If maintainers want to adopt the change into core, the script in `demo.html` contains the exact enhancer that can be moved into `core/tabs.js` and the accompanying CSS adjustments are documented inline.
