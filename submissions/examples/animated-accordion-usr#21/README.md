# Animated Accordion Submission

## 1. What does this do?
It provides a modern, animated accordion component with smooth expand/collapse animations, arrow rotation, and multiple style variants (basic, bordered, card-style). Perfect for FAQs, documentation, settings panels, and collapsible content sections.

## 2. How is it used?
Wrap accordion items in `.accordion` container. Each item uses `.accordion-item` with `.accordion-header` (button) and `.accordion-content` (content). Only one item can be open at a time. JavaScript handles the expand/collapse logic and keyboard navigation.

## 3. Why is it useful?
- Essential component for FAQs, documentation, and settings
- Smooth expand/collapse animations with height transitions
- Arrow icon rotation on open/close
- 3 different style variants (basic, bordered, card-style)
- Only one item open at a time (auto-close others)
- Keyboard navigation (Arrow keys, Home, End)
- Fully accessible with ARIA attributes
- Mobile-responsive design
- Includes `prefers-reduced-motion` support for accessibility
- Easy to customize colors, animations, and content
- Maintainer can easily standardize this as `.ease-accordion-[YOUR_INITIALS]` in the core library.