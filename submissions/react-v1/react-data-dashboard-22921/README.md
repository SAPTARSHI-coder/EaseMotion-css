# React Animated Data Dashboard (#22921)

This submission fulfills Issue **#22921** by constructing a stunning, fully animated data telemetry dashboard utilizing React and the EaseMotion CSS framework.

## The Showcase
Building dashboards often requires balancing complex data logic with fluid UI interactions. This example proves how effortlessly you can orchestrate complex staggered animations without sacrificing React component readability.

## Features
- **Staggered Card Entry**: The dashboard maps over an array of data metrics, dynamically generating CSS `animation-delay` offsets (e.g., `0ms`, `150ms`, `300ms`) for the `.ease-slide-up` cards. This creates a gorgeous waterfall entry effect.
- **`AnimatedProgressBar` Component**: A custom React component that leverages `useEffect` and React state to smoothly transition the width of a progress bar from `0%` to its target value. It waits for the card's slide-up animation to finish before initiating the bar fill, proving how React state can harmonize perfectly with EaseMotion's CSS timing functions.
- **Glassmorphism**: Leverages `.ease-card-glass` to give the data cards a premium, modern aesthetic against a dark backdrop.

## How to View
Because this is built specifically to bypass Node.js server requirements for the PR bot, simply double-click the `demo.html` file in this folder to open it in your browser! It utilizes Babel via CDN to instantly compile the `Dashboard.jsx` file and render the rich React UI directly in your window.
