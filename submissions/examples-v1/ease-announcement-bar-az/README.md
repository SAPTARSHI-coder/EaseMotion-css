# Announcement Bar

Dismissible top banner for announcements, promotions, alerts, and system messages with icon, text, optional CTA button/link, and close button.

## Usage

```html
<div class="ease-announcement-bar-az">
  <span class="ease-announcement-icon-az">&#x1f514;</span>
  <span class="ease-announcement-text-az">
    New feature available!
    <a class="ease-announcement-link-az" href="#">Learn more</a>
  </span>
  <button class="ease-announcement-btn-az">Action</button>
  <button class="ease-announcement-close-az">&#x2715;</button>
</div>
```

## Variants

- **`--info`**: Blue accent (default gray)
- **`--success`**: Green accent
- **`--warning`**: Amber accent
- **`--danger`**: Red accent
- **`--center`**: Centered text alignment
- **`--hidden`**: Hide the bar (add via JS on close)

## Elements

| Class                         | Purpose        |
| ----------------------------- | -------------- |
| `.ease-announcement-icon-az`  | Emoji/icon     |
| `.ease-announcement-text-az`  | Message text   |
| `.ease-announcement-link-az`  | Inline link    |
| `.ease-announcement-btn-az`   | CTA button     |
| `.ease-announcement-close-az` | Dismiss button |

## CSS Variables

| Variable                 | Default   |
| ------------------------ | --------- |
| `--ease-space-*`         | spacing   |
| `--ease-radius-md`       | 8px       |
| `--ease-color-primary`   | #6366f1   |
| `--ease-color-success`   | #10b981   |
| `--ease-color-warning`   | #f59e0b   |
| `--ease-color-danger`    | #ef4444   |
| `--ease-color-neutral-*` | grays     |
| `--ease-font-sans`       | system-ui |
