# Animated Notification Bell with Badge Counter

An animated notification bell component built with BEM methodology, smooth keyframe animations, dark mode support, and accessibility features.

## BEM Structure Usage

The component follows strict BEM naming conventions:

- `.ease-bell`: Main container wrapper with relative positioning.
- `.ease-bell__icon`: Interactive bell button trigger.
- `.ease-bell__icon--ringing`: Modifier class to apply the bell swing keyframe animation.
- `.ease-bell__badge`: Positioned unread counter badge.
- `.ease-bell__badge--pulse`: Modifier class for the badge pulse keyframe animation.
- `.ease-bell__dropdown`: Popup panel containing notification items.
- `.ease-bell__dropdown--open`: Modifier class to show the dropdown list with smooth translateY transition.
- `.ease-bell__item`: Individual notification item element inside the dropdown list.
- `.ease-bell__item--unread`: Modifier class for unread notifications highlighting.

## Keyframes Animation

- **`ease-bell-swing`**: Creates a swinging rotational effect on the bell SVG icon (`0deg` -> `15deg` -> `-12deg` -> `8deg` -> `-5deg` -> `0deg`).
- **`ease-badge-pulse`**: Generates a spreading box-shadow ring effect around the unread badge to draw attention.

## Features & Compatibility

- **Dark Mode Support**: Adapts automatically via `prefers-color-scheme: dark` CSS custom properties.
- **Accessibility**: Includes `@media (prefers-reduced-motion: reduce)` to disable swinging and pulsing animations when reduced motion is preferred by the user.
