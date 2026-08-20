# Animated Search Bar Expand

## Description
A sleek, animated search bar component that expands on icon click with a smooth width transition. The search icon rotates 90 degrees on expand, and the input collapses back when it loses focus if empty. Built with pure CSS transitions and minimal JavaScript for class toggling.

## Files
- `demo.html`: Contains the search bar with icon button and toggle JavaScript.
- `style.css`: Contains all styling, CSS custom properties, transition logic, and responsive breakpoints.

## How to use
1. Open `demo.html` in your browser and click the search icon to expand the input.
2. Copy the HTML and CSS into your project.
3. **Structure:**
   - Wrap the input and button in a container with `.sbea-container-ij`
   - Use an `<input>` with `.sbea-input-ij` and placeholder `"Type to search..."`
   - Add a `<button>` with `.sbea-btn-ij` containing a search SVG icon
   - Toggle `.sbea-expanded` on the container to animate
4. **Customization:**
   - **Widths:** Adjust `--sbea-expanded-width` and `--sbea-collapsed-width` in `:root`
   - **Speed:** Change `--sbea-transition-duration` for faster/slower animation
   - **Colors:** Modify `--sbea-border-color`, `--sbea-focus-color`, and `--sbea-bg-color`
   - **Icon Rotation:** Change the `transform` value on `.sbea-expanded .sbea-icon-ij`
   - **Border Radius:** Adjust `border-radius` on `.sbea-container-ij`

## Features
- **Smooth Expand:** Input width animates from 0 to `--sbea-expanded-width` on toggle
- **Icon Rotation:** Search icon rotates 90 degrees when expanded
- **Auto-focus:** Input receives focus automatically on expand
- **Auto-collapse:** Input collapses on blur when empty
- **CSS Custom Properties:** Fully customizable via `:root` variables
- **Focus Ring:** Container border changes to focus color when expanded
- **Responsive:** Adapts width on smaller screens
- **Glassy UI:** Backdrop-filter demo container with dark gradient background

## Accessibility
- Button has `aria-label="Toggle search"` for screen readers
- Input has a descriptive placeholder
- Focus states are visually indicated with border color change
- Keyboard accessible via button click

## Use Cases
- Header search bars
- Navigation search toggles
- Mobile search expanders
- Dashboard filter bars
- E-commerce product search
- Documentation site search
- Toolbar search inputs
- Sidebar search fields
