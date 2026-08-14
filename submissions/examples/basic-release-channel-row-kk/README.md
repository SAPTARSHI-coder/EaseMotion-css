# Basic Release Channel Row

## What it does

This submission adds a CSS-only release channel row for rollout dashboards,
product admin panels, release management pages, and deployment settings.

It shows a channel marker, channel name, helper text, version, rollout share,
and lifecycle state in one compact reusable row.

## How to use it

Add the base row class with a channel marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-release-channel-row">
  <span class="channel-mark is-stable" aria-hidden="true">ST</span>
  <div class="channel-copy">
    <strong>Stable channel</strong>
    <p>Default release path for all production workspaces.</p>
  </div>
  <span class="channel-version">v4.8.2</span>
  <span class="channel-rollout">100%</span>
  <span class="channel-state is-stable">Stable</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
product release interfaces. Developers can reuse the same row pattern in release
dashboards, rollout panels, beta access settings, and deployment consoles while
keeping the implementation lightweight and CSS-only.

## Included features

- Stable, beta, and legacy release channel examples
- Channel marker badges
- Version metadata
- Rollout share metadata
- Lifecycle state styling
- Long text truncation for compact dashboards
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the release channel row
- `README.md` - usage and contribution context
