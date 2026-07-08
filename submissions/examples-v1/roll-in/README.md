# ease-roll-in

Rolling entrance animation combining translateX and rotate keyframes. Zero JavaScript required.

## Usage

    <div class="ease-roll-in">Rolls in from left</div>
    <div class="ease-roll-in ease-roll-in-right">Rolls in from right</div>

## Variants

| Class | Description |
|---|---|
| ease-roll-in | Default roll in from left (360deg) |
| ease-roll-in-left | Roll in from left |
| ease-roll-in-right | Roll in from right |
| ease-roll-in-top | Roll in from top |
| ease-roll-in-bottom | Roll in from bottom |
| ease-roll-in-subtle | Half rotation (180deg) variant |
| ease-roll-in-fast | 300ms duration |
| ease-roll-in-slow | 1000ms duration |
| ease-delay-100 | 100ms delay |
| ease-delay-200 | 200ms delay |
| ease-delay-300 | 300ms delay |
| ease-delay-500 | 500ms delay |

## Notes

- Works great on circular elements like avatars, icons, and balls
- Combine with delay variants for staggered group roll-ins
- ease-roll-in-subtle uses 180deg for a gentler effect on cards and text
- Uses overflow-x: hidden on the parent to prevent horizontal scrollbar during animation

## Submission

- **Author:** sudha09-git
- **Issue:** #3881
- **Files:** style.css, demo.html
