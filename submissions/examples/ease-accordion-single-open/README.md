# ease-accordion-single-open

Fixes #56060 - accordion sections now close automatically when another
section is opened, so only one section is expanded at a time.

## Behavior

- Clicking a closed section opens it and closes any other open section
  in the same accordion.
- Clicking the currently open section closes it (standard toggle).
- Uses a .active class + max-height transition, consistent with
  EaseMotion existing animation approach (no external dependencies).

## Files

- demo.html - usage example matching the markup from issue #56060
- style.css - accordion styles + collapse/expand transition
- script.js - single-open toggle logic
