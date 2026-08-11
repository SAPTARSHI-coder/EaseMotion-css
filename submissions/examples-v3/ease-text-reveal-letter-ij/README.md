# Text Reveal Letter (#31848)

Text that reveals itself letter by letter, with each character fading and sliding up in a staggered sequence.

## Features
- Each letter wrapped in a `<span>` with `--i` delay variable
- Staggered `transition-delay` for a cascading reveal
- Controlled via `--reveal` custom property (`0` = hidden, `1` = revealed)

## Usage
Wrap each character in `<span style="--i:N">` and set `--reveal: 1` on the parent to trigger the sequential letter reveal.
