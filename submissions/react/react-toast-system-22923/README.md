# React Animated Notification Toast System (#22923)

This submission fulfills Issue **#22923** by building a highly dynamic, auto-dismissing Notification Toast system using React and the EaseMotion CSS framework.

## The Showcase
Toast notifications require fluid entry and exit animations to feel premium. This component perfectly demonstrates how to choreograph CSS animations alongside React's component unmounting lifecycle.

## Features
- **Dynamic Entry**: When a toast is dynamically pushed into the React state array, it immediately renders with the `.ease-slide-up` class, providing a bouncy, smooth entrance from the bottom of the screen.
- **Synchronized Exit Animations**: Unmounting a component in React usually destroys it instantly, preventing exit animations. Our `<Toast>` component solves this by intercepting the unmount. When the auto-dismiss timer fires (or the user clicks the close button), it toggles an `isExiting` state. This flips the class to `.ease-fade-out`.
- **`onAnimationEnd` Listener**: The component binds React's native `onAnimationEnd` event to the wrapper. It waits for the `ease-fade-out` CSS animation to fully complete before it finally asks the parent to remove it from the array! This ensures 100% perfectly timed unmounts.

## How to View
Because this is built specifically to bypass Node.js server requirements for the PR bot, simply double-click the `demo.html` file in this folder to open it in your browser! It utilizes Babel via CDN to instantly compile the `ToastSystem.jsx` file and render the rich React UI directly in your window.
