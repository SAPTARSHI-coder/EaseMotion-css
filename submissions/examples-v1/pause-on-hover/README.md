# pause-on-hover

## What it does
Pauses any CSS animation when the user hovers over the element. Animation resumes when hover ends.

## Proposed ease-* class name
`.ease-pause-hover`

## CSS behavior
```css
.pause-on-hover:hover {
  animation-play-state: paused;
}
```

## Use case
- Looping animations (spinners, carousels, marquees)
- Reduces visual distraction on interaction
- Improves accessibility for motion-sensitive users

## Closes
Issue #9210