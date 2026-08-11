# Sweeping Spotlight Text Effect

A sleek text effect where a bright "spotlight" beam continually sweeps across dark text.

## Preview
Open `demo.html` in your browser. You will see dark text that lights up brightly in a diagonal strip, sweeping from left to right continuously.

## Implementation
- The original `<h1>` tag provides the dark gray base text.
- We use a pseudo-element (`::after`) with `content: attr(data-text)` to perfectly duplicate the text directly over the original.
- The pseudo-element is styled with a `linear-gradient` that is mostly transparent, with a sharp white stripe in the middle.
- `background-clip: text` and `color: transparent` are used so that the gradient only renders inside the shapes of the text characters.
- An animation sweeps the `background-position` to make the light beam travel across the words.
