# Time Picker Dropdown

## Description
A smooth animated time picker dropdown component with slide/fade entrance, hover-highlighted hour, minute, and period selectors built with pure CSS transitions and minimal JavaScript.

## Files
- `demo.html`: HTML structure with input trigger, three-column dropdown (Hour, Minute, Period), and toggle JS.
- `style.css`: Full styling including `:root` variables, dropdown slide/fade animation, scrollable time list, and hover/active states.

## How to Use
1. Open `demo.html` in your browser and click the input field to open the time dropdown.
2. Copy the HTML and CSS into your project.
3. **Structure:**
   - Wrap the input and dropdown in a `.tpd-wrapper` container.
   - The input group (`.tpd-input-group`) acts as the trigger; clicking it toggles the `.tpd-open` class.
   - The dropdown (`.tpd-dropdown`) contains three columns for Hour, Minute, and Period selection.
4. **Customization:**
   - **Colors:** Edit the `--tpd-*` variables in `:root`.
   - **Animation Speed:** Change the `--tpd-transition` duration.
   - **Items:** Add or remove `.tpd-item` elements in each column.

## Features
- Slide-down and fade-in animation on open
- Smooth scale entrance with transform-origin at top
- Hover highlight with primary color tint
- Active selection with solid primary background
- Scrollable time lists with custom thin scrollbar
- Click-outside to close
- Fully responsive layout

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Use Cases
- Meeting scheduling forms
- Alarm or reminder setup
- Booking and reservation systems
- Any time-input UI pattern
