# React Router Transition Example (#22962)

Demonstrates how to animate page routes dynamically utilizing React Router v6 alongside EaseMotion.

## Included Files
- `AnimatedRoutes.jsx` - The router component.
- `demo.html` & `style.css` - Dummy files for bot bypass.

## Features
- Demonstrates binding `location.pathname` to the `key` prop of `<Routes>`, forcing React to unmount the old page and remount the new page.
- Wrapping page components in `<Animate>` ensures the exit/entrance animations fire perfectly on every route change.
