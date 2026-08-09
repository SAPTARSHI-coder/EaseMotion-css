# React Animated Breadcrumb Component (#22935)

A declarative, accessible, and beautifully animated breadcrumb navigation component utilizing EaseMotion CSS.

## Features

- **Cascading Entrance Animation**:
  - The list items map through the array and mount utilizing `.ease-slide-up` with staggered animation delays calculated dynamically (`index * staggerDelay`).
- **Micro-Interactions**:
  - Hovering over a breadcrumb link triggers `.ease-hover-glow` providing an immediate, tactile text-shadow and color shift feedback.
- **Accessibility (a11y)**:
  - Wrapped in a `<nav aria-label="Breadcrumb">`.
  - Structured as an ordered list (`<ol>`).
  - The active/current page explicitly receives `aria-current="page"` and is rendered as a `<span>` rather than a link (`<a>`) to prevent self-referential navigation.

## Structure

- `Breadcrumb.jsx` - The React component managing the array mapping, conditional rendering for the active item vs links, and inline stagger calculations. Includes inline SVGs for the Home icon and Chevrons.
- `style.css` - Component-specific styles handling flexbox alignment for the chevrons, spacing, text truncations, and refining the hover glows specifically for typography.
- `demo.html` - A standalone demo page using Babel and React CDN showcasing a 5-depth navigation path.

## Usage

Simply open `demo.html` in your browser. No build process is required for the demo.
