# CSS Fade-In Tooltip (Minimalist Tech)

A pure CSS tooltip component designed for Minimalist Tech Layouts. It features a straightforward, hyper-clean "Fade-In" animation triggered on hover, favoring simplicity and immediate readability over complex motion.

## Features
- Pure CSS and HTML (No JavaScript required).
- The `.tooltip-content` is anchored absolute to the `.tooltip-trigger` parent. 
- The animation is achieved entirely through an `opacity` and `visibility` transition, ensuring the tooltip appears exactly where it needs to be without any spatial shifting or bouncing.
- Clean, stark aesthetic designed for configuration panels and admin settings, utilizing the `Inter` font family and high-contrast toggle switches.
- Features a pure CSS side-pointing arrow built using border manipulation on the `::after` pseudo-element.
- Includes a smart media query breakpoint (`max-width: 768px`) that automatically repositions the tooltips from the right side to the bottom on smaller screens to prevent horizontal viewport overflow.
- Naturally accessible, as the lack of spatial movement automatically complies with standard `prefers-reduced-motion` guidelines without requiring an explicit media query override.

## Usage
Open `demo.html` in your browser. You will see a list of security configuration settings. Hover your mouse over the dashed setting names; a dark tooltip will smoothly fade into view directly adjacent to the trigger, revealing detailed documentation.

## Files
- `demo.html`: The HTML structure for the settings list, toggle switches, and the nested tooltip containers.
- `style.css`: The styling, flexbox layouts, and CSS `opacity` logic for the fade-in effect and responsive repositioning.
