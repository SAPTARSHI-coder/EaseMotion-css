# ease-avatar-stack-sap

A row of overlapping circular avatars that lift on hover, with an overflow badge for hidden members.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <div class="avatar-stack-sap">
     <div class="stack-avatar" style="z-index:5;">RK</div>
     <div class="stack-avatar overflow" style="z-index:2;">+9</div>
   </div>
```

## Customization
- `margin-left` on `.stack-avatar`: overlap amount.
- `.overflow` variant: styling for the "+N" count tile.
- Swap initials `<div>` for `<img>` for real avatar photos.

## Notes
- Each avatar carries its own inline `z-index` (descending) to set resting stack order; hover bumps it to `10` temporarily so any avatar can lift above neighbors.
- Respects `prefers-reduced-motion`: hover lift transition is disabled, hover state still applies instantly.