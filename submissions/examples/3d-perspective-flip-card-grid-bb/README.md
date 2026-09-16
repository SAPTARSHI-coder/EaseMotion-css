# 3D Perspective Flip Card Grid Component

An interactive card grid component utilizing CSS3 3D transforms, perspective dynamic hover flip animations, and WCAG keyboard navigation support.

## 1. What does this do?
Provides a high-performance 3D card flip showcase layout where elements smoothly rotate on their Y-axis upon user interaction (mouse hover or keyboard focus), revealing secondary information on the back face with GPU acceleration.

## 2. How is it used?
1. Link `style.css` in your HTML `<head>` section.
2. Structure card items with `.flip-card-wrapper`, `.flip-card-inner`, `.flip-card-front`, and `.flip-card-back` containers.
3. Add `tabindex="0"` to `.flip-card-wrapper` elements to ensure full keyboard navigation accessibility.

## 3. Why is it useful?
- **High Visual Engagement**: Delivers modern 3D depth and spring physics motion for feature highlights or product showcases.
- **Performance Optimized**: Uses CSS `transform-style: preserve-3d` and GPU layer composition to eliminate layout repaints.
- **Accessibility Friendly**: Fully supports `:focus-visible` states and respects user `prefers-reduced-motion` settings.
