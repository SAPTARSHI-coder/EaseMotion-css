# Avatar Group (Avatar Stack)

Overlapping avatar circles with a "+N" overflow indicator - for team pages,
chat headers, and collaboration tools.

Resolves #10876.

## Features
- Overlapping circular avatars with consistent border/ring styling
- "+N" overflow badge for counts beyond what's shown
- Hover lifts an avatar above its neighbours (z-index handled per-item)
- Staggered pop-in entrance animation
- `avatar-group-sm` size variant
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="avatar-group">
  <img class="avatar-item" src="user1.jpg" alt="Name">
  <img class="avatar-item" src="user2.jpg" alt="Name">
  <div class="avatar-item avatar-overflow">+5</div>
</div>
```

## Notes for maintainer
- Naming is illustrative (`avatar-group`, `avatar-item`) - happy to have it
  converted to `ease-*`.
- z-index is hardcoded per nth-child up to 5 avatars; for arbitrarily large
  groups this could move to CSS `:nth-child` counter logic or be documented
  as a known limit.
- Tested in Chrome, Firefox, Safari.