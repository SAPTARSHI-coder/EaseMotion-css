# UI Indicators (Enhanced)

## What does this do?
Provides a collection of essential micro-components including **Badges (Tags)**, **Avatars**, and **Progress Bars**. These components are pure CSS, zero-dependency, and integrate seamlessly with the EaseMotion CSS design system.

## How is it used?
Apply the requested classes to your HTML elements.

```html
<!-- Badge with Pulse -->
<span class="ease-badge ease-badge-primary ease-badge-pulse">Live</span>

<!-- Avatar with Status -->
<div class="ease-avatar">
  <img src="user.jpg" class="ease-avatar-img">
  <span class="ease-avatar-status ease-status-online"></span>
</div>

<!-- Indeterminate Progress Bar -->
<div class="ease-progress ease-progress-indeterminate">
  <div class="ease-progress-bar"></div>
</div>
```

### Key Features
- **Badges:** Solid and Soft (alpha) variants, pill shapes, and "Live" pulse animations.
- **Avatars:** Multiple sizes (`sm`, `md`, `lg`), status indicators, initials support, and hover-lift effects.
- **Progress Bars:** State-based colors (Success, Danger) and high-performance "dual-pulse" indeterminate animations.
- **Accessibility:** Built-in `role="progressbar"`, ARIA support, and automatic reduced-motion handling.

## Why is it useful?
These components solve the need for small but critical UI elements that communicate status, identity, and progress. By using framework-standard tokens for spacing, radius, and color, they ensure visual harmony across any EaseMotion-powered application.
