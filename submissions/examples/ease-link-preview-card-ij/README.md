# Link Preview Card

A preview card that appears near links on hover, showing a thumbnail, title, description, and URL. Animates in with scale + opacity + translateY.

## Features

- Card positioned dynamically near the hovered link
- Scales and fades in with spring-like easing
- Thumbnail gradient, title, description, and URL display
- Smart repositioning to stay within viewport
- Hover persistence to allow clicking links inside card

## Usage

Add `class="lpc-trigger"` with `data-preview` index to anchor elements. Define preview data in JS. The `.lpc-preview` element shows on trigger hover. Toggle `.lpc-visible` class to show/hide the card.

Customize via `:root` variables:

```css
--lpc-duration       /* animation speed */
--lpc-card-bg        /* card background */
--lpc-shadow         /* card box-shadow */
--lpc-radius         /* card border-radius */
--lpc-border         /* card border */
```
