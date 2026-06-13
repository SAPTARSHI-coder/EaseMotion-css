# Ease Avatar Component

## What does this do?
A modern, highly customizable **Avatar Component** designed for user profile pictures, dashboard statuses, list items, team rows, and collaborate stacks. It supports shapes, status indicator badges, custom rings/glows, initials, fallback SVGs, gradient styles, and overlapping avatar stack groups with interactive hover animations.

## How is it used?

Include `style.css` in your project and structure your HTML following these classes:

### 1. Shape Variants
Add one shape class (`ease-avatar-circle`, `ease-avatar-rounded`, or `ease-avatar-square`):
```html
<div class="ease-avatar ease-avatar-md ease-avatar-circle">
  <img src="avatar.jpg" alt="User Profile">
</div>
```

### 2. Sizing Modifiers
Available sizes are `xs` (24px), `sm` (32px), `md` (48px), `lg` (64px), and `xl` (96px):
```html
<div class="ease-avatar ease-avatar-xl ease-avatar-circle">
  <img src="avatar.jpg" alt="Large Profile">
</div>
```

### 3. Status Badge Indicators
Include a status span child element inside the avatar:
```html
<div class="ease-avatar ease-avatar-md ease-avatar-circle">
  <img src="avatar.jpg" alt="User Profile">
  <!-- Status badges: ease-status-online, ease-status-busy, ease-status-away, ease-status-offline -->
  <span class="ease-avatar-status ease-status-online" aria-label="Online"></span>
</div>
```

### 4. Initials & Icon Fallbacks
For text-based initials or fallback SVG indicators:
```html
<!-- Initials Fallback -->
<div class="ease-avatar ease-avatar-md ease-avatar-circle ease-avatar-initials">
  <span>JD</span>
</div>

<!-- SVG Icon Fallback -->
<div class="ease-avatar ease-avatar-md ease-avatar-circle ease-avatar-fallback">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
</div>
```

### 5. Avatar Groups/Stacks
To bundle overlapping profiles with smooth accordion spreading animation on hover:
```html
<div class="ease-avatar-group">
  <div class="ease-avatar ease-avatar-md ease-avatar-circle ease-avatar-group-item">
    <img src="team1.jpg" alt="Member 1">
  </div>
  <div class="ease-avatar ease-avatar-md ease-avatar-circle ease-avatar-group-item">
    <img src="team2.jpg" alt="Member 2">
  </div>
  <div class="ease-avatar ease-avatar-md ease-avatar-circle ease-avatar-group-item ease-avatar-initials group-more">
    <span>+5</span>
  </div>
</div>
```

## Features

- **Size Consistency**: Clean scaling layout system ranging from 24px (XS) to 96px (XL).
- **Shape Variety**: Supports Circle, Rounded Rectangle, and Square profiles.
- **State Feedback**: Integrates online, offline, busy, and away absolute-positioned badges.
- **Fallback Integration**: Initials, colored text indicators, or SVG icons cover empty states.
- **Aesthetic Gradients**: High-contrast, premium gradients ready for initials/icon backing.
- **Group Stack Interactions**: Overlapping group stack item scaling on hover, paired with an accordion group expansion spread (`margin-left` adjustments).
- **No External Dependencies**: Built entirely with pure CSS/HTML.

## Tech Stack
- HTML
- CSS (Custom properties, CSS grid, hover transforms, flexbox alignment)

## Preview
Open `demo.html` directly in your browser to interact with the hover movements, check layout transitions, and preview the component.

## Contribution Notes
- Class naming was handled by the contributor.
- Maintainer will rename to ease-* convention before merging.
