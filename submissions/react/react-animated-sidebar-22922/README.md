# React Animated Sidebar Navigation (#22922)

This submission fulfills Issue **#22922** by constructing a highly interactive, animated sidebar navigation component using React and the EaseMotion CSS framework.

## The Showcase
Sidebar navigations are fundamental to modern web dashboards. This component demonstrates how to beautifully choreograph the opening and closing of a sidebar, complete with dynamically staggered link animations.

## Features
- **Dynamic Width Transition**: The core sidebar uses a CSS transition bounded by React state (`isOpen`), fluidly expanding from `80px` to `280px`.
- **Staggered Link Entry**: As the sidebar opens, the navigation labels don't just appear. They map over an array, injecting a calculated `animation-delay` (`100ms`, `200ms`, `300ms`) directly into the `.ease-slide-up` EaseMotion class. This creates a gorgeous, cascading entry effect exactly synchronized with the sidebar expansion!
- **State-Driven Classes**: Demonstrates how to conditionally apply EaseMotion classes. When the sidebar is closed, the labels immediately drop the `ease-slide-up` class and apply `hidden`, instantly collapsing the UI.

## How to View
Because this is built specifically to bypass Node.js server requirements for the PR bot, simply double-click the `demo.html` file in this folder to open it in your browser! It utilizes Babel via CDN to instantly compile the `Sidebar.jsx` file and render the rich React UI directly in your window.
