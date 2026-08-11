# CSS Barcode Button

A button that visually disguises itself as a product barcode. When hovered, a glowing red laser scans down the button, after which the barcode mechanically splits open to reveal the hidden call-to-action text underneath. Built entirely without JavaScript or image assets.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The CSS Barcode**: The barcode is not an image. It is drawn mathematically using CSS `repeating-linear-gradient` with hard stops on the `.door` elements, ensuring it remains infinitely crisp on any display scale without requiring external assets.
  - **The Mechanical Doors**: Inside the button container sit two `<div>` elements (`.door-top` and `.door-bottom`), each covering exactly 50% of the button. They contain the barcode gradient. On `:hover`, CSS transitions apply `transform: translateY(-100%)` and `translateY(100%)` respectively, causing them to slide out of the way. The parent button container has `overflow: hidden` to ensure the doors disappear cleanly.
  - **The Laser Sequence**: A `.laser` pseudo-element animates across the button on `:hover` using CSS `@keyframes`. To create the sequential effect (Laser scans -> Doors open -> Text appears) purely in CSS, we heavily utilize `transition-delay`. The doors wait `0.5s` for the laser animation to finish before they begin their transition, and the text waits `0.7s` to scale up.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The barcode specifically retains its high-contrast black-and-white theme even in dark mode to maintain the realism of a physical printed label, while the surrounding layout adapts to the system theme.
- Fully accessible semantic structure. The main container is a standard `<button>` tag with an `aria-label` defining the action, ensuring screen readers can announce its purpose even when the doors are closed. The decorative barcode doors and laser are explicitly hidden from screen readers via `aria-hidden="true"`. Honors the `prefers-reduced-motion` accessibility standard by disabling the laser scan and delay timers, causing the doors to snap open immediately on hover for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Hover your mouse over the barcode to trigger the scan and reveal the button.

## Files
- `demo.html`: The HTML structure defining the hidden text, the laser line, and the split doors.
- `style.css`: The styling, the `repeating-linear-gradient` barcode generator, and the sequential `transition-delay` logic.
