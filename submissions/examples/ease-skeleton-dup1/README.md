# EaseSkeleton — Composable Shimmer Loading Placeholders

A clean, modular loading-state placeholder component system for EaseMotion CSS.

## What is it?
This submission proposes a highly composable skeleton loading system. By combining gray shape blocks (circles, rectangles, lines) with a single shared animated linear gradient sweep (`@keyframes ease-shimmer`), developers can easily mock loading feeds, profiles, and dashboard metrics.

Skeleton loaders reduce perceived wait times and prevent layout shift during asynchronous data fetches compared to standard text spin indicators or empty blank screens.

---

## How to use it?

### 1. Include Stylesheet
Link the stylesheet in your HTML:
```html
<link rel="stylesheet" href="style.css" />
```

### 2. Composing Placeholders
Combine helper classes to construct avatar cards, lists, or tables:
```html
<!-- Skeleton Profile Card -->
<div class="profile-card-loading">
  <!-- Avatar Circle -->
  <div class="ease-skeleton ease-skeleton-circle" style="width: 48px;"></div>
  
  <!-- Text Metadata Group -->
  <div class="ease-skeleton-group">
    <div class="ease-skeleton ease-skeleton-text w-50"></div>
    <div class="ease-skeleton ease-skeleton-text w-25"></div>
  </div>
</div>
```

### Available Helper Classes
- `.ease-skeleton` — base class applying the sweeping gradient shimmer.
- `.ease-skeleton-text` — height-optimized rounded-rectangle line placeholder for text.
- `.ease-skeleton-circle` — circular aspect-ratio placeholder (perfect for avatars or status badges).
- `.ease-skeleton-rect` — standard rectangular blocks (for image spaces, video players, or entire cards).
- `.ease-skeleton-group` — stacks placeholder lines vertically with consistent spacing.

### Width Modifiers
Apply custom width bounds using modifiers:
- `.w-25` (25% width)
- `.w-33` (33.3% width)
- `.w-50` (50% width)
- `.w-66` (66.6% width)
- `.w-75` (75% width)
- `.w-100` (100% width)

---

## Technical Features & Performance

### 1. Single-Keyframe Shimmer Sweep
Rather than defining separate keyframes per component, all variant blocks share the same `@keyframes ease-shimmer` sweep, which animates `background-position` from `200% 0` to `-200% 0` across a repeating linear gradient.

### 2. Layout Shift Prevention (CLS)
By using precise heights on placeholders (such as `.ease-skeleton-text` or fixed-ratio circles), the browser reserves the exact dimensions required for the content before it completes loading. Swapping skeleton elements for real DOM elements resolves instantly with **zero Cumulative Layout Shift (CLS)**.

### 3. Accessibility / Reduced Motion
When a user's system preferences request reduced motion (`prefers-reduced-motion: reduce`), the shimmer sweep animation pauses instantly, converting the placeholders to solid static gray shapes for safety.
