# Ease Empty State Illustration (#42837)

### 1. What does this do?
This is a responsive, highly animated empty-state illustration pattern designed to handle placeholder UI screens (empty dashboards, search failures, or clean slates).

### 2. How is it used?
Drop the SVG illustration block directly inside your main card wrapper. Style attributes are controlled globally using CSS custom properties:

```html
<div class="empty-state-card">
  <svg class="empty-illustration">...</svg>
</div>