# Fix ease-carousel Print Media Query Optimization

## Description
Adds a `@media print` query to the `carousel` component that removes ink-heavy features
such as gradients, box-shadows, and background colors, replacing them with high-contrast
black borders for readable and efficient printing.

## Usage
Include the component as usual. The browser automatically applies print overrides when printing.

## Accessibility
Ensures WCAG compliance on physical paper by guaranteeing maximum contrast.
Fixes: #39265
