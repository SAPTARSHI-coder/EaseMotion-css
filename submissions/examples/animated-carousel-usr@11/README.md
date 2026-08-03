# Animated Carousel/Slider Submission

## 1. What does this do?
It provides a modern, responsive carousel/slider component with multiple variants: image slider with fade transitions, testimonial carousel, and multi-item product showcase. Includes auto-play, manual navigation, touch/swipe support, and smooth animations.

## 2. How is it used?
Wrap your slides in a `.carousel` container with `.carousel-track`. Each slide uses `.carousel-slide` class. Add navigation buttons (`.carousel-prev`, `.carousel-next`) and optional dots (`.dot`). JavaScript handles the carousel logic with auto-play and touch support.

## 3. Why is it useful?
- Essential component for image galleries, testimonials, and product showcases
- 3 different carousel variants for different use cases
- Smooth fade and slide transitions
- Auto-play with pause on hover
- Touch/swipe support for mobile devices
- Keyboard navigation (Arrow keys)
- Navigation dots with active state
- Fully accessible with ARIA labels
- Includes `prefers-reduced-motion` support for accessibility
- Mobile-responsive design
- Easy to customize and extend
- Maintainer can easily standardize this as `.ease-carousel-[YOUR_INITIALS]` in the core library.