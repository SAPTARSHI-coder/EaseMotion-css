# Scroll-Linked Reveal Animations
A lightweight, dependency-free collection of CSS utilities for revealing elements as they enter the viewport.

## Utilities
| Class           | Effect                                        |
|-----------------|-----------------------------------------------|
| `.reveal-fade`  | Fades the element into view                   |
| `.reveal-up`    | Slides the element upward while fading        |
| `.reveal-left`  | Slides the element from the left while fading |
| `.reveal-scale` | Scales the element into place while fading    |

## Usage
Add one of the utility classes to an element:

```html
<div class="reveal-up">
  Content
</div>
```
Other supported effects:
```html
<div class="reveal-fade">Fade</div>
<div class="reveal-left">Slide left</div>
<div class="reveal-scale">Scale in</div>
```

## How It Works
The utilities use modern CSS scroll-driven animation features:
```css
animation-timeline: view();
animation-range: entry 10% cover 35%;
```
The `view()` timeline links the animation progress to the element's visibility within the scrollport.
The actual reveal effects are implemented with standard CSS `@keyframes`.

## Progressive Enhancement
Scroll-driven animation support is feature-detected using:
```css
@supports (animation-timeline: view()) {
  /* Scroll-linked animation */
}
```
When unsupported, the reveal classes remain fully visible instead of leaving content hidden. This keeps the content usable in browsers without scroll-driven animation support.
No JavaScript fallback is required.

## Customization
The main animation values are exposed through EaseMotion custom properties:
```css
:root {
  --em-duration: 900ms;
  --em-ease: cubic-bezier(0.22, 1, 0.36, 1);
}
```
The scroll range can also be adjusted:

```css
.reveal-up {
  animation-range: entry 10% cover 35%;
}
```

## Accessibility
The fallback state keeps all content visible.
The component also respects:
```css
@media (prefers-reduced-motion: reduce)
```
When reduced motion is requested, scroll-linked animation is disabled and elements remain in their normal visible state.

## Overflow Safety
Horizontal transforms use `translate3d()` and the demo applies `overflow-x: hidden` to the page to prevent reveal transitions from creating horizontal scrolling.

## Browser Support
Modern browsers supporting CSS scroll-driven animations receive the linked reveal effect.
Older or unsupported browsers receive the normal visible content as a progressive fallback.
No JavaScript or external animation library is required.
