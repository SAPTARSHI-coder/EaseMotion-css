# Non-Interactive card cursor behavior fix

This module demonstrates the correct cursor system behavior for card containers depending on whether they can handle user interaction actions.

## Resolution matrix

- Restricts the `cursor: pointer` style declaration exclusively to components carrying functional anchors or link paths.
- Enforces `cursor: default` on informational layout surfaces to protect interface accessibility standards and eliminate misleading interactive indicators.
