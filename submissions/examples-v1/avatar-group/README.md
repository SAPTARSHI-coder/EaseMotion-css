# Avatar Stack with Hover Expand

A modern, interactive avatar group component for EaseMotion-css.

## Features
- **Overlapping Stack**: Avatars naturally overlap to save space.
- **Hover Expand (Fan out)**: Hovering over the stack smoothly fans out all avatars, making them fully visible.
- **Dynamic Interaction**: Hovering over a specific avatar brings it to the front, scales it up, and adds a beautiful glow effect.
- **Contextual Dimming**: Uses modern CSS `:has()` to slightly dim and scale down the avatars that are *not* currently being hovered, directing focus to the active one.
- **Tooltips**: Built-in CSS-only tooltips display names seamlessly on hover.

## Structure

```html
<div class="ease-avatar-stack">
    <div class="ease-avatar" data-name="Alex Johnson">
        <img src="..." alt="Alex">
    </div>
    <div class="ease-avatar" data-name="Sarah Miller">
        <img src="..." alt="Sarah">
    </div>
    <!-- Add more avatars here -->
    
    <!-- Optional "More" indicator -->
    <div class="ease-avatar ease-avatar-more" data-name="View all">
        <span>+12</span>
    </div>
</div>
```

## CSS Variables
You can easily customize the component by overriding the CSS variables in the root or on the `.ease-avatar-stack` container:

```css
:root {
    --avatar-size: 56px;               /* Size of each avatar */
    --avatar-border-width: 3px;        /* Border width for negative space */
    --avatar-border-color: #0f172a;    /* Matches background */
    --avatar-highlight-color: #3b82f6; /* Glow/border on hover */
    --stack-overlap: -16px;            /* How much avatars overlap initially */
    --stack-expand-gap: 12px;          /* Margin between avatars on expand */
    --transition-speed: 0.4s;          /* Animation duration */
}
```

## Browser Support
Relies heavily on modern CSS including `:has()` pseudo-class for the dimming effect. For browsers that don't support `:has()`, the fallback is simply that non-hovered avatars won't dim, which is an acceptable progressive enhancement strategy.
