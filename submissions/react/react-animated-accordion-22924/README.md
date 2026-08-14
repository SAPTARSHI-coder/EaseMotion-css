# React Animated Accordion Component (#22924)

This submission fulfills Issue **#22924** by providing a fully interactive, animated Accordion component built with React and EaseMotion CSS.

## The Showcase
Building smooth accordions in React often forces developers to reach for heavy JS animation libraries to calculate height dynamically. This template demonstrates how to perfectly blend React's `useRef` and CSS transitions alongside EaseMotion's bouncy entry animations.

## Features
- **Dynamic Height Calculation**: The `<AccordionItem>` component uses React's `useRef` to measure the exact `scrollHeight` of the content block dynamically. It maps this value directly to the CSS `max-height` style for a flawlessly smooth expand/collapse transition, regardless of the content size!
- **Nested EaseMotion Animation**: While the outer container expands smoothly using CSS transitions, we conditionally apply the `.ease-slide-up` EaseMotion class to the inner paragraph text itself! This results in an incredibly premium effect where the accordion drops down, and the text simultaneously bounces up into place.
- **Animated Chevrons**: The toggle arrows automatically rotate 180 degrees using CSS transforms mapped to the `isOpen` React state.

## How to View
Because this is built specifically to bypass Node.js server requirements for the PR bot, simply double-click the `demo.html` file in this folder to open it in your browser! It utilizes Babel via CDN to instantly compile the `Accordion.jsx` file and render the rich React UI directly in your window.
