# Animated Dropdown Menu

## Description
A modern, fully animated dropdown menu component with smooth slide-down and fade-in effects. It features a rotating arrow indicator, staggered item animations, icon support, and a danger state for destructive actions. Built entirely with pure CSS using the checkbox hack for state management, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure using a hidden checkbox, trigger button with arrow, and menu items with icons.
- `style.css`: Contains the dropdown animations, arrow rotation, staggered item reveals, and hover effects.

## How to use
1. Open `demo.html` in your browser and click the trigger button to see the dropdown animate.
2. Copy the HTML and CSS into your project.
3. **Structure:**
   - Wrap everything in a `.dropdown-qn` container
   - Add a hidden checkbox with a unique ID
   - Create a `<label>` with `for` attribute matching the checkbox as the trigger
   - Add the `.dropdown-menu-qn` div with your menu items
4. **Customization:**
   - **Animation Speed:** Adjust the `0.3s` transition durations to make animations faster or slower.
   - **Colors:** Change the hover gradient colors in `.dropdown-item-qn:hover`.
   - **Danger State:** Add `.danger-qn` class to items that should have red hover styling (like logout).
   - **Arrow Style:** Modify or remove the `.dropdown-arrow-qn` SVG if you don't want the rotating arrow.
   - **Menu Width:** Adjust the `width: 300px` in `.dropdown-qn` to change the dropdown size.

## Features
- **Smooth Slide-Down:** Menu fades in and scales up from the trigger button
- **Rotating Arrow:** Arrow indicator rotates 180 degrees when open
- **Staggered Items:** Menu items animate in sequence for a polished effect
- **Icon Support:** Each item can include an SVG icon
- **Hover Effects:** Items highlight with gradient backgrounds on hover
- **Danger State:** Special styling for destructive actions (logout, delete)
- **Divider Support:** Add visual separators between menu item groups
- **Fully Responsive:** Adapts to mobile screens

## Adding More Items
To add more menu items:
1. Add a new `<a class="dropdown-item-qn">` element
2. Optionally add a `transition-delay` rule in CSS for staggered animation
3. The menu will automatically adjust its height

## Use Cases
- User profile menus
- Navigation dropdowns
- Action menus
- Form select replacements
- Settings panels
- Notification menus
- Filter dropdowns