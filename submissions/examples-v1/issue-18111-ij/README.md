# ease-text-reveal-char

Character-by-character text reveal animation. Splits text into individual `<span>` elements and staggers a `translateY` + `rotateX` keyframe animation via inline `animation-delay`.

## Usage

Wrap any heading or text with `class="reveal-char"` and set `id="revealText"`. The included script splits the inner text into characters and wraps them in animated spans.
