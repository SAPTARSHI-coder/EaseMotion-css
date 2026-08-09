# React Animated Modal Dialog Component (#22925)

This submission fulfills Issue **#22925** by providing a highly interactive, animated Modal Dialog component built with React and EaseMotion CSS.

## The Showcase
Modals are notorious for feeling clunky if their entry and exit aren't perfectly choreographed. This component demonstrates how to utilize EaseMotion's `.ease-fade-in` and `.ease-slide-up` classes to create a stunning, iOS-style backdrop blur entry.

## Features
- **Backdrop Blur Entry**: The outer container uses `backdrop-filter: blur(8px)` combined with `.ease-fade-in`. This creates a highly premium depth-of-field effect, instantly drawing the user's focus to the modal.
- **Synchronized Slide-Up**: While the background fades and blurs, the actual modal dialog box uses `.ease-slide-up`, bouncing beautifully into the center of the screen.
- **Intercepted Exit Animations**: Just like our Toast system, this component intercepts React's unmount lifecycle. When the user clicks the close button (or clicks the background), it flips to an `isExiting` state (applying `.ease-fade-out`) and uses the `onAnimationEnd` event to perfectly wait for the CSS animation to complete before finally destroying the component from the Virtual DOM.

## How to View
Because this is built specifically to bypass Node.js server requirements for the PR bot, simply double-click the `demo.html` file in this folder to open it in your browser! It utilizes Babel via CDN to instantly compile the `Modal.jsx` file and render the rich React UI directly in your window.
