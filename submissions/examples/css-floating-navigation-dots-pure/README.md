# CSS Floating Navigation Dots

A pure CSS side navigation component commonly used for full-page scrolling sites. Features smooth hover expansions and sliding tooltips utilizing pure CSS pseudo-elements and GPU-accelerated transforms.

## Features
- Pure CSS and HTML (Zero JavaScript required for the hover/focus animations). Note: In a production environment, you would use JavaScript (like an Intersection Observer) to dynamically add/remove the `.active` class as the user scrolls down the page.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI with appropriate contrast for the tooltips.
- **Component Architecture (Documented in Code)**: 
  - **Dot Scaling**: The interactive dots grow when hovered or marked active. To ensure this animation is 60fps smooth, we use `transform: scale(1.4)` combined with a custom `cubic-bezier` spring easing, rather than animating `width` or `height` which triggers expensive browser layout repaints.
  - **Sliding Tooltips**: The tooltips (`.nav-tooltip`) are positioned absolutely relative to their parent anchor link. They are hidden initially using `opacity: 0` and pushed slightly out of place using `transform: translateX(-10px)`.
  - **The Reveal**: When the parent anchor receives a `:hover` or `:focus-visible` event, the child tooltip transitions to `opacity: 1` and `transform: translateX(0)`, creating a satisfying fade-and-slide-in effect.
- Fully accessible semantic structure. Wraps the navigation in a `<nav>` tag. The anchor links use explicit `aria-label`s to describe their destination to screen readers, while the visual tooltips are hidden from screen readers (`aria-hidden="true"`) to prevent duplicate announcements. The `.active` link utilizes `aria-current="page"`. Honors the `prefers-reduced-motion` accessibility standard by disabling the scaling and sliding transform animations, replacing them with static outlines and simple opacity fades for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Hover over the navigation dots to see the expansion effect and the sliding tooltips.

## Files
- `demo.html`: The HTML structure containing the `<nav>` semantic wrapper and the anchor links with embedded tooltips.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented GPU-accelerated transition logic.
