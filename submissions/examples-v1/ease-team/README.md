# ease-team

## What does this do?

Provides a **team member card** component for displaying employee profiles with avatar/initials, name, role, bio, and social links. Supports a hover overlay variant and an inline social variant with a responsive grid layout.

## How is it used?

```html
<div class="ease-team-grid ease-team-3">
  <div class="ease-team-card">
    <div class="ease-team-avatar">
      <img src="photo.jpg" alt="Jane Smith" />
      <div class="ease-team-overlay">
        <a href="#" class="ease-team-social-link">in</a>
        <a href="#" class="ease-team-social-link">𝕏</a>
      </div>
    </div>
    <div class="ease-team-body">
      <h3 class="ease-team-name">Jane Smith</h3>
      <p class="ease-team-role">Design Lead</p>
      <p class="ease-team-bio">Crafting intuitive interfaces.</p>
    </div>
  </div>
</div>
```

### Available Classes

| Class | Purpose |
|-------|---------|
| `.ease-team-grid` | CSS Grid container |
| `.ease-team-2` | 2-column grid |
| `.ease-team-3` | 3-column grid |
| `.ease-team-4` | 4-column grid |
| `.ease-team-card` | Individual team card |
| `.ease-team-avatar` | Photo container (aspect-ratio: 1) |
| `.ease-team-overlay` | Hover overlay with social links |
| `.ease-team-social-link` | Social icon circle |
| `.ease-team-body` | Text content wrapper |
| `.ease-team-name` | Member name |
| `.ease-team-role` | Job title (primary color) |
| `.ease-team-bio` | Short biography |
| `.ease-team-no-overlay` | Hide overlay, show inline social instead |

### Variants

| Variant | Classes | Description |
|---------|---------|-------------|
| Overlay | (default) | Social links appear on hover over the photo |
| No overlay | `.ease-team-no-overlay` | Social links displayed inline below bio |

### Column Options

| Class | Columns |
|-------|---------|
| `.ease-team-2` | 2 |
| `.ease-team-3` | 3 |
| `.ease-team-4` | 4 |

### Responsive

- Single column on mobile (<768px)
- 2 columns on tablet (769-1024px) for 3/4 column layouts
- Full grid on desktop (1025px+)

### Animation

Use `ease-reveal ease-slide-up` for scroll-triggered stagger entrance. Photo zooms in on card hover.

### Design Tokens Used

| Token | Fallback | Purpose |
|-------|----------|---------|
| `--ease-color-surface` | `#fff` / `#141e33` | Card background |
| `--ease-color-text` | `#1e293b` / `#e2e8f0` | Name text |
| `--ease-color-primary` | `#6c63ff` | Role text, overlay bg |
| `--ease-color-neutral-200` | `#e2e8f0` | Card border |
| `--ease-color-neutral-500` | `#64748b` | Bio text |
| `--ease-color-neutral-700` | `#334155` | Dark card border |
| `--ease-color-neutral-800` | `#1e293b` | Dark avatar bg, social bg |
| `--ease-shadow-lg` | `0 10px 30px...` | Hover shadow |
| `--ease-radius-lg` | `1rem` | Card border radius |
| `--ease-radius-full` | `9999px` | Social links circle |
| `--ease-space-8` | `2rem` | Grid padding |
| `--ease-space-6` | `1.5rem` | Grid gap, body bottom padding |
| `--ease-space-5` | `1.25rem` | Body horizontal padding |
| `--ease-space-4` | `1rem` | Body top padding |
| `--ease-space-3` | `0.75rem` | Overlay gap, social margin |
| `--ease-space-2` | `0.5rem` | Role margin |
| `--ease-space-1` | `0.25rem` | Name margin |
| `--ease-text-lg` | `1.125rem` | Name font size |
| `--ease-text-sm` | `0.875rem` | Role font size |
| `--ease-text-xs` | `0.75rem` | Bio font size |
| `--ease-speed-fast` | `150ms` | Card hover, social hover |
| `--ease-speed-normal` | `200ms` | Overlay fade, image zoom |

Fixes #25563
