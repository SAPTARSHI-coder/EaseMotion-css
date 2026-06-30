# Avatar Component

Circular profile photo avatars with 5 sizes (xs, sm, default, lg, xl), text initials fallback, 4 status indicators (online, offline, away, busy), and an avatar group for overlapping stacks. Pure CSS, no JavaScript.

## Classes

| Class                 | Description                                     |
| --------------------- | ----------------------------------------------- |
| `ease-avatar`         | Base avatar (40px, circular, initials or image) |
| `ease-avatar-xs`      | Extra small (24px)                              |
| `ease-avatar-sm`      | Small (32px)                                    |
| `ease-avatar-lg`      | Large (56px)                                    |
| `ease-avatar-xl`      | Extra large (80px)                              |
| `ease-avatar-online`  | Green status dot                                |
| `ease-avatar-offline` | Grey status dot                                 |
| `ease-avatar-away`    | Amber status dot                                |
| `ease-avatar-busy`    | Red status dot                                  |
| `ease-avatar-group`   | Overlapping avatar stack                        |

## Usage

```html
<!-- Initials -->
<span class="ease-avatar">JD</span>

<!-- With image -->
<span class="ease-avatar ease-avatar-lg ease-avatar-online">
  <img src="photo.jpg" alt="User" />
</span>

<!-- Group -->
<div class="ease-avatar-group">
  <span class="ease-avatar"><img src="user1.jpg" alt="" /></span>
  <span class="ease-avatar"><img src="user2.jpg" alt="" /></span>
  <span class="ease-avatar">+3</span>
</div>
```

## Why it fits EaseMotion CSS

Five size variants, 4 status indicators via `::after` pseudo-element, overlapping avatar group, and text initials fallback with purple accent colour. Pure CSS, no JavaScript required.

## Notes

Demo uses inline SVG data URIs for avatar images. No network connection required.
