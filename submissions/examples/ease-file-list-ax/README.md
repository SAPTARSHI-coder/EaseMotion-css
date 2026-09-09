# ease-file-list – Uploaded Files List with Animated Add/Remove

A file list component where each item shows an icon, name, size, and a remove button. Removing an item triggers a height collapse + opacity fade; adding an item plays a slide‑down entrance.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-py-16, ease-mx-auto
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-6, ease-mb-8, ease-mt-8, ease-p-* (via item padding)
- **Components:** ease-btn, ease-btn-primary
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- The "Add File" button creates a new <li> with file data and appends it to the list.
- New items get the class entering, which triggers a CSS keyframe that fades and slides down.
- Each item has a remove button that adds the class emoving, which transitions opacity, max-height, margin, and padding to zero.
- After the transition ends, the element is removed from the DOM.
- The component respects prefers-reduced-motion.

## How to use
1. Copy the HTML structure, CSS, and JS into your project.
2. Customize the file data source as needed.
3. Ensure the path to easemotion.css is correct.
