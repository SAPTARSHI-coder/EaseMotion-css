# Event Card

Card component for displaying event/session details with date block, title, description, metadata, and action buttons.

## Usage

```html
<div class="ease-event-card-az">
  <div class="ease-event-date-az">
    <span class="ease-event-day-az">24</span>
    <span class="ease-event-month-az">Jun</span>
  </div>
  <div class="ease-event-body-az">
    <h3 class="ease-event-title-az">Event Title</h3>
    <p class="ease-event-desc-az">Description text.</p>
    <div class="ease-event-meta-az">
      <span class="ease-event-meta-item-az">
        <span class="ease-event-meta-icon-az">&#x1f552;</span>
        2:00 PM - 4:00 PM
      </span>
    </div>
    <div class="ease-event-actions-az">
      <button class="ease-event-btn-az --primary">RSVP</button>
      <button class="ease-event-btn-az --outline">Details</button>
    </div>
  </div>
</div>
```

## Variants

- **`--compact`**: Smaller date block, hides description
- **`--past`**: Dimmed opacity, gray date block, no hover lift
- **`.--primary`** / **`.--outline`** on `.ease-event-btn-az`

## CSS Variables

| Variable                    | Default   |
| --------------------------- | --------- |
| `--ease-space-*`            | spacing   |
| `--ease-radius-lg`          | 12px      |
| `--ease-radius-md`          | 8px       |
| `--ease-color-primary`      | #6366f1   |
| `--ease-color-primary-dark` | #4f46e5   |
| `--ease-color-neutral-*`    | grays     |
| `--ease-font-sans`          | system-ui |
