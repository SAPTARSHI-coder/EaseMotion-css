# Animated FAQ Accordion Submission

## 1. What does this do?
It provides a modern, animated FAQ accordion component with smooth expand/collapse animations, search functionality, category filtering, and keyboard navigation. Perfect for support pages, product pages, and documentation sites.

## 2. How is it used?
Wrap FAQ items in `.accordion` with `.accordion-item` for each question. Each item has `.accordion-header` (button) and `.accordion-content` (answer). Add `data-category` attributes for filtering. Use the search box to find specific FAQs and category buttons to filter by topic.

## 3. Why is it useful?
- Essential component for FAQ sections and documentation
- Smooth expand/collapse animations with icon rotation
- Real-time search functionality
- Category-based filtering (General, Pricing, Technical, Support)
- Only one item open at a time (auto-close others)
- Keyboard navigation (Arrow keys, Home, End)
- Fully accessible with ARIA attributes
- No results message when search returns empty
- Mobile-responsive design
- Includes `prefers-reduced-motion` support for accessibility
- Easy to customize colors, animations, and content
- Maintainer can easily standardize this as `.ease-accordion-[YOUR_INITIALS]` in the core library.