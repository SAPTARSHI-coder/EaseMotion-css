# Global: Adopt CSS Logical Properties for automatic RTL/Internationalization

This submission demonstrates the adoption of native **CSS Logical Properties** to support automatic Right-to-Left (RTL) and Internationalization across multiple UI components without requiring override stylesheets. This addresses issue #59724.

## Overview
Traditionally, supporting RTL requires writing entirely separate override stylesheets using `[dir="rtl"]` selectors to swap physical properties like `margin-left` with `margin-right`. 

By replacing physical properties with logical ones (e.g. `margin-inline-start`, `padding-block`, `inset-inline-end`), components automatically adapt and mirror their layouts natively based on the document's direction, drastically reducing CSS complexity and improving internationalization accessibility.

## Included Demonstrations
The `demo.html` and `style.css` files provide practical examples of how to apply CSS Logical Properties to common UI components from the 30 listed components in the issue, including:
- Cards
- Forms and Inputs (with absolute icon positioning)
- Buttons
- Alerts
- Badges
- Lists

## Usage
Simply change the `dir` attribute on the `<html>` or container element to see the layout automatically mirror. The demo page includes a live toggle to see this in action.
