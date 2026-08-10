# Ease Avatar

## What does this do?

Provides reusable circular avatar components with status indicators, size variants, and grouped avatar layouts.

## How is it used?

Add the desired avatar class to an image element:

```html
<img
  src="avatar.jpg"
  alt="User Avatar"
  class="ease-avatar ease-avatar-md"
/>

<div class="ease-avatar-wrapper online">
  <img
    src="avatar.jpg"
    alt="Online User"
    class="ease-avatar ease-avatar-lg"
  />
</div>
```

## Why is it useful?

Avatars are commonly used in user profiles, team members sections, chat interfaces, dashboards, and collaborative applications. This component provides a lightweight and reusable solution with built-in status indicators, multiple sizes, and avatar grouping while remaining dependency-free and easy to customize.

## Features

- Circular avatar with border
- Online, busy, and offline status indicators
- Online presence ping animation
- Multiple sizes (sm, md, lg, xl)
- Avatar group / stacked layout
- Responsive design
- Reduced-motion accessibility support

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to view all avatar variants.

## Contribution Notes

- Class naming was handled by the contributor.
- Maintainer may rename classes to the `ease-*` convention before merging.
- Includes status indicators, size variants, and avatar grouping examples.
- Supports reduced-motion accessibility preferences.