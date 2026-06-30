# CSS-Only Modal Window

A sleek, fully animated modal (lightbox) component that operates without any JavaScript, using the CSS `:target` pseudo-class.

## How it works

This modal leverages the **`:target` CSS pseudo-class** hack.

1.  **The Trigger:** The "Open Modal" button is a standard anchor link pointing to an ID on the page (e.g., `<a href="#demo-modal">`).
2.  **The State:** When the user clicks the link, the browser's URL updates to include the hash `#demo-modal`. The element with `id="demo-modal"` becomes the "target" element.
3.  **The CSS:** We set the modal wrapper to be visually hidden by default (`visibility: hidden; opacity: 0;`). We then write a CSS rule `modal:target { visibility: visible; opacity: 1; }` which applies only when the modal is the active target in the URL.
4.  **Closing:** To close the modal, the user clicks the close button "X" or the darkened backdrop. Both of these are simply links pointing to `#` (e.g., `<a href="#">`), which changes the URL fragment, removing the target state from the modal and causing it to hide again.

## Features

*   **Zero JS Dependency**: Relies purely on URL fragments and CSS state.
*   **Animated Entrance**: The modal scales up and fades in smoothly.
*   **Backdrop Dismiss**: Clicking outside the modal content dismisses it, just like a JS modal.
*   **Back Button Support**: Because it uses URL hashes, the browser's "Back" button automatically closes the modal.

## Usage

Open `demo.html` in your browser. All presentation and state logic is contained in `style.css`.
