# Animated Notification Toast

## What does this do?

A fixed-position toast notification that slides in from the top-right corner of the viewport. It includes a CSS-only icon area (built with pseudo-elements), a message area, and a close button.

## How is it used?

Open `demo.html` in any browser. Click the "Show Toast" button to trigger the notification. The toast uses the CSS `:target` pseudo-class for visibility control — clicking "Show Toast" sets a URL fragment that makes the toast visible; clicking the close button removes the fragment, hiding it.

## Why is it useful?

Provides a pure CSS, zero-JavaScript implementation of a common UI pattern. The `:target`-based toggle offers an accessible way to show/hide elements without any JS, making it ideal for lightweight or progressively-enhanced pages. Includes `prefers-reduced-motion` support for accessibility.
