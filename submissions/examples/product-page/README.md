# E-commerce Product Page with Image Gallery, Tabs, and Sticky Add-to-Cart

A high-performance, animated product detail page built with **EaseMotion CSS**. This example showcases common e-commerce patterns integrated with the framework's motion utilities and components.

## Features

- **Dynamic Image Gallery**: Main image includes a custom **zoom lens effect** (using `transform-origin` and `scale`) and smooth transitions when switching thumbnails.
- **Thumbnail Navigation**: Uses `ease-slide` style interactions and active state borders.
- **Product Info Tabs**: Uses the core `.ease-tabs` component with `.ease-fade-in` panel transitions for Description, Reviews, and Shipping info.
- **Sticky Add-to-Cart**: A bottom bar that slides into view (using `.sticky-add-to-cart.is-visible`) once the user scrolls past the main buy button.
- **Interactive Selectors**:
    - **Size Selector**: Uses `.ease-scale` active state for tactile feedback.
    - **Quantity Picker**: Clean, functional +/- controls.
- **Entrance Reveals**: Sections use `.ease-reveal` (from `core/reveal.js`) for a polished page load experience.
- **Ripple Effect**: Buttons use the `.ease-ripple` utility for interactive feedback.
- **Fully Responsive**: Grid-based layout that stacks gracefully on mobile devices.

## File Structure

- `demo.html`: The main markup structure and interactive logic.
- `style.css`: Custom layout styles and local effect definitions.
- `README.md`: Documentation and usage guide.

## How to Use

1. Ensure `easemotion.css`, `core/tabs.js`, and `core/reveal.js` are available in your project.
2. Link to the local `style.css` for product-specific layout and the zoom effect.
3. Apply `.ease-reveal` to containers you want to animate on scroll.
4. Use the `.ease-tabs` markup pattern for your product documentation sections.

## EaseMotion Classes Used

| Class | Description |
|-------|-------------|
| `.ease-tabs` | Core tab component for content organization. |
| `.ease-reveal` | Scroll-triggered entrance animation. |
| `.ease-fade-in` | Opacity-based entrance for content updates. |
| `.ease-delay-*` | Staggering entrance animations. |
| `.ease-ripple` | Material-style click feedback. |
| `.ease-zoom-in` | Scale-based entrance for images. |
