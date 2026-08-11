# Pure CSS Dismissible Banner (`ease-banner-dismissible`)

This submission resolves issue #19898 by implementing a global announcement banner that can be dismissed (closed) by the user entirely without JavaScript.

## Overview
Announcement banners are ubiquitous, but they often require attaching JavaScript event listeners to handle the "close" action. This component uses the "CSS Checkbox Hack" to manage the open/closed state natively in the browser.

## Features
- **Zero JS State Management:** A hidden `<input type="checkbox">` acts as the state container. When the associated `<label>` (the close button) is clicked, the CSS selector `#dismiss-toggle:checked ~ .ease-banner` visually removes the banner.
- **Smooth Animation:** Instead of just switching `display: none`, the banner elegantly collapses its `max-height`, `opacity`, and `padding` using CSS `transition` for a highly polished UX.
- **Accessible Design:** Uses high-contrast colors and standard spacing principles.
- **Layout Shift Prevention:** The CSS transitions smoothly so content below the banner reflows naturally rather than jumping abruptly.

## Files
- `demo.html`: A simulated page layout showing the banner at the very top.
- `style.css`: The styling for the banner, the state management logic, and the collapse animation.
