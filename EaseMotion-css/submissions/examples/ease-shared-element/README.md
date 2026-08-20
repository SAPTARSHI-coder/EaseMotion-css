# Ease Shared Element Transition

A shared element transition animation where an element appears to morph
from one page into another.

## Concept

Shared Element Transition is a UI technique used in:

- Android Material Design
- iOS Navigation Animations
- Modern Web Apps
- View Transitions API

The same visual element exists on both screens and smoothly transforms
between positions, sizes, and layouts.

## Files

```text
demo.html
style.css
README.md
```

## Demo Flow

1. User sees a project card.
2. User clicks the card.
3. A cloned shared element is created.
4. The element expands to fill the screen.
5. Detail page appears.
6. User can navigate back.

## Features

- Morphing card transition
- Smooth ease animation
- Responsive design
- Pure HTML/CSS/JavaScript
- No dependencies

## Customization

### Animation Duration

```css
transition: .7s cubic-bezier(.22,1,.36,1);
```

### Expanded Position

```css
#sharedElement.expand{
  left:50px;
  top:50px;
}
```

### Card Size

```css
.card{
  width:380px;
}
```

## Run

Open:

```text
demo.html
```

in a browser.

## Browser Support

- Chrome
- Edge
- Firefox
- Safari