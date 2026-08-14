# Issue 8443: ARIA labels for focusable components

This submission addresses Issue 8443 by adding accessible names to buttons and toggles.

**What does this do?**
It provides an example of how interactive UI components should be marked up with `aria-label` attributes for screen readers.

**How is it used?**
Instead of a raw `<button class="ease-btn">`, use `<button class="ease-btn" aria-label="Descriptive name">`.

**Why is it useful?**
It aligns with EaseMotion's goal to make accessible, inclusive UI components out of the box.
