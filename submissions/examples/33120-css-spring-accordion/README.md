# CSS Spring Physics Accordion

A pure CSS animated accordion component utilizing a highly tailored cubic-bezier curve to emulate bouncy spring physics. It is styled to fit perfectly into a dark-mode Dashboard Analytics interface.

## Features
- **Zero JavaScript:** Powered entirely by the CSS hidden checkbox state hack and modern Grid `1fr` transitions.
- **Spring Physics:** Utilizes `cubic-bezier(0.34, 1.56, 0.64, 1)` to achieve a bouncy overshoot effect on open and close.
- **Accessible:** Includes `:focus-visible` outlines for keyboard users and ARIA-hidden structural attributes.
- **Responsive:** Adjusts seamlessly to varying container widths and mobile device screens.

## CSS Custom Properties
```css
:root {
    --spring-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
    --spring-duration: 0.5s;
}
```
