# Fix ease-list Print Optimization

## Description
Applies a `@media print` query block to the `list` component. This removes ink-heavy features such as linear-gradients, background-colors, and box-shadows, replacing them with standard high-contrast black borders for readable physical prints.

## Usage
Include the component as usual. When the document is printed, the browser automatically applies the media query overrides.

## Performance & Accessibility Compliance
Prevents ink waste and guarantees maximum contrast on physical paper.
Fixes: #39297
