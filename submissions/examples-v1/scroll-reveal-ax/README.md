# Scroll Reveal Animations

A collection of scroll‑based reveal effects that trigger when elements enter the viewport. Uses `IntersectionObserver` (a tiny JS snippet) to add a `show` class, while CSS handles the animations without custom keyframes.

## Effects
- **Fade Up** – slides up and fades in
- **Fade Down** – slides down and fades in
- **Slide from Left** – slides in from the left
- **Slide from Right** – slides in from the right
- **Zoom Reveal** – scales up from a smaller size

## EaseMotion Classes Used in Demo
- **Layout:** `ease-container`, `ease-py-16`
- **Background:** `ease-bg-gray-50`, `ease-bg-white`
- **Typography:** `ease-text-4xl`, `ease-font-bold`, `ease-text-center`, `ease-text-gray-500`, `ease-text-sm`, `ease-text-gray-400`, `ease-text-3xl`, `ease-text-gray-600`
- **Spacing:** `ease-mb-4`, `ease-mb-8`, `ease-mb-16`, `ease-mt-8`, `ease-p-8`
- **Components:** `ease-card`
- **Animation:** `ease-fade-in`, `ease-delay-200`
- **Utilities:** `ease-shadow-md`

## How It Works
- Each section has the class `reveal` plus a specific direction class (`fade-up`, `fade-down`, `slide-left`, `slide-right`, `zoom-reveal`).
- The `IntersectionObserver` adds the class `show` when the element enters the viewport.
- CSS transitions then move the element to its natural position and change opacity from 0 to 1.
- No custom keyframes are used — only CSS transitions and EaseMotion utility classes for the initial entrance.
- The animation respects `prefers-reduced-motion`.

## How to Use
1. Copy the HTML structure and CSS into your project.
2. Add the `reveal` and direction class to any element you want to animate on scroll.
3. Include the JavaScript snippet (IntersectionObserver) in your page.
4. Ensure the path to `easemotion.css` is correct.