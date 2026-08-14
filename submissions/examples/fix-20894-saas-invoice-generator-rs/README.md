# SaaS Invoice Generator

## Issue
**Issue #20894**: Advanced: SaaS Landing — Invoice Generator

## Description
This submission builds a clean, interactive invoice mockup designed for an Invoice Generator SaaS landing page. It showcases key details (billing info, detailed line items, and totals) rendering dynamically via staggered fade-in animations on page load, simulating a real-time invoice generation process.

## Implementation Details
- **HTML (`demo.html`)**: Standard table columns layout detailing the item, hours, rate, and calculation totals.
- **CSS (`style.css`)**:
  - Implements a subtle entrance animation for the invoice container.
  - The rows (`.line-item`) and grand totals use staggered animation delays to slide upwards and fade in sequentially.
  - Line items react dynamically with hover state highlighting.

## Verification
Open `demo.html` in your browser. Upon reload, observe the main invoice sheet slide up, followed by individual line items and the subtotal section popping into place sequentially. Hover over the rows to see hover highlights.
