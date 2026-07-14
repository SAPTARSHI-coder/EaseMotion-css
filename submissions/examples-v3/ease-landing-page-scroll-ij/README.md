# Landing Page Scroll (#36770)

Scroll-triggered section reveals for a landing page. Sections fade in and slide up as they enter the viewport.

## CSS Variables

| Variable            | Default | Description                        |
|---------------------|---------|------------------------------------|
| `--section-bg`      | —       | Background color of each section   |
| `--text-color`      | —       | Text color inside the section      |
| `--reveal-duration` | 0.7s    | Duration of the reveal animation   |
| `--overlay-color`   | —       | Overlay tint over the section bg   |

## Behavior

Uses Intersection Observer to add a `.reveal-visible` class when a section scrolls into view. The CSS transition handles the opacity and transform animation with a custom cubic-bezier easing.
