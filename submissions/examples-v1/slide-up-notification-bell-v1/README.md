# ease-slide-up-notification-bell

Submission for Issue #41848

## What this adds

A pure CSS animated notification bell component with slide-up
notification panel, ring animation on hover, badge counter,
and staggered notification items. Banking-style design pattern.

## HTML Structure

```html
<div class="ease-bell" tabindex="0" role="button" aria-label="Notifications">
  <div class="ease-bell__icon">
    <!-- bell SVG here -->
  </div>
  <span class="ease-bell__badge">3</span>

  <div class="ease-bell__panel" role="dialog">
    <div class="ease-bell__panel-header">
      <span class="ease-bell__panel-title">Notifications</span>
      <a class="ease-bell__panel-action" href="#">Mark all read</a>
    </div>
    <ul class="ease-bell__list">
      <li class="ease-bell__item ease-bell__item--unread">
        <div class="ease-bell__item-icon">💰</div>
        <div class="ease-bell__item-content">
          <p class="ease-bell__item-title">Payment Received</p>
          <p class="ease-bell__item-body">₹12,500 credited.</p>
          <p class="ease-bell__item-time">2 min ago</p>
        </div>
      </li>
    </ul>
    <div class="ease-bell__panel-footer">
      <a href="#">View all</a>
    </div>
  </div>
</div>
```

## Classes

### Bell
| Class | Description |
|---|---|
| `ease-bell` | Bell button wrapper, triggers on hover/focus |
| `ease-bell--sm` | Small size (34px) |
| `ease-bell--lg` | Large size (54px) |
| `ease-bell--ringing` | Manually trigger ring animation |

### Badge
| Class | Description |
|---|---|
| `ease-bell__badge` | Red notification count badge |
| `ease-bell__badge--green` | Green badge variant |
| `ease-bell__badge--blue` | Blue badge variant |

### Panel
| Class | Description |
|---|---|
| `ease-bell__panel` | Slide-up notification panel |
| `ease-bell__panel-header` | Panel title + action row |
| `ease-bell__panel-footer` | View all link |

### Items
| Class | Description |
|---|---|
| `ease-bell__item` | Single notification row |
| `ease-bell__item--unread` | Green dot + subtle bg highlight |

## Animations

- Bell ring: `ease-bell-ring` — shake keyframe on hover
- Panel: `ease-slide-up` — translateY + scale spring entrance
- Badge: `ease-badge-pop` — scale spring pop on load
- Items: `ease-notif-item-in` — staggered slide-in

## Accessibility

- `tabindex="0"` + `role="button"` on bell wrapper
- `role="dialog"` on notification panel
- Panel shown via `:hover` AND `:focus-within` — keyboard accessible
- Respects `prefers-reduced-motion`

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, `data-theme="dark"`.
