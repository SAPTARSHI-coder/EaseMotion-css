# Text Selection Control Utilities

This utility directory showcases behavior control mechanics using variants of the CSS native `user-select` rules.

## Core Classes
- `.em-select-none`: Disables structural text highlighting entirely within the bounds of a target element.
- `.em-select-all`: Selects the entire content block seamlessly on a single cursor engagement or pointer event click.
- `.em-select-text`: Enforces standardized structural highlighting and standard manual manipulation behaviors.

## UX & Accessibility Guardrails
While `.em-select-none` prevents accidental highlights on system UI components like buttons, interactive menus, and switches, it should never be applied indiscriminately to informative text layouts, as this can degrade overall layout accessibility for typical users.