# CSS Morph-Glow Popover (Minimalist Tech)

A pure CSS interactive popover component designed for Minimalist Tech Layouts. It features a premium "Morph-Glow" hover effect, where a subtle glow dynamically reshapes itself to frame a frosted-glass popover card.

## Features
- Pure CSS and HTML (No JavaScript required for interactions).
- The `.morph-glow` element resides behind the trigger avatar, initially hidden (`opacity: 0`) and scaled down (`scale(0)`).
- On hover, the glow activates. It smoothly translates upward to sit behind the popover's future position, and utilizes `transform: scaleX(6) scaleY(4)` to stretch from a tiny dot into a wide aura. The `border-radius` simultaneously transitions to morph the glow from a perfect circle into a rounded rectangle, matching the shape of the popover card.
- The `.popover-content` card utilizes `backdrop-filter: blur(12px)` to create a premium frosted-glass effect, allowing the morph-glow to softly bleed through the background.
- Both the glow and the popover card utilize a custom `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function, creating a snappy, bouncy entrance.
- Clean, structured aesthetic utilizing the `Inter` font, subtle gradient backgrounds on the body, and distinct header/footer data layouts.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the spatial translation, scaling, and border-radius morphing are entirely stripped. The transforms are locked to their final state, and the interaction gracefully falls back to a safe, immediate opacity cross-fade.

## Usage
Open `demo.html` in your browser. You will see a grid of user avatars. Hover over any avatar. Watch as the avatar slightly enlarges, and a blue glow morphs upward and expands to frame the appearance of a detailed user profile card. 

## Files
- `demo.html`: The HTML structure for the layout, detailing the nested positioning of the trigger avatar, the morph-glow element, and the popover content within the relative `.popover-container`.
- `style.css`: The styling, frosted-glass filters, positioning logic, and the complex `transform` and `border-radius` transitions driving the morph-glow mechanics.
