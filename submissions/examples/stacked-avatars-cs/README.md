# Stacked Avatars
A dependency-free EaseMotion CSS component featuring overlapping avatars that spread apart with a spring-like motion when the stack is hovered or focused.

## Features
* Pure HTML and vanilla CSS.
* Overlapping avatar stack.
* Smooth spring-style spread animation.
* Individual avatar hover/focus feedback.
* Keyboard-focus support.
* Responsive sizing.
* Dark-mode compatible.
* Hardware-friendly `transform` animations.
* `prefers-reduced-motion` support.
* No JavaScript or external dependencies.

## Usage
Place avatars inside the `.avatar-stack` container:
```html id="0h9r6d"
<div class="avatar-stack" aria-label="Team members">
  <div class="avatar avatar-1">
    <span class="avatar-initials">AS</span>
    <span class="sr-only">Aarav Shah</span>
  </div>

  <div class="avatar avatar-2">
    <span class="avatar-initials">MK</span>
    <span class="sr-only">Maya Kapoor</span>
  </div>
</div>
```
The stack uses negative margins to create the overlapping appearance. On hover or keyboard focus, the margins are removed and each avatar receives a small spring-like transform.

## Customization
The primary component variables are:
```css id="rv2jlf"
:root {
  --em-avatar-size: 88px;
  --em-duration: 500ms;
  --em-ease: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
Adjust the avatar size and spring timing to fit the surrounding interface.
The avatar gradients can also be replaced with images, brand colors, or other backgrounds.

## Accessibility
The demo keeps accessible names for the individual team members using visually hidden text.
The stack responds to `:focus-within` so keyboard users receive the same expanded interaction as mouse users.
For production use, replace the demo member names and structure with the actual accessible labels required by the interface.
When reduced motion is requested, the positional animation is disabled while the stack remains functional.

## Browser Support
Uses standard CSS flexbox, transforms, transitions, custom properties, and media queries supported by modern browsers.
No JavaScript or external dependencies are required.
