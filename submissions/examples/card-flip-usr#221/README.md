# Animated Card Flip Submission

## 1. What does this do?
It provides a collection of animated 3D flip cards with smooth front-to-back transitions. Includes product cards (hover flip), team member cards (vertical click flip), and flashcards (click to reveal). Perfect for product showcases, team pages, educational content, and interactive portfolios.

## 2. How is it used?
Wrap card content in `.flip-card` with `.flip-card-inner` containing `.flip-card-front` and `.flip-card-back`. Use modifiers:
- Default: Hover to flip (horizontal)
- `.flip-vertical`: Vertical flip direction
- `.click-flip`: Click to flip instead of hover
- Combine modifiers as needed (e.g., `.flip-vertical.click-flip`)

JavaScript handles click-to-flip functionality and keyboard support.

## 3. Why is it useful?
- Essential component for interactive UIs
- Smooth 3D CSS transforms with perspective
- Multiple flip triggers (hover, click)
- Horizontal and vertical flip directions
- Product cards with features on back
- Team cards with social links
- Flashcards for educational content
- Keyboard accessible (Enter/Space to flip)
- Focus-visible indicators
- Fully responsive design
- Includes `prefers-reduced-motion` support for accessibility
- Easy to customize colors, content, and animations
- Maintainer can easily standardize this as `.ease-card-flip-[YOUR_INITIALS]` in the core library.