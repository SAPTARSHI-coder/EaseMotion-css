# ease-avatar

## What does this do?

Provides a CSS-only Avatar component for user profile pictures, initials fallback, team member cards, and online/offline/busy status indicators. Supports five sizes, three shapes, overlapping groups, and status dots.

## How is it used?

**Image avatar:**

```html
<div class="ease-avatar">
  <img src="photo.jpg" alt="User name" />
</div>
```

**Initials fallback:**

```html
<span class="ease-avatar ease-avatar-initials">JD</span>
```

**With status dot:**

```html
<span
  class="ease-avatar ease-avatar-initials
  ease-avatar-status ease-avatar-status-online"
  >JD</span
>
```

**Avatar group:**

```html
<div class="ease-avatar-group">
  <span class="ease-avatar ease-avatar-initials ease-avatar-sm">JD</span>
  <span class="ease-avatar ease-avatar-initials ease-avatar-sm">AB</span>
  <span class="ease-avatar ease-avatar-initials ease-avatar-sm">MK</span>
</div>
```

### Variants

| Modifier                     | Effect                            |
| ---------------------------- | --------------------------------- |
| (none)                       | Circle, 40px, initials background |
| `.ease-avatar-initials`      | Brand background + white text     |
| `.ease-avatar-xs`            | 24px                              |
| `.ease-avatar-sm`            | 32px                              |
| `.ease-avatar-lg`            | 56px                              |
| `.ease-avatar-xl`            | 80px                              |
| `.ease-avatar-rounded`       | Full circle (default)             |
| `.ease-avatar-square`        | 0.5rem radius                     |
| `.ease-avatar-soft`          | 0.75rem radius                    |
| `.ease-avatar-status`        | Enables status indicator dot      |
| `.ease-avatar-status-online` | Green dot                         |
| `.ease-avatar-status-away`   | Yellow dot                        |
| `.ease-avatar-status-busy`   | Red dot                           |
| `.ease-avatar-group`         | Overlapping stack container       |

### CSS Custom Properties

| Property  | Default    | Description        |
| --------- | ---------- | ------------------ |
| `--asize` | `2.5rem`   | Width & height     |
| `--afont` | `0.875rem` | Initials font size |

## Why is it useful?

Avatars are essential for user profiles, team pages, comment sections, chat UIs, and any multi-user interface. This component provides a consistent set of avatar styles that integrate with EaseMotion's design language.

## Features

- Image avatar with auto-sizing and object-fit
- Initials fallback with brand background
- Five sizes: xs, sm, md, lg, xl
- Three shapes: rounded (circle), square, soft
- Status dot indicator: online, away, busy
- Overlapping avatar group
- Dark mode support via `prefers-color-scheme`
