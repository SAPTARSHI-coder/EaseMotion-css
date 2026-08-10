# Expand Avatar Mixin

## Description
The `ease-expand-avatar-mixin-ag` is an SCSS mixin designed as an "attention seeker" for user avatars. It creates a gentle pulsing effect where the avatar scales up slightly while emitting a fading, expanding ring (via `box-shadow`). This is ideal for indicating that a user is speaking, online, or has unread notifications.

## Installation & Usage
Import the `_expand-avatar.scss` file into your styles.

```scss
@import 'path/to/feature-expand-avatar-mixin-ag/expand-avatar';

.user-avatar {
  /* Basic avatar styling */
  width: 64px;
  height: 64px;
  object-fit: cover;
  
  /* Apply the mixin */
  @include ease-expand-avatar-mixin-ag(2s, ease-in-out);
  
  /* Optional: Override the default blue glow color (must use RGB comma-separated values) */
  --expand-color-rgb-ag: 16, 185, 129; /* Emerald Green */
}
```

By default, the animation triggers on `:hover` and when the `.is-active-ag` class is applied to the element.

```html
<!-- Avatar with active pulsing state -->
<img src="avatar.jpg" alt="User Avatar" class="user-avatar is-active-ag">
```

## Parameters
The mixin accepts the following optional parameters:
- `$duration`: How long one loop of the animation lasts. Default is `2s` for a slow, rhythmic pulse.
- `$easing`: The timing function. Default is `ease-in-out`.

Color Customization:
Because the animation fades the shadow's alpha channel, the custom color variable (`--expand-color-rgb-ag`) **must** be provided as comma-separated RGB values (e.g., `255, 0, 0` for red), not hex or named colors.

## Accessibility Considerations
- **Reduced Motion**: Continuous pulsing animations can be distracting or cause discomfort for users with vestibular disorders. A strict `@media (prefers-reduced-motion: reduce)` block disables the animation entirely. It falls back to a static, solid outer ring (using `box-shadow`) so the user still receives the visual cue that the avatar is "active", but without any motion.
