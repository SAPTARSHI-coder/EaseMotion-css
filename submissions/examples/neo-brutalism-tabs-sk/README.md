# Neo-Brutalism Navigation Tabs

A stark, high-contrast navigation tabs component with a highly tactile pressing mechanism.

## Files
- `demo.html`: The HTML structure for the tabs and their content containers.
- `style.css`: The styling utilizing brutalist shadow offsets and translation transitions.
- `README.md`: This file.

## Features
- **Zero JS Layout:** The layout and hover states function entirely via CSS. (In a real app, JS or radio buttons would manage the `active` class or `:checked` state, but the visual styles are purely CSS).
- **Tactile Feedback:** Inactive tabs sit on top of a heavy, unblurred shadow. The active tab translates down and right to cover its shadow, indicating it has been "pressed" into the page.
- **High Contrast:** Uses stark white, bright primary colors, and pitch black borders for the neo-brutalism aesthetic.

## Usage
Add the `.neo-tabs` structure and apply `.active` to the currently selected tab.
