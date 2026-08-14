# Tilt Badge Mixin

## What does this do?
An SCSS mixin, `ease-tilt-badge-mixin-mixin($duration, $angle)`, that plays a quick tilt
animation on a badge element when it receives keyboard focus — a lightweight, motion-based
focus indicator that complements (not replaces) the outline.

## How is it used?
```scss
@use 'ease-motion' as *;

.badge {
  @include ease-tilt-badge-mixin-mixin(0.3s);
}
```

```html
<span class="badge" tabindex="0">New</span>
```

The tilt plays automatically via `:focus-visible`, so it only appears for keyboard/assistive
navigation, not on mouse click — matching standard focus-visibility expectations.

Parameters:
- `$duration` (default `0.3s`) — how long the tilt animation plays
- `$angle` (default `8deg`) — maximum rotation at the tilt's peak

## Why is it useful?
Badges are often skipped over or hard to notice when tabbing through a page, especially for
users relying on visible focus cues. A brief tilt plus a visible outline makes focus more
noticeable without being distracting, and the animation is fully removed under
`prefers-reduced-motion: reduce` (the outline still remains for accessibility).
