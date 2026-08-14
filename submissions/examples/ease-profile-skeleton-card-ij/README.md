# Profile Skeleton Card

Resolves #75684.

A realistic, zero-dependency **Profile Skeleton Card** component demonstrating an accessible loading-state UI with a smooth, GPU-accelerated CSS shimmer animation.

## Purpose

Skeleton screens improve perceived performance by presenting a visual wireframe of the layout while data is being fetched. This component provides a realistic profile card placeholder (avatar, title, subtitle, bio lines, metadata tags, and action buttons) with zero JavaScript dependencies.

## Visual Behavior

- **Wireframe Structure**: Mimics a real user profile card layout.
- **Continuous Shimmer**: A smooth highlight gradient moves horizontally across placeholder surfaces using CSS `transform: translateX()`.
- **Pure CSS State Toggle**: Includes a CSS checkbox-driven toggle demonstrating the transition from skeleton wireframe to loaded profile content.

## File Structure

```text
submissions/examples/ease-profile-skeleton-card-ij/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the CSS classes in your HTML markup:

```html
<article class="profile-card skeleton-card" role="status" aria-busy="true" aria-label="Loading profile details">
  <span class="sr-only">Loading profile...</span>
  
  <header class="card-header">
    <div class="skeleton-avatar" aria-hidden="true"></div>
    <div class="header-info">
      <div class="skeleton-title" aria-hidden="true"></div>
      <div class="skeleton-subtitle" aria-hidden="true"></div>
    </div>
  </header>

  <section class="card-body" aria-hidden="true">
    <div class="skeleton-line w-100"></div>
    <div class="skeleton-line w-90"></div>
    <div class="skeleton-line w-60"></div>
  </section>

  <section class="card-meta" aria-hidden="true">
    <div class="skeleton-meta"></div>
    <div class="skeleton-meta"></div>
  </section>

  <footer class="card-actions" aria-hidden="true">
    <div class="skeleton-action"></div>
    <div class="skeleton-action"></div>
  </footer>
</article>
```

## Skeleton Anatomy Classes

| Class Name | Description |
| :--- | :--- |
| `.skeleton-avatar` | Circular profile picture placeholder (64px × 64px) |
| `.skeleton-title` | Header primary text placeholder line |
| `.skeleton-subtitle` | Secondary handle / text placeholder line |
| `.skeleton-line` | Body text line placeholder (supports `.w-100`, `.w-90`, `.w-75`, `.w-60`, `.w-40`) |
| `.skeleton-meta` | Metadata pill/badge placeholder |
| `.skeleton-action` | Action button block placeholder |

## CSS Customization

The component is configured via CSS custom properties:

```css
:root {
  --skeleton-bg: #e2e8f0;
  --skeleton-surface: #f1f5f9;
  --skeleton-highlight: rgba(255, 255, 255, 0.65);
  --shimmer-duration: 2s;
  --shimmer-timing: ease-in-out;
  --card-bg: #ffffff;
  --card-border: #e2e8f0;
  --card-radius: 16px;
  --card-padding: 24px;
}
```

## Responsive Behavior

- Fluid layout adapting from mobile viewports (320px) up to desktop resolutions (1440px+).
- Avatar and metadata placeholders maintain proportional scaling without causing horizontal overflow.

## Dark-Mode Behavior

Automatically responds to `@media (prefers-color-scheme: dark)`:
- `--skeleton-bg`: `#334155`
- `--skeleton-surface`: `#1e293b`
- `--skeleton-highlight`: `rgba(255, 255, 255, 0.08)`
- `--card-bg`: `#0f172a`
- Maintains visible yet subtle shimmer contrast without harsh flashing.

## Reduced-Motion Behavior

Automatically respects `@media (prefers-reduced-motion: reduce)`:
- Disables shimmer animation (`animation: none !important`).
- Hides the pseudo-element highlight while preserving static skeleton visibility.

## Accessibility Considerations

- Outer card uses `role="status"` and `aria-busy="true"`.
- A hidden `<span class="sr-only">` provides high-level text for screen reader users.
- Individual decorative wireframe boxes use `aria-hidden="true"` to prevent redundant screen reader announcements.

## Performance Considerations

- Shimmer animation animates GPU-accelerated `transform` only.
- Does not animate layout properties (`width`, `height`, `margin`, `padding`, `top`, `left`), preventing browser reflows.
- Zero JavaScript execution or external HTTP requests required.
