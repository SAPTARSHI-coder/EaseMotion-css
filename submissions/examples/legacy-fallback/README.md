# CSS Variable Fallback Example

This example demonstrates how to provide fallback values for CSS variables to ensure compatibility with legacy browsers that do not support CSS Custom Properties.

## Implementation
- We declare the static color as a fallback property before the `var()` property.
- Modern browsers ignore the first property and use the variable; legacy browsers use the static property.