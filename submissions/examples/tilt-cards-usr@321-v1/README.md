# 3D Tilt Cards Submission

## 1. What does this do?
It provides interactive 3D tilt cards that respond to mouse movement with smooth perspective transforms, dynamic glare effects, and depth-based element positioning. Perfect for product showcases, portfolio items, feature cards, and team member profiles.

## 2. How is it used?
Add `data-tilt` attribute to any card element. The JavaScript automatically tracks mouse position and applies 3D transforms. Cards include a glare overlay that follows the cursor, and inner elements can use `translateZ()` for depth effects.

## 3. Why is it useful?
- Creates immersive, interactive user experiences
- Mouse-tracking 3D tilt with smooth transitions
- Dynamic glare/shine effect that follows cursor
- Depth-based positioning with translateZ
- Multiple card variants (product, feature, team, pricing, portfolio)
- Touch support for mobile devices
- Customizable tilt intensity and perspective
- Popular card highlighting with badge
- Fully responsive design
- Accessible with `prefers-reduced-motion` support
- Easy to customize colors, animations, and content
- Maintainer can easily standardize this as `.ease-tilt-card-[YOUR_INITIALS]` in the core library.