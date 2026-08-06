# Empty State

An illustrated component for displaying when no data is available (no results, no items, no messages) with context and call-to-action buttons.

## What does this do?

This creates empty state components with animated icons using CSS `@keyframes`, descriptive text, and call-to-action buttons for different scenarios (no results, no items, no messages, no notifications, no favorites, no search results).

## How is it used?

```html
<div class="empty-state empty-state-no-results">
  <span class="empty-state-icon"></span>
  <h3 class="empty-state-title">No Results Found</h3>
  <p class="empty-state-description">We couldn't find any results matching your search.</p>
  <button class="empty-state-action">Clear Filters</button>
</div>

<!-- Scenario variants -->
<div class="empty-state empty-state-no-items">...</div>
<div class="empty-state empty-state-no-messages">...</div>
<div class="empty-state empty-state-no-notifications">...</div>
<div class="empty-state empty-state-no-favorites">...</div>
<div class="empty-state empty-state-no-search">...</div>

<!-- Size variants -->
<div class="empty-state empty-state-sm">...</div>
<div class="empty-state empty-state-lg">...</div>

<!-- Style variants -->
<div class="empty-state empty-state-minimal">...</div>
<div class="empty-state empty-state-card">...</div>
<div class="empty-state empty-state-illustrated">...</div>
```

The icon animation uses CSS `@keyframes`:

```css
@keyframes empty-state-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

## Why is it useful?

Empty states provide essential context and guidance when no data is available, improving user experience and reducing confusion. Animated icons add visual interest and make the empty state feel less static. Call-to-action buttons provide clear next steps for users. Multiple scenario variants cover common use cases (no results, no items, no messages, etc.), while size and style variants make it versatile for different design contexts. The CSS-first approach using emoji icons and `@keyframes` animations keeps the implementation lightweight without external image dependencies. This component demonstrates practical UX patterns for handling empty data scenarios in web applications.
