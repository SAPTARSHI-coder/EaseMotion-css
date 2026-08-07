# Slide-in Side Drawer Menu

## What does this example do?
This example demonstrates a classic side-drawer navigation menu that slides in from the left edge of the screen when triggered. It includes a semi-transparent background overlay that darkens the main page content. The most notable feature is that it relies entirely on the CSS `:target` pseudo-class for state management, meaning no JavaScript is required to open or close the menu.

## How is it used?
1. Create a link that targets the ID of your drawer component: `<a href="#main-drawer">Open Menu</a>`
2. Create the drawer component with that ID, containing an overlay and the panel.
3. Provide a close link inside the drawer (and on the overlay) that links to a non-existent hash (like `#`) to remove the target state.

```html
<a href="#main-drawer">Open</a>

<aside id="main-drawer" class="ease-drawer">
    <a href="#" class="ease-drawer-overlay"></a>
    <nav class="ease-drawer-panel">
        <a href="#">Close</a>
        <!-- Navigation Links -->
    </nav>
</aside>
```

The CSS handles the visibility and transforms. When `#main-drawer` is in the URL, `.ease-drawer:target` becomes active, changing `visibility` to `visible` and translating the panel (`transform: translateX(0)`).

## Why is it useful?
Side drawers are ubiquitous in mobile and responsive web design, providing a clean way to tuck away complex navigation structures. 

This implementation is:
- **Zero-JavaScript**: By leveraging standard HTML anchor links and the CSS `:target` selector, this complex interactive component requires zero JS overhead, making it highly robust and cacheable.
- **Accessible**: Uses semantic HTML (`<nav>`, `<aside>`), includes explicit `aria-label` attributes for screen readers, and features a `prefers-reduced-motion` media query that disables the sliding animation in favor of instant visibility toggling for users with motion sensitivity.
- **Performant**: The slide animation utilizes `transform: translateX()`, ensuring the browser can hardware-accelerate the movement without causing expensive layout recalculations (reflows) on the rest of the page.
