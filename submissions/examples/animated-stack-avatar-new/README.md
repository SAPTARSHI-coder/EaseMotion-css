# animated-stack-avatar

An overlapping stack of avatars where hovering any one lifts it above its neighbors, with a "+N" overflow indicator for extra members.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <div class="avatar-stack">
     <div class="avatar" style="z-index:5;">AK</div>
     <div class="avatar" style="z-index:4;">JM</div>
     <div class="avatar more" style="z-index:1;">+6</div>
   </div>
```

## Customization
- `margin-left: -14px` on `.avatar`: overlap amount — less negative = less overlap.
- `width`/`height`: avatar size.
- `.avatar.more`: styling for the overflow count badge.
- Swap `<div>` text initials for `<img>` tags if using real photos (keep `.avatar` class for sizing/border).

## Notes
- Each avatar needs its own inline `z-index` in descending order so later avatars in the stack sit underneath earlier ones at rest.
- `:hover` bumps `z-index` to `10`, temporarily overriding the stack order so the hovered avatar always lifts above its neighbors regardless of position.
- Respects `prefers-reduced-motion`: the lift transition is disabled, hover state still applies instantly.