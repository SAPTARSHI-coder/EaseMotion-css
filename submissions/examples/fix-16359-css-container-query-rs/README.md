# CSS Container Query Utility Classes

This submission implements utilities and patterns utilizing CSS Container Queries (`@container`).

## Bug / Feature Description
Traditionally, Responsive Web Design relied entirely on Media Queries (`@media (min-width: 768px)`). The problem is that components are often placed in varying contexts (e.g., a card in a wide hero section vs. the exact same card in a narrow sidebar). A component shouldn't care about the *screen size*, it should care about the *space it has available to it*.

Container Queries solve this. By marking a wrapper element as a container, the child elements can query the width of that wrapper to determine their layout.

## Fix / Implementation Details
- **`.ease-container-inline`**: This class applies `container-type: inline-size` and a `container-name`. You wrap this around your component.
- **Component Styling (`.ease-cq-card`)**: Built a robust card component that defaults to a mobile-friendly "stacked" column layout.
- **`@container ease-card-container (min-width: 500px)`**: Added the container query logic. If the wrapper class has at least 500px of breathing room, it automatically changes the card into a horizontal side-by-side layout.

## How to Test
1. Open `demo.html` in your browser.
2. Look at the "Resizable Container" on the left. Click and drag the dashed handle to manually shrink the width of the container. Notice how the card snaps to a stacked layout, even though your browser window hasn't changed size!
3. Look at the "Narrow Column" on the right. It uses the exact same HTML and CSS, but because its parent grid column is narrow, it automatically adopts the stacked layout.
