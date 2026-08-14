# CSS Loading Skeleton for Profile

A pure CSS skeleton loader mimicking the layout of a standard user profile card. It utilizes animated linear gradients to create a continuous shimmering effect, improving perceived performance while data is fetching. Built entirely without JavaScript.

## Features
- Pure CSS and HTML.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI where the skeleton base and highlight colors are adjusted to match dark surface panels.
- **Component Architecture (Documented in Code)**: 
  - **The Skeleton Base (`.skeleton`)**: The core animation logic is centralized in a single utility class. It applies a `linear-gradient` with a bright highlight sandwiched between darker base colors. By setting `background-size: 400% 100%`, the gradient is stretched wide. An infinite `@keyframes` animation (`skeletonShimmer`) pans the `background-position` horizontally, creating the sweeping shimmer.
  - **The Shape Utilities**: Specific physical dimensions (width, height, border-radius) are handled by separate modifier classes (e.g., `.skeleton-avatar`, `.skeleton-title`, `.skeleton-line`). This separation of concerns allows the base `.skeleton` animation to be easily applied to any shape or layout across an application.
- Fully accessible semantic structure. The mock profile card wrapper utilizes `aria-busy="true"` and `aria-live="polite"` to correctly inform screen readers that content is actively loading, along with an explicit `aria-label`. Honors the `prefers-reduced-motion` accessibility standard by disabling the shimmering background animation entirely for motion-sensitive users, replacing it with a static, semi-transparent block color.

## Usage
Open `demo.html` in your browser to view the profile card skeleton layout and the continuous background sweep animation.

## Files
- `demo.html`: The HTML structure demonstrating how the mock layout is constructed using empty 'bone' `div`s.
- `style.css`: The styling, CSS Custom Property theming blocks, the base gradient animation logic, and the specific shape utility classes.
