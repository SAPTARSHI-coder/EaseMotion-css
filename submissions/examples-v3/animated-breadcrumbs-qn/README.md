# Animated Breadcrumbs Navigation

## Description
A modern, fully animated breadcrumb navigation component with smooth hover effects, animated separators, and staggered entrance animations. It features an expanding underline on hover, icon animations, and a highlighted active state. The component includes two style variations and is built entirely with pure CSS, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains two breadcrumb examples - one with icons and one with text separators.
- `style.css`: Contains the breadcrumb styling, hover animations, separator effects, and staggered entrance animations.

## How to use
1. Open `demo.html` in your browser and hover over the breadcrumb links to see the animations.
2. Copy the HTML and CSS into your project.
3. **Structure:**
   - Wrap in a `<nav>` with `aria-label="Breadcrumb"` for accessibility
   - Use an `<ol>` with `.breadcrumb-list-qn` class
   - Add `<li>` elements with `.breadcrumb-item-qn` for each level
   - Add `.breadcrumb-separator-qn` between items
   - Mark the current page with `.active-qn` and `aria-current="page"`
4. **Customization:**
   - **Colors:** Change the hover color in `.breadcrumb-link-qn:hover` and the active background in `.breadcrumb-current-qn`.
   - **Animation Speed:** Adjust the transition durations (currently `0.3s`) for faster or slower animations.
   - **Separator Style:** Change the SVG separator to a different icon or use text (like `/` or `>`).
   - **Icon:** Modify or remove the `.breadcrumb-icon-qn` SVG for the home icon.
   - **Spacing:** Adjust the `gap` in `.breadcrumb-list-qn` to change spacing between items.

## Features
- **Staggered Entrance:** Items fade in from left with sequential delays
- **Hover Underline:** Expanding underline animation on link hover
- **Icon Animation:** Home icon scales and rotates on hover
- **Separator Animation:** Separators shift right when the previous item is hovered
- **Active State:** Current page is highlighted with background color
- **Two Styles:** Icon-based and text-separator variations
- **Fully Responsive:** Adapts to mobile screens
- **Accessible:** Proper semantic HTML with ARIA attributes

## Accessibility
- Uses `<nav>` with `aria-label="Breadcrumb"` for screen readers
- Uses `<ol>` for proper list semantics
- Marks current page with `aria-current="page"`
- Separators have `aria-hidden="true"` to hide from screen readers
- Proper focus states for keyboard navigation

## Use Cases
- E-commerce product pages
- Documentation sites
- Blog post navigation
- Admin dashboards
- File browser interfaces
- Multi-level category pages
- Search result navigation
- Settings panels