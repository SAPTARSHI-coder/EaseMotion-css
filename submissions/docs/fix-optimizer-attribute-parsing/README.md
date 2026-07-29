# Fix: Optimizer HTML Attribute Parsing Robustness

Enhances the CSS tree-shaking optimizer's HTML parsing regexes to correctly parse attributes and classes with whitespace around the `=` character.

## What does this do?
- **Whitespace Tolerance:** Updates regexes in `optimizer.js` from `\bem=(["'])` to `\bem\s*=\s*(["'])` to correctly detect variables like `em  =  "..."`.