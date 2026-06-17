# ease-avatar-group

## What does this do?

Provides a CSS-only animated avatar group (avatar stack / facepile) component with overlapping circular avatars, configurable overlap via custom property, hover spread effect, border rings, and an overflow count badge.

## How is it used?

Add `ease-avatar-group` as the container and `ease-avatar-group-item` on each avatar. Optionally append a `ease-avatar-group-count` element for the overflow count.

```html
<div class="ease-avatar-group">
  <div class="ease-avatar-group-item" style="background: #6366f1;">AW</div>
  <div class="ease-avatar-group-item" style="background: #a855f7;">BM</div>
  <div class="ease-avatar-group-item" style="background: #ec4899;">CS</div>
  <span class="ease-avatar-group-count">+3</span>
</div>
```

For image avatars:

```html
<div class="ease-avatar-group">
  <img class="ease-avatar-group-item" src="user1.jpg" alt="User 1" />
  <img class="ease-avatar-group-item" src="user2.jpg" alt="User 2" />
  <span class="ease-avatar-group-count">+2</span>
</div>
```

### Custom overlap

Control the overlap amount via the `--ease-avatar-overlap` custom property:

```html
<div class="ease-avatar-group" style="--ease-avatar-overlap: -1rem;">
```

### Size variants

| Class | Size |
| --- | --- |
| `ease-avatar-group-item-sm` / `ease-avatar-group-count-sm` | 2rem |
| Default | 2.5rem |
| `ease-avatar-group-item-lg` / `ease-avatar-group-count-lg` | 3rem |
| `ease-avatar-group-item-xl` / `ease-avatar-group-count-xl` | 4rem |

## Why is it useful?

Avatar groups are a common UI pattern in team pages, chat headers, collaboration tools, and social interfaces. This component provides a polished, animated, accessible implementation with zero JavaScript, fitting EaseMotion CSS's animation-first philosophy.

## Features

- Overlapping circular avatars with configurable `--ease-avatar-overlap`
- Hover spread effect — the group fans out on hover
- Individual lift on avatar hover (`translateY`)
- Overflow count badge (`+N`)
- Support for images and text initials
- Four size variants (sm, md, lg, xl)
- Respects `prefers-reduced-motion`
- Pure CSS, no JavaScript
