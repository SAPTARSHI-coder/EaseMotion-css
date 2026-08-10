# CSS Trigonometric Functions

A demonstration of modern, native CSS `sin()` and `cos()` functions used to calculate complex, multi-layered circular and orbital animations entirely without JavaScript.

## Features
- Pure CSS and HTML implementation leveraging CSS Math Functions.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a glowing dark mode aesthetic for the orbital system.
- **Component Architecture (Documented in Code)**: 
  - **Dynamic Positioning**: Historically, positioning items in a circle required complex pre-calculated `transform` chains or JavaScript. This component uses CSS `calc()`, `sin()`, and `cos()` to dynamically plot the `(X, Y)` coordinates of each satellite based solely on an `--index` custom property passed via HTML.
  - **The Mathematics**: 
    - Angle = `(360deg / total_items) * index`
    - X Coordinate = `cos(Angle) * radius`
    - Y Coordinate = `sin(Angle) * radius`
  - **The Animation**: To animate the satellites along this circular path, we utilize CSS `@property` to register a custom `--orbit-angle` variable. A `@keyframes` animation iterates this angle from `0deg` to `360deg`, which is continuously fed into the `sin/cos` `transform` calculation, resulting in a smooth, mathematically perfect orbit.
- Accessible semantic structure. The orbital system utilizes an explicit `aria-label` to describe the visual animation to screen readers, while the decorative satellites are hidden via `aria-hidden="true"`. Honors the `prefers-reduced-motion` accessibility standard by disabling the orbit animation for motion-sensitive users, falling back to rendering the satellites in their static, mathematically plotted starting positions on the circle.

## Usage
Open `demo.html` in your browser to view the orbital system and observe the smooth circular animation powered entirely by CSS mathematics. 

*(Note: CSS trigonometric functions and `@property` are supported in modern browsers, but may not function in older browser versions.)*

## Files
- `demo.html`: The HTML structure demonstrating the injection of the `--index` custom property.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `sin()` and `cos()` calculation logic.
