# Invoice/Receipt Page with Print-Friendly Animated Layout

A professional, clean, and animated invoice/receipt template built using **EaseMotion CSS**. This example demonstrates how to combine entrance animations, looping status indicators, and scroll-triggered (or on-load) count-up animations in a real-world layout that remains fully functional and readable when printed.

## Features

- **Company Header**: Entrance animation using `.ease-fade-down`.
- **Staggered Line Items**: Row-by-row entrance using `.ease-slide-in-left` combined with staggered `.ease-delay-*` utilities.
- **Animated Totals**: Dynamic number count-up for Subtotal, Tax, and Grand Total using `.ease-count-up` and `--ease-count-target`.
- **Status Indicator**: "Paid" badge with a subtle breathing pulse effect using `.ease-pulse`.
- **Interactive Print Button**: Includes a custom `.ease-ripple` effect on click.
- **Print-Friendly Layout**: Optimized CSS `@media print` queries that remove interactive elements (buttons) and disable animations for a crisp paper output.
- **Fully Responsive**: Adapts seamlessly to mobile, tablet, and desktop views.

## File Structure

- `demo.html`: The main markup structure.
- `style.css`: Custom layout styles and local animation definitions (`ease-fade-down`, `ease-ripple`).
- `README.md`: Usage and documentation.

## How to Use

1. Link to the main `easemotion.css` file in your project.
2. Apply the `ease-*` classes to your elements as shown in `demo.html`.
3. For the count-up effect, ensure you set the `--ease-count-target` variable on the element.
4. For staggered entrances, use the `ease-delay-N` classes (e.g., `ease-delay-100`, `ease-delay-200`) to create a sequential flow.

## EaseMotion Classes Used

| Class | Description |
|-------|-------------|
| `.ease-fade-down` | Entrance animation from top with fade. |
| `.ease-slide-in-left` | Slide entrance from the left. |
| `.ease-delay-*` | Animation delay utilities for staggering. |
| `.ease-count-up` | Animated number counter. |
| `.ease-pulse` | Looping opacity pulse for status. |
| `.ease-ripple` | Click-triggered ripple effect. |
