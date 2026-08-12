# ease-scramble-in

Letter-by-letter scramble reveal entrance animation using CSS clip-path and :nth-child delays. Zero JavaScript required.

## Usage

Wrap each letter in a span inside the container:

    <h1 class="ease-scramble-in">
      <span>L</span><span>O</span><span>A</span><span>D</span>
    </h1>

## Variants

| Class | Description |
|---|---|
| ease-scramble-in | Default scramble reveal (60ms per letter) |
| ease-scramble-in-fast | Fast reveal (30ms per letter, 250ms duration) |
| ease-scramble-in-slow | Slow reveal (120ms per letter, 700ms duration) |
| ease-scramble-in-loop | Infinite loop reveal and hide cycle |

## Notes

- Wrap each character in its own span for the stagger to work
- Supports up to 20 letters with built-in :nth-child delays
- Works best on headings and large display text
- Use on dark backgrounds for maximum visual impact
- Combine with ease-neon color classes for a cyberpunk feel

## Submission

- **Author:** sudha09-git
- **Issue:** #3864
- **Files:** style.css, demo.html
