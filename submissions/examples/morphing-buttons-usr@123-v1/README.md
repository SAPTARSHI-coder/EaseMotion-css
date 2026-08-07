# Interactive Morphing Buttons Submission

## 1. What does this do?
It provides interactive morphing buttons that smoothly transition between different states (idle → loading → success/error). Perfect for form submissions, add to cart actions, follow/unfollow toggles, delete confirmations, and send message actions.

## 2. How is it used?
Add `.morph-btn` class with specific variant (`.morph-btn-submit`, `.morph-btn-cart`, `.morph-btn-follow`, `.morph-btn-delete`, `.morph-btn-send`). JavaScript handles state transitions by adding classes like `.loading`, `.success`, `.added`, `.following`, `.deleted`, `.sent`, `.confirm`.

## 3. Why is it useful?
- Essential component for modern web applications
- Smooth state transitions with shape morphing
- Animated SVG spinners during loading states
- Visual feedback with success/error indicators
- Multiple button variants for different use cases
- Buttons morph from rectangular to circular during loading
- Shake animation for delete confirmation
- Toggle states for follow/unfollow
- Fully responsive design
- Accessible with `prefers-reduced-motion` support
- Easy to customize colors, animations, and states
- Maintainer can easily standardize this as `.ease-morph-btn-[YOUR_INITIALS]` in the core library.